<template>
  <div>
    <h3
      class="sp-sidebar-headers"
      @click="
				section_1 = !section_1
			"
      :class="{
				seedprod_collaspe: !section_1}"
    >
      {{txt_1}}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-w-5 sp-fill-current"
          :class="{
				'sp-hidden': !section_1}"
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          <path d="M0 0h24v24H0V0z" fill="none" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-w-5 sp-fill-current"
          :class="{
				'sp-hidden': section_1}"
        >
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          <path d="M0 0h24v24H0V0z" fill="none" />
        </svg>
      </span>
    </h3>
    <div class="seedprod-sidebar-action-body" v-if="section_1">
      <div class="sp-form-group">
        <label>{{txt_2}}</label>
        <SliderControl v-model="block.settings.height" :min="0" :max="500" :step="1" />
      </div>
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';
import ColorPicker from '@/components/ColorPicker.vue';
import FontAwesomePicker from '@/components/FontAwesomePicker.vue';
import AlignControl from '@/components/AlignControl.vue';
import SliderControl from '@/components/SliderControl.vue';
import FontControl from '@/components/FontControl.vue';
import FontVariantControl from '@/components/FontVariantControl.vue';
import HelpTip from '@/components/HelpTip.vue';
import ImageControl from '@/components/ImageControl.vue';

export default {
  name: 'SpacerOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Spacer', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Height', process.env.VUE_APP_TEXTDOMAIN ),
      section_1: true,
      shared: seedprod_store,
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.spacer, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  created() {},
  methods: {},
  components: {
    ImageControl,
    ColorPicker,
    FontAwesomePicker,
    AlignControl,
    SliderControl,
    FontControl,
    FontVariantControl,
    HelpTip,
  },
  props: {
    block: Object,
  },
};
</script>
