<template>
  <div :id="'sp-'+block.id" class="sp-code-wrapper" :style="codeWrapperStyleObject">
    <div v-if="code" v-html="code"></div>
    <span class="sp-hidden">START-REMOVE</span>
    <div v-if="!code" class="sp-text-center sp-bg-primary-10 sp-text-primary sp-border sp-border-primary sp-p-4">
      <pre class="sp-font-sans sp-text-sm sp-font-bold">{{txt_1}}</pre>
    </div>
    <span class="sp-hidden">END-REMOVE</span>

  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';
export default {
  name: 'CustomHTML',
  mixins: [ helpers ],
  props: {
    block: Object,
  },
  data() {
    return {
      txt_1: __( 'Enter Your HTML', process.env.VUE_APP_TEXTDOMAIN ),
      shared: seedprod_store,
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.customhtml, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  computed: {
    codeWrapperStyleObject: function() {
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
        padding: p,
        'margin-top': mt,
      };
    },
    code: function() {
      if(this.shared.unfiltered_html){
        return this.block.settings.code;
      }else{
        return this.block.settings.code.replace('<script>', '');
      }
      
    },
  },
};
</script>

