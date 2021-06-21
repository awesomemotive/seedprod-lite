<template>
  <div class="sp-button-wrapper" :style="buttonWrapperStyleObject" @click="set_has_focus(true)">
    <a
      :href="block.settings.link.replace('<script>', '')"
      class="sp-button sp-css-target"
      :id="'sp-'+block.id"
      :class="classObject"
      :style="buttonStyleObject"
      :data-mobile-css="mobileButtonStylesCal"
      @click.prevent
      :target="target"
      :rel="rel"
    >
      <i
        class="sp-mr-2"
        :class="block.settings.beforeIcon"
        v-if="block.settings.beforeIcon && block.settings.beforeIcon != ''"
      ></i>
      <editor
        v-if="!shared.is_moving && shared.active_inline_editor_id == block.id"
        :id="block.id"
        :inline="true"
        tag-name="span"
        :key="componentKey"
        :disabled="shared.is_moving"
        v-model="block.settings.btnTxt"
        @onBlur="set_has_focus(false)"
        :style="buttonTxtStyleObject"
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
           'help,bold,italic,underline,help'
       }"
      ></editor>
      <span v-else :style="buttonTxtStyleObject" v-html="block.settings.btnTxt.replace('<script>', '')"></span>
      <i class="sp-ml-2" :class="block.settings.afterIcon" v-if="block.settings.afterIcon != ''"></i>
      <span v-if="block.settings.btnSubTxt">
        <editor
          v-if="!shared.is_moving && shared.active_inline_editor_id == block.id"
          :inline="true"
          tag-name="span"
          :key="componentKey+1"
          :disabled="shared.is_moving"
          v-model="block.settings.btnSubTxt"
          :id="'sp-button-sub-text-'+block.id"
          :style="subButtonStyleObject"
          :data-mobile-css="mobileSubButtonStylesCal"
          :class="subButtonClassObject"
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
           'help,bold,italic,underline,help'
       }"
        ></editor>
        <span
          v-else
          :style="subButtonStyleObject"
          :id="'sp-button-sub-text-'+block.id"
          :data-mobile-css="mobileSubButtonStylesCal"
          class="sp-button-sub-txt"
          :class="subButtonClassObject"
          v-html="block.settings.btnSubTxt.replace('<script>', '')"
        ></span>
      </span>
    </a>
  </div>
</template>

<script>
import { helpers } from '../mixins/helpers.js';
import tinycolor from 'tinycolor2';
import Editor from '@tinymce/tinymce-vue';

export default {
  name: 'MyButton',
  mixins: [ helpers ],
  props: {
    block: Object,
  },
  data: function() {
    return {
      componentKey: 0,
      luminance: 'light',
      shared: seedprod_store,
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.button, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  components: {
    editor: Editor,
  },
  methods: {
    set_has_focus( v ) {
      if ( true === v ) {
        this.shared.active_inline_editor_id = this.block.id;
      } else {
        this.shared.active_inline_editor_id = false;
      }
    },
  },
  set_cursor( type, el ) {
    el.focus;
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
    classObject: function() {
      return {
        'sp-text-center': true,
        'sp-inline-block': true,
        'sp-leading-none': true,
      };
    },
    buttonWrapperStyleObject: function() {
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
        'text-align': this.align_render( this.block.settings.align ),
      };
    },

    mobileButtonStylesCal: function() {

      // target rule|css properties
      let css = '';
      let target = '#sp-' + this.block.id;

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

    buttonStyleObject: function() {
      let borderBottom = false;
      let bg = '';
      if ( '' == this.block.settings.bgColor ) {
        bg = this.shared.settings.document.settings.buttonColor;
      } else {
        bg = this.block.settings.bgColor;
      }
      let tc = '';
      let lightness = tinycolor( bg );
      if ( 0.5 <= lightness.getLuminance() ) {
        tc = '#000';
        this.luminance = 'light';
      } else {
        tc = '#fff';
        this.luminance = 'dark';
      }

      // Button Style
      let border = '';
      let boxShadow = this.box_shadow( this.block.settings.shadow );
      if ( '' != this.block.settings.btnStyle ) {
        if ( 'link' == this.block.settings.btnStyle ) {
          border = '0px solid' + bg;
          tc = bg;
          bg = '';
        }
        if ( 'ghost' == this.block.settings.btnStyle ) {
          border = '1px solid' + bg;
          tc = bg;
          bg = '';
        }
        if ( 'flat' == this.block.settings.btnStyle ) {
        }
        if ( '2d' == this.block.settings.btnStyle ) {
          var darkBorderColor = tinycolor( bg )
            .darken( 10 )
            .toString();
          border = '';
          borderBottom = '3px solid' + darkBorderColor;
        }
        if ( '3d' == this.block.settings.btnStyle ) {
          let darkBgColor = tinycolor( bg )
            .darken( 7 )
            .toString();
          var darkBorderColor = tinycolor( bg )
            .darken( 10 )
            .toString();
          bg = 'linear-gradient(-180deg,' + bg + ',' + darkBgColor + ' 90%)';
          border = '1px solid' + darkBorderColor;
          boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.2)';
        }
      }

      let lh = '';
      if ( '' !== this.block.settings.lineHeight ) {
        lh = this.block.settings.lineHeight;
      }

      let ls = '';
      if ( '' != this.block.settings.letterSpacing ) {
        ls = this.block.settings.letterSpacing + 'px';
      }

      let tt = '';
      if ( '' != this.block.settings.typographyLetterCase ) {
        tt = this.block.settings.typographyLetterCase;
      }

      let fw = '';
      if ( true === this.block.settings.typographyBold ) {
        fw = 'bold';
      } else {
        fw = this.font_variant_render(
          this.block.settings.fontVariant,
          'weight'
        );
      }

      let fs = '';
      if ( true === this.block.settings.typographyItalic ) {
        fs = 'italic';
      } else {
        fs = this.font_variant_render( this.block.settings.fontVariant, 'style' );
      }

      let td = '';
      if ( true === this.block.settings.typographyUnderline ) {
        td = 'underline';
      }

      return {
        'text-shadow': this.text_shadow(
          this.block.settings.textShadow,
          this.block.settings.textColor
        ),
        'line-height': lh,
        'letter-spacing': ls,
        'text-transform': tt,
        'text-decoration': td,
        'font-size': this.block.settings.fontSize + 'px',
        'font-weight': fw,
        'font-style': fs,
        'background': bg,
        color: tc,
        width: this.align_render( this.block.settings.align, 'width' ),
        padding: this.padding_render(
          this.block.settings.btnPaddingTop,
          this.block.settings.btnPaddingLeft,
          this.block.settings.btnPaddingTop,
          this.block.settings.btnPaddingLeft
        ),
        'border-radius': this.block.settings.borderRadius + 'px ',
        border: border,
        'border-bottom': borderBottom,
        'box-shadow': boxShadow,
      };
    },
    buttonTxtStyleObject: function() {
      let o = '';
      if ( 'light' == this.luminance ) {
        o = '0.80';
      }

      //console.log(o);
      return {
        'font-family': this.font_render( this.block.settings.font ),
        opacity: o,
      };
    },

    mobileSubButtonStylesCal: function() {

      // target rule|css properties
      let css = '';
      let target = '#sp-button-sub-text-' + this.block.id;

      if ( '' != this.block.settings.fontSize_mobile ) {
        let sts = parseInt( this.block.settings.fontSize_mobile ) - 6;
        css += 'font-size:' + sts + 'px;';
      }

      if ( '' == css ) {
        return '';
      } else {
        return target + '|' + css;
      }

    },

    subButtonStyleObject: function() {
      let sts = parseInt( this.block.settings.fontSize ) - 6;
      return {
        'font-size': sts + 'px',
        'font-family': this.font_render( this.block.settings.font ),
        'line-height': 1,
      };
    },
    subButtonClassObject: function() {
      return {
        'sp-block': true,
        'sp-mt-1': true,
        'sp-opacity-75': true,
      };
    },
  },
};
</script>
