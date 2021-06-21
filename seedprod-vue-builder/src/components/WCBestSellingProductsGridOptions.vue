<template>
  <WCCustomProductsGridOptions :block="block" :type="'wcbestsellingproductsgrid'" />
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';
import WCCustomProductsGridOptions from '@/components/WCCustomProductsGridOptions.vue';

export default {
  name: 'WCBestSellingProductsGridOptions',
  mixins: [ helpers ],
  inject: {
  },
  data() {
    return {
      shared: seedprod_store,
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.wcbestsellingproductsgrid, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  created() {},
  methods: {},
  components: {
    WCCustomProductsGridOptions,
  },
  props: {
    block: Object,
  },
};
</script>
