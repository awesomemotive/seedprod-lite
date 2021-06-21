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
        </svg>{{txt_2}}
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
        {{txt_4}}
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
          <label>{{txt_4}}</label>
          <ImageControl v-model="block.settings.src" :block="block" prefix="img"/>
        </div>

        <div class="sp-form-group">
          <div>
            <label>{{txt_12}}</label>
          </div>
          <input type="text" v-model="block.settings.altTxt" class="sp-form-input" />
        </div>

        <div class="sp-form-group">
          <div class>
            <label>{{txt_13}}</label>
          </div>
          <div class="sp-flex sp-items-center">
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.width"
                class="sp-form-input sp-w-20"
                @wheel="scroll"
              />
              {{txt_5}}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-mx-2 sp-fill-current sp-w-4 sp-h-4"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
              />
            </svg>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.height"
                class="sp-form-input sp-w-20"
                @wheel="scroll"
              />
              Height
            </span>

            <div class="sp-text-sm">
              <span
                class="sp-mx-2 sp-text-neutral-40 sp-cursor-pointer"
                :class="{'sp-text-neutral-80 sp-underline':block.settings.unit == 'px'}"
                @click="block.settings.unit = 'px'"
              >PX</span>
              <span
                class="sp-text-neutral-40 sp-cursor-pointer"
                :class="{'sp-text-neutral-80  sp-underline':block.settings.unit == '%'}"
                @click="block.settings.unit = '%'"
              >%</span>
            </div>
          </div>
        </div>

        <div class="sp-form-group">
          <label>{{txt_14}}</label>
          <AlignControl v-model="block.settings.align" icons="alt" />
        </div>

        <div class="sp-form-group" :class="{'sp-mb-1':show_adv_link}">
          <label>{{txt_33}}</label>
          <span
            class="sp-flex sp-items-center sp-border sp-border-neutral-20 sp-rounded-md focus-within:sp-border-neutral-80 sp-rounded"
          >
            <input
              type="text"
              v-model="block.settings.link"
              class="sp-form-input sp-border-none sp-rounded-tr-none sp-rounded-br-none"
            />
            <button
              class="sp-form-input sp-rounded-tl-none sp-rounded-bl-none sp-h-40px sp-text-neutral-40 hover:sp-text-neutral-80 sp-outline-none sp-border-t-0 sp-border-r-0 sp-border-b-0"
              :class="{'sp-text-neutral-80':show_adv_link}"
              @click="show_adv_link = !show_adv_link"
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
          </span>
        </div>
        <div v-if="show_adv_link" class="sp-bg-neutral-10 sp-rounded-6px sp-p-2 sp-mb-4">
          <div>
            <label class="sp-inline-flex sp-items-center">
              <input
                type="checkbox"
                class="sp-form-checkbox sp-h-4 sp-w-4 sp-text-primary"
                v-model="block.settings.openNewWindow"
              />
              <span class="sp-ml-2 sp-text-sm">{{txt_34}}</span>
            </label>
          </div>

          <div>
            <label class="sp-inline-flex sp-items-center">
              <input
                type="checkbox"
                class="sp-form-checkbox sp-h-4 sp-w-4 sp-text-primary"
                v-model="block.settings.noFollow"
              />
              <span class="sp-ml-2 sp-text-sm">{{txt_35}}</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Templates -->
    <div v-if="view == 2" class="sp-flex sp-items-center sp-flex-col sp-pb-4">
      <div
        class="sp-uppercase sp-text-12px sp-font-semibold sp-text-neutral-60 sp-mt-2"
      >{{txt_15}}</div>

      <!-- Border -->

      <div class="sp-template-preview" @click="apply_template(1)">
        <img
          class="sp-cursor-pointer sp-img-block-template-1"
          style="width:80%"
          :src="this.shared.setup_page_meta.placeholder_image"
        />
      </div>

      <div class="sp-template-preview" @click="apply_template(2)">
        <img
          class="sp-cursor-pointer sp-img-block-template-2"
          style="width:80%"
          :src="this.shared.setup_page_meta.placeholder_image"
        />
      </div>

      <div class="sp-template-preview" @click="apply_template(6)">
        <img
          class="sp-cursor-pointer sp-img-block-template-6"
          style="width:80%"
          :src="this.shared.setup_page_meta.placeholder_image"
        />
      </div>

      <div class="sp-template-preview" @click="apply_template(3)">
        <img
          class="sp-cursor-pointer sp-img-block-template-3"
          style="width:80%"
          :src="this.shared.setup_page_meta.placeholder_image"
        />
      </div>

      <div class="sp-template-preview" @click="apply_template(4)">
        <img
          class="sp-cursor-pointer sp-img-block-template-4"
          style="width:80%"
          :src="this.shared.setup_page_meta.placeholder_image"
        />
      </div>

      <div class="sp-template-preview" @click="apply_template(7)">
        <img
          class="sp-cursor-pointer sp-img-block-template-7"
          style="width:80%"
          :src="this.shared.setup_page_meta.placeholder_image"
        />
      </div>

      <!-- Reset-->
      <div class="sp-template-preview-dark" @click="apply_template(8)">
        <img
          class="sp-cursor-pointer sp-img-block-template-0"
          style="width:80%"
          :src="this.shared.setup_page_meta.placeholder_image"
        />
      </div>

      <div class="sp-template-preview-dark" @click="apply_template(5)">
        <img
          class="sp-cursor-pointer sp-img-block-template-5"
          style="width:80%"
          :src="this.shared.setup_page_meta.placeholder_image"
        />

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
        {{txt_6}}
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
          <select v-model="block.settings.shadow" class="sp-form-select">
            <option value>{{txt_17}}</option>
            <option value="1">{{txt_18}}</option>
            <option value="2">{{txt_19}}</option>
            <option value="3">{{txt_20}}</option>
            <option value="4">{{txt_21}}</option>
            <option value="5">{{txt_22}}</option>
            <option value="6">{{txt_23}}</option>
            <option value="7">{{txt_24}}</option>
          </select>
        </div>
      </div>

      <!-- Border -->
      <h3
        class="sp-sidebar-headers"
        @click="
				section_5 = !section_5
			"
        :class="{
				seedprod_collaspe: !section_5}"
      >
        {{txt_7}}
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
          <label>{{txt_25}}</label>
          <SliderControl v-model="block.settings.imageBorderRadius" :min="0" :max="100" :step="1" />
        </div>
        <div class="sp-form-group">
          <label>{{txt_26}}</label>
          <select v-model="block.settings.imageBorderStyle" class="sp-form-select">
            <option value="solid">{{txt_27}}</option>
            <option value="dotted">{{txt_28}}</option>
            <option value="dashed">{{txt_29}}</option>
          </select>
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_32"
            :color="block.settings.imageBorderColor"
            v-model="block.settings.imageBorderColor"
          />
        </div>
        <div class="sp-form-group">
          <label>{{txt_30}}</label>
          <div v-if="block.settings.imageBorderSync === false" class="sp-flex sp-items-center">
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-tr-none sp-rounded-br-none"
              />
              {{txt_8}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderRight"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
              />
              {{txt_9}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderBottom"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
              />
              {{txt_10}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderLeft"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-rounded-tl-none sp-rounded-bl-none"
              />
              {{txt_11}}
            </span>
            <span class="sp-ml-2 sp-text-neutral-20" @click="sync_image_border(true)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-fill-current sp-w-6 sp-h-6"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z"
                />
                <path d="M0 24V0" fill="none" />
              </svg>
            </span>
          </div>
          <div v-else class="sp-flex sp-items-center">
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-tr-none sp-rounded-br-none"
              />
              {{txt_8}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
              />
              {{txt_9}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
              />
              {{txt_10}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-rounded-tl-none sp-rounded-bl-none"
              />
              {{txt_11}}
            </span>
            <span class="sp-ml-2 sp-text-primary" @click="sync_image_border(false)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-fill-current sp-6 sp-h-6"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="sp-form-group" v-if="block.settings.imageBorderTop > 0">
          <label>{{txt_31}}</label>
          <SliderControl v-model="block.settings.imagePadding" :min="0" :max="50" :step="1" />
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
import FontAwesomePicker from '@/components/FontAwesomePicker.vue';
import AlignControl from '@/components/AlignControl.vue';
import SliderControl from '@/components/SliderControl.vue';
import FontControl from '@/components/FontControl.vue';
import FontVariantControl from '@/components/FontVariantControl.vue';
import HelpTip from '@/components/HelpTip.vue';
import ImageControl from '@/components/ImageControl.vue';
import PaddingControl from '@/components/PaddingControl.vue';
import SpacingSectionControl from '@/components/SpacingSectionControl.vue';

export default {
  name: 'ImageOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Content', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Templates', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Image', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Width', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Styles', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Image Border', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Top', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Right', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Bottom', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Left', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Alt Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Image Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Align', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Choose Your Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'None', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Hairline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( 'X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_23: __( '2X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'Bottom Drop Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __( 'Border Radius', process.env.VUE_APP_TEXTDOMAIN ),
      txt_26: __( 'Border Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( 'Solid', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( 'Dotted', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( 'Dashed', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( 'Border Width', process.env.VUE_APP_TEXTDOMAIN ),
      txt_31: __( 'Image Whitespace Padding', process.env.VUE_APP_TEXTDOMAIN ),
      txt_32: __( 'Border Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( 'Link', process.env.VUE_APP_TEXTDOMAIN ),
      txt_34: __( 'Open In New Window', process.env.VUE_APP_TEXTDOMAIN ),
      txt_35: __( 'No Follow', process.env.VUE_APP_TEXTDOMAIN ),
      view: 1,
      section_1: true,
      section_2: false,
      section_3: false,
      section_4: true,
      section_5: false,
      search_term: '',
      defaultColor: '#660000',
      shared: seedprod_store,
      show_adv_link: false,
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.image, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  methods: {
    apply_template( id ) {
      this.block.settings.blockTemplateId = id;
      if ( 1 == id ) {
        this.block.settings.imageBorderTop = 1;
        this.block.settings.imagePadding = '';
        this.block.settings.imageBorderSync = true;
        this.block.settings.imageBorderStyle = 'solid';
        this.block.settings.imageBorderColor = '#dedede';
        this.block.settings.imageBorderRadius = 0;
        this.block.settings.shadow = '';
      }
      if ( 2 == id ) {
        this.block.settings.imageBorderTop = 1;
        this.block.settings.imagePadding = 5;
        this.block.settings.imageBorderSync = true;
        this.block.settings.imageBorderStyle = 'solid';
        this.block.settings.imageBorderColor = '#dedede';
        this.block.settings.imageBorderRadius = 0;
        this.block.settings.shadow = '';
      }
      if ( 6 == id ) {
        this.block.settings.imageBorderTop = 1;
        this.block.settings.imagePadding = 1;
        this.block.settings.imageBorderSync = true;
        this.block.settings.imageBorderStyle = 'solid';
        this.block.settings.imageBorderColor = '#dedede';
        this.block.settings.imageBorderRadius = 0;
        this.block.settings.shadow = '';
      }
      if ( 3 == id ) {
        this.block.settings.imageBorderTop = 1;
        this.block.settings.imagePadding = 5;
        this.block.settings.imageBorderSync = true;
        this.block.settings.imageBorderStyle = 'solid';
        this.block.settings.imageBorderColor = '#dedede';
        this.block.settings.imageBorderRadius = 6;
        this.block.settings.shadow = '';
      }
      if ( 4 == id ) {
        this.block.settings.imageBorderTop = 1;
        this.block.settings.imagePadding = 1;
        this.block.settings.imageBorderSync = true;
        this.block.settings.imageBorderStyle = 'solid';
        this.block.settings.imageBorderColor = '#dedede';
        this.block.settings.imageBorderRadius = 6;
        this.block.settings.shadow = '';
      }
      if ( 5 == id ) {
        this.block.settings.imageBorderTop = 1;
        this.block.settings.imagePadding = 4;
        this.block.settings.imageBorderSync = true;
        this.block.settings.imageBorderStyle = 'solid';
        this.block.settings.imageBorderColor = '#fff';
        this.block.settings.imageBorderRadius = 0;
        this.block.settings.shadow = '';
      }
      if ( 7 == id ) {
        this.block.settings.imageBorderTop = 0;
        this.block.settings.imagePadding = '';
        this.block.settings.imageBorderSync = true;
        this.block.settings.imageBorderStyle = 'solid';
        this.block.settings.imageBorderColor = '';
        this.block.settings.imageBorderRadius = 0;
        this.block.settings.shadow = '7';
      }
      if ( 8 == id ) {
        this.block.settings.imageBorderTop = 0;
        this.block.settings.imagePadding = '';
        this.block.settings.imageBorderSync = true;
        this.block.settings.imageBorderStyle = 'solid';
        this.block.settings.imageBorderColor = '';
        this.block.settings.imageBorderRadius = 0;
        this.block.settings.shadow = '';
      }
    },
    scroll( element, event ) {},

    sync_image_border( sync ) {
      this.block.settings.imageBorderSync = sync;
      if ( sync ) {
        this.block.settings.imageBorderLeft = this.block.settings.imageBorderTop;
        this.block.settings.imageBorderBottom = this.block.settings.imageBorderTop;
        this.block.settings.imageBorderRight = this.block.settings.imageBorderTop;
      }
    },
  },
  components: {
    ImageControl,
    ColorPicker,
    FontAwesomePicker,
    AlignControl,
    SliderControl,
    PaddingControl,
    FontControl,
    FontVariantControl,
    HelpTip,
    SpacingSectionControl,
  },
  props: {
    block: Object,
  },
};
</script>
