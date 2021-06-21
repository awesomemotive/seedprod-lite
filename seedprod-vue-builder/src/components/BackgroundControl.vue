<template>
  <div>
    <div class="sp-form-group sp-flex sp-justify-between sp-items-center">
      <label>{{txt_1}}</label>
      <div class="sp-flex sp-justify-center sp-items-center">
        <button
          @click="block.settings.bgStyle = 's'"
          class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-neutral-80 sp-py-2 sp-px-3 sp-rounded sp-flex sp-items-center sp-text-xs sp-font-semibold sp-leading-none sp-mr-1 sp-rounded-full"
          :class="{'sp-active':block.settings.bgStyle == 's' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-4 sp-mr-1"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"
            />
          </svg> {{txt_2}}
        </button>
        <button
          @click="block.settings.bgStyle = 'g'"
          class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-neutral-80 sp-py-2 sp-px-3 sp-rounded sp-flex sp-items-center sp-text-xs sp-font-semibold sp-leading-none sp-rounded-full"
          :class="{'sp-active':block.settings.bgStyle == 'g' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-4 sp-mr-1"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z"
            />
          </svg>{{txt_3}}
        </button>
      </div>
    </div>
    <div v-if="block.settings.bgStyle == 'g'">
      <div class="sp-form-group">
        <label>{{txt_4}}</label>
        <select v-model="block.settings.bgGradient.type" class="sp-form-select">
          <option value="radial">{{txt_5}}</option>
          <option value="linear">{{txt_6}}</option>
        </select>
      </div>

      <div class="sp-form-group" v-if="block.settings.bgGradient.type == 'linear'">
        <label class="sp-mb-0">{{txt_7}}</label>
        <SliderControl v-model="block.settings.bgGradient.angle" :min="0" :max="360" :step="1" />
      </div>

      <div class="sp-form-group" v-if="block.settings.bgGradient.type == 'radial'">
        <label>{{txt_8}}</label>
        <select v-model="block.settings.bgGradient.position" class="sp-form-select">
          <option value="top center">{{txt_9}}</option>
          <option value="top left">{{txt_10}}</option>
          <option value="top right">{{txt_11}}</option>
          <option value="center">{{txt_12}}</option>
          <option value="center left">{{txt_13}}</option>
          <option value="center right">{{txt_14}}</option>
          <option value="bottom center">{{txt_15}}</option>
          <option value="bottom left">{{txt_16}}</option>
          <option value="bottom right">{{txt_17}}</option>
        </select>
      </div>

      <div class="sp-form-group">
        <ColorPicker
          :label="txt_27"
          :color="block.settings.bgGradient.color1"
          v-model="block.settings.bgGradient.color1"
        />
      </div>

      <div class="sp-form-group">
        <label class="sp-mb-0">{{txt_18}}</label>
        <SliderControl
          v-model="block.settings.bgGradient.color1location"
          :min="0"
          :max="100"
          :step="1"
        />
      </div>

      <div class="sp-form-group">
        <ColorPicker
          :label="txt_28"
          :color="block.settings.bgGradient.color2"
          v-model="block.settings.bgGradient.color2"
        />
      </div>

      <div class="sp-form-group">
        <label class="sp-mb-0">{{txt_19}}</label>
        <SliderControl
          v-model="block.settings.bgGradient.color2location"
          :min="0"
          :max="100"
          :step="1"
        />
      </div>
    </div>
    <div v-if="block.settings.bgStyle == 's'">
      <div class="sp-form-group">
        <ColorPicker
          :label="txt_29"
          :color="block.settings.bgColor"
          v-model="block.settings.bgColor"
        />
      </div>
    </div>

    <div
      class="sp-form-group"
      :class="{
						input: true,
						'has-error': errors.has('page_background_image')
					}"
    >
      <label for="page_background_image">{{txt_33}}</label>
      <ImageControl v-model="block.settings.bgImage" :block="block" prefix="img" />
    </div>

    <div class="sp-form-group" v-if="block.settings.bgImage != ''">
          <label>{{txt_20}}</label>
          <select
            v-model="block.settings.bgPosition"
            class="sp-form-select"
          >
            <option value="">{{txt_31}}</option>
            <option value="cover">{{txt_21}}</option>
            <option value="full">{{txt_22}}</option>
            <option value="fullbottom">{{txt_30}}</option>
            <option value="repeat">{{txt_23}}</option>
            <option value="repeattop">{{txt_24}}</option>
            <option value="repeatbottom">{{txt_25}}</option>
            <option value="repeatvc">{{txt_26}}</option>
            <!-- <option value="custom">{{txt_32}}</option> -->

          </select>
        </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';
import ColorPicker from '@/components/ColorPicker.vue';
import SliderControl from '@/components/SliderControl.vue';
import ImageControl from '@/components/ImageControl.vue';

export default {
  name: 'BackgroundControl',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Background Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Solid', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Gradient', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Gradient Type', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Radial', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Linear', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Angle', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Position', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Top Center', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Top Left', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Top Right', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Center Center', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Center Left', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Center Right', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Bottom Center', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Bottom Left', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Bottom Right', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'First Color Location', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Second Color Location', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'Background Position', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'Full Screen Cover', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( '100% Width Top', process.env.VUE_APP_TEXTDOMAIN ),
      txt_23: __( 'Repeat', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'Repeat Horizontal Top', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __( 'Repeat Horizontal Bottom', process.env.VUE_APP_TEXTDOMAIN ),
      txt_26: __( 'Repeat Vertical Center', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( 'First Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( 'Second Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( 'Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( '100% Width Bottom', process.env.VUE_APP_TEXTDOMAIN ),
      txt_31: __( '', process.env.VUE_APP_TEXTDOMAIN ),
      txt_32: __( 'Custom Position', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( 'Background Image', process.env.VUE_APP_TEXTDOMAIN ),
      shared: seedprod_store,

    };
  },
  methods: {},
  components: {
    ColorPicker,
    ImageControl,
    SliderControl,
  },
  props: {
    block: Object,
  },
};
</script>
