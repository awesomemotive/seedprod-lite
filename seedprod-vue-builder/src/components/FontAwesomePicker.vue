<template>
  <div ref="fapicker sp-relative">
    <div class="sp-form-input sp-flex sp-items-center" @click="togglePicker()">
      <input
        :placeholder="txt_1"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        class="sp-flex-1"
      />
      <i class="fa-fw fa-lg" :class="icon"></i>
    </div>
    <div class="sp-form-input  sp-z-10" v-if="displayPicker">
      <input
        v-model="search_term"
        class="sp-form-input sp-w-full sp-mb-3 sp-mt-1"
        :placeholder="txt_2"
      />
      <div class="sp-flex sp-flex-wrap sp-overflow-y-scroll" style="height:200px;width:245px">
        <div
          v-if="fa.includes(search_term)"
          class="sp-cursor-pointer sp-p-1 hover:sp-bg-gray-200"
          @click="update_icon(fa)"
          v-for="(fa,index) in shared.setup_page_meta.fontawesome"
          v-bind:key="index"
        >
          <i class="fa-fw fa-2x" :class="fa"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
export default {
  name: 'FontAwesomePicker',
  data() {
    return {
      txt_1: __( 'Click to select an icon', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Search icons', process.env.VUE_APP_TEXTDOMAIN ),
      displayPicker: false,
      icon: this.value,
      search_term: '',
      shared: seedprod_store,
    };
  },
  mounted: function() {},
  methods: {
    update_icon( icon ) {

      //console.log(this);
      this.icon = icon;
      this.$emit( 'input', icon );
      this.hidePicker();
    },
    showPicker() {
      document.addEventListener( 'click', this.documentClick );
      this.displayPicker = true;
    },
    hidePicker() {
      document.removeEventListener( 'click', this.documentClick );
      this.displayPicker = false;
    },
    togglePicker() {
      this.displayPicker ? this.hidePicker() : this.showPicker();
    },
    documentClick( e ) {
      let el = this.$refs.fapicker;
      let target = '';
      if ( e.target !== undefined ) {
        target = e.target;
      }
      if ( el !== target && ! el.contains( target ) ) {
        this.hidePicker();
      }
    },
  },
  watch: {},
  props: [ 'value' ],
};
</script>
