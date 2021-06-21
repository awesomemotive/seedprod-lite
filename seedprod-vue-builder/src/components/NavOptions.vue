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
                  <button
                    class="sp-border-r sp-border-neutral-20 sp-rounded-tl-md sp-rounded-bl-md sp-w-42px sp-h-42px sp-inline-block sp-border-r-0 sp-text-lg sp-flex sp-items-center sp-justify-center sp-bg-white sp-text-neutral-80 sp-cursor-move sp-drag-drop"
                  >
                    <i class="fas fa-bars"></i>
                  </button>

                  <span
                    v-text="item.txt"
                    class="sp-rounded-tl-none sp-rounded-bl-none sp-form-input sp-border-none sp-truncate"
                    style="width:160px"
                    @click="show_settings(index)"
                  ></span>
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
                    <label>{{txt_13}}</label>
                  </div>
                  <input v-model="item.txt" class="sp-form-input sp-w-full" />
                </div>

                <div class="sp-form-group">
                  <div>
                    <label>{{txt_14}}</label>
                  </div>
                  <input v-model="item.url" class="sp-form-input sp-w-full" />
                </div>

                <div>
                  <label class="sp-inline-flex sp-items-center">
                    <input
                      type="checkbox"
                      class="sp-form-checkbox sp-h-4 sp-w-4 sp-text-primary"
                      v-model="item.openNewWindow"
                    />
                    <span class="sp-ml-2 sp-text-sm">{{txt_15}}</span>
                  </label>
                </div>

                <div>
                  <label class="sp-inline-flex sp-items-center">
                    <input
                      type="checkbox"
                      class="sp-form-checkbox sp-h-4 sp-w-4 sp-text-primary"
                      v-model="item.noFollow"
                    />
                    <span class="sp-ml-2 sp-text-sm">{{txt_16}}</span>
                  </label>
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

        <div class="sp-form-group">
          <label>{{txt_5}}</label>
          <SliderControl v-model="block.settings.fontSize" :min="10" :max="72" :step="1" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_6}}</label>
          <SliderControl v-model="block.settings.spaceBetween" :min="1" :max="100" :step="1" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_7}}</label>
          <AlignControl v-model="block.settings.align" />
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
        <div class="sp-form-group sp-flex sp-justify-between sp-items-center">
          <label>{{txt_9}}</label>
          <div class="sp-flex sp-justify-center sp-items-center">
            <button
              @click="block.settings.layout = 'v'"
              class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-neutral-80 sp-py-2 sp-px-3 sp-rounded sp-flex sp-items-center sp-text-xs sp-font-semibold sp-leading-none sp-mr-1 sp-rounded-full"
              :class="{'sp-active':block.settings.layout == 'v' }"
            >{{txt_10}}</button>
            <button
              @click="block.settings.layout = 'h'"
              class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-neutral-80 sp-py-2 sp-px-3 sp-rounded sp-flex sp-items-center sp-text-xs sp-font-semibold sp-leading-none sp-rounded-full"
              :class="{'sp-active':block.settings.layout == 'h' }"
            >{{txt_11}}</button>
          </div>
        </div>
        <div class="sp-form-group">
          <TypographyControl :block="block" />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_12"
            :color="block.settings.textColor"
            v-model="block.settings.textColor"
          />
        </div>

        <div class="sp-form-group">
          <label>{{txt_100}}</label>
          <select v-model="block.settings.textShadow" class="sp-form-select">
            <option value>{{txt_101}}</option>
            <option value="1">{{txt_102}}</option>
            <option value="2">{{txt_103}}</option>
            <option value="3">{{txt_104}}</option>
            <option value="4">{{txt_105}}</option>
            <option value="5">{{txt_106}}</option>
            <option value="6">{{txt_107}}</option>
          </select>
        </div>
      </div>

      <SpacingSectionControl :block="block" />
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { helpers } from '../mixins/helpers.js';
import ColorPicker from '@/components/ColorPicker.vue';
import IconPicker from '@/components/IconPicker.vue';
import AlignControl from '@/components/AlignControl.vue';
import SliderControl from '@/components/SliderControl.vue';
import FontControl from '@/components/FontControl.vue';
import FontVariantControl from '@/components/FontVariantControl.vue';
import TypographyControl from '@/components/TypographyControl.vue';
import PaddingControl from '@/components/PaddingControl.vue';
import HelpTip from '@/components/HelpTip.vue';
import { __ } from '@wordpress/i18n';
import Editor from '@tinymce/tinymce-vue';
import SpacingSectionControl from '@/components/SpacingSectionControl.vue';

export default {
  name: 'BulletListOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Content', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Settings', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Add New Item', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Font Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Space Between', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Align', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Advanced Styles', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'List Layout', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Vertical', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Horizontal', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Text Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'URL Link', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Open In New Window', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Add "No Follow"', process.env.VUE_APP_TEXTDOMAIN ),
      txt_100: __( 'Text Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_101: __( 'None', process.env.VUE_APP_TEXTDOMAIN ),
      txt_102: __( 'Hairline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_103: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_104: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_105: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_106: __( 'X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_107: __( '2X Large', process.env.VUE_APP_TEXTDOMAIN ),
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
    lodash.forOwn( this.shared.block_templates.nav, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  created() {},
  methods: {
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
      console.log( lastitem );
      let index = this.block.settings.items.push({
        icon: lastitem.icon,
        txt: 'Item ' + ( parseInt( this.block.settings.items.length ) + 1 ),
      });
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
    IconPicker,
    AlignControl,
    SliderControl,
    FontControl,
    FontVariantControl,
    TypographyControl,
    PaddingControl,
    HelpTip,
    editor: Editor,
    SpacingSectionControl,
  },
  props: {
    block: Object,
  },
};
</script>
