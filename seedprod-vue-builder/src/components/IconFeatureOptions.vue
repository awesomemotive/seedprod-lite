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
        </svg>{{txt_13}}
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
        </svg>{{txt_14}}
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
        Image
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
        <!-- <div class="sp-form-group sp-flex sp-justify-between sp-items-center">
          <label>{{txt_1}}</label>
          <div class="sp-flex sp-justify-center sp-items-center">
            <button
              @click="block.settings.layout = 'image'"
              class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-neutral-80 sp-py-2 sp-px-3 sp-rounded sp-flex sp-items-center sp-text-xs sp-font-semibold sp-leading-none sp-mr-1 sp-rounded-full"
              :class="{'sp-active':block.settings.layout == 'image' }"
            >{{txt_2}}</button>
            <button
              @click="block.settings.layout = 'icon'"
              class="sp-bg-neutral-10 iconover:sp-bg-neutral-15 sp-neutral-80 sp-py-2 sp-px-3 sp-rounded sp-flex sp-items-center sp-text-xs sp-font-semibold sp-leading-none sp-rounded-full"
              :class="{'sp-active':block.settings.layout == 'icon' }"
            >{{txt_3}}</button>
          </div>
        </div> -->

        <div v-if="block.settings.layout == 'image'">
          <div class="sp-form-group">
            <label>{{txt_2}}</label>
            <ImageControl v-model="block.settings.src" :block="block" prefix="img" />
          </div>

          <div class="sp-form-group">
            <div class>
              <label>{{txt_4}}</label>
            </div>
            <div class="sp-flex sp-items-center">
              <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
                <input type="number" v-model="block.settings.width" class="sp-form-input sp-w-20" />
                Width
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
                <input type="number" v-model="block.settings.height" class="sp-form-input sp-w-20" />
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
        </div>
        <div v-if="block.settings.layout == 'icon'">
          <div class="sp-form-group">
            <label>{{txt_3}}</label>
            <IconPicker v-model="block.settings.icon" />
          </div>
          <div class="sp-form-group sp-mt-4">
            <ColorPicker
              :label="txt_11"
              :color="block.settings.iconColor"
              v-model="block.settings.iconColor"
            />
          </div>

          <div class="sp-form-group">
            <label>{{txt_5}}</label>
            <SliderControl v-model="block.settings.iconFontSize" :min="10" :max="150" :step="1" />
          </div>
        </div>

        <div class="sp-form-group">
          <label>{{txt_6}}</label>
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
        Text
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
          <div>
            <label>{{txt_7}}</label>
          </div>
          <!-- {{block.settings.align}}
          <textarea v-model="block.settings.headerTxt"></textarea>-->
          <editor
            @onExecCommand="sync_align"
            v-model="block.settings.headerTxt"
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
         toolbar:
           'bold,italic,underline,strikethrough,link'

       }"
          ></editor>
        </div>

        <div class="sp-form-group">
          <label>{{txt_8}}</label>
          <div id="sp-header-tag-control" class="sp-flex">
            <button :class="{ 'sp-active': block.settings.tag == 'h1' }" @click="set_tag('h1')">h1</button>
            <button :class="{ 'sp-active': block.settings.tag == 'h2' }" @click="set_tag('h2')">h2</button>
            <button :class="{ 'sp-active': block.settings.tag == 'h3' }" @click="set_tag('h3')">h3</button>
            <button :class="{ 'sp-active': block.settings.tag == 'h4' }" @click="set_tag('h4')">h4</button>
          </div>
        </div>

        <div class="sp-form-group">
          <div>
            <label>{{txt_9}}</label>
          </div>
          <!-- {{block.settings.align}}
          <textarea v-model="block.settings.headerTxt"></textarea>-->
          <editor
            v-model="block.settings.txt"
            :init="{
         height: 200,
         branding: false,
         menubar: false,
         plugins: [
           'link'
         ],
         toolbar:
           'bold,italic,underline,strikethrough,link'
       }"
          ></editor>
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
        Styles
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
          <TypographyControl :block="block" prefix="header" />
        </div>

        <div class="sp-form-group ">
          <ColorPicker
            :label="txt_12"
            :color="block.settings.headerColor"
            v-model="block.settings.headerColor"
          />
        </div>

        <div class="sp-form-group">
          <TypographyControl :block="block"  />
        </div>

        <div class="sp-form-group ">
          <ColorPicker
            :label="txt_11"
            :color="block.settings.textColor"
            v-model="block.settings.textColor"
          />
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
  name: 'IconFeatureOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Type', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Image', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Icon', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Image Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Align', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Header Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Level', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Header Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Content', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      view: 1,
      section_1: true,
      section_2: false,
      section_3: false,
      section_4: true,
      section_5: false,
      shared: seedprod_store,
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.iconfeature, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  methods: {
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
