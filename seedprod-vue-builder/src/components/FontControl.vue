<template>
  <div ref="font" class="sp-mb-1">
    <select v-model="font" class="sp-form-select sp-max-w-full" @change="update_font">
      <option value>{{txt_1}}</option>
      <optgroup
        v-for="(group, name) in shared.setup_page_meta.googlefonts"
        :label="name"
        v-bind:key="name"
      >
        <option v-for="(font,index) in group" v-bind:key="index" :value="index">
          <span v-if="name == 'Standard Fonts'">{{ font}}</span>
          <span v-else>{{ index}}</span>
        </option>
      </optgroup>
    </select>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
export default {
  name: 'FontControl',
  data() {
    return {
      txt_1: __( 'Default', process.env.VUE_APP_TEXTDOMAIN ),
      font: this.value,
      shared: seedprod_store,
    };
  },
  mounted: function() {},
  methods: {
    update_font() {
      this.$emit( 'input', this.font );
      this.$emit( 'change', this.font );
    },
  },
  watch: {
    value( val, newv ) {
      this.font = val;
      this.update_font();
    },
  },
  props: [ 'value' ],
};
</script>
