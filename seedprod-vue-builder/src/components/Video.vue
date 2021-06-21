<template>
  <div :id="'sp-'+block.id" class="sp-video-control sp-flex" :style="controlWrapper">
    <div class="sp-video-wrapper" :style="styleWrapper">
      <div class="sp-video-responsive" v-if="block.settings.type == 'youtube'">
        <iframe
          width="560"
          height="315"
          :src="'https://www.youtube.com/embed/'+youtube_parser(block.settings.youtubeUrl.replace('<script>', ''))"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div v-else v-html="code"></div>
    </div>
  </div>
</template>

<script>
import { helpers } from '../mixins/helpers.js';
export default {
  name: 'Video',
  mixins: [ helpers ],
  props: {
    block: Object,
  },
  data: function() {
    return {
      shared: seedprod_store,
      classObject: {
        'sp-bg-blue-500': true,
        'hover:sp-bg-blue-700': true,
        'sp-text-white': true,
        'sp-py-2': true,
        'sp-px-4': true,
        'sp-rounded': true,
        'sp-leading-none': true,
      },
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.video, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  methods: {
    youtube_parser: function( url ) {
      if ( true === lodash.isEmpty( url ) ) {
        return '';
      }
      let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      let match = url.match( regExp );
      return match && 11 == match[7].length ? match[7] : false;
    },
  },
  computed: {
    code: function() {
      if(this.shared.unfiltered_html){
        return this.block.settings.code;
      }else{
        return this.block.settings.code.replace('<script>', '');
      }
      
    },
    controlWrapper: function() {
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

      let align = 'center';
      if ( '' != this.block.settings.align ) {
        if ( 'left' == this.block.settings.align ) {
          align = 'flex-start';
        }
        if ( 'right' == this.block.settings.align ) {
          align = 'flex-end';
        }
      }
      return {
        padding: p,
        'justify-content': align,
        'margin-top': mt,
      };
    },
    styleWrapper: function() {
      let width = '100%';
      let maxwidth = '100%';
      if ( '' != this.block.settings.width ) {
        width = this.block.settings.width + '%';
      }
      return {
        width: width,
        'max-width': maxwidth,
        'box-shadow': this.box_shadow( this.block.settings.shadow ),
      };
    },
    videoWrapperStyleObject: function() {
      let align = 'center';
      if ( 'Left' == this.block.settings.align ) {
        align = 'left';
      }
      if ( 'Right' == this.block.settings.align ) {
        align = 'right';
      }
      return {
        'text-align': align,
      };
    },
  },
};
</script>
