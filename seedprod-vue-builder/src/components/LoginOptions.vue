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
        :class="{ 'sp-secondary': view != 2 }"
        @click="view = 2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-w-4 sp-fill-current sp-mr-2"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3zm-2 2H6V4h10v2z"
          />
        </svg>{{txt_222}}
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
          <div>
            <label>{{txt_22}}</label>
          </div>
          <input type="text" v-model="block.settings.labelTextUser" class="sp-form-input" />
        </div>

        <div class="sp-form-group">
          <div>
            <label>{{txt_23}}</label>
          </div>
          <input type="text" v-model="block.settings.labelTextUserPlaceholder" class="sp-form-input" />
        </div>

        <div class="sp-form-group">
          <div>
            <label>{{txt_24}}</label>
          </div>
          <input type="text" v-model="block.settings.labelTextPass" class="sp-form-input" />
        </div>

        <div class="sp-form-group">
          <div>
            <label>{{txt_25}}</label>
          </div>
          <input type="text" v-model="block.settings.labelTextPassPlaceholder" class="sp-form-input" />
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
        {{txt_46}}
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
          <div>
            <label>{{txt_26}}</label>
          </div>
          <input type="text" v-model="block.settings.btnText" class="sp-form-input" />
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
        {{txt_47}}
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
          <div>
            <label>{{txt_20}}</label>
          </div>
          <input type="text" v-model="block.settings.redirectUrl" class="sp-form-input" />
        </div>

        <div class="sp-form-group">
          <div>
            <label>{{txt_61}}</label>
          </div>
          <input type="text" v-model="block.settings.loggedInText" class="sp-form-input" />
          <p class="sp-text-xs">{{txt_62}}</p>
        </div>

      </div>

      <h3
        class="sp-sidebar-headers"
        @click="
        section_4 = !section_4
      "
        :class="{
        seedprod_collaspe: !section_4}"
      >
        {{txt_48}}
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
          <div>
            <label>{{txt_52}}</label>
            <p class="sp-text-xs">{{txt_63}}</p>
          </div>
          <input type="text" v-model="block.settings.labelRememberme" class="sp-form-input" />
        </div>

        <div class="sp-form-group">
          <div>
            <label>{{txt_53}}</label>
            <p class="sp-text-xs">{{txt_64}}</p>
          </div>
          <input type="text" v-model="block.settings.labelLostpass" class="sp-form-input" />
        </div>

      </div>

    </div>
    <!-- Templates -->
    <div v-if="view == 2" class="sp-flex sp-items-center sp-flex-col sp-pb-8 sp-optin-templates">
      <div
        class="sp-uppercase sp-text-12px sp-font-semibold sp-text-neutral-60 sp-mt-2"
      >{{txt_28}}</div>

      <div class="sp-template-preview" @click="apply_template(false)">
        <input
          type="text"
          class="sp-form-input sp-w-full"
          style="width:80%"
          :placeholder="txt_243"
        />
      </div>
      <div class="sp-template-preview-dark" @click="apply_template(1)">
        <input
          type="text"
          class="sp-form-input sp-w-full sp-border-none"
          style="width:80%"
          :placeholder="txt_244"
        />
      </div>
      <div class="sp-template-preview" @click="apply_template(2)">
        <input
          type="text"
          class="sp-form-input sp-w-full sp-optin-block-template-2"
          style="width:80%"
          :placeholder="txt_245"
        />
      </div>
      <!-- <div class="sp-template-preview" @click="apply_template(3)">
        <input
          type="text"
          class="sp-form-input sp-w-full sp-optin-block-template-3"
          style="width:80%"
          :placeholder="txt_46"
        />
      </div> -->
      <div class="sp-template-preview" @click="apply_template(4)">
        <input
          type="text"
          class="sp-form-input sp-w-full sp-optin-block-template-4"
          style="width:80%"
          :placeholder="txt_247"
        />
      </div>
      <div class="sp-template-preview" @click="apply_template(5)">
        <input
          type="text"
          class="sp-form-input sp-w-full sp-optin-block-template-5"
          style="width:80%"
          :placeholder="txt_248"
        />
      </div>
      <div class="sp-template-preview-dark" @click="apply_template(6)">
        <input
          type="text"
          class="sp-form-input sp-w-full sp-optin-block-template-6"
          style="width:80%"
          :placeholder="txt_249"
        />
      </div>
      <div class="sp-template-preview-dark" @click="apply_template(7)">
        <input
          type="text"
          class="sp-form-input sp-w-full sp-optin-block-template-7"
          style="width:80%"
          :placeholder="txt_250"
        />
      </div>
    </div>
    <!-- Advanced -->
    <div v-if="view == 3">
      <!-- Advanced Styles-->
      <h3
        class="sp-sidebar-headers"
        @click="
        section_5 = !section_5
      "
        :class="{
        seedprod_collaspe: !section_5}"
      >
        {{txt_54}}
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
            :label="txt_27"
            :color="block.settings.linkColor"
            v-model="block.settings.linkColor"
          />
        </div>

        <!-- <div class="sp-form-group">
          <ColorPicker
            :label="txt_28"
            :color="block.settings.linkHoverColor"
            v-model="block.settings.linkHoverColor"
          />
        </div> -->

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_29"
            :color="block.settings.labelTextColor"
            v-model="block.settings.labelTextColor"
          />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_30"
            :color="block.settings.fieldTextColor"
            v-model="block.settings.fieldTextColor"
          />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_31"
            :color="block.settings.fieldBgColor"
            v-model="block.settings.fieldBgColor"
          />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_32"
            :color="block.settings.fieldBorderColor"
            v-model="block.settings.fieldBorderColor"
          />
        </div>

        <!-- <div class="sp-form-group">
          <ColorPicker
            :label="txt_33"
            :color="block.settings.btnTextColor"
            v-model="block.settings.btnTextColor"
          />
        </div> -->

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_34"
            :color="block.settings.btnBgColor"
            v-model="block.settings.btnBgColor"
          />
        </div>
      </div>

      <h3
        class="sp-sidebar-headers"
        @click="
        section_6 = !section_6
      "
        :class="{
        seedprod_collaspe: !section_6}"
      >
        {{txt_49}}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': !section_6}"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': section_6}"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>

      <div class="seedprod-sidebar-action-body" v-if="section_6">
        <div class="sp-form-group">
        <label>{{txt_55}}</label>
        <FontControl
          v-model="block.settings.labelTextFont"
          @change="load_font(block.settings.labelTextFont,block.settings.labelTextFontVariant)"
        />
        <FontVariantControl
          v-model="block.settings.labelTextFontVariant"
          :myfont="block.settings.labelTextFont"
          @change="load_font(block.settings.labelTextFont,block.settings.labelTextFontVariant)"
        />
        </div>

        <div class="sp-form-group">
          <label>{{txt_107}}</label>
          <SliderControl v-model="block.settings.labelTextSize" :min="10" :max="30" :step="1" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_36}}</label>
          <SliderControl v-model="block.settings.rowSpacing" :min="0" :max="30" :step="1" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_12}}</label>
          <AlignControl v-model="block.settings.align" icons="alt" />
        </div>
      </div>

      <h3
        class="sp-sidebar-headers"
        @click="
        section_7 = !section_7
      "
        :class="{
        seedprod_collaspe: !section_7}"
      >
        {{txt_3}}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': !section_7}"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': section_7}"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>

      <div class="seedprod-sidebar-action-body" v-if="section_7">
        <div class="sp-form-group">
        <label>{{txt_57}}</label>
        <FontControl
          v-model="block.settings.fieldTextFont"
          @change="load_font(block.settings.fieldTextFont,block.settings.fieldTextFontVariant)"
        />
        <FontVariantControl
          v-model="block.settings.fieldTextFontVariant"
          :myfont="block.settings.fieldTextFont"
          @change="load_font(block.settings.fieldTextFont,block.settings.fieldTextFontVariant)"
        />
        </div>

        <div class="sp-form-group">
          <label>{{txt_35}}</label>
          <select v-model="block.settings.fieldSize" class="sp-form-select" @change="update_field_size">
            <option value="sm">{{txt_16}}</option>
            <option value="md">{{txt_17}}</option>
            <option value="lg">{{txt_18}}</option>
          </select>
        </div>

        <div class="sp-form-group">
          <label>{{txt_66}}</label>
          <SliderControl v-model="block.settings.fieldWidth" :min="10" :max="100" :step="1" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_42}}</label>
          <SliderControl v-model="block.settings.labelSpacing" :min="0" :max="30" :step="1" />
        </div>

        <BorderWidthControl :block="block" prefix="field" />

        <div class="sp-form-group">
          <label>{{txt_44}}</label>
          <SliderControl v-model="block.settings.fieldBorderRadius" :min="0" :max="50" :step="1" />
        </div>

      </div>

      <h3
        class="sp-sidebar-headers"
        @click="
        section_8 = !section_8
      "
        :class="{
        seedprod_collaspe: !section_8}"
      >
        {{txt_46}}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': !section_8}"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': section_8}"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>
      <div class="seedprod-sidebar-action-body" v-if="section_8">
        <div class="sp-form-group">
        <label>{{txt_59}}</label>
        <FontControl
          v-model="block.settings.btnTextFont"
          @change="load_font(block.settings.btnTextFont,block.settings.btnTextFontVariant)"
        />
        <FontVariantControl
          v-model="block.settings.btnTextFontVariant"
          :myfont="block.settings.btnTextFont"
          @change="load_font(block.settings.btnTextFont,block.settings.btnTextFontVariant)"
        />
        </div>

        <div class="sp-form-group">
          <label>{{txt_45}}</label>
          <select v-model="block.settings.btnSize" class="sp-form-select" @change="update_btn_size">
            <option value="2">{{txt_102}}</option>
            <option value="3">{{txt_103}}</option>
            <option value="4">{{txt_104}}</option>
          </select>
        </div>

        <div class="sp-form-group">
          <label>{{txt_65}}</label>
          <SliderControl v-model="block.settings.btnBorderRadius" :min="0" :max="50" :step="1" />
        </div>

      </div>

      <SpacingSectionControl :block="block" />

    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';
import ColorPicker from '@/components/ColorPicker.vue';
import AlignControl from '@/components/AlignControl.vue';
import SliderControl from '@/components/SliderControl.vue';
import FontControl from '@/components/FontControl.vue';
import FontVariantControl from '@/components/FontVariantControl.vue';
import SpacingSectionControl from '@/components/SpacingSectionControl.vue';
import BorderWidthControl from '@/components/BorderWidthControl.vue';

export default {
  name: 'LoginOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Content', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Fields', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Align', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'Redirect URL', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( 'Label for User field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_23: __( 'Placeholder for User field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'Label for Password field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __( 'Placeholder for Password field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_26: __( 'Button Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( 'Link Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( 'Link Hover Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( 'Label Text Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( 'Field Text Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_31: __( 'Field Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_32: __( 'Field Border Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( 'Button Text Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_34: __( 'Button Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_35: __( 'Field Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_36: __( 'Row Spacing', process.env.VUE_APP_TEXTDOMAIN ),
      txt_42: __( 'Label Spacing', process.env.VUE_APP_TEXTDOMAIN ),
      txt_43: __( 'Field Border Width', process.env.VUE_APP_TEXTDOMAIN ),
      txt_44: __( 'Field Border Radius', process.env.VUE_APP_TEXTDOMAIN ),
      txt_45: __( 'Button Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_46: __( 'Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_47: __( 'Success Action', process.env.VUE_APP_TEXTDOMAIN ),
      txt_48: __( 'Additional Options', process.env.VUE_APP_TEXTDOMAIN ),
      txt_49: __( 'Form', process.env.VUE_APP_TEXTDOMAIN ),
      txt_50: __( 'Transparent Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_52: __( 'Remember User Label', process.env.VUE_APP_TEXTDOMAIN ),
      txt_53: __( 'Lost Password Link Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_54: __( 'Colors', process.env.VUE_APP_TEXTDOMAIN ),
      txt_55: __( 'Label Font', process.env.VUE_APP_TEXTDOMAIN ),
      txt_56: __( 'Label Font Weight', process.env.VUE_APP_TEXTDOMAIN ),
      txt_57: __( 'Field Font', process.env.VUE_APP_TEXTDOMAIN ),
      txt_58: __( 'Field Font Weight', process.env.VUE_APP_TEXTDOMAIN ),
      txt_59: __( 'Button Font', process.env.VUE_APP_TEXTDOMAIN ),
      txt_60: __( 'Button Font Weight', process.env.VUE_APP_TEXTDOMAIN ),
      txt_61: __( 'Logged In Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_62: __( 'This text displays in place of a form if the user is already logged in. {user} will be replaced by the user\'s display name.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_63: __( '(e.g. \'Remember Me\')', process.env.VUE_APP_TEXTDOMAIN ),
      txt_64: __( '(e.g. \'Lost your password?\')', process.env.VUE_APP_TEXTDOMAIN ),
      txt_65: __( 'Button Border Radius', process.env.VUE_APP_TEXTDOMAIN ),
      txt_66: __( 'Field Width', process.env.VUE_APP_TEXTDOMAIN ),
      txt_102: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_103: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_104: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_105: __( 'X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_106: __( '2X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_107: __( 'Label Text Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_222: __( 'Templates', process.env.VUE_APP_TEXTDOMAIN ),
      txt_243: __( 'Light Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_244: __( 'No Border Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_245: __( 'Wide Border Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_246: __( 'Inner Shadow Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_247: __( 'Grey Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_248: __( 'Dark Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_249: __( 'Bottom Border Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_250: __( 'Transparent Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      view: 1,
      section_1: true,
      section_2: false,
      section_3: false,
      section_4: false,
      section_5: true,
      section_6: false,
      section_7: false,
      section_8: false,
      shared: seedprod_store,
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.login, function( value, key ) {
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
        this.block.settings.fieldBorderRadius = 6;
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
        this.block.settings.fieldBorderRadius = 6;
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
        this.block.settings.fieldBorderRadius = 6;
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
        this.block.settings.fieldBorderRadius = 6;
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
        this.block.settings.fieldBorderRadius = 6;
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
        this.block.settings.fieldBorderRadius = 6;
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
        this.block.settings.fieldBorderRadius = 6;
      }
    },
    update_btn_size() {

      // xs
      if ( 1 == this.block.settings.btnSize ) {
        this.block.settings.btnTextFontSize = 13;
        this.block.settings.btnPaddingVertical = 4;
        this.block.settings.btnPaddingHorizontal = 8;
      }

      // sm
      if ( 2 == this.block.settings.btnSize ) {
        this.block.settings.btnTextFontSize = 15;
        this.block.settings.btnPaddingVertical = 8;
        this.block.settings.btnPaddingHorizontal = 12;
      }

      // md
      if ( 3 == this.block.settings.btnSize ) {
        this.block.settings.btnTextFontSize = 18;
        this.block.settings.btnPaddingVertical = 11;
        this.block.settings.btnPaddingHorizontal = 16;
      }

      // lg
      if ( 4 == this.block.settings.btnSize ) {
        this.block.settings.btnTextFontSize = 22;
        this.block.settings.btnPaddingVertical = 16;
        this.block.settings.btnPaddingHorizontal = 20;
      }

      // xl
      if ( 5 == this.block.settings.btnSize ) {
        this.block.settings.fontSize = 26;
        this.block.settings.btnPaddingTop = 20;
        this.block.settings.btnPaddingLeft = 26;
      }

      // 2xl
      if ( 6 == this.block.settings.btnSize ) {
        this.block.settings.fontSize = 32;
        this.block.settings.btnPaddingTop = 28;
        this.block.settings.btnPaddingLeft = 32;
      }
    },
    update_field_size() {

      // sm
      if ( 'sm' == this.block.settings.fieldSize ) {
        this.block.settings.fieldTextFontSize = 15;
        this.block.settings.fieldPaddingVertical = 4;
        this.block.settings.fieldPaddingHorizontal = 8;
      }

      // md
      if ( 'md' == this.block.settings.fieldSize ) {
        this.block.settings.fieldTextFontSize = 18;
        this.block.settings.fieldPaddingVertical = 6;
        this.block.settings.fieldPaddingHorizontal = 10;
      }

      // lg
      if ( 'lg' == this.block.settings.fieldSize ) {
        this.block.settings.fieldTextFontSize = 22;
        this.block.settings.fieldPaddingVertical = 8;
        this.block.settings.fieldPaddingHorizontal = 12;
      }
    },
  },
  components: {
    ColorPicker,
    AlignControl,
    SliderControl,
    FontControl,
    FontVariantControl,
    SpacingSectionControl,
    BorderWidthControl,
  },
  props: {
    block: Object,
  },
};
</script>
