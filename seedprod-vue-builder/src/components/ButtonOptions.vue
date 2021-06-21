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
            d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3zm-2 2H6V4h10v2z"
          />
        </svg>{{txt_22}}
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
        </svg>
        {{txt_2}}
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
        <div class="sp-form-group" :class="{ input: true, 'has-error': errors.has('btnTxt') }">
          <div>
            <label>{{txt_4}}</label>
          </div>
                   <editor
                    v-model="block.settings.btnTxt"
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
              toolbar2:
           'forecolor,backcolor'

       }"
                  ></editor>
          <!-- <input
            :name="'btnTxt'"
            type="text"
            v-model="block.settings.btnTxt"
            class="sp-form-input"
            v-validate="'required'"
            data-vv-as="Button Text"
          /> -->
          <span
            v-show="errors.has('btnTxt')"
            class="help-block has-error"
          >{{ errors.first("btnTxt") }}</span>
        </div>

        <div class="sp-form-group">
          <div>
            <label>{{txt_9}}</label>
          </div>
          <input type="text" v-model="block.settings.btnSubTxt" class="sp-form-input" />
        </div>

        <div class="sp-form-group" :class="{'sp-mb-1':show_adv_link}">
          <label>{{txt_10}}</label>
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
              <span class="sp-ml-2 sp-text-sm">{{txt_11}}</span>
            </label>
          </div>

          <div>
            <label class="sp-inline-flex sp-items-center">
              <input
                type="checkbox"
                class="sp-form-checkbox sp-h-4 sp-w-4 sp-text-primary"
                v-model="block.settings.noFollow"
              />
              <span class="sp-ml-2 sp-text-sm">{{txt_6}}</span>
            </label>
          </div>
        </div>

        <div class="sp-form-group">
          <label>{{txt_7}}</label>
          <AlignControl v-model="block.settings.align" :justify="true" icons="alt" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_15}}</label>
          <select v-model="block.settings.btnSize" class="sp-form-select" @change="update_btn_size">
            <!-- <option value="1">{{txt_23}}</option> -->
            <option value="2">{{txt_102}}</option>
            <option value="3">{{txt_103}}</option>
            <option value="4">{{txt_104}}</option>
            <option value="5">{{txt_105}}</option>
            <option value="6">{{txt_106}}</option>
          </select>
        </div>
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
        {{txt_19}}
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
          <label>{{txt_20}}</label>
          <IconPicker v-model="block.settings.beforeIcon" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_21}}</label>
          <IconPicker v-model="block.settings.afterIcon" />
        </div>
      </div>
    </div>

    <!-- Templates -->
    <div v-if="view == 2" class="sp-flex sp-items-center sp-flex-col sp-pb-4">
      <div
        class="sp-uppercase sp-text-12px sp-font-semibold sp-text-neutral-60 sp-mt-2"
      >{{txt_24}}</div>
      <!-- Pill Button-->
      <div class="sp-template-preview" @click="apply_template(1)">
        <button
          style=" width:80%; font-size: 15px;
    background: rgb(30, 136, 229);
    color: rgb(255, 255, 255);
    padding: 8px 12px;
    border-radius: 100px; "

        >{{txt_25}}</button>
      </div>

      <!-- Flat Button-->
      <div class="sp-template-preview"   @click="apply_template(2)">
        <button
          style=" width:80%; font-size: 15px;
    background: rgb(30, 136, 229);
    color: rgb(255, 255, 255);
    padding: 8px 12px;
    border-radius: 4px;"

        >{{txt_26}}</button>
      </div>

      <!-- 3d Button-->
      <div class="sp-template-preview" @click="apply_template(3)">
        <button
          style=" width:80%; font-size: 15px;
    background: linear-gradient(-180deg, rgb(30, 136, 229), rgb(23, 117, 200) 90%);
    color: rgb(255, 255, 255);
    padding: 8px 12px;
    border-radius: 4px;border: 1px solid rgb(1, 86, 148);
   border: 1px solid rgb(22, 109, 186);
    box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px inset;"

        >{{txt_27}}</button>
      </div>

      <!-- 3d Button-->
      <div class="sp-template-preview" @click="apply_template(4)">
        <button
          style=" width:80%; font-size: 15px;
   background: linear-gradient(-180deg, rgb(124, 179, 66), rgb(106, 153, 56) 90%);
    color: rgb(255, 255, 255);
    padding: 8px 12px;
    border-radius: 4px;border: 1px solid rgb(1, 86, 148);
   border: 1px solid rgb(98, 142, 52);
    box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px inset;"

        >{{txt_28}}</button>
      </div>

      <!-- 3d Button-->
      <div class="sp-template-preview" @click="apply_template(5)">
        <button
          style=" width:80%; font-size: 15px;
    background: linear-gradient(-180deg, rgb(67, 160, 71), rgb(56, 135, 60) 90%);
    color: rgb(255, 255, 255);
    padding: 8px 12px;
    border-radius: 4px;border: 1px solid rgb(1, 86, 148);
   border: 1px solid rgb(52, 124, 55);
    box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px inset;"

        >{{txt_29}}</button>
      </div>

      <!-- 3d Button-->
      <div class="sp-template-preview"  @click="apply_template(6)">
        <button
          style=" width:80%; font-size: 15px;
       background: linear-gradient(-180deg, rgb(251, 140, 0), rgb(215, 120, 0) 90%);
    color: rgb(255, 255, 255);
    padding: 8px 12px;
    border-radius: 4px;border: 1px solid rgb(1, 86, 148);
      border: 1px solid rgb(200, 112, 0);
    box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px inset;"

        >{{txt_30}}</button>
      </div>

      <!-- 3d Button-->
      <div class="sp-template-preview" @click="apply_template(7)">
        <button
          style=" width:80%; font-size: 15px;
       background: linear-gradient(-180deg, rgb(229, 57, 53), rgb(218, 32, 28) 90%);
    padding: 8px 12px;
    color: rgb(255, 255, 255);
    border-radius: 4px;border: 1px solid rgb(1, 86, 148);
  border: 1px solid rgb(205, 30, 26);
    box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px inset;"

        >{{txt_31}}</button>
      </div>

      <!-- 3d Button-->
      <div class="sp-template-preview"  @click="apply_template(8)">
        <button
          style=" width:80%; font-size: 15px;
      background: linear-gradient(-180deg, rgb(253, 216, 53), rgb(253, 209, 18) 90%);
    color: rgb(0, 0, 0);
     padding: 8px 12px;
    border-radius: 4px;border: 1px solid rgb(1, 86, 148);
  border: 1px solid rgb(252, 206, 3);
    box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px inset;"

        >{{txt_32}}</button>
      </div>

      <!-- 3d Button-->
      <div class="sp-template-preview"  @click="apply_template(9)">
        <button
          style=" width:80%; font-size: 15px;
      background: linear-gradient(-180deg, rgb(255, 255, 255), rgb(237, 237, 237) 90%);
    color: rgb(0, 0, 0);
     padding: 8px 12px;
    border-radius: 4px;border: 1px solid rgb(1, 86, 148);
border: 1px solid rgb(230, 230, 230);
    box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px inset;"

        >{{txt_33}}</button>
      </div>

      <!-- 3d Button-->
      <div class="sp-template-preview"  @click="apply_template(10)">
        <button
          style=" width:80%; font-size: 15px;
      background: linear-gradient(-180deg, rgb(158, 158, 158), rgb(140, 140, 140) 90%);
    color: rgb(255,255,255,0.80);
     padding: 8px 12px;
    border-radius: 4px;border: 1px solid rgb(1, 86, 148);
 border: 1px solid rgb(132, 132, 132);
    box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px inset;"

        >{{txt_34}}</button>
      </div>

      <!-- 3d Button-->
      <div class="sp-template-preview"   @click="apply_template(11)">
        <button
          style=" width:80%; font-size: 15px;
      background: linear-gradient(-180deg, rgb(51, 51, 51), rgb(33, 33, 33) 90%);
    color: rgb(255,255,255, 0.80);
     padding: 8px 12px;
    border-radius: 4px;border: 1px solid rgb(1, 86, 148);
      border: 1px solid rgb(26, 26, 26);
    box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px inset;"

        >{{txt_35}}</button>
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
          <TypographyControl :block="block" />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_43"
            :color="block.settings.bgColor"
            v-model="block.settings.bgColor"
          />
        </div>

        <div class="sp-form-group">
          <label>{{txt_16}}</label>
          <SliderControl v-model="block.settings.btnPaddingTop" :min="10" :max="100" :step="1" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_17}}</label>
          <SliderControl v-model="block.settings.btnPaddingLeft" :min="10" :max="100" :step="1" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_18}}</label>
          <SliderControl v-model="block.settings.borderRadius" :min="0" :max="100" :step="1" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_36}}</label>
          <select v-model="block.settings.btnStyle" class="sp-form-select">
            <option value>{{txt_37}}</option>
            <option value="2d">{{txt_38}}</option>
            <option value="3d">{{txt_39}}</option>
            <option value="ghost">{{txt_40}}</option>
            <option value="link">{{txt_107}}</option>
          </select>
        </div>

        <div class="sp-form-group">
          <label>{{txt_41}}</label>
          <select v-model="block.settings.textShadow" class="sp-form-select">
            <option value>{{txt_100}}</option>
            <option value="1">{{txt_101}}</option>
            <option value="2">{{txt_102}}</option>
            <option value="3">{{txt_103}}</option>
            <option value="4">{{txt_104}}</option>
            <option value="5">{{txt_105}}</option>
            <option value="6">{{txt_106}}</option>
          </select>
        </div>

        <div class="sp-form-group">
          <label>{{txt_42}}</label>
          <select v-model="block.settings.shadow" class="sp-form-select">
            <option value>{{txt_100}}</option>
            <option value="1">{{txt_101}}</option>
            <option value="2">{{txt_102}}</option>
            <option value="3">{{txt_103}}</option>
            <option value="4">{{txt_104}}</option>
            <option value="5">{{txt_105}}</option>
            <option value="6">{{txt_106}}</option>
          </select>
        </div>
      </div>

      <!-- <div class="sp-form-group">
        <label>{{txt_43}}</label>
        <ColorPicker :color="block.settings.bgColor" v-model="block.settings.bgColor" />
      </div>-->

       <SpacingSectionControl :block="block" />

    </div>
  </div>
</template>

<script>
import { helpers } from '../mixins/helpers.js';
import ColorPicker from '@/components/ColorPicker.vue';
import TypographyControl from '@/components/TypographyControl.vue';
import IconPicker from '@/components/IconPicker.vue';
import AlignControl from '@/components/AlignControl.vue';
import SliderControl from '@/components/SliderControl.vue';
import FontControl from '@/components/FontControl.vue';
import FontVariantControl from '@/components/FontVariantControl.vue';
import PaddingControl from '@/components/PaddingControl.vue';
import HelpTip from '@/components/HelpTip.vue';
import SpacingSectionControl from '@/components/SpacingSectionControl.vue';
import { __ } from '@wordpress/i18n';
import Editor from '@tinymce/tinymce-vue';

export default {
  name: 'ButtonOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Content', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Button Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Add "No Follow"', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Align', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Styles', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Button Sub Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Link', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Open In New Window', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Vertical Padding', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Horizontal Padding', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Border Radius', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Icons', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'Before Text Icon', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'After Text Icon', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( 'Templates', process.env.VUE_APP_TEXTDOMAIN ),
      txt_23: __( 'Tiny', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'Choose Your Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __( 'Pill Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_26: __( 'Flat Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( 'Blue Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( 'Light Green Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( 'Green Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( 'Orange Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_31: __( 'Red Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_32: __( 'Yellow Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( 'White Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_34: __( 'Grey Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_35: __( 'Black Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_36: __( 'Button Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_37: __( 'Flat', process.env.VUE_APP_TEXTDOMAIN ),
      txt_38: __( '2D', process.env.VUE_APP_TEXTDOMAIN ),
      txt_39: __( 'Vintage', process.env.VUE_APP_TEXTDOMAIN ),
      txt_40: __( 'Ghost', process.env.VUE_APP_TEXTDOMAIN ),
      txt_41: __( 'Text Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_42: __( 'Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_43: __( 'Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_100: __( 'None', process.env.VUE_APP_TEXTDOMAIN ),
      txt_101: __( 'Hairline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_102: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_103: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_104: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_105: __( 'X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_106: __( '2X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_107: __( 'Link', process.env.VUE_APP_TEXTDOMAIN ),
      current_index: false,
      show_adv_link: false,
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
    lodash.forOwn( this.shared.block_templates.button, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  methods: {
    apply_template( id ) {
      if ( 1 == id ) {
        this.block.settings.bgColor = '#1E88E5';
        this.block.settings.borderRadius = '100';
        this.block.settings.btnStyle = '';
      }
      if ( 2 == id ) {
        this.block.settings.bgColor = '#1E88E5';
        this.block.settings.borderRadius = '4';
        this.block.settings.btnStyle = '';
      }
      if ( 3 == id ) {
        this.block.settings.bgColor = '#1E88E5';
        this.block.settings.borderRadius = '4';
        this.block.settings.btnStyle = '3d';
      }
      if ( 4 == id ) {
        this.block.settings.bgColor = '#7CB342';
        this.block.settings.borderRadius = '4';
        this.block.settings.btnStyle = '3d';
      }

      if ( 5 == id ) {
        this.block.settings.bgColor = '#43A047';
        this.block.settings.borderRadius = '4';
        this.block.settings.btnStyle = '3d';
      }

      if ( 6 == id ) {
        this.block.settings.bgColor = '#FB8C00';
        this.block.settings.borderRadius = '4';
        this.block.settings.btnStyle = '3d';
      }

      if ( 7 == id ) {
        this.block.settings.bgColor = '#e53935';
        this.block.settings.borderRadius = '4';
        this.block.settings.btnStyle = '3d';
      }

      if ( 8 == id ) {
        this.block.settings.bgColor = '#FDD835';
        this.block.settings.borderRadius = '4';
        this.block.settings.btnStyle = '3d';
      }

      if ( 9 == id ) {
        this.block.settings.bgColor = '#ffffff';
        this.block.settings.borderRadius = '4';
        this.block.settings.btnStyle = '3d';
      }

      if ( 10 == id ) {
        this.block.settings.bgColor = '#9E9E9E';
        this.block.settings.borderRadius = '4';
        this.block.settings.btnStyle = '3d';
      }

      if ( 11 == id ) {
        this.block.settings.bgColor = '#333';
        this.block.settings.borderRadius = '4';
        this.block.settings.btnStyle = '3d';
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
      }

      // md
      if ( 3 == this.block.settings.btnSize ) {
        this.block.settings.fontSize = 18;
        this.block.settings.btnPaddingTop = 12;
        this.block.settings.btnPaddingLeft = 16;
      }

      // lg
      if ( 4 == this.block.settings.btnSize ) {
        this.block.settings.fontSize = 22;
        this.block.settings.btnPaddingTop = 16;
        this.block.settings.btnPaddingLeft = 20;
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
  created() {},
  components: {
    ColorPicker,
    AlignControl,
    SliderControl,
    FontControl,
    FontVariantControl,
    HelpTip,
    TypographyControl,
    PaddingControl,
    IconPicker,
    SpacingSectionControl,
    Editor,
  },
  props: {
    block: Object,
  },
};
</script>
