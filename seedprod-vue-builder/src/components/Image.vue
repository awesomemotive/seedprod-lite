<template>
  <figure :id="'sp-'+block.id" class="sp-image-wrapper" :style="imageWrapperStyleObject">

    <span v-if="block.settings.link">
    <a
    :href="block.settings.link"
      :target="target"
      :rel="rel"
    >
      <img
      :src="this.block.settings.src"
      :alt="this.block.settings.altTxt"
      :style="imageStyleObject"
      :srcset="this.block.settings.imgSrcSet"
      v-if="this.block.settings.src != ''"

    />
    </a>
    </span>
    <span v-else>
    <img
      :src="this.block.settings.src.replace('<script>', '')"
      :alt="this.block.settings.altTxt.replace('<script>', '')"
      :style="imageStyleObject"
      :srcset="this.block.settings.imgSrcSet"
      v-if="this.block.settings.src != ''"

    />
    </span>
    <span class="sp-hidden">START-REMOVE</span>
    <img
      :src="this.shared.setup_page_meta.placeholder_image"
      :alt="this.block.settings.altTxt.replace('<script>', '')"
      :style="imageStyleObject"

      v-if="this.block.settings.src == ''"
    />
    <span class="sp-hidden">END-REMOVE</span>
  </figure>
</template>

<script>
import { helpers } from '../mixins/helpers.js';

export default {
  name: 'MyImage',
  mixins: [ helpers ],
  props: {
    block: Object,
  },
  data: function() {
    return {
      shared: seedprod_store,
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.image, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  computed: {
    target: function() {
      let t = '';
      if ( this.block.settings.openNewWindow ) {
        t = '_blank';
      }
      return t;
    },
    rel: function() {
      let r = '';
      if ( this.block.settings.noFollow ) {
        r = 'nofollow';
      }
      return r;
    },
    blockTemplateId: function() {
      let id = 0;
      if ( false !== this.block.settings.blockTemplateId ) {
        id = this.block.settings.blockTemplateId;
      }
      return id;
    },
    imageWrapperStyleObject: function() {
      let p = '';
      if ( this.block.settings.paddingSync ) {
        p = this.padding_render(
          this.block.settings.paddingTop,
          this.block.settings.paddingTop,
          this.block.settings.paddingTop,
          this.block.settings.paddingTop
        );
      } else {
        p = this.padding_render(
          this.block.settings.paddingTop,
          this.block.settings.paddingRight,
          this.block.settings.paddingBottom,
          this.block.settings.paddingLeft
        );
      }

      let mt = '';
      if ( '' != this.block.settings.marginTop ) {
        mt = this.block.settings.marginTop + 'px';
      }
      return {
        'margin-top': mt,
        padding: p,
        'text-align': this.align_render( this.block.settings.align ),
      };
    },
    imageStyleObject: function() {
      let w = '';
      if ( '' != this.block.settings.width ) {
        w = this.block.settings.width + this.block.settings.unit;
      }
      let h = '';
      if ( '' != this.block.settings.height ) {
        h = this.block.settings.height + this.block.settings.unit;
      }

      let bdr = '';
      if ( '' != this.block.settings.imageBorderRadius ) {
        bdr = this.block.settings.imageBorderRadius + 'px';
      }

      let bt = this.block.settings.imageBorderTop;
      let br = this.block.settings.imageBorderRight;
      let bb = this.block.settings.imageBorderBottom;
      let bl = this.block.settings.imageBorderLeft;
      if ( this.block.settings.imageBorderSync ) {
        br = bt;
        bb = bt;
        bl = bt;
      }

      let p = '';
      let bgcolor = '';
      if ( '' != this.block.settings.imagePadding ) {
        p = this.padding_render(
          this.block.settings.imagePadding,
          this.block.settings.imagePadding,
          this.block.settings.imagePadding,
          this.block.settings.imagePadding
        );
        if ( 0 < this.block.settings.imagePadding ) {
          bgcolor = '#fff';
        }
      }

      return {
        padding: p,
        'background-color': bgcolor,
        width: w,
        height: h,
        'border-top': this.border_render(
          bt,
          this.block.settings.imageBorderStyle,
          this.block.settings.imageBorderColor
        ),
        'border-right': this.border_render(
          br,
          this.block.settings.imageBorderStyle,
          this.block.settings.imageBorderColor
        ),
        'border-bottom': this.border_render(
          bb,
          this.block.settings.imageBorderStyle,
          this.block.settings.imageBorderColor
        ),
        'border-left': this.border_render(
          bl,
          this.block.settings.imageBorderStyle,
          this.block.settings.imageBorderColor
        ),
        'border-radius': bdr,
        'box-shadow': this.box_shadow( this.block.settings.shadow ),
      };
    },
  },
};
</script>
