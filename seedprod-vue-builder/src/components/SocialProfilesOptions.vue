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
        </svg>Content
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
        </svg>Templates
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
        </svg>Advanced
      </div>
    </div>

    <!-- Templates -->
    <div v-if="view == 2" class="sp-templates sp-flex sp-items-center sp-flex-col">
      <div
        class="sp-uppercase sp-text-12px sp-font-semibold sp-text-neutral-60 sp-mt-2"
      >{{txt_1}}</div>
      <!-- Rounded Official -->
      <div class="sp-template-preview" @click="apply_template(1)">
        <button class="sp-sp sp-sp-facebook sp-sp-lg">
          <i class="fa-fw fa-facebook fab sp-text-white"></i>
        </button>
      </div>
      <div class="sp-template-preview" @click="apply_template(2)">
        <!-- Square Official -->
        <button class="sp-sp sp-sp-facebook sp-sp-lg sp-rounded">
          <i class="fa-fw fa-facebook fab sp-text-white"></i>
        </button>
      </div>
      <div class="sp-template-preview" @click="apply_template(3)">
        <!-- Rounded Official -->
        <button class="sp-sp sp-sp-facebook sp-sp-lg sp-rounded-full">
          <i class="fa-fw fa-facebook fab sp-text-white"></i>
        </button>
      </div>
      <div class="sp-template-preview" @click="apply_template(4)">
        <!-- Rounded Official -->
        <button class="sp-sp sp-sp-facebook sp-sp-lg sp-sp-black">
          <i class="fa-fw fa-facebook fab sp-text-white"></i>
        </button>
      </div>
      <div class="sp-template-preview" @click="apply_template(5)">
        <!-- Square Official -->
        <button class="sp-sp sp-sp-facebook sp-sp-lg sp-sp-black sp-rounded">
          <i class="fa-fw fa-facebook fab sp-text-white"></i>
        </button>
      </div>
      <div class="sp-template-preview" @click="apply_template(6)">
        <!-- Rounded Official -->
        <button class="sp-sp sp-sp-facebook sp-sp-lg sp-sp-black sp-rounded-full">
          <i class="fa-fw fa-facebook fab sp-text-white"></i>
        </button>
      </div>
      <div class="sp-template-preview-dark" @click="apply_template(7)">
        <!-- Rounded Official -->
        <button class="sp-sp-text-black sp-sp sp-sp-facebook sp-sp-lg sp-sp-white">
          <i class="fa-fw fa-facebook fab"></i>
        </button>
      </div>
      <div class="sp-template-preview-dark" @click="apply_template(8)">
        <!-- Square Official -->
        <button class="sp-sp-text-black sp-sp sp-sp-facebook sp-sp-lg sp-sp-white sp-rounded">
          <i class="fa-fw fa-facebook fab"></i>
        </button>
      </div>
      <div class="sp-template-preview-dark" @click="apply_template(9)">
        <!-- Rounded Official -->
        <button class="sp-sp-text-black sp-sp sp-sp-facebook sp-sp-lg sp-sp-white sp-rounded-full">
          <i class="fa-fw fa-facebook fab"></i>
        </button>
      </div>
      <div class="sp-template-preview" @click="apply_template(10)">
        <!-- Transparent Official  -->
        <button class="sp-sp sp-sp-lg sp-sp-transparent sp-sp-text-facebook">
          <i class="fa-fw fa-facebook fab"></i>
        </button>
      </div>
      <div class="sp-template-preview-dark" @click="apply_template(11)">
        <button class="sp-sp sp-sp-lg sp-sp-transparent sp-sp-text-white">
          <i class="fa-fw fa-facebook fab"></i>
        </button>
      </div>
      <div class="sp-template-preview" @click="apply_template(12)">
        <button class="sp-sp sp-sp-lg sp-sp-transparent sp-sp-text-black">
          <i class="fa-fw fa-facebook fab"></i>
        </button>
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
        {{txt_33}}
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
          <draggable :list="block.settings.items" handle=".sp-drag-drop">
            <div
              v-for="(item, index) in block.settings.items"
              :key="index"
              class="sp-mb-3"
              @mouseover="current_index = index"
              @mouseleave="current_index = false"
            >
              <div class="sp-flex sp-items-center">
                <select v-model="item.type" class="sp-form-select" style="width:160px">
                  <option value>{{txt_2}}</option>
                  <option value="facebook">{{txt_3}}</option>
                  <option value="twitter">{{txt_4}}</option>
                  <option value="linkedin">{{txt_5}}</option>
                  <option value="pinterest">{{txt_6}}</option>
                  <option value="youtube">{{txt_7}}</option>
                  <option value="instagram">{{txt_8}}</option>
                  <option value="snapchat">{{txt_9}}</option>
                  <option value="wordpress">{{txt_10}}</option>
                  <option value="github">{{txt_11}}</option>
                  <option value="imdb">IMDb</option>
                  <option value="soundcloud">{{txt_12}}</option>
                  <option value="rss">{{txt_13}}</option>
                  <option value="envelope">{{txt_14}}</option>
                  <option value="phone">{{txt_35}}</option>
                </select>

                                <span v-show="current_index === index" class="sp-drag-drop sp-text-neutral-40 hover:sp-text-neutral-80 sp-ml-3 sp-cursor-pointer">
                  <i class="fas fa-arrows-alt"></i>
                </span>

                <button
                  v-tooltip="{content:'Settings',delay:{ show: 1500, hide: 0 }}"
                  v-show="current_index === index"
                  class="sp-text-neutral-40 hover:sp-text-neutral-80 sp-ml-3"
                  @click="show_settings(index)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5 sp-h-5"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                    />
                  </svg>
                </button>

                <button
                  v-tooltip="{content:'Duplicate',delay:{ show: 1500, hide: 0 }}"
                  v-show="current_index === index"
                  class="sp-text-neutral-40 hover:sp-text-neutral-80 sp-ml-3"
                  @click="duplicate_item(index)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5 sp-h-5"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"
                    />
                  </svg>
                </button>
                <button
                  v-tooltip="{content:'Delete',delay:{ show: 1500, hide: 0 }}"
                  v-show="current_index === index"
                  class="sp-text-neutral-40 hover:sp-text-neutral-80 sp-ml-2"
                  @click="remove_item(index)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5 sp-h-5"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"
                    />
                  </svg>
                </button>
              </div>

              <div
                v-if="showsettings === index"
                class="sp-bg-neutral-10 sp-rounded-6px sp-p-2 sp-mb-4 sp-w-full sp-mt-1"
              >
                <div v-if="item.type == 'envelope'" class="sp-form-group">
                  <div>
                    <label>{{txt_14}}</label>
                  </div>
                  <input type="text" v-model="item.meta" class="sp-form-input" />
                </div>

                <div v-else class="sp-form-group">
                  <div>
                    <label>{{txt_15}}</label>
                  </div>
                  <input type="text" v-model="item.url" class="sp-form-input" />
                </div>
              </div>
            </div>
          </draggable>

          <button
            @click="add_item"
            class="sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-py-2 sp-px-3 sp-rounded sp-flex sp-items-center sp-mt-1 sp-text-xs sp-font-semibold sp-leading-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              class="sp-w-4 sp-fill-current sp-mr-2"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
            </svg>Add New Share
          </button>
        </div>

        <div class="sp-form-group">
          <label>{{txt_16}}</label>
          <select v-model="block.settings.iconStyle" class="sp-form-select">
            <option value="1">{{txt_17}}</option>
            <option value="2">{{txt_18}}</option>
          </select>
        </div>

        <div class="sp-form-group">
          <label>{{txt_19}}</label>
          <select v-model="block.settings.size" class="sp-form-select" @change="update_size">
            <option value="sm">{{txt_20}}</option>
            <option value="md">{{txt_21}}</option>
            <option value="lg">{{txt_22}}</option>
          </select>
        </div>

        <div class="sp-form-group">
          <label>{{txt_23}}</label>
          <AlignControl v-model="block.settings.align" icons="alt" />
        </div>
      </div>
    </div>

    <!-- Advanced -->
    <div v-if="view == 3">
      <!-- Advanced Styles-->
      <h3
        class="sp-sidebar-headers"
        @click="
				section_4 = !section_4
			"
        :class="{
				seedprod_collaspe: !section_4}"
      >
        {{txt_34}}
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
          <label>{{txt_16}}</label>
          <select v-model="block.settings.iconStyle" class="sp-form-select">
            <option value="1">{{txt_17}}</option>
            <option value="2">{{txt_18}}</option>
          </select>
        </div>

        <div class="sp-form-group sp-mt-4">
          <ColorPicker
            :label="txt_32"
            :color="block.settings.iconColor"
            v-model="block.settings.iconColor"
          />
        </div>

        <div class="sp-form-group">
          <label>{{txt_24}}</label>
          <SliderControl v-model="block.settings.iconSize" :min="0" :max="100" :step="1" />
        </div>

        <div class="sp-form-group" v-if="block.settings.iconStyle == '2'">
          <label>{{txt_25}}</label>
          <SliderControl v-model="block.settings.borderRadius" :min="0" :max="100" :step="1" />
        </div>

        <div class="sp-form-group" v-if="block.settings.iconStyle == '2'">
          <label>{{txt_26}}</label>
          <SliderControl v-model="block.settings.iconPadding" :min="0" :max="100" :step="1" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_27}}</label>
          <SliderControl v-model="block.settings.spaceBetween" :min="0" :max="100" :step="1" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_28}}</label>
          <select v-model="block.settings.shadow" class="sp-form-select">
            <option value>{{txt_29}}</option>
            <option value="1">{{txt_30}}</option>
            <option value="2">{{txt_20}}</option>
            <option value="3">{{txt_21}}</option>
            <option value="4">{{txt_22}}</option>
            <option value="5">{{txt_31}}</option>
          </select>
        </div>
      </div>

      <SpacingSectionControl :block="block" />
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import draggable from 'vuedraggable';
import { helpers } from '../mixins/helpers.js';
import ColorPicker from '@/components/ColorPicker.vue';
import IconPicker from '@/components/IconPicker.vue';
import AlignControl from '@/components/AlignControl.vue';
import SliderControl from '@/components/SliderControl.vue';
import FontControl from '@/components/FontControl.vue';
import PaddingControl from '@/components/PaddingControl.vue';
import FontVariantControl from '@/components/FontVariantControl.vue';
import TypographyControl from '@/components/TypographyControl.vue';
import HelpTip from '@/components/HelpTip.vue';
import ImageControl from '@/components/ImageControl.vue';
import SpacingSectionControl from '@/components/SpacingSectionControl.vue';

export default {
  name: 'SocialProfilesOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Choose Your Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Select a Type', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Facebook', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Twitter', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'LinkedIn', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Pinterest', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'YouTube', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Instagram', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Snapchat', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'WordPress', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Github', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'SoundCloud', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'RSS', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Email', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'URL', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Default', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Stacked', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_23: __( 'Align', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'Icon Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __( 'Border Radius', process.env.VUE_APP_TEXTDOMAIN ),
      txt_26: __( 'Icon Padding', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( 'Space Between', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( 'Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( 'None', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( 'Hairline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_31: __( 'X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_32: __( 'Icon Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( 'Icon', process.env.VUE_APP_TEXTDOMAIN ),
      txt_34: __( 'Styles', process.env.VUE_APP_TEXTDOMAIN ),
      txt_35: __( 'Phone', process.env.VUE_APP_TEXTDOMAIN ),
      showsettings: false,
      current_index: false,
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
    lodash.forOwn( this.shared.block_templates.socialprofiles, function(
      value,
      key
    ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  created() {},

  methods: {
    update_size() {

      //console.log(this.block.settings.size);
      if ( 'sm' == this.block.settings.size ) {
        this.block.settings.iconSize = 16;
        this.block.settings.iconPadding = 14;
      }
      if ( 'md' == this.block.settings.size ) {
        this.block.settings.iconSize = 24;
        this.block.settings.iconPadding = 14;
      }
      if ( 'lg' == this.block.settings.size ) {
        this.block.settings.iconSize = 32;
        this.block.settings.iconPadding = 14;
      }
    },
    apply_template( id ) {
      this.block.settings.blockTemplateId = id;
      if ( 1 == id ) {
        this.block.settings.iconStyle = 2;
        this.block.settings.iconColor = '';
        this.block.settings.borderRadius = 0;
      }
      if ( 2 == id ) {
        this.block.settings.iconStyle = 2;
        this.block.settings.iconColor = '';
        this.block.settings.borderRadius = 4;
      }
      if ( 3 == id ) {
        this.block.settings.iconStyle = 2;
        this.block.settings.iconColor = '';
        this.block.settings.borderRadius = 99;
      }
      if ( 4 == id ) {
        this.block.settings.iconStyle = 2;
        this.block.settings.iconColor = '#444444';
        this.block.settings.borderRadius = 0;
      }
      if ( 5 == id ) {
        this.block.settings.iconStyle = 2;
        this.block.settings.iconColor = '#444444';
        this.block.settings.borderRadius = 4;
      }
      if ( 6 == id ) {
        this.block.settings.iconStyle = 2;
        this.block.settings.iconColor = '#444444';
        this.block.settings.borderRadius = 99;
      }
      if ( 7 == id ) {
        this.block.settings.iconStyle = 2;
        this.block.settings.iconColor = '#ffffff';
        this.block.settings.borderRadius = 0;
      }
      if ( 8 == id ) {
        this.block.settings.iconStyle = 2;
        this.block.settings.iconColor = '#ffffff';
        this.block.settings.borderRadius = 4;
      }
      if ( 9 == id ) {
        this.block.settings.iconStyle = 2;
        this.block.settings.iconColor = '#ffffff';
        this.block.settings.borderRadius = 99;
      }
      if ( 10 == id ) {
        this.block.settings.iconStyle = 1;
        this.block.settings.iconColor = '';
        this.block.settings.borderRadius = 0;
      }
      if ( 11 == id ) {
        this.block.settings.iconStyle = 1;
        this.block.settings.iconColor = '#ffffff';
        this.block.settings.borderRadius = 0;
      }
      if ( 12 == id ) {
        this.block.settings.iconStyle = 1;
        this.block.settings.iconColor = '#000000';
        this.block.settings.borderRadius = 0;
      }
    },
    add_item() {
      let index = this.block.settings.items.push({
        type: '',
        label: '',
        meta: '',
        url: '',
      });
    },

    show_settings( index ) {
      this.current_index = index;
      if ( this.showsettings !== index ) {
        this.showsettings = index;
      } else {
        this.showsettings = false;
      }
    },
    remove_item( index ) {
      this.$delete( this.block.settings.items, index );
    },
    duplicate_item( index ) {
      const cloneObj = JSON.parse(
        JSON.stringify( this.block.settings.items[index])
      );
      this.block.settings.items.splice( index + 1, 0, cloneObj );
    },
  },
  components: {
    draggable,
    ColorPicker,
    PaddingControl,
    IconPicker,
    AlignControl,
    SliderControl,
    FontControl,
    FontVariantControl,
    TypographyControl,
    HelpTip,
    ImageControl,
    SpacingSectionControl,
  },
  props: {
    block: Object,
  },
};
</script>
