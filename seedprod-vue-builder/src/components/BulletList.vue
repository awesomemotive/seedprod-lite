<template>
  <div
    :id="'sp-'+block.id"
    @click="set_has_focus(true)"
    class="sp-flex sp-css-target"
    :class="['sp-bulletlist-block-template-' + blockTemplateId,{'sp-justify-center': block.settings.align == 'center','sp-justify-start': block.settings.align == 'left','sp-justify-end': block.settings.align == 'right'}, 'sp-bulletlist-block-'+block.id]"
    :style="blockStyleObject"
    :data-mobile-css="mobileBlockStylesCal"
  >
    <ul
      class="sp-bulletlist-wrapper"
      :class="{'sp-flex sp-flex-wrap':block.settings.layout == 'h','sp-items-center':block.settings.layout == 'h'}"
    >
      <li
        v-for="(item, index) in block.settings.items"
        :key="index"
        :style="liStyleObject(index)"
        class="sp-flex sp-items-center"
        :class="{'sp-justify-center': block.settings.align == 'center','sp-justify-start': block.settings.align == 'left','sp-justify-end': block.settings.align == 'right'}"
      >
        <span class="sp-icon-wrapper sp-mr-4">
          <i v-if="item.icon" class="fa-fw fa-lg" :class="item.icon" :style="iconStyleObject"></i>
        </span>
        <editor
          v-if="!shared.is_moving && shared.active_inline_editor_id == block.id"
          :inline="true"
          tag-name="span"
          class="sp-inline-block"
          :key="componentKey"
          :disabled="shared.is_moving"
          v-model="item.txt"
          @onBlur="set_has_focus(false)"
          :init="{
          paste_as_text: true,
         force_br_newlines: true,
         force_p_newlines: false,
         forced_root_block: '',
        branding: false,
         menubar: false,
         plugins: [
           'charmap,colorpicker,hr,lists,paste,tabfocus,textcolor,fullscreen,wordpress,wpautoresize,wpeditimage,wpemoji,wpgallery,wplink,wptextpattern'
         ],
         toolbar:
           'help,bold,italic,underline,strikethrough,link,help'
       }"
        ></editor>
        <span v-else v-html="item.txt.replace('<script>', '')"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import { helpers } from '../mixins/helpers.js';
import Editor from '@tinymce/tinymce-vue';

export default {
  name: 'BulletList',
  mixins: [ helpers ],
  props: {
    block: Object,
  },
  data: function() {
    return {
      componentKey: 0,
      shared: seedprod_store,
    };
  },
  components: {
    editor: Editor,
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.bulletlist, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  methods: {
    set_has_focus( v ) {
      if ( true === v ) {
        this.shared.active_inline_editor_id = this.block.id;
      } else {
        this.shared.active_inline_editor_id = false;
      }
    },

    liStyleObject: function( i ) {
      if ( 'v' == this.block.settings.layout ) {
        var padding = this.padding_render(
          '0',
          '0',
          this.block.settings.spaceBetween,
          '0'
        );
      }
      if ( 'h' == this.block.settings.layout ) {
        var padding = this.padding_render(
          '0',
          this.block.settings.spaceBetween,
          '0',
          '0'
        );
      }

      if (
        i == Object.keys( this.block.settings.items ).length - 1 &&
        0 < this.block.settings.items.length
      ) {
        padding = '';
      }

      return {
        padding: padding,
      };
    },
  },
  computed: {
    blockTemplateId: function() {
      let id = 0;
      if ( false !== this.block.settings.blockTemplateId ) {
        id = this.block.settings.blockTemplateId;
      }
      return id;
    },

    mobileBlockStylesCal: function() {

      // target rule|css properties
      let css = '';
      let target = '.sp-bulletlist-block-' + this.block.id;

      if ( '' != this.block.settings.fontSize_mobile ) {
        css += 'font-size:' + this.block.settings.fontSize_mobile + 'px;';
      }

      if ( '' != this.block.settings.lineHeight_mobile ) {
        css += 'line-height:' + this.block.settings.lineHeight_mobile + ';';
      }

      if ( '' != this.block.settings.letterSpacing_mobile ) {
        css += 'letter-spacing:' + this.block.settings.letterSpacing_mobile + 'px;';
      }

      if ( '' == css ) {
        return '';
      } else {
        return target + '|' + css;
      }

    },

    blockStyleObject: function() {
      let unit = 'px';
      if ( this.block.settings.typographyUnit ) {
        unit = this.block.settings.typographyUnit;
      }

      let size = '';
      if ( '' != this.block.settings.fontSize ) {
        size = this.block.settings.fontSize + unit;
      }

      let td = '';
      if ( true == this.block.settings.typographyUnderline ) {
        td = 'underline';
      }
      let weight = '';
      if ( true === this.block.settings.typographyBold ) {
        weight = 'bold';
      } else {
        weight = this.font_variant_render(
          this.block.settings.fontVariant,
          'weight'
        );
      }

      let style = '';
      if ( true === this.block.settings.typographyItalic ) {
        style = 'italic';
      } else {
        style = this.font_variant_render(
          this.block.settings.fontVariant,
          'style'
        );
      }

      let lh = '';
      if ( '' != this.block.settings.lineHeight ) {
        lh = this.block.settings.lineHeight;
      }

      let ls = '';
      if ( '' != this.block.settings.letterSpacing ) {
        ls = this.block.settings.letterSpacing + 'px';
      }

      let tt = '';
      if ( 'normal' != this.block.settings.typographyLetterCase ) {
        tt = this.block.settings.typographyLetterCase;
      }

      let mt = '';
      if ( '' != this.block.settings.marginTop ) {
        mt = this.block.settings.marginTop + 'px';
      }

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

      return {
        padding: p,
        'margin-top': mt,
        'text-transform': tt,
        'font-size': size,
        'text-decoration': td,
        'line-height': lh,
        'letter-spacing': ls,
        color: this.block.settings.textColor,
        'font-family': this.font_render( this.block.settings.font ),
        'font-weight': weight,
        'font-style': style,
        'text-shadow': this.text_shadow(
          this.block.settings.textShadow,
          this.block.settings.textColor
        ),
      };
    },

    iconStyleObject: function() {
      let unit = 'px';
      if ( this.block.settings.typographyUnit ) {
        unit = this.block.settings.typographyUnit;
      }

      let size = '16';
      if ( '' != this.block.settings.fontSize ) {
        size = this.block.settings.fontSize + unit;
      }

      let width = '32px';
      if ( '' != this.block.settings.fontSize ) {
        width = this.block.settings.fontSize * 2 + unit;
      }

      let lh = '32px';
      if ( '' != this.block.settings.fontSize ) {
        lh = this.block.settings.fontSize * 2 + unit;
      }

      //console.log(this.block.settings.fontSize);

      return {
        width: width,
        lineHeight: lh,
        fontSize: size,
        color: this.block.settings.iconColor,
      };
    },
  },
};
</script>
