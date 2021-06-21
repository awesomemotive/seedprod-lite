<template>
  <div class="sp-typography-control">
    <div
      class="sp-flex sp-items-center sp-justify-between sp-relative sp-cursor-pointer sp-relative"
    >
      <label>{{label_prefix}} {{txt_1}}</label>
      <div
        :class="{'sp-active':display_typography}"
        class="sp-bg-neutral-10 hover:sp-bg-neutral-60 hover:sp-text-white sp-flex sp-p-2px sp-rounded-full sp-text-14px sp-font-semibold sp-pl-2 sp-pr-4 sp-py-1"
        @click="toggle_typography()"
      >
        <span class="sp-flex sp-items-center sp-justify-center  sp-items-center sp-w-5">
          <svg
            v-if="display_typography"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-4"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
          <svg
            v-if="!display_typography"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-3"
          >
            <path
              d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </span> {{txt_2}}
      </div>
      <div
        class="sp-absolute sp-bg-white sp-top-0 sp-right-0 sp-p-4 sp-z-10 sp-rounded-md sp-shadow-xl sp-mt-8 sp-mb-8"
        v-if="display_typography"
      >
        <div class="sp-form-group">
          <label>{{txt_4}}</label>
          <!-- Font -->
          <FontControl
            v-model="block.settings[pre+'font']"
            @change="load_font(block.settings[pre+'font'],block.settings[pre+'fontVariant'])"
          />

          <FontVariantControl
            v-model="block.settings[pre+'fontVariant']"
            :myfont="block.settings[pre+'font']"
            @change="load_font(block.settings[pre+'font'],block.settings[pre+'fontVarient'])"
          />
        </div>

        <div class="sp-flex sp-justify-between sp-items-center sp-my-2 sp-mt-4">
          <div class="sp-flex">
            <button
              class="sp-w-32px sp-h-32px sp-bg-neutral-10 sp-rounded-full sp-flex sp-justify-center sp-items-center sp-mr-1 hover:sp-bg-neutral-15"
              @click="set_device('desktop')"
              :class="{ 'sp-active': currently_editing_device == 'desktop' }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-w-4 sp-h-4 sp-fill-current"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"
                />
              </svg>
            </button>
            <button
              class="sp-w-32px sp-h-32px sp-bg-neutral-10 sp-rounded-full sp-flex sp-justify-center sp-items-center sp-mr-1 hover:sp-bg-neutral-15"
              @click="set_device('mobile')"
              :class="{ 'sp-active': currently_editing_device == 'mobile' }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-w-4 sp-fill-current"
              >
                <path
                  d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"
                />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </button>
          </div>

          <div>
            <!-- <span
              class="sp-text-xs sp-inline-block sp-mr-2"
              :class="{'sp-underline':block.settings.typographyUnit == 'px'}"
              @click="block.settings.typographyUnit = 'px'"
            >PX</span>
            <span
              class="sp-text-xs"
              :class="{'sp-underline':block.settings.typographyUnit == '%'}"
              @click="block.settings.typographyUnit = '%'"
            >%</span>-->
          </div>
        </div>

        <div class="sp-form-group">
          <label>{{txt_5}}</label>
          <SliderControl
            v-if="currently_editing_device == 'desktop'"
            v-model="block.settings[pre+'fontSize']"
            :min="10"
            :max="72"
            :step="1"
          />
          <SliderControl
            v-else
            v-model="block.settings[pre+'fontSize_mobile']"
            :min="10"
            :max="72"
            :step="1"
          />
        </div>
        <div class="sp-form-group">
          <label>{{txt_6}}</label>
          <SliderControl
            v-if="currently_editing_device == 'desktop'"
            v-model="block.settings[pre+'lineHeight']"
            :min="0.5"
            :max="10"
            :step="0.1"
          />
          <SliderControl
            v-else
            v-model="block.settings[pre+'lineHeight_mobile']"
            :min="0.5"
            :max="10"
            :step="0.1"
          />
        </div>

        <div class="sp-form-group">
          <label>{{txt_7}}</label>
          <SliderControl
            v-if="currently_editing_device == 'desktop'"
            v-model="block.settings[pre+'letterSpacing']"
            :min="0"
            :max="50"
            :step="1"
          />
          <SliderControl
            v-else
            v-model="block.settings[pre+'letterSpacing_mobile']"
            :min="0"
            :max="50"
            :step="1"
          />
        </div>

        <div class="sp-flex">
          <div class="sp-form-group sp-w-full">
            <label>{{txt_8}}</label>
            <div class="sp-flex ">
              <button
                class="sp-w-32px sp-h-32px sp-bg-neutral-10 sp-rounded-full sp-flex sp-justify-center sp-items-center sp-items-center sp-mr-1 hover:sp-bg-neutral-15"
                @click="update_style('bold')"
                :class="{ 'sp-active': block.settings[pre+'typographyBold'] == true}"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-w-5 sp-fill-current"
                >
                  <path
                    d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </button>
              <button
                class="sp-w-32px sp-h-32px sp-bg-neutral-10 sp-rounded-full sp-flex sp-justify-center sp-items-center sp-items-center sp-mr-1 hover:sp-bg-neutral-15"
                @click="update_style('italic')"
                :class="{ 'sp-active': block.settings[pre+'typographyItalic'] == true }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-w-5 sp-fill-current"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" />
                </svg>
              </button>
              <button
                class="sp-w-32px sp-h-32px sp-bg-neutral-10 sp-rounded-full sp-flex sp-justify-center sp-items-center sp-mr-1 hover:sp-bg-neutral-15"
                @click="update_style('underline')"
                :class="{ 'sp-active': block.settings[pre+'typographyUnderline'] == true}"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-w-5 sp-fill-current"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="sp-form-group sp-w-full">
            <label>{{txt_9}}</label>
            <AlignControl v-model="block.settings[pre+'align']" />
          </div>
        </div>

        <div class="sp-form-group">
          <label>{{txt_10}}</label>
          <div id="sp-letter-case-control" class="sp-flex ">
            <button
              class="sp-w-20"
              :class="{ 'sp-active': block.settings[pre+'typographyLetterCase'] == '' }"
              @click="block.settings[pre+'typographyLetterCase'] = ''"
            >{{txt_11}}</button>
            <button
              :class="{ 'sp-active': block.settings[pre+'typographyLetterCase'] == 'uppercase' }"
              @click="block.settings[pre+'typographyLetterCase'] = 'uppercase'"
            >AG</button>
            <button
              :class="{ 'sp-active': block.settings[pre+'typographyLetterCase'] == 'capitalize' }"
              @click="block.settings[pre+'typographyLetterCase'] = 'capitalize'"
            >Ag</button>
            <button
              :class="{ 'sp-active': block.settings[pre+'typographyLetterCase'] == 'lowercase' }"
              @click="block.settings[pre+'typographyLetterCase'] = 'lowercase'"
            >ag</button>
          </div>
        </div>
        <div class="sp-flex sp-justify-end sp-border-t sp-border-neutral-20 sp-mt-6">

        <button
          @click="display_typography = false"
          class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-text-neutral-80 sp-py-2 sp-px-3 sp-rounded sp-flex sp-items-center sp-mt-4 sp-text-xs sp-font-semibold sp-leading-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="sp-fill-current sp-w-4 sp-mr-1"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>{{txt_3}}
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';
import FontControl from '@/components/FontControl.vue';
import FontVariantControl from '@/components/FontVariantControl.vue';
import AlignControl from '@/components/AlignControl.vue';
import SliderControl from '@/components/SliderControl.vue';

export default {
  name: 'TypographyControl',
  mixins: [ helpers ],
  data() {
    return {
      txt_1: __( 'Typography', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Edit', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Close', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Font Family', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Font Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Line Height', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Letter Spacing', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Alignment', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Letter Case', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Normal', process.env.VUE_APP_TEXTDOMAIN ),
      currently_editing_device: seedprod_store.preview_mode,
      display_typography: false,
      shared: seedprod_store,
    };
  },

  mounted: function() {

    //console.log(this.pre);
  },
  methods: {
    toggle_typography() {
      this.display_typography = ! this.display_typography;
    },
    update_style( s ) {
      if ( 'bold' == s ) {
        this.block.settings[this.pre + 'typographyBold'] = ! this.block.settings[
          this.pre + 'typographyBold'
        ];
      }
      if ( 'underline' == s ) {
        this.block.settings[this.pre + 'typographyUnderline'] = ! this.block
          .settings[this.pre + 'typographyUnderline'];
      }
      if ( 'italic' == s ) {
        this.block.settings[this.pre + 'typographyItalic'] = ! this.block
          .settings[this.pre + 'typographyItalic'];
      }
    },
    set_device( v ) {
      this.currently_editing_device = v;
    },
  },
  watch: {
    fontSizeMobile() {
      this.debounce_update_mobile_css();
    },
    letterSpacingMobile() {
      this.debounce_update_mobile_css();
    },
    lineHeightMobile() {
      this.debounce_update_mobile_css();
    },
    'shared.preview_mode': function( newVal, oldVal ) {
      this.set_device( newVal );
    },
  },
  computed: {
    fontSizeMobile: function() {
      return this.block.settings[this.pre + 'fontSize_mobile'];
    },
    letterSpacingMobile: function() {
      return this.block.settings[this.pre + 'letterSpacing_mobile'];
    },
    lineHeightMobile: function() {
      return this.block.settings[this.pre + 'lineHeight_mobile'];
    },
    label_prefix: function() {
      let t = '';
      if ( this.prefix !== undefined ) {
        t = this.prefix.charAt( 0 ).toUpperCase() + this.prefix.slice( 1 );
      }

      // Override with label text if passed.
      if ( this.label !== undefined ) {
        t = this.label;
      }
      return t;
    },
    pre: function() {
      if ( this.prefix === undefined ) {
        return '';
      } else {
        return this.prefix;
      }
    },
  },
  components: {
    FontControl,
    FontVariantControl,
    AlignControl,
    SliderControl,
  },
  props: {
    block: Object,
    prefix: String,
    label: String,
  },
};
</script>
