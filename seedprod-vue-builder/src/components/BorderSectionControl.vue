<template>
  <div>
    <!-- Border -->
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
      <!-- <div class="sp-form-group">
          <label>{{txt_2}}</label>
          <SliderControl v-model="block.settings.borderRadius" :min="0" :max="100" :step="1" />
      </div>-->
      <BorderRadiusControl :block="block" />
      <div class="sp-form-group">
        <label>{{txt_3}}</label>
        <select v-model="block.settings.borderStyle" class="sp-form-select">
          <option value="solid">{{txt_4}}</option>
          <option value="dotted">{{txt_5}}</option>
          <option value="dashed">{{txt_6}}</option>
        </select>
      </div>

      <div class="sp-form-group">
        <ColorPicker
          :label="txt_7"
          :color="block.settings.borderColor"
          v-model="block.settings.borderColor"
        />
      </div>
      <BorderWidthControl :block="block" />
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';
import ColorPicker from '@/components/ColorPicker.vue';
import BorderWidthControl from '@/components/BorderWidthControl.vue';
import BorderRadiusControl from '@/components/BorderRadiusControl.vue';

export default {
  name: 'BorderSectionControl',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Border', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Border Radius', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Border Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Solid', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Dotted', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Dashed', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Border Color', process.env.VUE_APP_TEXTDOMAIN ),
      section_1: false,
      shared: seedprod_store,
    };
  },
  methods: {},
  computed: {},
  components: {
    ColorPicker,
    BorderWidthControl,
    BorderRadiusControl,
  },
  props: {
    block: Object,
  },
};
</script>
