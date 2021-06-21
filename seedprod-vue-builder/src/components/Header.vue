
<template>
  <main @click="set_has_focus(true)">
    <!-- <i
      v-if="this.block.settings.beforeIcon"
      class="sp-mr-4 sp-css-target"
      :class="this.block.settings.beforeIcon"
      :style="iconStyleObject"
    ></i>-->
    <editor
      v-if="!shared.is_moving && shared.active_inline_editor_id == block.id"
      :id="block.id"
      :inline="true"
      class="sp-css-target"
      :class="'sp-headline-block-'+block.id"
      :tag-name="block.settings.tag"
      :key="componentKey"
      :disabled="shared.is_moving"
      v-model="block.settings.headerTxt"
      @onExecCommand="sync_align"
      @onInit="set_cursor"
      @onBlur="set_has_focus(false)"
      :data-mobile-css="mobileFontCal"
      :style="[headerStyleObject,headerWrapperStyleObject]"
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
           'help,bold,italic,underline,strikethrough,link,alignleft,aligncenter,alignright,help'
       }"
    ></editor>

    <component
      :id="'sp-'+block.id"
      v-else
      class="sp-css-target"
      :class="'sp-headline-block-'+block.id"
      v-bind:is="block.settings.tag"
      :data-mobile-css="mobileFontCal"
      :style="[headerStyleObject,headerWrapperStyleObject]"
      v-html="compHeaderTxt"
    ></component>

    <!-- <i
      v-if="this.block.settings.afterIcon"
      class="sp-ml-4 sp-css-target"
      :class="this.block.settings.afterIcon"
      :style="iconStyleObject"
    ></i>-->
  </main>
</template>

<script>
import { helpers } from '../mixins/helpers.js';
import Editor from '@tinymce/tinymce-vue';

export default {
  name: 'Header',
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
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.header, function( value, key ) {
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
    set_cursor( type, el ) {
      el.focus;
    },
    sync_align( cmd, el ) {
      if ( 'JustifyLeft' == cmd.command ) {
        this.block.settings.align = 'left';
      }
      if ( 'JustifyRight' == cmd.command ) {
        this.block.settings.align = 'right';
      }
      if ( 'JustifyCenter' == cmd.command ) {
        this.block.settings.align = 'center';
      }
    },
  },
  components: {
    editor: Editor,
  },
  watch: {
    'block.settings.tag': function( val ) {
      this.componentKey++;
    },
  },
  computed: {
    mobileFontCal: function() {

      // target rule|css properties
      let css = '';
      let target = '.sp-headline-block-' + this.block.id;

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

    // tag: function() {
    //    //this.componentKey++;
    //    console.log('sfsdf');
    //   return this.block.settings.tag;
    // },
    headerWrapperStyleObject: function() {
      let size = '';
      if ( '' != this.block.settings.fontSize ) {
        size = this.block.settings.fontSize + 'px';
      }
      let r = '';
      let align = this.block.settings.align;
      if ( 'left' == align ) {
        r = 'flex-start';
      }
      if ( 'right' == align ) {
        r = 'flex-end';
      }
      if ( 'center' == align ) {
        r = 'center';
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
        'text-align': this.align_render( this.block.settings.align ),
        padding: p,

        // "justify-content": r,
        'font-size': size,
        'margin-top': mt,
      };
    },

    // compHeaderTxt: {
    //   get() {
    //     var txt = this.block.settings.headerTxt;
    //     var btxt = "";
    //     var atxt = "";
    //     if (this.block.settings.beforeIcon != "") {
    //       btxt =
    //         '<i class="sp-mr-4 ' + this.block.settings.beforeIcon + '"></i>';
    //     }
    //     if (this.block.settings.afterIcon != "") {
    //       atxt =
    //         '<i class="sp-ml-4 ' + this.block.settings.afterIcon + '"></i>';
    //     }
    //     return btxt + txt + atxt;
    //   },
    //   set(val) {
    //     this.block.settings.headerTxt = val;
    //   }
    // },
    compHeaderTxt: function() {
      let txt = this.block.settings.headerTxt;
      let btxt = '';
      let atxt = '';
      if ( '' != this.block.settings.beforeIcon ) {
        btxt = '<i class="sp-mr-4 ' + this.block.settings.beforeIcon + '"></i>';
      }
      if ( '' != this.block.settings.afterIcon ) {
        atxt = '<i class="sp-ml-4 ' + this.block.settings.afterIcon + '"></i>';
      }
      return btxt + txt.replace('<script>', '') + atxt;
    },
    iconStyleObject: function() {
      return {
        color: this.block.settings.textColor,
      };
    },
    headerStyleObject: function() {
      let size = '';
      if ( '' != this.block.settings.fontSize ) {
        size = this.block.settings.fontSize + 'px';
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
        'font-size': size,
        'font-weight': fw,
        'font-style': fs,
        'text-decoration': td,
        'background-color': this.block.settings.bgColor,
        'font-family': this.font_render( this.block.settings.font ),
        'line-height': lh,
        'letter-spacing': ls,
        'text-transform': tt,
        color: this.block.settings.textColor,
        'box-shadow': this.box_shadow( this.block.settings.shadow ),
        'text-shadow': this.text_shadow(
          this.block.settings.textShadow,
          this.block.settings.textColor
        ),
      };
    },
  },
};
</script>
