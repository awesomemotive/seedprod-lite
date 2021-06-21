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
          <div>
            <label>{{txt_5}}</label>
          </div>
          <input v-model="block.settings.txt" class="sp-form-input sp-w-full" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_6}}</label>
          <SliderControl v-model="block.settings.width" :min="0" :max="100" :step="1" />
        </div>

        <div class="sp-form-group">
          <ColorPicker :label="txt_19" :color="block.settings.color" v-model="block.settings.color" />
        </div>
      </div>
    </div>

    <!-- Templates -->
    <div v-if="view == 2" class="sp-flex sp-items-center sp-flex-col sp-pb-8">
      <div
        class="sp-uppercase sp-text-12px sp-font-semibold sp-text-neutral-60 sp-mt-2"
      >{{txt_7}}</div>

      <div
        @click="apply_template(1)"
        class="sp-w-full sp-shadow-inner sp-progressbar-block-template-1 sp-mt-4"
        style="background-color: rgb(247, 247, 247); border-radius: 3px;"
      >
        <div
          :style="innerStyleObject"
          class="sp-flex sp-items-center sp-justify-center sp-truncate sp-text-sm sp-py-1 sp-px-2"
          style="text-align: center; justify-content: center; border-radius: 3px;  width: 60%; "
        >{{txt_8}}</div>
      </div>

      <div
        @click="apply_template(2)"
        class="sp-w-full sp-shadow-inner sp-progressbar-block-template-2 sp-mt-4"
        style="background-color: rgb(247, 247, 247); border-radius: 3px;"
      >
        <div
          :style="innerStyleObject"
          class="sp-flex sp-items-center sp-justify-center sp-truncate sp-text-sm sp-py-1 sp-px-2"
          style="text-align: center; justify-content: center; border-radius: 3px;  width: 60%; "
        >{{txt_8}}</div>
      </div>

      <div
        @click="apply_template(3)"
        class="sp-w-full sp-shadow-inner sp-progressbar-block-template-3 sp-mt-4"
        style="background-color: rgb(247, 247, 247); border-radius: 3px;"
      >
        <div
          :style="innerStyleObject"
          class="sp-flex sp-items-center sp-justify-center sp-truncate sp-text-sm sp-py-1 sp-px-2"
          style="text-align: center; justify-content: center; border-radius: 3px;  width: 60%; "
        >{{txt_8}}</div>
      </div>

      <div
        @click="apply_template(4)"
        class="sp-w-full sp-shadow-inner sp-progressbar-block-template-4 sp-mt-4"
        style="background-color: rgb(247, 247, 247); border-radius: 3px;"
      >
        <div
          :style="innerStyleObject"
          class="sp-flex sp-items-center sp-justify-center sp-truncate sp-text-sm sp-py-1 sp-px-2"
          style="text-align: center; justify-content: center; border-radius: 3px;  width: 60%; "
        >{{txt_8}}</div>
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
        {{txt_21}}
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
            :label="txt_20"
            :color="block.settings.outerColor"
            v-model="block.settings.outerColor"
          />
        </div>

        <div class="sp-form-group">
          <label>{{txt_9}}</label>
          <SliderControl v-model="block.settings.borderRadius" :min="0" :max="25" :step="1" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_10}}</label>
          <select v-model="block.settings.textShadow" class="sp-form-select">
            <option value>{{txt_11}}</option>
            <option value="1">{{txt_12}}</option>
            <option value="2">{{txt_13}}</option>
            <option value="3">{{txt_14}}</option>
            <option value="4">{{txt_15}}</option>
            <option value="5">{{txt_16}}</option>
            <option value="6">{{txt_17}}</option>
          </select>
        </div>

        <div class="sp-form-group">
          <label>{{txt_18}}</label>
          <select v-model="block.settings.shadow" class="sp-form-select">
            <option value>{{txt_11}}</option>
            <option value="1">{{txt_12}}</option>
            <option value="2">{{txt_13}}</option>
            <option value="3">{{txt_14}}</option>
            <option value="4">{{txt_15}}</option>
            <option value="5">{{txt_16}}</option>
            <option value="6">{{txt_17}}</option>
          </select>
        </div>
      </div>
       <SpacingSectionControl :block="block" />
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';
import SliderControl from '@/components/SliderControl.vue';
import ColorPicker from '@/components/ColorPicker.vue';
import TypographyControl from '@/components/TypographyControl.vue';
import PaddingControl from '@/components/PaddingControl.vue';
import tinycolor from 'tinycolor2';
import SpacingSectionControl from '@/components/SpacingSectionControl.vue';

export default {
  name: 'ProgressBarOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Content', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Templates', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Progress Bar', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Bar Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Percent', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Choose Your Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'My Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Border Radius', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Text Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'None', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Hairline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( '2X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'Styles', process.env.VUE_APP_TEXTDOMAIN ),
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
    lodash.forOwn( this.shared.block_templates.progressbar, function(
      value,
      key
    ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  created() {},
  computed: {

    // borderBottom: function(){
    //   var borderBottom = '';
    //   if(this.block.settings.blockTemplateId == 2){
    //     var darkBorderColor = tinycolor(bg)
    //         .darken(10)
    //         .toString();
    //     borderBottom = "3px solid" + darkBorderColor;
    //   }
    //   return borderBottom;
    // },
    innerStyleObject: function() {
      let w = '';
      if ( '' !== this.block.settings.width ) {
        w = this.block.settings.width + '%';
      }

      let tc = '';
      let lightness = tinycolor( this.block.settings.color );
      if ( 0.5 <= lightness.getLuminance() ) {
        tc = '#000';
        this.luminance = 'light';
      } else {
        tc = '#fff';
        this.luminance = 'dark';
      }

      let br = '';
      if ( '' !== this.block.settings.borderRadius ) {
        br = this.block.settings.borderRadius + 'px';
      }
      let fw = '';
      if ( true === this.block.settings.typographyBold ) {
        fw = 'bold';
      } else {
        fw = this.font_variant_render(
          this.block.settings.fontVariant,
          'weight'
        );
      }

      let fs = '';
      if ( true === this.block.settings.typographyItalic ) {
        fs = 'italic';
      } else {
        fs = this.font_variant_render( this.block.settings.fontVariant, 'style' );
      }

      let ts = '';
      if ( '' !== this.block.settings.fontSize ) {
        ts = this.block.settings.fontSize + 'px';
      }

      let td = '';
      if ( true === this.block.settings.typographyUnderline ) {
        td = 'underline';
      }

      let lh = '';
      if ( '' !== this.block.settings.lineHeight ) {
        lh = this.block.settings.lineHeight;
      }

      let ls = '';
      if ( '' != this.block.settings.letterSpacing ) {
        ls = this.block.settings.letterSpacing + 'px';
      }

      let tt = '';
      if ( '' != this.block.settings.typographyLetterCase ) {
        tt = this.block.settings.typographyLetterCase;
      }

      let r = '';
      let align = this.block.settings.align;
      if ( 'left' == align ) {
        r = 'flex-start';
      }
      if ( 'right' == align ) {
        r = 'flex-end';
      }
      if ( 'center' == align ) {
        r = 'center';
      }

      let bg = '';
      if ( '' == this.block.settings.color ) {
        bg = this.shared.settings.document.settings.buttonColor;
      } else {
        bg = this.block.settings.color;
      }

      return {
        'text-align': this.align_render( this.block.settings.align ),
        'justify-content': r,
        'line-height': lh,
        'letter-spacing': ls,
        'text-transform': tt,
        'text-decoration': td,
        'font-size': ts,
        'font-weight': fw,
        'font-style': fs,
        'text-shadow': this.text_shadow(
          this.block.settings.textShadow,
          this.block.settings.textColor
        ),
        'font-family': this.font_render( this.block.settings.font ),
        'border-radius': br,
        'background-color': bg,
        width: w,
        color: tc,
      };
    },
  },
  methods: {
    apply_template( id ) {
      this.block.settings.blockTemplateId = id;
    },
  },
  components: {
    SliderControl,
    ColorPicker,
    PaddingControl,
    TypographyControl,
    SpacingSectionControl,
  },
  props: {
    block: Object,
  },
};
</script>
