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
        </svg>{{txt_2}}
      </div>
    </div>

    <!-- Content -->
    <div v-if="view == 1">
      <h3
        class="sp-sidebar-headers"
        @click="
				section_1 = !section_1
			"
        :class="{
				seedprod_collaspe: !section_1}"
      >
        {{txt_3}}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-6 sp-fill-current"
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
          <div>

            <FacebookSettings></FacebookSettings>

          </div>

        </div>

        <div class="sp-form-group">
              <div><label>{{txt__8}}</label></div>
              <input
                :name="'Link'"
                type="text"
                v-model="block.settings.customlinkurl"
                v-validate="'required'"
                class="sp-form-input sp-w-full"
              />
              <span
                v-show="errors.has('Link')"
                class="help-block has-error sp-text-red"
              >{{ errors.first("Link") }}</span>
        </div>

        <div class="sp-form-group">
          <label>{{txt_9}}</label>
          <select v-model="block.settings.multiLayoutPage" multiple="true" class="sp-form-select">
            <option value="timeline" selected>{{txt_10}}</option>
            <option value="events">{{txt_11}}</option>
            <option value="messages">{{txt_12}}</option>
          </select>
        </div>

        <div
          class="sp-form-group sp-flex sp-justify-between sp-items-center sp-mt-4"
        >
          <label>{{ txt__1 }}</label>
          <div
            class="sp-bg-neutral-5 sp-flex sp-items-center sp-justify-center"
          >
            <toggle-button
              :width="40"
              :sync="true"
              style="margin-bottom: 0"
              v-model="block.settings.smallHeader"
            />&nbsp;
            <span
              v-if="block.settings.smallHeader"
              class="sp-text-11px sp-uppercase sp-pl-1 sp-font-bold"
              >{{ txt__2 }}</span
            >
            <span
              v-else
              class="sp-text-11px sp-uppercase sp-text-neutral-40 sp-pl-1 sp-font-bold"
              >{{ txt__3 }}</span
            >
          </div>
        </div>

        <div
          class="sp-form-group sp-flex sp-justify-between sp-items-center sp-mt-4"
        >
          <label>{{ txt__4 }}</label>
          <div
            class="sp-bg-neutral-5 sp-flex sp-items-center sp-justify-center"
          >
            <toggle-button
              :width="40"
              :sync="true"
              style="margin-bottom: 0"
              v-model="block.settings.coverPhoto"
            />&nbsp;
            <span
              v-if="block.settings.coverPhoto"
              class="sp-text-11px sp-uppercase sp-pl-1 sp-font-bold"
              >{{ txt__2 }}</span
            >
            <span
              v-else
              class="sp-text-11px sp-uppercase sp-text-neutral-40 sp-pl-1 sp-font-bold"
              >{{ txt__3 }}</span
            >
          </div>
        </div>

        <div
          class="sp-form-group sp-flex sp-justify-between sp-items-center sp-mt-4"
        >
          <label>{{ txt__5 }}</label>
          <div
            class="sp-bg-neutral-5 sp-flex sp-items-center sp-justify-center"
          >
            <toggle-button
              :width="40"
              :sync="true"
              style="margin-bottom: 0"
              v-model="block.settings.profilePhoto"
            />&nbsp;
            <span
              v-if="block.settings.profilePhoto"
              class="sp-text-11px sp-uppercase sp-pl-1 sp-font-bold"
              >{{ txt__2 }}</span
            >
            <span
              v-else
              class="sp-text-11px sp-uppercase sp-text-neutral-40 sp-pl-1 sp-font-bold"
              >{{ txt__3 }}</span
            >
          </div>
        </div>

        <div
          class="sp-form-group sp-flex sp-justify-between sp-items-center sp-mt-4"
        >
          <label>{{ txt__6 }}</label>
          <div
            class="sp-bg-neutral-5 sp-flex sp-items-center sp-justify-center"
          >
            <toggle-button
              :width="40"
              :sync="true"
              style="margin-bottom: 0"
              v-model="block.settings.hideCTA"
            />&nbsp;
            <span
              v-if="block.settings.hideCTA"
              class="sp-text-11px sp-uppercase sp-pl-1 sp-font-bold"
              >{{ txt__2 }}</span
            >
            <span
              v-else
              class="sp-text-11px sp-uppercase sp-text-neutral-40 sp-pl-1 sp-font-bold"
              >{{ txt__3 }}</span
            >
          </div>
        </div>

        <div class="sp-form-group">
          <label>{{txt_21}}</label>
          <SliderControl v-model="block.settings.height" :min="70" :max="700" :step="10" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_20}}</label>
          <AlignControl v-model="block.settings.align" icons="alt" />
        </div>

      </div>
    </div>

    <!-- Advanced -->
    <div v-if="view == 3">
      <!-- Advanced Styles-->
      <SpacingSectionControl :block="block" />
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';
import ColorPicker from '@/components/ColorPicker.vue';
import TypographyControl from '@/components/TypographyControl.vue';
import AlignControl from '@/components/AlignControl.vue';
import SliderControl from '@/components/SliderControl.vue';
import FontControl from '@/components/FontControl.vue';
import FontVariantControl from '@/components/FontVariantControl.vue';
import PaddingControl from '@/components/PaddingControl.vue';
import HelpTip from '@/components/HelpTip.vue';
import SpacingSectionControl from '@/components/SpacingSectionControl.vue';
import FacebookSettings from '@/components/FacebookSettings.vue';

export default {
  name: 'FacebookPageOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt__1: __( 'Small Header', process.env.VUE_APP_TEXTDOMAIN ),
      txt__2: __( 'Yes', process.env.VUE_APP_TEXTDOMAIN ),
      txt__3: __( 'No', process.env.VUE_APP_TEXTDOMAIN ),
      txt__4: __( 'Hide Cover Photo', process.env.VUE_APP_TEXTDOMAIN ),
      txt__5: __( 'Profile Photos', process.env.VUE_APP_TEXTDOMAIN ),
      txt__6: __( 'Hide CTA button', process.env.VUE_APP_TEXTDOMAIN ),
      txt__7: __( 'Custom', process.env.VUE_APP_TEXTDOMAIN ),
      txt__8: __( 'Link', process.env.VUE_APP_TEXTDOMAIN ),
      txt__9: __( 'Url Format', process.env.VUE_APP_TEXTDOMAIN ),
      txt__10: __( 'Plain Permalink', process.env.VUE_APP_TEXTDOMAIN ),
      txt__11: __( 'Pretty Permalink', process.env.VUE_APP_TEXTDOMAIN ),
      txt_1: __( 'Content', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Facebook Setting', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Styles', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Facebook App Id:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Type', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Like', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Recommend', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Tabs', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Timeline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Events', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Messages', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Box Count', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Color Scheme', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Light', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Dark', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'Align', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'Height', process.env.VUE_APP_TEXTDOMAIN ),

      //txt_20: __("Font Size", process.env.VUE_APP_TEXTDOMAIN),
      //txt_21: __("Text Shadow", process.env.VUE_APP_TEXTDOMAIN),
      txt_22: __( 'None', process.env.VUE_APP_TEXTDOMAIN ),
      txt_23: __( 'Hairline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_26: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( 'X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( '2X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( 'Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( 'Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_31: __( 'Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_32: __( 'Text Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( 'Set your Facebook App ID in the ', process.env.VUE_APP_TEXTDOMAIN ),
      txt_34: __( 'Page Settings', process.env.VUE_APP_TEXTDOMAIN ),
      txt_35: __( 'You are connected to Facebook App', process.env.VUE_APP_TEXTDOMAIN ),
      txt_36: __( 'Change App', process.env.VUE_APP_TEXTDOMAIN ),
      view: 1,
      section_1: true,
      section_2: false,
      section_3: false,
      section_4: true,
      shared: seedprod_store,
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.text, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
    setTimeout( function() {
      self.onFBSettingChange();
    }, 500 );
  },
  created() {},
  methods: {
    onFBSettingChange() {
      FB.XFBML.parse( document.getElementById( '#sp-fbpage-' + this.block.id ) );
    },
  },
  watch: {
    'block.settings.multiLayoutPage': function( newVal, oldVal ) {
      this.onFBSettingChange();
    },
    'block.settings.orderBy': function( newVal, oldVal ) {
      this.onFBSettingChange();
    },
    'block.settings.smallHeader': function( newVal, oldVal ) {
      this.onFBSettingChange();
    },
    'block.settings.coverPhoto': function( newVal, oldVal ) {
      this.onFBSettingChange();
    },
    'block.settings.profilePhoto': function( newVal, oldVal ) {
      this.onFBSettingChange();
    },
    'block.settings.hideCTA': function( newVal, oldVal ) {
      this.onFBSettingChange();
    },
    'block.settings.customlinkurl': function( newVal, oldVal ) {
      this.onFBSettingChange();
    },
  },
  components: {
    ColorPicker,
    AlignControl,
    SliderControl,
    FontControl,
    FontVariantControl,
    PaddingControl,
    HelpTip,
    TypographyControl,
    SpacingSectionControl,
    FacebookSettings,
  },
  props: {
    block: Object,
  },
};
</script>
