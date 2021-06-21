<template>
  <main @click="set_has_focus(true)">
    <editor
      v-if="!shared.is_moving  && shared.active_inline_editor_id == block.id"
      :inline="true"
      class="sp-css-target sp-text-wrapper"
      :class="'sp-text-wrapper-'+block.id"
      :disabled="shared.is_moving"
      v-model="block.settings.txt"
      @onFocus="edit_block(block.id)"
      :style="[textStyleObject,textWrapperStyleObject]"
      :data-mobile-css="mobileTextStylesCal"
      :init="{

        branding: false,
         menubar: false,
         plugins: [
           'charmap,colorpicker,hr,lists,paste,tabfocus,textcolor,fullscreen,wordpress,wpautoresize,wpeditimage,wpemoji,wpgallery,wplink,wptextpattern'
         ],
         toolbar:
           'help,bold,italic,underline,strikethrough,link,alignleft,aligncenter,alignright,help'
       }"
    ></editor>
    <div
      v-else
      :id="'sp-'+block.id"
      :style="[textStyleObject,textWrapperStyleObject]"
      :data-mobile-css="mobileTextStylesCal"
      v-html="block.settings.txt.replace('<script>', '')"
      class="sp-css-target sp-text-wrapper"
      :class="'sp-text-wrapper-'+block.id"
    ></div>
  </main>
</template>

<script>
import { helpers } from '../mixins/helpers.js';
import Editor from '@tinymce/tinymce-vue';
export default {
  name: 'MyText',
  mixins: [ helpers ],
  props: {
    block: Object,
  },
  data: function() {
    return {
      componentKey: 0,
      shared: seedprod_store,
      hasFocus: false,
    };
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
    setup_editor() {
      return;
      let self = this;
      if (
        wp.editor &&
        tinymce.editors['sp-ieditor-' + this.block.id] == undefined &&
        false == this.shared.is_moving
      ) {

        //console.log("add editor");
        //window.onload = event => {
        wp.editor.initialize( 'sp-ieditor-' + this.block.id, {
          tinymce: {
            inline: true,
            skin: false,
            skin_url: false,
            theme: 'modern',
            theme_url: tinyMCEPreInit.baseURL + '/themes/modern/',
            toolbar1: 'bold italic underline strikethrough link ',
            force_br_newlines: true,
            force_p_newlines: false,
            forced_root_block: '',
            setup: function( ed ) {

              // ed.on("ExecCommand", function(e) {
              //   self.block.settings.txt = ed.getContent();
              // });
              ed.on( 'input', function( e ) {

                //console.log(self.$refs);
                //self.hasFocus = true;
                self.block.settings.txt = ed.getContent();
              });
              ed.on( 'focus', function( e ) {
                self.hasFocus = true;
                self.edit_block( self.block.id );
              });
              ed.on( 'blur', function( e ) {
                self.hasFocus = false;
              });
            },
          },
        });

        //};
      }
    },
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.text, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  watch: {

    // 'block.settings.txt'(newVal) {
    //   if(this.hasFocus === false){
    //     this.$refs.inlineeditor.innerHTML = newVal;
    //   }
    // }
  },
  computed: {
    compTxt: function() {
      let txt = this.block.settings.txt;
      let btxt = '';
      let atxt = '';
      if ( '' != this.block.settings.beforeIcon ) {
        btxt = '<i class="sp-mr-2 ' + this.block.settings.beforeIcon + '"></i>';
      }
      return btxt + txt;
    },
    textWrapperStyleObject: function() {
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
        'box-shadow': this.box_shadow( this.block.settings.shadow ),
      };
    },
    mobileTextStylesCal: function() {

      // target rule|css properties
      let css = '';
      let target = '.sp-text-wrapper-' + this.block.id;

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
    textStyleObject: function() {
      let lh = '';
      if ( '' !== this.block.settings.lineHeight ) {
        lh = this.block.settings.lineHeight;
      }

      let ls = '';
      if ( '' != this.block.settings.letterSpacing ) {
        ls = this.block.settings.letterSpacing + 'px';
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

      let tt = '';
      if ( '' != this.block.settings.typographyLetterCase ) {
        tt = this.block.settings.typographyLetterCase;
      }

      return {
        'line-height': lh,
        'letter-spacing': ls,
        'text-transform': tt,
        'text-decoration': td,
        'font-size': this.block.settings.fontSize + 'px',
        'font-weight': fw,
        'font-style': fs,
        'font-family': this.font_render( this.block.settings.font ),
        'background-color': this.block.settings.bgColor,
        'color': this.block.settings.textColor,
        'text-shadow': this.text_shadow(
          this.block.settings.textShadow,
          this.block.settings.textColor
        ),
      };
    },
  },
};
</script>
