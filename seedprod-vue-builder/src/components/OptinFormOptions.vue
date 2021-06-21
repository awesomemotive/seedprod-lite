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
          <draggable :list="block.settings.items" handle=".sp-drag-drop">
            <div
              v-for="(item, index) in block.settings.items"
              :key="index"
              class="sp-mb-3"
              @mouseover="current_index = index"
              @mouseleave="current_index = false"
            >
              <div class="focus-within:sp-border-neutral-80 sp-rounded sp-mb-4">
                <span class="sp-flex sp-items-center sp-border sp-border-neutral-20 sp-rounded">
                  <span
                    v-text="item.txt"
                    class="sp-inline-block sp-w-full sp-form-input sp-border-none sp-rounded-tr-none sp-rounded-br-none sp-cursor-move sp-drag-drop"
                  ></span>

                  <button
                    v-if="item.display === true && item.type != 'email'"
                    class="sp-form-input sp-rounded-none sp-h-40px sp-text-neutral-40 hover:sp-text-neutral-80 sp-outline-none sp-border-r-0 sp-border-t-0 sp-border-b-0 focus:sp-border-neutral-20"
                    @click="toggle_dislay(item)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="sp-fill-current sp-w-5 sp-h-5"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path
                        d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"
                      />
                    </svg>
                  </button>
                  <button
                    v-else-if="item.type != 'email'"
                    class="sp-form-input sp-rounded-none sp-h-40px sp-text-neutral-40 hover:sp-text-neutral-80 sp-outline-none sp-border-r-0 sp-border-t-0 sp-border-b-0 focus:sp-border-neutral-20"
                    @click="toggle_dislay(item)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="sp-fill-current sp-w-5 sp-h-5"
                    >
                      <path
                        d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                        fill="none"
                      />
                      <path
                        d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"
                      />
                    </svg>
                  </button>
                  <button
                    class="sp-form-input sp-rounded-tl-none sp-rounded-bl-none sp-h-40px sp-text-neutral-40 hover:sp-text-neutral-80 sp-outline-none sp-border-t-0 sp-border-b-0 sp-border-r-0 focus:sp-border-neutral-20"
                    :class="{'sp-text-neutral-80': showsettings === index}"
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
                </span>
                <div
                  v-if="showsettings === index"
                  class="sp-bg-neutral-10 sp-rounded-6px sp-p-2 sp-w-full sp-mt-1"
                >
                  <div class="sp-form-group">
                    <div>
                      <label>{{txt_10}}</label>
                    </div>
                    <input type="text" v-model="item.label" class="sp-form-input" />

                    <div class="sp-form-group sp-mt-2">
                      <label>{{txt_11}}</label>
                      <SliderControl v-model="item.width" :min="10" :max="100" :step="1" />
                    </div>
                  </div>

                  <div
                    v-if="item.type == 'name'"
                    class="sp-flex sp-items-center sp-justify-between sp-mt-4 sp-mb-3"
                  >
                    <label class="sp-text-sm">{{txt_12}}</label>
                    <toggle-button :width="45" v-model="item.required" />
                  </div>
                </div>
              </div>
            </div>
          </draggable>
        </div>

        <div class="sp-form-group">
          <label>{{txt_13}}</label>
          <select v-model="block.settings.btnSize" class="sp-form-select" @change="update_btn_size">
            <!-- <option value="1">{{txt_14}}</option> -->
            <option value="2">{{txt_15}}</option>
            <option value="3">{{txt_16}}</option>
            <option value="4">{{txt_17}}</option>
            <!-- <option value="5">{{txt_18}}</option>
            <option value="6">{{txt_19}}</option>-->
          </select>
        </div>

        <div class="sp-form-group">
          <label>{{txt_20}}</label>
          <AlignControl v-model="block.settings.align" icons="alt" />
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
        {{txt_5}}
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
        <div class="sp-form-group" :class="{ input: true, 'has-error': errors.has('btnTxt') }">
          <div>
            <label>{{txt_51}}</label>
          </div>
          <input
            :name="'btnTxt'"
            type="text"
            v-model="block.settings.btnTxt"
            class="sp-form-input"
            v-validate="'required'"
            data-vv-as="Button Text"
          />
          <span
            v-show="errors.has('btnTxt')"
            class="help-block has-error"
          >{{ errors.first("btnTxt") }}</span>
        </div>

        <div class="sp-form-group">
          <label>{{txt_11}}</label>
          <SliderControl v-model="block.settings.btnWidth" :min="10" :max="100" :step="1" />
        </div>

        <!-- <div class="sp-form-group">
          <div>
            <label>{{txt_21}}</label>
          </div>
          <input type="text" v-model="block.settings.btnSubTxt" class="sp-form-input" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_20}}</label>
          <AlignControl v-model="block.settings.align" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_22}}</label>
          <select
            v-model="block.settings.inputSize"
            class="sp-form-select"
            @change="update_input_size"
          >
            <option value="1">{{txt_14}}</option>
            <option value="2">{{txt_15}}</option>
            <option value="3">{{txt_16}}</option>
            <option value="4">{{txt_17}}</option>
            <option value="5">{{txt_18}}</option>
            <option value="6">{{txt_19}}</option>
          </select>
        </div>-->

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_39"
            :color="block.settings.bgColor"
            v-model="block.settings.bgColor"
          />
        </div>
      </div>

      <!-- Success Message -->

      <h3
        class="sp-sidebar-headers"
        @click="
				section_6 = !section_6
			"
        :class="{
				seedprod_collaspe: !section_6}"
      >
        {{txt_6}}
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
          <label>{{txt_23}}</label>
          <select v-model="block.settings.action" class="sp-form-select">
            <option value="1">{{txt_24}}</option>
            <option value="2">{{txt_25}}</option>
          </select>
        </div>
        <div class="sp-form-group" v-if="block.settings.action == '1'">
          <div>
            <label>{{txt_26}}</label>
          </div>

          <editor
            v-model="block.settings.thankyouTxt"
            :init="{
         height: 200,
         branding: false,
         menubar: false,
         plugins: [
           'link'
         ],
         toolbar:
           'bold,italic,underline,strikethrough,link,alignleft,aligncenter,alignright'
       }"
          ></editor>
        </div>

        <div class="sp-form-group" v-if="block.settings.action == '2'">
          <div>
            <label>{{txt_27}}</label>
          </div>
          <input type="text" v-model="block.settings.redirectUrl" class="sp-form-input" />
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
          :placeholder="txt_43"
        />
      </div>
      <div class="sp-template-preview-dark" @click="apply_template(1)">
        <input
          type="text"
          class="sp-form-input sp-w-full sp-border-none"
          style="width:80%"
          :placeholder="txt_44"
        />
      </div>
      <div class="sp-template-preview" @click="apply_template(2)">
        <input
          type="text"
          class="sp-form-input sp-w-full sp-optin-block-template-2"
          style="width:80%"
          :placeholder="txt_45"
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
          :placeholder="txt_47"
        />
      </div>
      <div class="sp-template-preview" @click="apply_template(5)">
        <input
          type="text"
          class="sp-form-input sp-w-full sp-optin-block-template-5"
          style="width:80%"
          :placeholder="txt_48"
        />
      </div>
      <div class="sp-template-preview-dark" @click="apply_template(6)">
        <input
          type="text"
          class="sp-form-input sp-w-full sp-optin-block-template-6"
          style="width:80%"
          :placeholder="txt_49"
        />
      </div>
      <div class="sp-template-preview-dark" @click="apply_template(7)">
        <input
          type="text"
          class="sp-form-input sp-w-full sp-optin-block-template-7"
          style="width:80%"
          :placeholder="txt_50"
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
        {{txt_7}}
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
          <!-- <TypographyControl :block="block" /> -->

          <label>{{txt_29}}</label>
          <!-- Font -->

          <FontControl
            v-model="block.settings.font"
            @change="load_font(block.settings.font,block.settings.fontVariant)"
          />

          <FontVariantControl
            v-model="block.settings.fontVariant"
            :myfont="block.settings.font"
            @change="load_font(block.settings.font,block.settings.fontVariant)"
          />
        </div>

        <div class="sp-form-group">
          <label>{{txt_30}}</label>
          <SliderControl v-model="block.settings.borderRadius" :min="0" :max="100" :step="1" />
        </div>

        <div class="sp-form-group">
          <label class="sp-inline-flex sp-items-center">
            <span class="sp-mr-2 sp-text-sm">{{txt_31}}</span>
            <input
              type="checkbox"
              class="sp-form-checkbox sp-h-4 sp-w-4 sp-text-primary"
              v-model="block.settings.gap"
            />
          </label>
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
        {{txt_8}}
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
          <ColorPicker
            :label="txt_40"
            :color="block.settings.fieldBGColor"
            v-model="block.settings.fieldBGColor"
          />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_41"
            :color="block.settings.fieldTextColor"
            v-model="block.settings.fieldTextColor"
          />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_42"
            :color="block.settings.fieldBorderColor"
            v-model="block.settings.fieldBorderColor"
          />
        </div>

        <BorderWidthControl :block="block" prefix="field" />
      </div>
      <!-- Icons -->
      <h3
        class="sp-sidebar-headers"
        @click="
				section_2 = !section_2
			"
        :class="{
				seedprod_collaspe: !section_2}"
      >
        {{txt_9}}
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
          <label>{{txt_32}}</label>
          <select v-model="block.settings.btnStyle" class="sp-form-select">
            <option value>{{txt_33}}</option>
            <option value="ghost">{{txt_34}}</option>
            <option value="2d">{{txt_35}}</option>
            <option value="3d">{{txt_36}}</option>
          </select>
        </div>
        <div class="sp-form-group">
          <label>{{txt_37}}</label>
          <IconPicker v-model="block.settings.beforeIcon" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_38}}</label>
          <IconPicker v-model="block.settings.afterIcon" />
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
import FontVariantControl from '@/components/FontVariantControl.vue';
import PaddingControl from '@/components/PaddingControl.vue';
import TypographyControl from '@/components/TypographyControl.vue';
import HelpTip from '@/components/HelpTip.vue';
import Editor from '@tinymce/tinymce-vue';
import BorderWidthControl from '@/components/BorderWidthControl.vue';
import SpacingSectionControl from '@/components/SpacingSectionControl.vue';

export default {
  name: 'OptinFormOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Content', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Templates', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Fields', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Submit Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Success Action', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Form', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Fields', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Label', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Width', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Required', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Tiny', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( '2X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'Align', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'Button Sub Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( 'Input Sizes', process.env.VUE_APP_TEXTDOMAIN ),
      txt_23: __( 'Action To Take', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'Show Message', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __( 'Redirect', process.env.VUE_APP_TEXTDOMAIN ),
      txt_26: __( 'Message', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( 'Redirect URL', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( 'Choose Your Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( 'Font Family', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( 'Border Radius', process.env.VUE_APP_TEXTDOMAIN ),
      txt_31: __( 'Remove Inline Padding', process.env.VUE_APP_TEXTDOMAIN ),
      txt_32: __( 'Button Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( 'Flat', process.env.VUE_APP_TEXTDOMAIN ),
      txt_34: __( 'Ghost', process.env.VUE_APP_TEXTDOMAIN ),
      txt_35: __( '2D', process.env.VUE_APP_TEXTDOMAIN ),
      txt_36: __( 'Vintage', process.env.VUE_APP_TEXTDOMAIN ),
      txt_37: __( 'Before Text Icon', process.env.VUE_APP_TEXTDOMAIN ),
      txt_38: __( 'After Text Icon', process.env.VUE_APP_TEXTDOMAIN ),
      txt_39: __( 'Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_40: __( 'Field Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_41: __( 'Field Text Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_42: __( 'Field Border Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_43: __( 'Light Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_44: __( 'No Border Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_45: __( 'Wide Border Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_46: __( 'Inner Shadow Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_47: __( 'Grey Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_48: __( 'Dark Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_49: __( 'Bottom Border Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_50: __( 'Transparent Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_51: __( 'Button text', process.env.VUE_APP_TEXTDOMAIN ),
      showsettings: false,
      current_index: false,
      view: 1,
      section_1: true,
      section_2: false,
      section_3: false,
      section_4: true,
      section_5: false,
      section_6: false,
      section_7: false,
      shared: seedprod_store,
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.optinform, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  watch: {
    'block.settings.fieldTextColor': function( newVal, oldVal ) {
      this.debounce_update_placeholder_css();
    },
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
    toggle_dislay( item ) {
      if ( 'email' != item.type ) {
        item.display = ! item.display;
      }
    },
    show_settings( index ) {
      if ( this.showsettings !== index ) {
        this.showsettings = index;
      } else {
        this.showsettings = false;
      }
    },
    update_input_size() {

      // xs
      if ( 1 == this.block.settings.inputSize ) {
      }

      // sm
      if ( 2 == this.block.settings.inputSize ) {
      }

      // md
      if ( 3 == this.block.settings.inputSize ) {

        //this.block.settings.fontSize = 18;
        this.block.settings.inputPadding = 8;
      }

      // lg
      if ( 4 == this.block.settings.inputSize ) {
        this.block.settings.inputPadding = 12;
      }

      // xl
      if ( 5 == this.block.settings.inputSize ) {
      }

      // 2xl
      if ( 6 == this.block.settings.inputSize ) {
      }
    },
    update_btn_size() {

      // xs
      if ( 1 == this.block.settings.btnSize ) {
        this.block.settings.fontSize = 13;
        this.block.settings.btnPaddingTop = 4;
        this.block.settings.btnPaddingLeft = 8;
      }

      // sm
      if ( 2 == this.block.settings.btnSize ) {
        this.block.settings.fontSize = 15;
        this.block.settings.btnPaddingTop = 8;
        this.block.settings.btnPaddingLeft = 12;
        this.block.settings.inputPadding = 6;
        this.block.settings.inputSize = 13;
      }

      // md
      if ( 3 == this.block.settings.btnSize ) {
        this.block.settings.fontSize = 18;
        this.block.settings.btnPaddingTop = 11;
        this.block.settings.btnPaddingLeft = 16;
        this.block.settings.inputPadding = 8;
        this.block.settings.inputSize = 16;
      }

      // lg
      if ( 4 == this.block.settings.btnSize ) {
        this.block.settings.fontSize = 22;
        this.block.settings.btnPaddingTop = 16;
        this.block.settings.btnPaddingLeft = 20;
        this.block.settings.inputPadding = 12;
        this.block.settings.inputSize = 20;
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
  },
  components: {
    draggable,
    ColorPicker,
    IconPicker,
    AlignControl,
    SliderControl,
    FontControl,
    FontVariantControl,
    TypographyControl,
    PaddingControl,
    HelpTip,
    editor: Editor,
    BorderWidthControl,
    SpacingSectionControl,
  },
  props: {
    block: Object,
  },
};
</script>
