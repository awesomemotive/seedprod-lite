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
          <path d="M0 0h24v24H0z" fill="none" /></svg
        >{{ txt_13 }}
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
        </svg>{{txt_37}}
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
          /></svg
        >{{ txt_14 }}
      </div>
    </div>
    <!-- Content -->

    <div v-if="view == 1">
      <h3
        class="sp-sidebar-headers"
        @click="section_1 = !section_1"
        :class="{
          seedprod_collaspe: !section_1
        }"
      >
        {{ txt_32 }}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
              'sp-hidden': !section_1
            }"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
              'sp-hidden': section_1
            }"
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
                <div
                  class="sp-flex sp-items-center sp-border sp-border-neutral-20 sp-rounded-md focus-within:sp-border-neutral-80"
                >
                  <span
                    v-text="carousel_label(item, index)"
                    class="sp-form-input sp-border-none sp-drag-drop sp-cursor-move sp-truncate"
                    style="width: 210px"
                    @click="show_settings(index)"
                  ></span>
                </div>

                <button
                  v-tooltip="{
                    content: txt_34 ,
                    delay: { show: 1500, hide: 0 }
                  }"
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
                  v-tooltip="{
                    content: txt_35,
                    delay: { show: 1500, hide: 0 }
                  }"
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
                <!--
                <div class="sp-form-group">
                  <div>
                    <label>{{ txt_15 }}</label>
                  </div>
                  <editor
                    v-model="item.txt"
                    :init="{
                      height: 100,
                      branding: false,
                      menubar: false,
                      paste_as_text: true,
                      force_br_newlines: true,
                      force_p_newlines: false,
                      forced_root_block: '',
                      plugins: [
                        'charmap,colorpicker,hr,lists,paste,tabfocus,textcolor,fullscreen,wordpress,wpautoresize,wpeditimage,wpemoji,wpgallery,wplink,wptextpattern'
                      ],

                      toolbar1:
                        'bold,italic,underline,strikethrough,link,wp_adv',
                      toolbar2: 'forecolor,backcolor'
                    }"
                  ></editor>
                </div>
                -->
                <div class="sp-form-group">
                  <label>{{ txt_16 }}</label>
                  <ImageControl v-model="item.img" :block="block" :prefix="'img_'+index"/>
                </div>

                <div class="sp-form-group">
                  <label>{{ txt_18 }}</label>
                  <input
                    type="text"
                    v-model="item.name"
                    class="sp-form-input"
                  />
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
            </svg>
            {{ txt_17 }}
          </button>
        </div>

        <!--
        <div
          class="sp-form-group sp-flex sp-justify-between sp-items-center sp-mt-4"
        >
          <label>{{ txt_30 }}</label>
          <div
            class="sp-bg-neutral-5 sp-flex sp-items-center sp-justify-center"
          >
            <toggle-button
              :width="40"
              :sync="true"
              style="margin-bottom: 0"
              v-model="block.settings.commentBubble"
            />&nbsp;
            <span
              v-if="block.settings.commentBubble"
              class="sp-text-11px sp-uppercase sp-pl-1 sp-font-bold"
              >{{ txt_24 }}</span
            >
            <span
              v-else
              class="sp-text-11px sp-uppercase sp-text-neutral-40 sp-pl-1 sp-font-bold"
              >{{ txt_25 }}</span
            >
          </div>
        </div>
        -->
      </div>
      <h3
        class="sp-sidebar-headers"
        @click="section_5 = !section_5"
        :class="{
          seedprod_collaspe: !section_5
        }"
      >
        {{ txt_31 }}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
              'sp-hidden': !section_5
            }"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
              'sp-hidden': section_5
            }"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>
      <div class="seedprod-sidebar-action-body" v-if="section_5">
        <div class="sp-form-group sp-flex sp-justify-between sp-items-center">
          <label>{{ txt_20 }}</label>
          <div class="sp-flex sp-items-center">
            <button
              @click="block.settings.navColor = 'd'"
              class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-neutral-80 sp-py-2 sp-px-3 sp-rounded sp-flex sp-items-center sp-text-xs sp-font-semibold sp-leading-none sp-mr-1 sp-rounded-full"
              :class="{ 'sp-active': block.settings.navColor == 'd' }"
            >
              {{ txt_21 }}
            </button>
            <button
              @click="block.settings.navColor = 'l'"
              class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-neutral-80 sp-py-2 sp-px-3 sp-rounded sp-flex sp-items-center sp-text-xs sp-font-semibold sp-leading-none sp-rounded-full"
              :class="{ 'sp-active': block.settings.navColor == 'l' }"
            >
              {{ txt_22 }}
            </button>
          </div>
        </div>

        <div
          class="sp-form-group sp-flex sp-justify-between sp-items-center sp-mt-4"
        >
          <label>{{ txt_26 }}</label>
          <div
            class="sp-bg-neutral-5 sp-flex sp-items-center sp-justify-center"
          >
            <toggle-button
              :width="40"
              :sync="true"
              style="margin-bottom: 0"
              v-model="block.settings.autoPlay"
            />&nbsp;
            <span
              v-if="block.settings.autoPlay"
              class="sp-text-11px sp-uppercase sp-pl-1 sp-font-bold"
              >{{ txt_24 }}</span
            >
            <span
              v-else
              class="sp-text-11px sp-uppercase sp-text-neutral-40 sp-pl-1 sp-font-bold"
              >{{ txt_25 }}</span
            >
          </div>
        </div>
                <div
          class="sp-form-group sp-flex sp-items-center sp-justify-between sp-mt-4"
        >
          <label>{{ txt_28 }}</label>
          <div class="sp-flex sp-items-center">
            <input
              type="number"
              v-model="block.settings.speed"
              class="sp-form-input sp-w-16"
            />
            <span class="sp-text-sm">&nbsp;{{ txt_29 }}</span>
          </div>
        </div>

        <div class="sp-form-group sp-flex sp-justify-between sp-items-center sp-mt-4">
          <label>{{ txt_36 }}</label>
          <div
            class="sp-bg-neutral-5 sp-flex sp-items-center sp-justify-center"
          >
            <toggle-button
              :width="40"
              :sync="true"
              style="margin-bottom:0"
              v-model="block.settings.showCaption"
            />&nbsp;
            <span
              v-if="block.settings.showCaption"
              class="sp-text-11px sp-uppercase sp-pl-1 sp-font-bold"
              >{{ txt_24 }}</span
            >
            <span
              v-else
              class="sp-text-11px sp-uppercase sp-text-neutral-40 sp-pl-1 sp-font-bold"
              >{{ txt_25 }}</span
            >
          </div>
        </div>

        <div class="sp-form-group">
          <label>{{ txt_6 }}</label>
          <AlignControl v-model="block.settings.captionalign" icons="alt" />
        </div>


      </div>
    </div>


    <!-- Templates -->
    <div v-if="view == 2" class="sp-flex sp-items-center sp-flex-col sp-pb-4">
      <div
        class="sp-uppercase sp-text-12px sp-font-semibold sp-text-neutral-60 sp-mt-2"
      >{{txt_61}}</div>

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
        @click="section_4 = !section_4"
        :class="{
          seedprod_collaspe: !section_4
        }"
      >
        Styles
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
              'sp-hidden': !section_4
            }"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
              'sp-hidden': section_4
            }"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>
      <div class="seedprod-sidebar-action-body" v-if="section_4">
        <!--
        <div class="sp-form-group">
          <TypographyControl :block="block" />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_11"
            :color="block.settings.textColor"
            v-model="block.settings.textColor"
          />
        </div>
        -->
        <div class="sp-form-group">
          <TypographyControl :block="block" prefix="caption" />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_12"
            :color="block.settings.captionColor"
            v-model="block.settings.captionColor"
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
        {{txt_38}}
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
          <label>{{txt_39}}</label>
          <select v-model="block.settings.shadow" class="sp-form-select">
            <option value>{{txt_40}}</option>
            <option value="1">{{txt_41}}</option>
            <option value="2">{{txt_42}}</option>
            <option value="3">{{txt_43}}</option>
            <option value="4">{{txt_44}}</option>
            <option value="5">{{txt_45}}</option>
            <option value="6">{{txt_46}}</option>
            <option value="7">{{txt_47}}</option>
          </select>
        </div>
      </div>

      <!-- Border -->
      <h3
        class="sp-sidebar-headers"
        @click="
				section_6 = !section_6
			"
        :class="{
				seedprod_collaspe: !section_6}"
      >
        {{txt_53}}
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
          <label>{{txt_48}}</label>
          <SliderControl v-model="block.settings.imageBorderRadius" :min="0" :max="100" :step="1" />
        </div>
        <div class="sp-form-group">
          <label>{{txt_49}}</label>
          <select v-model="block.settings.imageBorderStyle" class="sp-form-select">
            <option value="solid">{{txt_50}}</option>
            <option value="dotted">{{txt_51}}</option>
            <option value="dashed">{{txt_52}}</option>
          </select>
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_54"
            :color="block.settings.imageBorderColor"
            v-model="block.settings.imageBorderColor"
          />
        </div>
        <div class="sp-form-group">
          <label>{{txt_55}}</label>
          <div v-if="block.settings.imageBorderSync === false" class="sp-flex sp-items-center">
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-tr-none sp-rounded-br-none"
              />
              {{txt_57}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderRight"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
              />
              {{txt_58}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderBottom"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
              />
              {{txt_59}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderLeft"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-rounded-tl-none sp-rounded-bl-none"
              />
              {{txt_60}}
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
              {{txt_57}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
              />
              {{txt_58}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
              />
              {{txt_59}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-rounded-tl-none sp-rounded-bl-none"
              />
              {{txt_60}}
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
          <label>{{txt_56}}</label>
          <SliderControl v-model="block.settings.imagePadding" :min="0" :max="50" :step="1" />
        </div>
      </div>







      <!-- <div class="sp-form-group">
        <label>{{txt_10}}</label>
        <ColorPicker :color="block.settings.bgColor" v-model="block.settings.bgColor" />
      </div>-->
      <SpacingSectionControl :block="block" />
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { helpers } from '../mixins/helpers.js';
import Editor from '@tinymce/tinymce-vue';
import ColorPicker from '@/components/ColorPicker.vue';
import FontAwesomePicker from '@/components/FontAwesomePicker.vue';
import AlignControl from '@/components/AlignControl.vue';
import SliderControl from '@/components/SliderControl.vue';
import FontControl from '@/components/FontControl.vue';
import FontVariantControl from '@/components/FontVariantControl.vue';
import PaddingControl from '@/components/PaddingControl.vue';
import HelpTip from '@/components/HelpTip.vue';
import TypographyControl from '@/components/TypographyControl.vue';
import IconPicker from '@/components/IconPicker.vue';
import ImageControl from '@/components/ImageControl.vue';
import SpacingSectionControl from '@/components/SpacingSectionControl.vue';
import { __ } from '@wordpress/i18n';

export default {
  name: 'ImageCarouselOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      current_index: false,
      showsettings: false,
      txt_1: __( 'Type', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Image', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Icon', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( '', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Caption Align', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Caption Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Content', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Image', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Add Images', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Caption', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Title', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'Navigation Color Mode', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'Dark', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( 'Light', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'Yes', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __( 'No', process.env.VUE_APP_TEXTDOMAIN ),
      txt_26: __( 'AutoPlay', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( 'Pause On Hover', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( 'Autoplay Speed', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( 'seconds', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( 'Enable Comment Bubble', process.env.VUE_APP_TEXTDOMAIN ),
      txt_31: __( 'Carousel Settings', process.env.VUE_APP_TEXTDOMAIN ),
      txt_32: __( 'Carousel Images', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( 'Image', process.env.VUE_APP_TEXTDOMAIN ),
      txt_34: __( 'Duplicate', process.env.VUE_APP_TEXTDOMAIN ),
      txt_35: __( 'Delete', process.env.VUE_APP_TEXTDOMAIN ),
      txt_36: __( 'Show Caption', process.env.VUE_APP_TEXTDOMAIN ),
      txt_37: __( 'Templates', process.env.VUE_APP_TEXTDOMAIN ),
      txt_38: __( 'Slider Image Styles', process.env.VUE_APP_TEXTDOMAIN ),
      txt_39: __( 'Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_40: __( 'None', process.env.VUE_APP_TEXTDOMAIN ),
      txt_41: __( 'Hairline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_42: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_43: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_44: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_45: __( 'X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_46: __( '2X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_47: __( 'Bottom Drop Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_48: __( 'Border Radius', process.env.VUE_APP_TEXTDOMAIN ),
      txt_49: __( 'Border Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_50: __( 'Solid', process.env.VUE_APP_TEXTDOMAIN ),
      txt_51: __( 'Dotted', process.env.VUE_APP_TEXTDOMAIN ),
      txt_52: __( 'Dashed', process.env.VUE_APP_TEXTDOMAIN ),
      txt_53: __( 'Image Border', process.env.VUE_APP_TEXTDOMAIN ),
      txt_54: __( 'Border Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_55: __( 'Border Width', process.env.VUE_APP_TEXTDOMAIN ),
      txt_56: __( 'Image Whitespace Padding', process.env.VUE_APP_TEXTDOMAIN ),
      txt_57: __( 'Top', process.env.VUE_APP_TEXTDOMAIN ),
      txt_58: __( 'Right', process.env.VUE_APP_TEXTDOMAIN ),
      txt_59: __( 'Bottom', process.env.VUE_APP_TEXTDOMAIN ),
      txt_60: __( 'Left', process.env.VUE_APP_TEXTDOMAIN ),
      txt_61: __( 'Choose Your Style', process.env.VUE_APP_TEXTDOMAIN ),
      view: 1,
      section_1: true,
      section_2: false,
      section_3: false,
      section_4: true,
      section_5: false,
      section_6: false,
      shared: seedprod_store,
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.feature, function( value, key ) {
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
    sync_image_border( sync ) {
      this.block.settings.imageBorderSync = sync;
      if ( sync ) {
        this.block.settings.imageBorderLeft = this.block.settings.imageBorderTop;
        this.block.settings.imageBorderBottom = this.block.settings.imageBorderTop;
        this.block.settings.imageBorderRight = this.block.settings.imageBorderTop;
      }
    },
    set_tag( tag ) {
      this.shared.is_moving = true;
      this.block.settings.tag = tag;
      this.shared.is_moving = false;
    },
    sync_align( cmd, el ) {

      // console.log(cmd);
      // console.log(el.queryCommandState(cmd.command));
      if (
        'JustifyLeft' == cmd.command &&
        false === el.queryCommandState( cmd.command )
      ) {

        //console.log('left');
        //el.execCommand("JustifyLeft",false);
        this.block.settings.align = 'left';
      }
      if (
        'JustifyRight' == cmd.command &&
        false === el.queryCommandState( cmd.command )
      ) {

        //console.log('right');
        //el.execCommand("JustifyRight",false);
        this.block.settings.align = 'right';
      }
      if (
        'JustifyCenter' == cmd.command &&
        false === el.queryCommandState( cmd.command )
      ) {

        //console.log('center');
        //el.execCommand("JustifyCenter",false);
        this.block.settings.align = 'center';
      }
      if ( false === el.queryCommandState( cmd.command ) ) {

        //this.block.settings.align = "";
      }
    },
    carousel_label( item, index ) {
      if ( '' != item.name ) {
        return item.name;
      } else {
        return this.txt_33 + ' ' + ( index + 1 );
      }
    },
    show_settings( index ) {

      //console.log(index);
      this.current_index = index;
      if ( this.showsettings !== index ) {
        this.showsettings = index;
      } else {
        this.showsettings = false;
      }
    },
    add_item() {

      //console.log(lodash.last(this.block.settings.items));
      let lastitem = lodash.last( this.block.settings.items );
      if ( lastitem === undefined ) {
        lastitem = {};
        lastitem.icon = '';
      }

      //console.log(lastitem);
      let index = this.block.settings.items.push({
        img: '',

        //txt: this.txt_33 + ' ' + ( parseInt( this.block.settings.items.length ) + 1 ),
        name: '',

        //title: 'CEO',
      });
      this.show_settings( index - 1 );
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
    ImageControl,
    ColorPicker,
    FontAwesomePicker,
    AlignControl,
    SliderControl,
    FontControl,
    FontVariantControl,
    HelpTip,
    Editor,
    PaddingControl,
    TypographyControl,
    IconPicker,
    SpacingSectionControl,
  },
  props: {
    block: Object,
  },
};
</script>
