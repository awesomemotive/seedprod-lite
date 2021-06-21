<template>
  <div id="sp-global-design">
    <div id="sp-blocks-editing" class="sp-flex sp-items-center sp-px-4 sp-block-type-global">
      <div class="sp-flex-grow">
        <span class="sp-pb-1">{{txt_1}}</span>
        {{txt_2}}
      </div>
      <div class="sp-cursor-pointer" @click="goto_blocks" v-tooltip="{content:'Blocks',delay:{ show: 400, hide: 0 }}">
        <svg class="sp-w-5 sp-fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <circle cx="1.68164" cy="2.33057" r="1.5" />
          <circle cx="1.68164" cy="10.3306" r="1.5" />
          <circle cx="1.68164" cy="18.3306" r="1.5" />
          <circle cx="9.68164" cy="2.33057" r="1.5" />
          <circle cx="9.68164" cy="10.3306" r="1.5" />
          <circle cx="9.68164" cy="18.3306" r="1.5" />
          <circle cx="17.6816" cy="2.33057" r="1.5" />
          <circle cx="17.6816" cy="10.3306" r="1.5" />
          <circle cx="17.6816" cy="18.3306" r="1.5" />
        </svg>
      </div>
    </div>
    <h3
      class="sp-sidebar-headers"
      @click="
				section_1 = !section_1
			"
      :class="{
				seedprod_collaspe: !section_1}"
    >
      {{txt_25}}
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
    <transition name="seedprod">
      <div class="seedprod-sidebar-form-body" v-if="section_1">
        <div class="sp-form-group">
          <label>{{txt_3}}</label>

          <FontControl
            v-model="shared.settings.document.settings.headerFont"
            @change="load_header_font(shared.settings.document.settings.headerFont,shared.settings.document.settings.headerFontVariant)"
          />

          <FontVariantControl
            v-model="shared.settings.document.settings.headerFontVariant"
            :myfont="shared.settings.document.settings.headerFont"
            @change="load_header_font(shared.settings.document.settings.headerFont,shared.settings.document.settings.headerFontVariant)"
          />
        </div>
        <div class="sp-form-group">
          <label>{{txt_4}}</label>
          <FontControl
            v-model="shared.settings.document.settings.textFont"
            @change="load_font(shared.settings.document.settings.textFont,shared.settings.document.settings.textFontVariant)"
          />

          <FontVariantControl
            v-model="shared.settings.document.settings.textFontVariant"
            :myfont="shared.settings.document.settings.textFont"
            @change="load_font(shared.settings.document.settings.textFont,shared.settings.document.settings.textFontVariant)"
          />
        </div>

        <button
          @click="show_modal_typography = true"
          class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-text-neutral-80 sp-py-2.5 sp-px-5 sp-rounded sp-flex sp-items-center sp-mt-1 sp-text-sm sp-font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
            class="sp-w-4 sp-fill-current sp-mr-2"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <g>
                <g>
                  <path d="M2.5,4v3h5v12h3V7h5V4H2.5z M21.5,9h-9v3h3v7h3v-7h3V9z" />
                </g>
              </g>
            </g>
          </svg>{{txt_22}}
        </button>
      </div>
    </transition>
    <h3
      class="sp-sidebar-headers"
      @click="
				section_2 = !section_2
			"
      :class="{
				seedprod_collaspe: !section_2}"
    >
      {{txt_26}}
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
    <transition name="seedprod">
      <div class="seedprod-sidebar-form-body" v-if="section_2">
        <div class="sp-form-group">
          <ColorPickerSimple
            :label="txt_17"
            :color="shared.settings.document.settings.headerColor"
            v-model="shared.settings.document.settings.headerColor"
            @change="update_head_css()"
          />
        </div>
        <div class="sp-form-group">
          <ColorPickerSimple
            :label="txt_18"
            :color="shared.settings.document.settings.textColor"
            v-model="shared.settings.document.settings.textColor"
            @change="update_head_css()"
          />
        </div>
        <div class="sp-form-group">
          <ColorPickerSimple
            :label="txt_19"
            :color="shared.settings.document.settings.buttonColor"
            v-model="shared.settings.document.settings.buttonColor"
            @change="update_head_css()"
          />
        </div>

        <div class="sp-form-group">
          <ColorPickerSimple
            :label="txt_20"
            :color="shared.settings.document.settings.linkColor"
            v-model="shared.settings.document.settings.linkColor"
            @change="update_head_css()"
          />
        </div>

        <div class="sp-form-group">
          <ColorPickerSimple
            :label="txt_21"
            :color="shared.settings.document.settings.bgColor"
            v-model="shared.settings.document.settings.bgColor"
            @change="update_head_css()"
          />
        </div>

        <button
          @click="show_modal_colors = true"
          class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-text-neutral-80 sp-py-2.5 sp-px-5 sp-rounded sp-flex sp-items-center sp-mt-6 sp-text-sm sp-font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
            class="sp-w-4 sp-fill-current sp-mr-2"
          >
            <path
              d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"
            />
            <circle cx="6.5" cy="11.5" r="1.5" />
            <circle cx="9.5" cy="7.5" r="1.5" />
            <circle cx="14.5" cy="7.5" r="1.5" />
            <circle cx="17.5" cy="11.5" r="1.5" />
          </svg>{{txt_23}}
        </button>
      </div>
    </transition>
    <h3
      class="sp-sidebar-headers"
      @click="
				section_3 = !section_3
			"
      :class="{
				seedprod_collaspe: !section_3}"
    >
      {{txt_27}}
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
    <transition name="seedprod">
      <div class="seedprod-sidebar-form-body" v-if="section_3">
        <BackgroundControl :block="shared.settings.document" />

        <div class="sp-form-group" v-if="shared.settings.document.settings.bgImage">
          <label class="sp-mb-0">{{txt_5}}</label>
          <SliderControl
            v-model="shared.settings.document.settings.bgDimming"
            :min="0"
            :max="90"
            :step="5"
          />
        </div>

        <div class="sp-form-group">
          <label>Content Position</label>
          <select
            v-model="shared.settings.document.settings.contentPosition"
            class="sp-form-select"
          >
            <option value="1">Top Center</option>
            <option value="2">Top Left</option>
            <option value="3">Top Right</option>
            <option value="4">Center Center</option>
            <option value="5">Center Left</option>
            <option value="6">Center Right</option>
            <option value="7">Bottom Center</option>
            <option value="8">Bottom Left</option>
            <option value="9">Bottom Right</option>
          </select>
        </div>

        <div class="sp-flex sp-items-center sp-justify-between sp-form-group sp-pro-only" @click="feature='Video Background';showUpsellModal = true">
          <label class="sp-text-sm">{{txt_6}}</label>
          <toggle-button :width="45"  />
        </div>

        <div class="sp-flex sp-items-center sp-justify-between sp-form-group sp-pro-only" @click="feature='Slideshow Background';showUpsellModal = true">
          <label class="sp-text-sm">{{txt_33}}</label>
          <toggle-button :width="45"  />
        </div>

      </div>
    </transition>
    <h3
      class="sp-sidebar-headers"
      @click="
				section_4 = !section_4
			"
      :class="{
				seedprod_collaspe: !section_4}"
    >
      {{txt_28}}
      <span class="sp-cursor-pointer">
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
    <transition name="seedprod">
      <div class="seedprod-sidebar-form-body" v-if="section_4">
        <div class="sp-form-group">
          <label>{{txt_10}}</label>
          <textarea
            v-model.lazy="shared.settings.document.settings.customCss"
            class="sp-custom-css sp-form-textarea"
          ></textarea>
          <button
            @click="show_modal_customcss = true"
            class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-text-neutral-80 sp-py-2.5 sp-px-5 sp-rounded sp-flex sp-items-center sp-mt-3 sp-text-sm sp-font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              class="sp-w-4 sp-fill-current sp-mr-2"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
              />
            </svg>{{txt_24}}
          </button>
        </div>
      </div>
    </transition>
    <modal
      v-if="show_modal_customcss"
      @close="show_modal_customcss = false"
      class="sp-edit-custom-css-modal"
    >
      <div slot="body" class="sp-py-6 sp-px-10 sp-relative">
        <h3 class="sp-text-lg sp-font-bold sp-mb-6">{{txt_11}}</h3>
        <textarea
          v-model.lazy="shared.settings.document.settings.customCss"
          class="sp-custom-css sp-form-textarea"
        ></textarea>

        <button
          @click="show_modal_customcss = false"
          class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-text-neutral-80 sp-py-2.5 sp-px-5 sp-rounded sp-flex sp-items-center sp-mt-3 sp-text-sm sp-font-semibold"
        >{{txt_12}}</button>

        <button
          class="sp-text-neutral-40 sp-absolute sp-top-0 sp-right-0 sp-mt-2 sp-mr-2"
          @click="show_modal_customcss  = false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-6 sp-h-6"
          >
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </div>
      <h3 slot="header"></h3>
    </modal>
    <modal v-if="show_modal_colors" @close="show_modal_colors = false">
      <div slot="body" class="sp-flex">
        <div class="sp-modal-left sp-bg-neutral-5 sp-py-6 sp-px-10">
          <h3 class="sp-text-lg sp-font-bold sp-mb-8">{{txt_13}} <div class="sp-inline-block sp-bg-green sp-rounded sp-text-white sp-z-20 sp-py-1 sp-px-2 sp-text-12px sp-font-semibold  sp-ml-2">PRO</div></h3>
          <ul>
            <li
              @click="color_theme_cat = ''"
              class="sp-cursor-pointer sp-font-semibold sp-border-b sp-border-neutral-10 sp-py-4 sp-leading-none"
              :class="{'sp-text-primary': color_theme_cat == ''}"
            >
              <div class="sp-flex sp-items-center sp-justify-between">
                {{txt_29}}
                <svg
                  v-if="color_theme_cat == ''"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-6 sp-h-6"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
              </div>
            </li>
            <!-- <li
              @click="color_theme_cat = 'cat 1'"
              class="sp-cursor-pointer sp-font-semibold sp-border-b sp-border-neutral-10 sp-py-4 sp-leading-none"
              :class="{'sp-text-primary': color_theme_cat == 'cat 1'}"
            >
              <div class="sp-flex sp-items-center sp-justify-between">
                cat 1
                <svg
                  v-if="color_theme_cat == 'cat 1'"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-6 sp-h-6"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
              </div>
            </li>
            <li
              @click="color_theme_cat = 'cat 2'"
              class="sp-cursor-pointer sp-font-semibold sp-border-b sp-border-neutral-10 sp-py-4 sp-leading-none"
              :class="{'sp-text-primary': color_theme_cat == 'cat 2'}"
            >
              <div class="sp-flex sp-items-center sp-justify-between">
                Cat 2
                <svg
                  v-if="color_theme_cat == 'cat 2'"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-6 sp-h-6"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
              </div>
            </li>-->
          </ul>
        </div>
        <div class="sp-modal-right sp-bg-neutral-10 sp-flex-grow sp-py-5 sp-px-16 sp-relative sp-pro-only">
          <div class="sp-flex sp-justify-center sp-items-center sp-relative sp-mb-10">
            <span class="sp-text-neutral-40 sp-absolute sp-left-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-fill-current sp-w-6 sp-h-6"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                />
              </svg>
            </span>
            <input
              v-model="color_theme_search"
              :placeholder="txt_15"
              class="sp-form-input sp-w-full sp-pl-8"
            />
          </div>

          <div class="sp-flex sp-flex-wrap sp--mx-4">
            <div
              v-for="(f,i) in colorThemes"
              :key="i"
              @click="set_color_theme(i)"
              class="sp-mb-10 sp-w-1/3 sp-px-4 sp-text-center sp-cursor-pointer"
            >
              <div
                class="sp-bg-white sp-rounded-6px sp-p-2 sp-border-2 sp-border-white hover:sp-border-primary sp-relative"
                @mouseover="color_theme_hover = i"
                @mouseleave="color_theme_hover = false"
                style="max-width:220px"
              >
                <div class="sp-flex sp-items-center sp-justify-center">
                  <span
                    class="sp-rounded sp-border sp-border-neutral-20 sp-color-38-72"
                    :style="{ 'background-color': f.colors[0] }"
                  ></span>
                  <span
                    class="sp-rounded sp-border sp-border-neutral-20 sp-color-38-72"
                    :style="{ 'background-color': f.colors[1] }"
                  ></span>
                  <span
                    class="sp-rounded sp-border sp-border-neutral-20 sp-color-38-72"
                    :style="{ 'background-color': f.colors[2] }"
                  ></span>
                  <span
                    class="sp-rounded sp-border sp-border-neutral-20 sp-color-38-72"
                    :style="{ 'background-color': f.colors[3] }"
                  ></span>
                  <span
                    class="sp-rounded sp-border sp-border-neutral-20 sp-color-38-72"
                    :style="{ 'background-color': f.colors[4] }"
                  ></span>
                </div>

                <div
                  class="sp-bg-primary sp-p-1 sp-absolute sp-bottom-0 sp-right-0 sp-rounded-tl-md sp-text-white"
                  v-show="color_theme_hover === i"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-4 sp-h-4"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    />
                  </svg>
                </div>
              </div>

              <!-- <span
                class="sp-inline-block sp-pt-1 sp-text-xs sp-font-semibold sp-text-neutral-60"
              >{{ f.name }}</span>-->
            </div>
          </div>

          <button
            class="sp-text-neutral-40 sp-absolute sp-top-0 sp-right-0 sp-mt-2 sp-mr-2"
            @click="show_modal_colors = false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-6 sp-h-6"
            >
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </div>
      </div>
      <div slot="header"></div>
    </modal>

    <modal v-if="show_modal_typography" @close="show_modal_typography = false">
      <div slot="body" class="sp-flex">
        <div class="sp-modal-left sp-bg-neutral-5 sp-py-6 sp-px-10">
          <h3 class="sp-text-lg sp-font-bold sp-mb-8">{{txt_14}} <div class="sp-inline-block sp-bg-green sp-rounded sp-text-white sp-z-20 sp-py-1 sp-px-2 sp-text-12px sp-font-semibold  sp-ml-2">PRO</div></h3>
          <ul>
            <li
              @click="font_pairing_cat = ''"
              class="sp-cursor-pointer sp-font-semibold sp-border-b sp-border-neutral-10 sp-py-4 sp-leading-none"
              :class="{'sp-text-primary': font_pairing_cat == ''}"
            >
              <div class="sp-flex sp-items-center sp-justify-between">
                {{txt_30}}
                <svg
                  v-if="font_pairing_cat == ''"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-6 sp-h-6"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
              </div>
            </li>
            <!-- <li
              @click="font_pairing_cat = 'serif'"
              class="sp-cursor-pointer sp-font-semibold sp-border-b sp-border-neutral-10 sp-py-4 sp-leading-none"
              :class="{'sp-text-primary': font_pairing_cat == 'serif'}"
            >
              <div class="sp-flex sp-items-center sp-justify-between">
                {{txt_31}}
                <svg
                  v-if="font_pairing_cat == 'serif'"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-6 sp-h-6"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
              </div>
            </li>
            <li
              @click="font_pairing_cat = 'san-serif'"
              class="sp-cursor-pointer sp-font-semibold sp-border-b sp-border-neutral-10 sp-py-4 sp-leading-none"
              :class="{'sp-text-primary': font_pairing_cat == 'san-serif'}"
            >
              <div class="sp-flex sp-items-center sp-justify-between">
                {{txt_32}}
                <svg
                  v-if="font_pairing_cat == 'san-serif'"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-6 sp-h-6"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
              </div>
            </li>-->
          </ul>
        </div>
        <div class="sp-modal-right sp-bg-neutral-10 sp-flex-grow sp-py-5 sp-px-16 sp-relative sp-pro-only">
          <div class="sp-flex sp-justify-center sp-items-center sp-relative sp-mb-10">
            <span class="sp-text-neutral-40 sp-absolute sp-left-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-fill-current sp-w-6 sp-h-6"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                />
              </svg>
            </span>
            <input
              v-model="font_pairing_search"
              :placeholder="txt_16"
              class="sp-form-input sp-w-full sp-pl-8"
            />
          </div>

          <div class="sp-flex sp-flex-wrap sp--mx-4">
            <div
              v-for="(f,i) in fontPairings"
              :key="i"
              @click="set_pairing(i)"
              class="sp-mb-10 sp-w-1/2 sp-px-4 sp-text-center sp-cursor-pointer"
            >
              <div
                class="sp-bg-white sp-rounded-6px sp-border-2 sp-border-white hover:sp-border-primary sp-relative"
                @mouseover="font_pairing_hover = i"
                @mouseleave="font_pairing_hover = false"
              >
                <img
                  class="sp-border-none"
                  :src="shared.plugin_path + 'public/img/font-previews/'+f.id+'.png'"
                  :alt="'Font Paring'+f.id"
                />

                <div
                  class="sp-bg-primary sp-p-1 sp-absolute sp-bottom-0 sp-right-0 sp-rounded-tl-md sp-text-white"
                  v-show="font_pairing_hover === i"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-4 sp-h-4"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    />
                  </svg>
                </div>
              </div>
              <span
                class="sp-inline-block sp-pt-1 sp-text-xs sp-font-semibold sp-text-neutral-60"
              >{{ f.name }}</span>
            </div>
          </div>

          <button
            class="sp-text-neutral-40 sp-absolute sp-top-0 sp-right-0 sp-mt-2 sp-mr-2"
            @click="show_modal_typography = false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-6 sp-h-6"
            >
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </div>
      </div>
      <div slot="header"></div>
    </modal>
            <!-- Lite CTA -->
    <modal v-if="showUpsellModal" @close="showUpsellModal = false" class="sp-w-550px">
      <div slot="body" class="sp-px-10 sp-py-12 sp-text-neutral sp-relative">
          <button
          class="sp-text-neutral-40 hover:sp-text-neutral-60 sp-absolute sp-top-0 sp-right-0 sp-m-2"
          @click="showUpsellModal = false"
        > <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-6 sp-h-6"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            />
          </svg>
        </button>
        <LiteCTABuilder feature_source="global-design" :feature="feature" />
           </div>
      <h3 slot="header"></h3>
    </modal>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';
import HelpTip from '@/components/HelpTip.vue';
import ColorPickerSimple from '@/components/ColorPickerSimple.vue';
import ColorPicker from '@/components/ColorPicker.vue';
import FontAwesomePicker from '@/components/FontAwesomePicker.vue';
import FontControl from '@/components/FontControl.vue';
import FontVariantControl from '@/components/FontVariantControl.vue';
import SliderControl from '@/components/SliderControl.vue';
import ImageControl from '@/components/ImageControl.vue';
import BulletListOptions from '@/components/BulletListOptions.vue';
import BackgroundControl from '@/components/BackgroundControl.vue';
import draggable from 'vuedraggable';
import tinycolor from 'tinycolor2';
import Modal from '@/components/Modal.vue';
import _ from 'lodash';
import LiteCTABuilder from '@/components/LiteCTABuilder.vue';

export default {
  name: 'setupdesign',
  mixins: [ helpers ],
  data() {
    return {
      txt_1: __( 'Editing:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Global Settings', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Header Font', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Body Text Font', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Dim Background', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Video Background', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'YouTube URL', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'The video background will not be displayed on mobile devices or in the editor preview.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Play on auto-loop', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Enter your custom css below', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Edit Custom CSS', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Close', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Color Palettes', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Font Themes Library', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Search colors...', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Search fonts...', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Headers', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Buttons', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'Links', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'Background', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( 'Font Themes', process.env.VUE_APP_TEXTDOMAIN ),
      txt_23: __( 'Color Palettes', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'Expand Editor', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __( 'Fonts', process.env.VUE_APP_TEXTDOMAIN ),
      txt_26: __( 'Colors', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( 'Background', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( 'Custom CSS', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( 'All Palettes', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( 'All Themes', process.env.VUE_APP_TEXTDOMAIN ),
      txt_31: __( 'Serif', process.env.VUE_APP_TEXTDOMAIN ),
      txt_32: __( 'Sans Serif', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( 'Background Slideshow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_34: __( 'Slideshow Images', process.env.VUE_APP_TEXTDOMAIN ),
      txt_35: __( 'Add New Slide', process.env.VUE_APP_TEXTDOMAIN ),
      txt_36: __( 'The background slideshow will not be shown in the editor preview. The slides will only be displayed in the live preview.', process.env.VUE_APP_TEXTDOMAIN ),
      color_theme_hover: false,
      color_theme_cat: '',
      color_theme_search: '',
      font_pairing_hover: false,
      font_pairing_cat: '',
      font_pairing_search: '',
      show_modal_customcss: false,
      show_modal_typography: false,
      show_modal_colors: false,
      showUpsellModal: false,
      section_1: false,
      section_2: false,
      section_3: false,
      section_4: false,
      feature: '',
      shared: seedprod_store,
      font_pairings: [
        {
          id: 1,
          name: 'Roboto Slab / Open Sans',
          cat: 'serif',
          pairing: {
            headerFont: 'Roboto Slab',
            headerWeight: '500',
            bodyFont: 'Open Sans',
            bodyWeight: '400',
          },
        },
        {
          id: 2,
          name: 'Roboto Condensed / Vollkorn',
          cat: 'serif',
          pairing: {
            headerFont: 'Roboto Condensed',
            headerWeight: '700',
            bodyFont: 'Vollkorn',
            bodyWeight: '400',
          },
        },
        {
          id: 3,
          name: 'PT Sans Narrow / PT Sans',
          cat: 'serif',
          pairing: {
            headerFont: 'PT Sans Narrow',
            headerWeight: '400',
            bodyFont: 'PT Sans',
            bodyWeight: '400',
          },
        },
        {
          id: 4,
          name: 'Playfair Display / Lora',
          cat: 'serif',
          pairing: {
            headerFont: 'Playfair Display',
            headerWeight: '700',
            bodyFont: 'Lora',
            bodyWeight: '400',
          },
        },
        {
          id: 5,
          name: 'Cinzel Decorative / PT Serif',
          cat: 'serif',
          pairing: {
            headerFont: 'Cinzel Decorative',
            headerWeight: '700',
            bodyFont: 'PT Serif',
            bodyWeight: '400',
          },
        },
        {
          id: 6,
          name: 'Roboto Slab / Neuton',
          cat: 'serif',
          pairing: {
            headerFont: 'Roboto Slab',
            headerWeight: '400',
            bodyFont: 'Neuton',
            bodyWeight: '400',
          },
        },
        {
          id: 7,
          name: 'Oswald / Arvo',
          cat: 'serif',
          pairing: {
            headerFont: 'Oswald',
            headerWeight: '500',
            bodyFont: 'Arvo',
            bodyWeight: '400',
          },
        },
        {
          id: 8,
          name: 'Merriweather / Roboto',
          cat: 'serif',
          pairing: {
            headerFont: 'Merriweather',
            headerWeight: '400',
            bodyFont: 'Roboto',
            bodyWeight: '400',
          },
        },
        {
          id: 9,
          name: 'Old Standard TT / Merriweather',
          cat: 'serif',
          pairing: {
            headerFont: 'Old Standard TT',
            headerWeight: '400',
            bodyFont: 'Merriweather',
            bodyWeight: '400',
          },
        },
        {
          id: 10,
          name: 'Fjalla One / PT Serif',
          cat: 'serif',
          pairing: {
            headerFont: 'Fjalla One',
            headerWeight: '400',
            bodyFont: 'PT Serif',
            bodyWeight: '400',
          },
        },
        {
          id: 11,
          name: 'Work Sans / Crimson Text',
          cat: 'serif',
          pairing: {
            headerFont: 'Work Sans',
            headerWeight: '400',
            bodyFont: 'Crimson Text',
            bodyWeight: '400',
          },
        },
        {
          id: 12,
          name: 'Source Sans Pro / Open Sans',
          cat: 'serif',
          pairing: {
            headerFont: 'Source Sans Pro',
            headerWeight: '700',
            bodyFont: 'Open Sans',
            bodyWeight: '400',
          },
        },
        {
          id: 13,
          name: 'Alegreya / Alegreya Sans',
          cat: 'serif',
          pairing: {
            headerFont: 'Alegreya',
            headerWeight: '700',
            bodyFont: 'Alegreya Sans',
            bodyWeight: '400',
          },
        },
        {
          id: 14,
          name: 'Vollkorn / Roboto',
          cat: 'serif',
          pairing: {
            headerFont: 'Vollkorn',
            headerWeight: '400italic',
            bodyFont: 'Roboto',
            bodyWeight: '400',
          },
        },
        {
          id: 15,
          name: 'Playfair Display / Libre Baskerville',
          cat: 'serif',
          pairing: {
            headerFont: 'Playfair Display',
            headerWeight: '400',
            bodyFont: 'Libre Baskerville',
            bodyWeight: '400',
          },
        },
        {
          id: 16,
          name: 'Fjalla One / Lora',
          cat: 'serif',
          pairing: {
            headerFont: 'Fjalla One',
            headerWeight: '400',
            bodyFont: 'Lora',
            bodyWeight: '400',
          },
        },
        {
          id: 17,
          name: 'Squada One / Libre Baskerville',
          cat: 'serif',
          pairing: {
            headerFont: 'Squada One',
            headerWeight: '400',
            bodyFont: 'Libre Baskerville',
            bodyWeight: '400',
          },
        },
        {
          id: 18,
          name: 'Poppins / Roboto',
          cat: 'serif',
          pairing: {
            headerFont: 'Poppins',
            headerWeight: '400',
            bodyFont: 'Roboto',
            bodyWeight: '400',
          },
        },
      ],

      // header, text, button, link , background
      color_themes: [
        {
          name: '1',
          cat: 'cat 1',
          colors: [ '#222222', '#222222', '#0074e4', '#0074e4', '#ffffff' ],
        },
        {
          name: 'Default Dark',
          cat: 'cat 1',
          colors: [ '#ffffff', '#ffffff', '#0074e4', '#0074e4', '#222222' ],
        },
        {
          name: '3',
          cat: 'cat 1',
          colors: [ '#ffffff', '#ffffff', '#f64c72', '#f64c72', '#2f2fa2' ],
        },
        {
          name: '4',
          cat: 'cat 1',
          colors: [ '#323b3c', '#516163', '#cce8e5', '#323b3c', '#ffffff' ],
        },
        {
          name: '5',
          cat: 'cat 1',
          colors: [ '#2B292B', '#403C34', '#AC8435', '#AC8435', '#F7F2E9' ],
        },
        {
          name: '6',
          cat: 'cat 1',
          colors: [ '#CC4425', '#3E4147', '#CC4425', '#CC4425', '#EAECEF' ],
        },
        {
          name: '7',
          cat: 'cat 1',
          colors: [ '#111111', '#333333', '#F8CA00', '#F8CA00', '#FFFFFF' ],
        },
        {
          name: '8',
          cat: 'cat 1',
          colors: [ '#3FA291', '#42393B', '#D56E20', '#D56E20', '#FFFFFF' ],
        },
        {
          name: '9',
          cat: 'cat 1',
          colors: [ '#340410', '#340410', '#E70D3D', '#E70D3D', '#FCEAEE' ],
        },
        {
          name: '10',
          cat: 'cat 1',
          colors: [ '#ffffff', '#edf5e1', '#053868', '#053868', '#5cdb95' ],
        },
        {
          name: '11',
          cat: 'cat 1',
          colors: [ '#66fcf1', '#c5c6c7', '#45a29e', '#45a29e', '#0b0c10' ],
        },
        {
          name: '12',
          cat: 'cat 1',
          colors: [ '#2c363f', '#2c363f', '#e75a7c', '#BBC7A4', '#f2f5ea' ],
        },
        {
          name: '13',
          cat: 'cat 1',
          colors: [ '#222E50', '#222E50', '#E9D985', '#439A86', '#BCD8C1' ],
        },
        {
          name: '14',
          cat: 'cat 1',
          colors: [ '#440381', '#440381', '#EC368D', '#51E5FF', '#FFD6C0' ],
        },
        {
          name: '15',
          cat: 'cat 1',
          colors: [ '#742A2A', '#742A2A', '#E53E3E', '#E53E3E', '#FFF5F5' ],
        },
        {
          name: '16',
          cat: 'cat 1',
          colors: [ '#7B341E', '#7B341E', '#DD6B20', '#DD6B20', '#FFFAF0' ],
        },
        {
          name: '17',
          cat: 'cat 1',
          colors: [ '#744210', '#744210', '#D69E2E', '#D69E2E', '#FFFFF0' ],
        },
        {
          name: '18',
          cat: 'cat 1',
          colors: [ '#22543D', '#22543D', '#38A169', '#38A169', '#F0FFF4' ],
        },
        {
          name: '19',
          cat: 'cat 1',
          colors: [ '#234E52', '#234E52', '#319795', '#319795', '#E6FFFA' ],
        },
        {
          name: '20',
          cat: 'cat 1',
          colors: [ '#2A4365', '#2A4365', '#3182CE', '#3182CE', '#EBF8FF' ],
        },
        {
          name: '21',
          cat: 'cat 1',
          colors: [ '#3C366B', '#3C366B', '#5A67D8', '#5A67D8', '#EBF4FF' ],
        },
        {
          name: '22',
          cat: 'cat 1',
          colors: [ '#44337A', '#44337A', '#805AD5', '#805AD5', '#FAF5FF' ],
        },
        {
          name: '23',
          cat: 'cat 1',
          colors: [ '#702459', '#702459', '#D53F8C', '#D53F8C', '#FFF5F7' ],
        },
        {
          name: '24',
          cat: 'cat 1',
          colors: [ '#1A202C', '#1A202C', '#718096', '#718096', '#F7FAFC' ],
        },
      ],
    };
  },

  methods: {
    set_pairing( i ) {
      this.feature = 'Font Themes Library';
      this.showUpsellModal = true;
      this.show_modal_typography = false;

    },
    set_color_theme( i ) {
      this.feature = 'Color Palettes Library';
      this.showUpsellModal = true;
      this.show_modal_colors = false;

    },
    goto_blocks() {
      this.$router.push({ name: 'setup_block_options' });
    },
    load_header_font( font = '', variant = '' ) {

      //console.log("load font");
      this.load_font( font, variant );
      this.update_head_css();
    },
  },
  watch: {

    // whenever question changes, this function will run
    // "shared.settings.document.settings.bgImage": function (n, o) {
    //   this.update_head_css();
    // },
    // "shared.settings.document.bgGradient.color1": function (n, o) {
    //   this.update_head_css();
    // },
    // "shared.settings.document.bgGradient.color2": function (n, o) {
    //   this.update_head_css();
    // },
    // "shared.settings.document.settings.useSlideshowImgs": function (n, o) {
    //   if (n === undefined || n.length == 0) {
    //   }else{
    //     if(this.shared.settings.document.settings.bgImage == ''){
    //       //if bg image does not exitst make slideshow first image default bg
    //       this.shared.settings.document.settings.bgImage = n[0];
    //     }
    //   }
    // },
    'shared.settings.document.settings.customCss': function( n, o ) {
      this.update_head_css();
    },
  },
  computed: {
    colorThemes: function() {
      let self = this;
      return this.color_themes.filter( function( u ) {
        if ( '' != self.color_theme_cat ) {

          //console.log(self.color_theme_cat);
          return (
            u.cat == self.color_theme_cat &&
            u.name.toLowerCase().includes( self.color_theme_search.toLowerCase() )
          );
        } else {
          return u.name
            .toLowerCase()
            .includes( self.color_theme_search.toLowerCase() );
        }
      });
    },
    fontPairings: function() {
      let self = this;
      return this.font_pairings.filter( function( u ) {
        if ( '' != self.font_pairing_cat ) {

          //console.log(self.font_pairing_cat);
          return (
            u.cat == self.font_pairing_cat &&
            u.name
              .toLowerCase()
              .includes( self.font_pairing_search.toLowerCase() )
          );
        } else {
          return u.name
            .toLowerCase()
            .includes( self.font_pairing_search.toLowerCase() );
        }
      });
    },
  },

  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.document, function( value, key ) {
      self.set_default_val( self.shared.settings.document.settings, key, value );
    });
  },

  components: {
    ColorPickerSimple,
    ColorPicker,
    FontAwesomePicker,
    HelpTip,
    FontControl,
    FontVariantControl,
    ImageControl,
    BulletListOptions,
    Modal,
    SliderControl,
    BackgroundControl,
    draggable,
    LiteCTABuilder,
  },
};
</script>
