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
        Testimonials
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
                    v-text="testimonial_label(item, index)"
                    class="sp-form-input sp-border-none sp-drag-drop sp-cursor-move sp-truncate"
                    style="width: 210px"
                    @click="show_settings(index)"
                  ></span>
                </div>

                <button
                  v-tooltip="{
                    content: 'Duplicate',
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
                    content: 'Delete',
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
                <div class="sp-form-group">
                  <div>
                    <label>{{ txt_15 }}</label>
                  </div>
                  <!-- {{block.settings.align}}
                  <textarea v-model="block.settings.headerTxt"></textarea>-->
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

                <div class="sp-form-group">
                  <label>{{ txt_16 }}</label> {{index}}
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

                <div class="sp-form-group">
                  <label>{{ txt_19 }}</label>
                  <input
                    type="text"
                    v-model="item.title"
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

        <div class="sp-form-group">
          <label>{{ txt_6 }}</label>
          <AlignControl v-model="block.settings.align" icons="alt" />
        </div>

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
      </div>
      <h3
        class="sp-sidebar-headers"
        @click="section_5 = !section_5"
        :class="{
          seedprod_collaspe: !section_5
        }"
      >
        Carousel Settings
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

        <!-- <div class="sp-form-group sp-flex sp-justify-between sp-items-center sp-mt-4">
          <label>{{ txt_27 }}</label>
          <div
            class="sp-bg-neutral-5 sp-flex sp-items-center sp-justify-center"
          >
            <toggle-button
              :width="40"
              :sync="true"
              style="margin-bottom:0"
              v-model="block.settings.hoverPause"
            />&nbsp;
            <span
              v-if="block.settings.hoverPause"
              class="sp-text-11px sp-uppercase sp-pl-1 sp-font-bold"
              >{{ txt_24 }}</span
            >
            <span
              v-else
              class="sp-text-11px sp-uppercase sp-text-neutral-40 sp-pl-1 sp-font-bold"
              >{{ txt_25 }}</span
            >
          </div>
        </div> -->

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
        <div class="sp-form-group">
          <TypographyControl :block="block" prefix="name" />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_12"
            :color="block.settings.nameColor"
            v-model="block.settings.nameColor"
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
  name: 'FeatureOptions',
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
      txt_6: __( 'Align', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Name Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Content', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Image', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Add Testimonial', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Name', process.env.VUE_APP_TEXTDOMAIN ),
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
    lodash.forOwn( this.shared.block_templates.feature, function( value, key ) {
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
    testimonial_label( item, index ) {
      if ( '' != item.name ) {
        return item.name;
      } else {
        return 'Testimonial ' + ( index + 1 );
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
        txt: 'Testimonial ' + ( parseInt( this.block.settings.items.length ) + 1 ),
        name: 'John Smith',
        title: 'CEO',
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
