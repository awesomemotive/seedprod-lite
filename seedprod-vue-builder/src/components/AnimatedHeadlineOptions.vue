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
        </svg>{{txt_2}}
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
          <label>{{txt_28}}</label>
          <select v-model="block.settings.styleType" class="sp-form-select">
                <option value="highlight">{{txt_29}}</option>
                <option value="rotate">{{txt_30}}</option>
          </select>
        </div>

        <div class="sp-form-group" v-if="block.settings.styleType=='highlight'">
          <label>{{txt_31}}</label>
          <select v-model="block.settings.shapeType" class="sp-form-select">
                <option value="circle">{{txt_32}}</option>
                <option value="curly">{{txt_33}}</option>
                <option value="underline">{{txt_34}}</option>
                <option value="double">{{txt_35}}</option>
                <option value="doubleunderline">{{txt_36}}</option>
                <option value="underlinezipzag">{{txt_37}}</option>
                <option value="diagonal">{{txt_38}}</option>
                <option value="strikethrough">{{txt_39}}</option>
                <option value="x">{{txt_40}}</option>
          </select>
        </div>

        <div class="sp-form-group" v-if="block.settings.styleType=='rotate'">
          <label>{{txt_41}}</label>
          <select v-model="block.settings.animationType" class="sp-form-select">
                <option value="typing">{{txt_42}}</option>
                <option value="clip">{{txt_43}}</option>
                <option value="flip">{{txt_44}}</option>
                <option value="bounce">{{txt_45}}</option>
                <option value="roll">{{txt_46}}</option>
                <option value="zoom">{{txt_47}}</option>
                <option value="fade">{{txt_48}}</option>
                <option value="lightspeed">{{txt_49}}</option>
                <option value="slidedown">{{txt_50}}</option>
          </select>
        </div>

        <div class="sp-form-group">
          <label>{{txt_26}}</label>
          <input
              :name="'Link'"
              type="text"
              v-model="block.settings.beforeHeaderTxt"
              class="sp-form-input sp-w-full"
            />
        </div>

        <div class="sp-form-group" v-if="block.settings.styleType=='highlight'">
          <label>{{txt_6}}</label>
          <input
              :name="'Link'"
              type="text"
              v-model="block.settings.headerTxt"
              class="sp-form-input sp-w-full"
            />
        </div>

        <div class="sp-form-group"  v-if="block.settings.styleType=='rotate'">
          <div>
            <label>{{txt_6}}</label>
          </div>
          <!-- {{block.settings.align}}-->
          <textarea class="sp-form-textarea sp-w-full" v-model="block.settings.headerBiggerTxt"></textarea>
          <!--
          <editor
            @onExecCommand="sync_align"
            v-model="block.settings.headerBiggerTxt"
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
           'forecolor,backcolor',

       }"
          ></editor>
          -->
        </div>

        <div class="sp-form-group">
          <label>{{txt_27}}</label>
          <input
              :name="'Link'"
              type="text"
              v-model="block.settings.afterHeaderTxt"
              class="sp-form-input sp-w-full"
            />
        </div>

        <div
          class="sp-form-group sp-flex sp-justify-between sp-items-center sp-mt-4"
        >
          <label>{{ txt_51 }}</label>
          <div
            class="sp-bg-neutral-5 sp-flex sp-items-center sp-justify-center"
          >
            <toggle-button
              :width="40"
              :sync="true"
              style="margin-bottom: 0"
              v-model="block.settings.infiniteLoop"
            />&nbsp;
            <span
              v-if="block.settings.infiniteLoop"
              class="sp-text-11px sp-uppercase sp-pl-1 sp-font-bold"
              >{{ txt_52 }}</span
            >
            <span
              v-else
              class="sp-text-11px sp-uppercase sp-text-neutral-40 sp-pl-1 sp-font-bold"
              >{{ txt_53 }}</span
            >
          </div>
        </div>

        <div class="sp-form-group">
          <label>{{txt_54}}</label>
          <input
              :name="'Duration'"
              type="number"
              v-model="block.settings.animationDuration"
              class="sp-form-input sp-w-full"
            />
        </div>

        <div class="sp-form-group" v-if="block.settings.infiniteLoop && block.settings.styleType=='highlight'">
          <label>{{txt_55}}</label>
          <input
              :name="'Delay'"
              type="number"
              v-model="block.settings.animationDelay"
              class="sp-form-input sp-w-full"
            />
        </div>

        <div class="sp-form-group">
          <label>{{txt_7}}</label>
          <AlignControl v-model="block.settings.align" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_8}}</label>
          <SliderControl v-model="block.settings.fontSize" :min="10" :max="72" :step="1" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_9}}</label>
          <div id="sp-header-tag-control" class="sp-flex">
            <button :class="{ 'sp-active': block.settings.tag == 'h1' }" @click="set_tag('h1')">{{txt_10}}</button>
            <button :class="{ 'sp-active': block.settings.tag == 'h2' }" @click="set_tag('h2')">{{txt_11}}</button>
            <button :class="{ 'sp-active': block.settings.tag == 'h3' }" @click="set_tag('h3')">{{txt_12}}</button>
            <button :class="{ 'sp-active': block.settings.tag == 'h4' }" @click="set_tag('h4')">{{txt_13}}</button>
          </div>
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
        {{txt_4}}
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
          <TypographyControl :block="block"/>
        </div>

        <div class="sp-form-group "  v-if="block.settings.styleType=='highlight'">
          <ColorPicker
            :label="txt_56"
            :color="block.settings.strokeColor"
            v-model="block.settings.strokeColor"
          />
        </div>

        <div class="sp-form-group ">
          <ColorPicker
            :label="txt_25"
            :color="block.settings.textColor"
            v-model="block.settings.textColor"
          />
        </div>

        <div class="sp-form-group">
          <label>{{txt_14}}</label>
          <select v-model="block.settings.textShadow" class="sp-form-select">
            <option value="">{{txt_15}}</option>
            <option value="1">{{txt_16}}</option>
            <option value="2">{{txt_17}}</option>
            <option value="3">{{txt_18}}</option>
            <option value="4">{{txt_19}}</option>
            <option value="5">{{txt_20}}</option>
            <option value="6">{{txt_21}}</option>
          </select>
        </div>
      </div>

      <!-- <div class="sp-form-group">
        <label>{{txt_22}}</label>
        <ColorPicker :color="block.settings.bgColor" v-model="block.settings.bgColor" />
      </div>-->

      <SpacingSectionControl :block="block" />

      <!-- Icons -->
      <!-- <h3
        class="sp-sidebar-headers"
        @click="
				section_2 = !section_2
			"
        :class="{
				seedprod_collaspe: !section_2}"
      >
        {{txt_5}}
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
          <label>{{txt_23}}</label>
          <IconPicker v-model="block.settings.beforeIcon" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_24}}</label>
          <IconPicker v-model="block.settings.afterIcon" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
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
import SpacingSectionControl from '@/components/SpacingSectionControl.vue';

export default {
  name: 'AnimatedHeadlineOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Content', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Headline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Styles', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Icons', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Align', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Font Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Level', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'h1', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'h2', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'h3', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'h4', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Text Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'None', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Hairline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( '2X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( 'Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_23: __( 'Before Text Icon', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'After Text Icon', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __( 'Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_26: __( 'Before Headline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( 'After Headline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( 'Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( 'Highlighted', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( 'Rotating', process.env.VUE_APP_TEXTDOMAIN ),
      txt_31: __( 'Shape', process.env.VUE_APP_TEXTDOMAIN ),
      txt_32: __( 'Circle', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( 'Curly', process.env.VUE_APP_TEXTDOMAIN ),
      txt_34: __( 'Underline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_35: __( 'Double', process.env.VUE_APP_TEXTDOMAIN ),
      txt_36: __( 'Double Underline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_37: __( 'Underline Zipzag', process.env.VUE_APP_TEXTDOMAIN ),
      txt_38: __( 'Diagonal', process.env.VUE_APP_TEXTDOMAIN ),
      txt_39: __( 'Strikethrough', process.env.VUE_APP_TEXTDOMAIN ),
      txt_40: __( 'X', process.env.VUE_APP_TEXTDOMAIN ),
      txt_41: __( 'Animation', process.env.VUE_APP_TEXTDOMAIN ),
      txt_42: __( 'Typing', process.env.VUE_APP_TEXTDOMAIN ),
      txt_43: __( 'Clip', process.env.VUE_APP_TEXTDOMAIN ),
      txt_44: __( 'Flip', process.env.VUE_APP_TEXTDOMAIN ),
      txt_45: __( 'Bounce', process.env.VUE_APP_TEXTDOMAIN ),
      txt_46: __( 'Roll', process.env.VUE_APP_TEXTDOMAIN ),
      txt_47: __( 'Zoom', process.env.VUE_APP_TEXTDOMAIN ),
      txt_48: __( 'Fade', process.env.VUE_APP_TEXTDOMAIN ),
      txt_49: __( 'Light Speed', process.env.VUE_APP_TEXTDOMAIN ),
      txt_50: __( 'Slide Down', process.env.VUE_APP_TEXTDOMAIN ),
      txt_51: __( 'Infinite Loop', process.env.VUE_APP_TEXTDOMAIN ),
      txt_52: __( 'Yes', process.env.VUE_APP_TEXTDOMAIN ),
      txt_53: __( 'No', process.env.VUE_APP_TEXTDOMAIN ),
      txt_54: __( 'Duration (ms)', process.env.VUE_APP_TEXTDOMAIN ),
      txt_55: __( 'Delay (ms)', process.env.VUE_APP_TEXTDOMAIN ),
      txt_56: __( 'Stroke Color', process.env.VUE_APP_TEXTDOMAIN ),
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
    lodash.forOwn( this.shared.block_templates.header, function( value, key ) {
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
