<template>
  <div :id="'sp-'+block.id" class="sp-divider-wrapper sp-flex" :style="dividerWrapperStyleObject">
    <div class="sp-divider" :class="classObject" :style="dividerStyleObject"></div>
  </div>
</template>

<script>
import { helpers } from '../mixins/helpers.js';
export default {
  name: 'Divider',
  mixins: [ helpers ],
  props: {
    block: Object,
  },
  data: function() {
    return {
      shared: seedprod_store,
      classObject: {
        'sp-flex': true,
      },
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.divider, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  computed: {
    dividerWrapperStyleObject: function() {
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
      return {
        'margin-top': mt,
        'justify-content': r,
        padding: p,
      };
    },
    dividerStyleObject: function() {
      let width = '';
      if ( '' != this.block.settings.width ) {
        width = this.block.settings.width + '%';
      }
      let color = this.shared.settings.document.settings.buttonColor;
      if ( '' != this.block.settings.color ) {
        color = this.block.settings.color;
      }

      //console.log(color);
      return {
        width: width,
        'border-top': this.border_render(
          this.block.settings.height,
          this.block.settings.style,
          color
        ),
        'box-shadow': this.divider_shadow( this.block.settings.shadow ),
      };
    },
  },
};
</script>
