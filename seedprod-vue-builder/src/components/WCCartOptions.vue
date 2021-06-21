<template>
  <div>
    <!-- Block Top Nav -->
    <div id="sp-blocks-edit-sections" class="sp-flex">
      <div
        class="sp-w-1/2 sp-cursor-pointer"
        :class="{ 'sp-secondary': view != 1 }"
        @click="view = 1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-w-4 sp-fill-current sp-mr-2"
        >
          <path
            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>{{txt_1}}
      </div>

      <div
        class="sp-w-1/2 sp-cursor-pointer"
        :class="{ 'sp-secondary': view != 3 }"
        @click="view = 3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-w-4 sp-fill-current sp-mr-2"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
          />
        </svg>{{txt_3}}
      </div>
    </div>

    <!-- Styles -->
    <div v-if="view == 1">

      <h3
        class="sp-sidebar-headers"
        @click="
        section_1 = !section_1
      "
        :class="{
        seedprod_collaspe: !section_1}"
      >
        {{txt_5}}
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
          <TypographyControl :block="block" />
        </div>
        <div class="sp-form-group">
          <ColorPicker
            :label="txt_22"
            :color="block.settings.headerColor"
            v-model="block.settings.headerColor"
          />
        </div>
      </div>

      <h3
        class="sp-sidebar-headers"
        @click="
        section_2 = !section_2
      "
        :class="{
        seedprod_collaspe: !section_2}"
      >
        {{txt_7}}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': !section_2}"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': section_2}"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>
      <div class="seedprod-sidebar-action-body" v-if="section_2">

        <div class="sp-form-group">
          <label>{{txt_30}}</label>
          <select v-model="block.settings.btnStyle" class="sp-form-select">
            <option value="flat">{{txt_33}}</option>
            <option value="2d">{{txt_34}}</option>
            <option value="3d">{{txt_35}}</option>
            <option value="ghost">{{txt_36}}</option>
            <option value="link">{{txt_37}}</option>
          </select>
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_31"
            :color="block.settings.btnBgColor"
            v-model="block.settings.btnBgColor"
          />
        </div>

        <div class="sp-form-group">
          <label>{{txt_32}}</label>
          <SliderControl v-model="block.settings.btnBorderRadius" :min="0" :max="100" :step="1" />
        </div>

      </div>

      <h3
        class="sp-sidebar-headers"
        @click="
        section_3 = !section_3
      "
        :class="{
        seedprod_collaspe: !section_3}"
      >
        {{txt_6}}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': !section_3}"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': section_3}"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>
      <div class="seedprod-sidebar-action-body" v-if="section_3">

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_23"
            :color="block.settings.fieldBGColor"
            v-model="block.settings.fieldBGColor"
          />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_24"
            :color="block.settings.fieldTextColor"
            v-model="block.settings.fieldTextColor"
          />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_25"
            :color="block.settings.fieldBorderColor"
            v-model="block.settings.fieldBorderColor"
          />
        </div>

        <BorderWidthControl :block="block" prefix="field" />

      </div>

      <h3
        class="sp-sidebar-headers"
        @click="
        section_4 = !section_4
      "
        :class="{
        seedprod_collaspe: !section_4}"
      >
        {{txt_8}}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': !section_4}"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': section_4}"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>
      <div class="seedprod-sidebar-action-body" v-if="section_4">

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_38"
            :color="block.settings.alertInfoHlColor"
            v-model="block.settings.alertInfoHlColor"
          />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_39"
            :color="block.settings.alertErrorHlColor"
            v-model="block.settings.alertErrorHlColor"
          />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_40"
            :color="block.settings.alertSuccessHlColor"
            v-model="block.settings.alertSuccessHlColor"
          />
        </div>

      </div>

      <h3
        class="sp-sidebar-headers"
        @click="
        section_5 = !section_5
      "
        :class="{
        seedprod_collaspe: !section_5}"
      >
        {{txt_9}}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': !section_5}"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': section_5}"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>
      <div class="seedprod-sidebar-action-body" v-if="section_5">

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_41"
            :color="block.settings.cartFieldBorderColor"
            v-model="block.settings.cartFieldBorderColor"
          />
        </div>

        <BorderWidthControl :block="block" prefix="cart" />

        <div class="sp-form-group">
          <label>{{txt_43}}</label>
          <SliderControl v-model="block.settings.cartBorderRadius" :min="0" :max="100" :step="1" />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_44"
            :color="block.settings.cartBgColor"
            v-model="block.settings.cartBgColor"
          />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_45"
            :color="block.settings.cartTextColor"
            v-model="block.settings.cartTextColor"
          />
        </div>

        <div class="sp-form-group">
          <label>{{txt_46}}</label>
          <FontControl
            v-model="block.settings.cartFont"
            @change="load_font(block.settings.cartFont,block.settings.cartFontVariant)"
          />
          <FontVariantControl
            v-model="block.settings.cartFontVariant"
            :myfont="block.settings.cartFont"
            @change="load_font(block.settings.cartFont,block.settings.cartFontVariant)"
          />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_47"
            :color="block.settings.cartHeaderBgColor"
            v-model="block.settings.cartHeaderBgColor"
          />
        </div>

        <div class="sp-form-group">
          <label>{{txt_48}}</label>
          <FontControl
            v-model="block.settings.cartHeaderFont"
            @change="load_font(block.settings.cartHeaderFont,block.settings.cartHeaderFontVariant)"
          />
          <FontVariantControl
            v-model="block.settings.cartHeaderFontVariant"
            :myfont="block.settings.cartHeaderFont"
            @change="load_font(block.settings.cartHeaderFont,block.settings.cartHeaderFontVariant)"
          />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_49"
            :color="block.settings.cartHeaderColor"
            v-model="block.settings.cartHeaderColor"
          />
        </div>

      </div>

    </div><!-- End Styles -->

    <!-- Advanced -->
    <div v-if="view == 3">
        <SpacingSectionControl :block="block" />
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import SliderControl from '@/components/SliderControl.vue';
import { helpers } from '../mixins/helpers.js';
import PaddingControl from '@/components/PaddingControl.vue';
import SpacingSectionControl from '@/components/SpacingSectionControl.vue';
import ColorPicker from '@/components/ColorPicker.vue';
import TypographyControl from '@/components/TypographyControl.vue';
import FontControl from '@/components/FontControl.vue';
import FontVariantControl from '@/components/FontVariantControl.vue';
import BorderWidthControl from '@/components/BorderWidthControl.vue';
export default {
  name: 'WCCartOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Styles', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Templates', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Layout', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Headers', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Fields', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Buttons', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Alerts', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Cart', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Payment Section', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Choose Your Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Light Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'No Border Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Wide Border Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Inner Shadow Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Grey Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Dark Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Bottom Border Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Transparent Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'One Column', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'Two Column', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( 'Header Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_23: __( 'Field Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'Field Text Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __( 'Field Border Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_26: __( 'Field Border Width', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( 'Label Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( 'Label Font', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( 'Row Spacing', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( 'Button Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_31: __( 'Button Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_32: __( 'Border Radius', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( 'Flat', process.env.VUE_APP_TEXTDOMAIN ),
      txt_34: __( '2D', process.env.VUE_APP_TEXTDOMAIN ),
      txt_35: __( 'Vintage', process.env.VUE_APP_TEXTDOMAIN ),
      txt_36: __( 'Ghost', process.env.VUE_APP_TEXTDOMAIN ),
      txt_37: __( 'Link', process.env.VUE_APP_TEXTDOMAIN ),
      txt_38: __( 'Info Highlight Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_39: __( 'Error Highlight Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_40: __( 'Success Highlight Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_41: __( 'Cart Border Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_42: __( 'Cart Border Width', process.env.VUE_APP_TEXTDOMAIN ),
      txt_43: __( 'Border Radius', process.env.VUE_APP_TEXTDOMAIN ),
      txt_44: __( 'Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_45: __( 'Text Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_46: __( 'Font Family', process.env.VUE_APP_TEXTDOMAIN ),
      txt_47: __( 'Header Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_48: __( 'Header Font Family', process.env.VUE_APP_TEXTDOMAIN ),
      txt_49: __( 'Header Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_100: __( 'Default', process.env.VUE_APP_TEXTDOMAIN ),
      view: 1,
      section_1: true,
      section_2: false,
      section_3: false,
      section_4: false,
      section_5: false,
      shared: seedprod_store,
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.wccart, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  created() {},
  methods: {
    apply_template( id ) {
      if ( false == id ) {
        this.block.settings.fieldBGColor = '#ffffff';
        this.block.settings.fieldTextColor = '#444444';
        this.block.settings.fieldBorderColor = '#dedede';
        this.block.settings.fieldborderTop = 1;
        this.block.settings.fieldborderRight = 1;
        this.block.settings.fieldborderBottom = 1;
        this.block.settings.fieldborderLeft = 1;
        this.block.settings.borderRadius = 6;
        this.block.settings.fieldborderSync = true;
      }
      if ( 1 == id ) {
        this.block.settings.fieldBGColor = '#ffffff';
        this.block.settings.fieldTextColor = '#444444';
        this.block.settings.fieldBorderColor = '#ffffff';
        this.block.settings.fieldborderTop = 1;
        this.block.settings.fieldborderRight = 1;
        this.block.settings.fieldborderBottom = 1;
        this.block.settings.fieldborderLeft = 1;
        this.block.settings.borderRadius = 6;
        this.block.settings.fieldborderSync = true;
      }
      if ( 2 == id ) {
        this.block.settings.fieldBGColor = '#ffffff';
        this.block.settings.fieldTextColor = '#444444';
        this.block.settings.fieldBorderColor = '#dedede';
        this.block.settings.fieldborderTop = 2;
        this.block.settings.fieldborderRight = 2;
        this.block.settings.fieldborderBottom = 2;
        this.block.settings.fieldborderLeft = 2;
        this.block.settings.borderRadius = 6;
        this.block.settings.fieldborderSync = true;
      }
      if ( 4 == id ) {
        this.block.settings.fieldBGColor = '#f0f0f0';
        this.block.settings.fieldTextColor = '#444444';
        this.block.settings.fieldBorderColor = '#dedede';
        this.block.settings.fieldborderTop = 1;
        this.block.settings.fieldborderRight = 1;
        this.block.settings.fieldborderBottom = 1;
        this.block.settings.fieldborderLeft = 1;
        this.block.settings.borderRadius = 6;
        this.block.settings.fieldborderSync = true;
      }
      if ( 5 == id ) {
        this.block.settings.fieldBGColor = '#414141';
        this.block.settings.fieldTextColor = '#ffffff';
        this.block.settings.fieldBorderColor = '#dedede';
        this.block.settings.fieldborderTop = 1;
        this.block.settings.fieldborderRight = 1;
        this.block.settings.fieldborderBottom = 1;
        this.block.settings.fieldborderLeft = 1;
        this.block.settings.borderRadius = 6;
        this.block.settings.fieldborderSync = true;
      }
      if ( 6 == id ) {
        this.block.settings.fieldBGColor = '#ffffff';
        this.block.settings.fieldTextColor = '#444444';
        this.block.settings.fieldBorderColor = '#dedede';
        this.block.settings.fieldborderTop = 0;
        this.block.settings.fieldborderRight = 0;
        this.block.settings.fieldborderBottom = 2;
        this.block.settings.fieldborderLeft = 0;
        this.block.settings.fieldborderSync = false;
        this.block.settings.borderRadius = 6;
      }
      if ( 7 == id ) {
        this.block.settings.fieldBGColor = 'rgba(255,255,255,0.7)';
        this.block.settings.fieldTextColor = '#444444';
        this.block.settings.fieldBorderColor = 'rgba(255,255,255,0.3)';
        this.block.settings.fieldborderTop = 1;
        this.block.settings.fieldborderRight = 1;
        this.block.settings.fieldborderBottom = 1;
        this.block.settings.fieldborderLeft = 1;
        this.block.settings.fieldborderSync = true;
        this.block.settings.borderRadius = 6;
      }
    },
  },
  components: {
    ColorPicker,
    TypographyControl,
    FontControl,
    FontVariantControl,
    PaddingControl,
    SliderControl,
    SpacingSectionControl,
    BorderWidthControl,
  },
  props: {
    block: Object,
  },
};
</script>

