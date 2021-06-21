<template>
  <div :id="'sp-'+block.id" class="sp-spacer" :style="spacerStyleObject"></div>
</template>

<script>
import { helpers } from '../mixins/helpers.js';

export default {
  name: 'Spacer',
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
    lodash.forOwn( this.shared.block_templates.spacer, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  computed: {
    spacerStyleObject: function() {

      let h = '20px';
      let height = parseInt( this.block.settings.height );
      if ( false !== lodash.isEmpty( height ) ) {
        h = height + 'px' ;
      }

      return {
        height: h,
      };
    },
  },
};
</script>
