<template>
  <div ref="variant">

        <!-- Standard Font Variants -->
        <select
          v-model="variant"
          class="sp-form-select"
          v-if="shared.setup_page_meta.googlefonts['Standard Fonts'][myfont]"
          @change="update_variant"
        >
          <option value="">{{txt_1}}</option>
          <option value="400">{{txt_2}}</option>
          <option value="700">{{txt_3}}</option>
        </select>
        <!-- Google Font Variants -->
        <select
          v-model="variant"
          class="sp-form-select"
          v-if="shared.setup_page_meta.googlefonts['Google Fonts'][myfont]"
          @change="update_variant"
        >
          <option
            v-for="(variant,index) in shared.setup_page_meta.googlefonts['Google Fonts'][myfont].variants"
            v-bind:key="index"
            v-bind:value="variant.id"
          >{{ variant.name }}</option>
        </select>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
export default {
  name: 'FontVariantControl',
  data() {
    return {
      txt_1: __( 'Select a Font Weight', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Normal 400', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Bold 700', process.env.VUE_APP_TEXTDOMAIN ),
      variant: this.value,
      shared: seedprod_store,
    };
  },
  mounted: function() {},
  methods: {
    update_variant() {
      this.$emit( 'input', this.variant );
      this.$emit( 'change', this.variant );
    },
  },
  watch: {
    value( val, newv ) {
      this.variant = val;
      this.update_variant();
    },
  },
  props: [ 'value', 'myfont' ],
};
</script>
