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
        </svg>
        {{txt_1}}
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
            d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
          />
        </svg>
        {{txt_2}}
      </div>
    </div>

    <!-- Content -->
    <div v-if="view == 1">

      <div class="sp-form-group">
        <label>{{txt_5}}</label>
        <input type="text" v-model="block.settings.planName" class="sp-form-input" />
      </div>

      <div class="sp-form-group">
        <label>{{txt_6}}</label>
        <input type="text" v-model="block.settings.price" class="sp-form-input" />
      </div>

      <div class="sp-form-group">
        <label>{{txt_7}}</label>
        <select v-model="block.settings.currencySymbol" class="sp-form-select">
          <option value>{{txt_101}}</option>
          <option value="$">{{txt_26}}</option>
          <option value="€">{{txt_27}}</option>
          <option value="฿">{{txt_28}}</option>
          <option value="₣">{{txt_29}}</option>
          <option value="ƒ">{{txt_30}}</option>
          <option value="kr">{{txt_31}}</option>
          <option value="₤">{{txt_32}}</option>
          <option value="₧">{{txt_33}}</option>
          <option value="₱">{{txt_34}}</option>
          <option value="£">{{txt_35}}</option>
          <option value="R$">{{txt_36}}</option>
          <option value="₽">{{txt_37}}</option>
          <option value="₨">{{txt_38}}</option>
          <option value="₹">{{txt_39}}</option>
          <option value="₪">{{txt_40}}</option>
          <option value="¥">{{txt_41}}</option>
          <option value="₩">{{txt_42}}</option>
          <option value="custom">{{txt_43}}</option>
        </select>
      </div>

      <div class="sp-form-group" v-if="'custom' === block.settings.currencySymbol">
        <label>{{txt_44}}</label>
        <input type="text" v-model="block.settings.customCurrencySymbol" class="sp-form-input" />
      </div>

      <div class="sp-form-group">
        <label>{{txt_45}}</label>
        <input type="text" v-model="block.settings.period" class="sp-form-input" />
      </div>

      <div class="sp-form-group sp-flex sp-items-center sp-justify-between sp-mt-4 sp-mb-3">
        <label class="sp-text-sm">{{txt_46}}</label>
        <toggle-button :width="45" v-model="block.settings.showRegularPrice" />
      </div>

      <div class="sp-form-group" v-if="block.settings.showRegularPrice">
        <label>{{txt_47}}</label>
        <input type="text" v-model="block.settings.regularPrice" class="sp-form-input" />
      </div>

      <div class="sp-form-group" v-if="block.settings.showRegularPrice">
        <label>{{txt_48}}</label>
        <input type="text" v-model="block.settings.regularPriceLabel" class="sp-form-input" />
      </div>

      <div class="sp-form-group">
        <label>{{txt_49}}</label>
        <editor
          v-model="block.settings.description"
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
            toolbar1: 'bold,italic,underline,strikethrough,link,wp_adv',
            toolbar2: 'forecolor,backcolor'
          }"
        >
        </editor>
      </div>

      <div class="sp-form-group sp-flex sp-items-center sp-justify-between sp-mt-4 sp-mb-3">
        <label class="sp-text-sm">{{txt_50}}</label>
        <toggle-button :width="45" v-model="block.settings.showTopButton" />
      </div>

      <div class="sp-form-group" v-if="block.settings.showTopButton">
        <label>{{txt_51}}</label>
        <input type="text" v-model="block.settings.topButtonText" class="sp-form-input" />
      </div>

      <div class="sp-form-group" :class="{'sp-mb-1':show_adv_link}" v-if="block.settings.showTopButton">
        <label>{{txt_52}}</label>
        <span
          class="sp-flex sp-items-center sp-border sp-border-neutral-20 sp-rounded-md focus-within:sp-border-neutral-80 sp-rounded"
        >
          <input
            type="text"
            v-model="block.settings.topButtonLink"
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
              v-model="block.settings.topButtonLinkOpenNewWindow"
            />
            <span class="sp-ml-2 sp-text-sm">{{txt_53}}</span>
          </label>
        </div>

        <div>
          <label class="sp-inline-flex sp-items-center">
            <input
              type="checkbox"
              class="sp-form-checkbox sp-h-4 sp-w-4 sp-text-primary"
              v-model="block.settings.topButtonLinkNoFollow"
            />
            <span class="sp-ml-2 sp-text-sm">{{txt_54}}</span>
          </label>
        </div>
      </div>

      <!-- Feature List Start -->
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
          <draggable :list="block.settings.featuresList" handle=".sp-drag-drop">
            <div
              v-for="(item, index) in block.settings.featuresList"
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
                    v-text="item.txt"
                    class=" sp-form-input sp-border-none sp-drag-drop sp-cursor-move sp-truncate"
                    style="width:210px"
                    @click="show_settings(index)"
                  >
                  </span>
                </div>

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
                <div class="sp-form-group">
                  <div>
                    <label>{{txt_15}}</label>
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
                      toolbar1: 'bold,italic,underline,strikethrough,link,wp_adv',
                      toolbar2: 'forecolor,backcolor'
                    }"
                  >
                  </editor>
                </div>

                <div class="sp-form-group">
                  <label>{{txt_16}}</label>
                  <IconPicker v-model="item.icon" />
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
            {{txt_4}}
          </button>
        </div>

      </div>
      <!-- Feature List End -->

      <div class="sp-form-group sp-flex sp-items-center sp-justify-between sp-mt-4 sp-mb-3">
        <label class="sp-text-sm">{{txt_55}}</label>
        <toggle-button :width="45" v-model="block.settings.showBottomButton" />
      </div>

      <div class="sp-form-group" v-if="block.settings.showBottomButton">
        <label>{{txt_56}}</label>
        <input type="text" v-model="block.settings.bottomButtonText" class="sp-form-input" />
      </div>

      <div class="sp-form-group" :class="{'sp-mb-1':show_adv_link}" v-if="block.settings.showBottomButton">
        <label>{{txt_57}}</label>
        <span
          class="sp-flex sp-items-center sp-border sp-border-neutral-20 sp-rounded-md focus-within:sp-border-neutral-80 sp-rounded"
        >
          <input
            type="text"
            v-model="block.settings.bottomButtonLink"
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
              v-model="block.settings.bottomButtonLinkOpenNewWindow"
            />
            <span class="sp-ml-2 sp-text-sm">{{txt_53}}</span>
          </label>
        </div>

        <div>
          <label class="sp-inline-flex sp-items-center">
            <input
              type="checkbox"
              class="sp-form-checkbox sp-h-4 sp-w-4 sp-text-primary"
              v-model="block.settings.bottomButtonLinkNoFollow"
            />
            <span class="sp-ml-2 sp-text-sm">{{txt_54}}</span>
          </label>
        </div>
      </div>

    </div>

    <!-- Advanced -->
    <div v-if="view == 2">
      <!-- Header Styles Start -->
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
          <TypographyControl
            :label="txt_5"
            :block="block"
            prefix="planname"
          />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_12"
            :color="block.settings.planNameTextColor"
            v-model="block.settings.planNameTextColor"
          />
        </div>

        <div class="sp-form-group">
          <TypographyControl
            :label="txt_9"
            :block="block"
            prefix="regularprice"
          />
        </div>
        <div class="sp-form-group">
          <ColorPicker
            :label="txt_22"
            :color="block.settings.regularPriceTextColor"
            v-model="block.settings.regularPriceTextColor"
          />
        </div>

        <div class="sp-form-group">
          <TypographyControl
            :label="txt_49"
            :block="block"
            prefix="description"
          />
        </div>
        <div class="sp-form-group">
          <ColorPicker
            :label="txt_58"
            :color="block.settings.descriptionTextColor"
            v-model="block.settings.descriptionTextColor"
          />
        </div>
        <div class="sp-form-group">
          <ColorPicker
            :label="txt_59"
            :color="block.settings.headerBackgroundColor"
            v-model="block.settings.headerBackgroundColor"
          />
        </div>

        <div class="sp-form-group">
          <label>{{txt_200}}</label>
          <SliderControl v-model="block.settings.headerPadding" :min="0" :max="100" :step="1" />
        </div>
      </div>
      <!-- Header Styles End -->

      <!-- Button Styles Start -->
      <h3
        class="sp-sidebar-headers"
        @click="
				section_2 = !section_2
			"
        :class="{
				seedprod_collaspe: !section_2}"
      >
        {{txt_10}}
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
        <!-- Top Button Start -->
        <div class="sp-form-group">
          <ColorPicker
            :label="txt_60"
            :color="block.settings.topButtonBgColor"
            v-model="block.settings.topButtonBgColor"
          />
        </div>

        <div class="sp-form-group">
          <label>{{txt_13}}</label>
          <select v-model="block.settings.topButtonSize" class="sp-form-select" @change="update_btn_size('topButton')">
            <option value="2">{{txt_103}}</option>
            <option value="3">{{txt_104}}</option>
            <option value="4">{{txt_105}}</option>
            <option value="5">{{txt_106}}</option>
            <option value="6">{{txt_107}}</option>
          </select>
        </div>

        <div class="sp-form-group">
          <label>{{txt_20}}</label>
          <IconPicker v-model="block.settings.topButtonBeforeIcon" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_21}}</label>
          <IconPicker v-model="block.settings.topButtonAfterIcon" />
        </div>
        <!-- Top Button End -->

        <!-- Bottom Button Start -->
        <div class="sp-form-group">
          <ColorPicker
            :label="txt_65"
            :color="block.settings.bottomButtonBgColor"
            v-model="block.settings.bottomButtonBgColor"
          />
        </div>

        <div class="sp-form-group">
          <label>{{txt_66}}</label>
          <select v-model="block.settings.bottomButtonSize" class="sp-form-select" @change="update_btn_size('bottomButton')">
            <option value="2">{{txt_103}}</option>
            <option value="3">{{txt_104}}</option>
            <option value="4">{{txt_105}}</option>
            <option value="5">{{txt_106}}</option>
            <option value="6">{{txt_107}}</option>
          </select>
        </div>

        <div class="sp-form-group">
          <label>{{txt_67}}</label>
          <IconPicker v-model="block.settings.bottomButtonBeforeIcon" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_68}}</label>
          <IconPicker v-model="block.settings.bottomButtonAfterIcon" />
        </div>
        <!-- Bottom Button End -->

      </div>
      <!-- Button Styles End -->

      <!-- Price Styles Start -->
      <h3
        class="sp-sidebar-headers"
        @click="
				section_5 = !section_5
			"
        :class="{
				seedprod_collaspe: !section_5}"
      >
        {{txt_18}}
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
          <TypographyControl
            :label="txt_18"
            :block="block"
            prefix="price"
          />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_69"
            :color="block.settings.priceTextColor"
            v-model="block.settings.priceTextColor"
          />
        </div>

        <div class="sp-form-group">
          <TypographyControl
            :label="txt_70"
            :block="block"
            prefix="pricesuperscript"
          />
        </div>

        <div class="sp-form-group">
          <label>{{txt_71}}</label>
          <SliderControl v-model="block.settings.priceSuperScriptTop" :min="-5" :max="5" :step=".1" />
        </div>
      </div>
      <!-- Price Styles End -->

      <!-- Features List Advanced Start -->
      <h3
        class="sp-sidebar-headers"
        @click="
				section_3 = !section_3
			"
        :class="{
				seedprod_collaspe: !section_3}"
      >
        {{txt_3}}
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
          <TypographyControl
            :label="txt_3"
            :block="block"
            prefix="featureslist"
          />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_61"
            :color="block.settings.featuresListTextColor"
            v-model="block.settings.featuresListTextColor"
          />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_62"
            :color="block.settings.featuresListIconColor"
            v-model="block.settings.featuresListIconColor"
          />
        </div>

        <div class="sp-form-group">
          <label>{{txt_63}}</label>
          <SliderControl v-model="block.settings.featuresListSpaceBetween" :min="1" :max="100" :step="1" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_64}}</label>
          <AlignControl v-model="block.settings.featureslistalign" />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_59"
            :color="block.settings.featuresListBackgroundColor"
            v-model="block.settings.featuresListBackgroundColor"
          />
        </div>

        <div class="sp-form-group">
          <label>{{txt_200}}</label>
          <SliderControl v-model="block.settings.featuresListPadding" :min="0" :max="100" :step="1" />
        </div>
      </div>
      <!-- Features List Advanced Stop -->

      <!-- Block Advanced Start -->
      <h3
        class="sp-sidebar-headers"
        @click="
				section_6 = !section_6
			"
        :class="{
				seedprod_collaspe: !section_6}"
      >
        {{txt_73}}
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
          <label>{{txt_25}}</label>
          <SliderControl v-model="block.settings.blockBorderRadius" :min="0" :max="100" :step="1" />
        </div>
        <div class="sp-form-group">
          <label>{{txt_74}}</label>
          <select v-model="block.settings.blockBorderStyle" class="sp-form-select">
            <option value="solid">{{txt_75}}</option>
            <option value="dotted">{{txt_76}}</option>
            <option value="dashed">{{txt_77}}</option>
          </select>
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_78"
            :color="block.settings.blockBorderColor"
            v-model="block.settings.blockBorderColor"
          />
        </div>
        <div class="sp-form-group">
          <label>{{txt_79}}</label>
          <div v-if="block.settings.blockBorderSync === false" class="sp-flex sp-items-center">
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.blockBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-tr-none sp-rounded-br-none"
              />
              {{txt_201}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.blockBorderRight"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
              />
              {{txt_203}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.blockBorderBottom"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
              />
              {{txt_202}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.blockBorderLeft"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-rounded-tl-none sp-rounded-bl-none"
              />
              {{txt_204}}
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
                v-model="block.settings.blockBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-tr-none sp-rounded-br-none"
              />
              {{txt_201}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.blockBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
              />
              {{txt_203}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.blockBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
              />
              {{txt_202}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.blockBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-rounded-tl-none sp-rounded-bl-none"
              />
              {{txt_204}}
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
import Editor from '@tinymce/tinymce-vue';
import draggable from 'vuedraggable';
import TypographyControl from '@/components/TypographyControl.vue';
import SpacingSectionControl from '@/components/SpacingSectionControl.vue';
import IconPicker from '@/components/IconPicker.vue';
import PaddingControl from '@/components/PaddingControl.vue';

export default {
  name: 'PricingTableOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    /* eslint-disable */
    return {
      current_index: false,
      txt_1: __( 'Content', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Features List', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Add New Item', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Plan Name', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Price', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Currency Symbol', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Header', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Regular Price', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Buttons', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Plan Name Typography', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Plan Name Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Top Button Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Top Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Icon', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Bottom Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Price', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Top Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'Top Button Before Text Icon', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'Top Button After Text Icon', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( 'Regular Price Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_23: __( 'Header Open Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'Divider Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __( 'Border Radius', process.env.VUE_APP_TEXTDOMAIN ),
      txt_26: __( '$ Dollar', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( '€ Euro', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( '฿ Baht', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( '₣ Franc', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( 'ƒ Guilder', process.env.VUE_APP_TEXTDOMAIN ),
      txt_31: __( 'kr Krona', process.env.VUE_APP_TEXTDOMAIN ),
      txt_32: __( '₤ Lira', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( '₧ Peseta', process.env.VUE_APP_TEXTDOMAIN ),
      txt_34: __( '₱ Peso', process.env.VUE_APP_TEXTDOMAIN ),
      txt_35: __( '£ Pound Sterling', process.env.VUE_APP_TEXTDOMAIN ),
      txt_36: __( 'R$ Real', process.env.VUE_APP_TEXTDOMAIN ),
      txt_37: __( '₽ Ruble', process.env.VUE_APP_TEXTDOMAIN ),
      txt_38: __( '₨ Rupee', process.env.VUE_APP_TEXTDOMAIN ),
      txt_39: __( '₹ Rupee (Indian)', process.env.VUE_APP_TEXTDOMAIN ),
      txt_40: __( '₪ Shekel', process.env.VUE_APP_TEXTDOMAIN ),
      txt_41: __( '¥ Yen/Yuan', process.env.VUE_APP_TEXTDOMAIN ),
      txt_42: __( '₩ Won', process.env.VUE_APP_TEXTDOMAIN ),
      txt_43: __( 'Custom', process.env.VUE_APP_TEXTDOMAIN ),
      txt_44: __( 'Custom Symbol', process.env.VUE_APP_TEXTDOMAIN ),
      txt_45: __( 'Period', process.env.VUE_APP_TEXTDOMAIN ),
      txt_46: __( 'Show Regular Price', process.env.VUE_APP_TEXTDOMAIN ),
      txt_47: __( 'Regular Price', process.env.VUE_APP_TEXTDOMAIN ),
      txt_48: __( 'Regular Price Label', process.env.VUE_APP_TEXTDOMAIN ),
      txt_49: __( 'Description', process.env.VUE_APP_TEXTDOMAIN ),
      txt_50: __( 'Show Top Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_51: __( 'Top Button Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_52: __( 'Top Button Link', process.env.VUE_APP_TEXTDOMAIN ),
      txt_53: __( 'Open In New Window', process.env.VUE_APP_TEXTDOMAIN ),
      txt_54: __( 'Add "No Follow"', process.env.VUE_APP_TEXTDOMAIN ),
      txt_55: __( 'Show Bottom Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_56: __( 'Bottom Button Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_57: __( 'Bottom Button Link', process.env.VUE_APP_TEXTDOMAIN ),
      txt_58: __( 'Description Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_59: __( 'Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_60: __( 'Top Button Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_61: __( 'Features List Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_62: __( 'Icon Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_63: __( 'Space Between', process.env.VUE_APP_TEXTDOMAIN ),
      txt_64: __( 'Align', process.env.VUE_APP_TEXTDOMAIN ),
      txt_65: __( 'Bottom Button Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_66: __( 'Bottom Button Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_67: __( 'Bottom Button Before Text Icon', process.env.VUE_APP_TEXTDOMAIN ),
      txt_68: __( 'Bottom Button After Text Icon', process.env.VUE_APP_TEXTDOMAIN ),
      txt_69: __( 'Price Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_70: __( 'Price Superscript', process.env.VUE_APP_TEXTDOMAIN ),
      txt_71: __( 'Price Superscript Top', process.env.VUE_APP_TEXTDOMAIN ),
      txt_73: __( 'Block', process.env.VUE_APP_TEXTDOMAIN ),
      txt_74: __( 'Border Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_75: __( 'Solid', process.env.VUE_APP_TEXTDOMAIN ),
      txt_76: __( 'Dotted', process.env.VUE_APP_TEXTDOMAIN ),
      txt_77: __( 'Dashed', process.env.VUE_APP_TEXTDOMAIN ),
      txt_78: __( 'Border Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_79: __( 'Border Width', process.env.VUE_APP_TEXTDOMAIN ),
      txt_80: __( 'Image Whitespace Padding', process.env.VUE_APP_TEXTDOMAIN ),
      txt_100: __( 'Text Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_101: __( 'None', process.env.VUE_APP_TEXTDOMAIN ),
      txt_102: __( 'Hairline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_103: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_104: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_105: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_106: __( 'X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_107: __( '2X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_200: __( 'Padding', process.env.VUE_APP_TEXTDOMAIN ),
      txt_201: __( 'Top', process.env.VUE_APP_TEXTDOMAIN ),
      txt_202: __( 'Bottom', process.env.VUE_APP_TEXTDOMAIN ),
      txt_203: __( 'Right', process.env.VUE_APP_TEXTDOMAIN ),
      txt_204: __( 'Left', process.env.VUE_APP_TEXTDOMAIN ),
      txt_113: __( 'Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_114: __( 'None', process.env.VUE_APP_TEXTDOMAIN ),
      txt_115: __( 'Hairline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_116: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_117: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_118: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_119: __( 'X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_120: __( '2X Large', process.env.VUE_APP_TEXTDOMAIN ),
      show_adv_link: false,
      showsettings: false,
      view: 1,
      section_1: false,
      section_2: false,
      section_3: false,
      section_4: true,
      section_5: false,
      section_6: false,
      shared: seedprod_store,
    };
    /* eslint-enable */
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.pricingtable, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  created() {},
  methods: {
    sync_image_border( sync ) {
      this.block.settings.blockBorderSync = sync;
      if ( sync ) {
        this.block.settings.blockBorderLeft = this.block.settings.blockBorderTop;
        this.block.settings.blockBorderBottom = this.block.settings.blockBorderTop;
        this.block.settings.blockBorderRight = this.block.settings.blockBorderTop;
      }
    },
    update_btn_size( buttonName ) {

      // xs
      if ( 1 == this.block.settings[buttonName + 'Size']) {
        this.block.settings[buttonName + 'fontSize'] = 13;
        this.block.settings[buttonName + 'PaddingTop'] = 4;
        this.block.settings[buttonName + 'PaddingLeft'] = 8;
      }

      // sm
      if ( 2 == this.block.settings[buttonName + 'Size']) {
        this.block.settings[buttonName + 'fontSize'] = 15;
        this.block.settings[buttonName + 'PaddingTop'] = 8;
        this.block.settings[buttonName + 'PaddingLeft'] = 12;
      }

      // md
      if ( 3 == this.block.settings[buttonName + 'Size']) {
        this.block.settings[buttonName + 'fontSize'] = 18;
        this.block.settings[buttonName + 'PaddingTop'] = 12;
        this.block.settings[buttonName + 'PaddingLeft'] = 16;
      }

      // lg
      if ( 4 == this.block.settings[buttonName + 'Size']) {
        this.block.settings[buttonName + 'fontSize'] = 22;
        this.block.settings[buttonName + 'PaddingTop'] = 16;
        this.block.settings[buttonName + 'PaddingLeft'] = 20;
      }

      // xl
      if ( 5 == this.block.settings[buttonName + 'Size']) {
        this.block.settings[buttonName + 'fontSize'] = 26;
        this.block.settings[buttonName + 'PaddingTop'] = 20;
        this.block.settings[buttonName + 'PaddingLeft'] = 26;
      }

      // 2xl
      if ( 6 == this.block.settings[buttonName + 'Size']) {
        this.block.settings[buttonName + 'fontSize'] = 32;
        this.block.settings[buttonName + 'PaddingTop'] = 28;
        this.block.settings[buttonName + 'PaddingLeft'] = 32;
      }
    },
    show_settings( index ) {
      this.current_index = index;
      if ( this.showsettings !== index ) {
        this.showsettings = index;
      } else {
        this.showsettings = false;
      }
    },
    add_item() {
      let lastitem = lodash.last( this.block.settings.featuresList );
      if ( lastitem === undefined ) {
        lastitem = {};
        lastitem.icon = '';
      }

      let index = this.block.settings.featuresList.push({
        icon: lastitem.icon,
        txt: 'Feature List Item #' + ( parseInt( this.block.settings.featuresList.length ) + 1 ),
      });
      this.show_settings( index - 1 );
    },
    remove_item( index ) {
      this.$delete( this.block.settings.featuresList, index );
    },
    duplicate_item( index ) {
      const cloneObj = JSON.parse(
        JSON.stringify( this.block.settings.featuresList[index])
      );
      this.block.settings.featuresList.splice( index + 1, 0, cloneObj );
    },
  },
  components: {
    ImageControl,
    ColorPicker,
    FontAwesomePicker,
    AlignControl,
    SliderControl,
    FontControl,
    FontVariantControl,
    HelpTip,
    Editor,
    draggable,
    TypographyControl,
    SpacingSectionControl,
    IconPicker,
    PaddingControl,
  },
  props: {
    block: Object,
  },
};
</script>
