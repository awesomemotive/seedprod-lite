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
          <div>
            <label>{{txt_6}}</label>
          </div>
          <!-- {{block.settings.align}}
          <textarea v-model="block.settings.headerTxt"></textarea>-->
          <editor
              ref="headerTxtRef"
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

         toolbar1:
           'bold,italic,underline,strikethrough,link,wp_adv',
              toolbar2:
           'forecolor,backcolor'

       }"
          ></editor>
            <span v-if="shared.page_path == 'seedprod_pro' && shared.per.includes('dm')">
                <DynamicTextControl v-model="block.settings.txt" :block="block" inputname="headerTxt" /> 
          </span>
          <span v-else-if="shared.page_path == 'seedprod_pro'">
              <button @click="showUpgradeModal = true" class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-text-neutral-80 sp-py-2.5 sp-px-5 sp-rounded sp-flex sp-items-center sp-mt-3 sp-text-sm sp-font-semibold"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sp-current-fill sp-w-4 sp-h-4 sp-mr-2"><path d="M0,0h24v24H0V0z" fill="none"></path><path d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"></path></svg> {{txt_119}}
            </button>
          </span>
          <span v-else-if="shared.page_path == 'seedprod_lite'">
             <button @click="showUpsellModal = true" class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-text-neutral-80 sp-py-2.5 sp-px-5 sp-rounded sp-flex sp-items-center sp-mt-3 sp-text-sm sp-font-semibold"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sp-current-fill sp-w-4 sp-h-4 sp-mr-2"><path d="M0,0h24v24H0V0z" fill="none"></path><path d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"></path></svg> {{txt_119}}
            </button>
          </span> 
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
        <!-- Lite CTA -->
    <modal v-if="showUpsellModal" @close="showUpsellModal = false" class="sp-w-550px">
      <div slot="body" class="sp-px-10 sp-py-12 sp-text-neutral sp-relative">
          <button
          class="sp-text-neutral-40 hover:sp-text-neutral-60 sp-absolute sp-top-0 sp-right-0 sp-m-2"
          @click="showUpsellModal = false"
        > <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-6 sp-h-6"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            />
          </svg>
        </button>
        <LiteCTABuilder feature_source="dyanmic-text" feature="Dynamic Text"  />
           </div>
      <h3 slot="header"></h3>
    </modal>

    <!-- Pro CTA -->
    <modal v-if="showUpgradeModal" @close="showUpgradeModal = false" class="sp-w-550px">
      <div slot="body" class="sp-px-10 sp-py-12 sp-text-neutral sp-relative">
          <button
          class="sp-text-neutral-40 hover:sp-text-neutral-60 sp-absolute sp-top-0 sp-right-0 sp-m-2"
          @click="showUpgradeModal = false"
        > <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-6 sp-h-6"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            />
          </svg>
        </button>
        <UpgradeCTABuilder feature_source="dyanmic-text" feature="Dynamic Text"  />
           </div>
      <h3 slot="header"></h3>
    </modal>
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
import DynamicTextControl from '@/components/DynamicTextControl.vue';
import LiteCTABuilder from '@/components/LiteCTABuilder.vue';
import UpgradeCTABuilder from '@/components/UpgradeCTABuilder.vue';
import modal from '@/components/Modal.vue';

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
      txt_119: __( 'Insert Dynamic Text', process.env.VUE_APP_TEXTDOMAIN ),
      view: 1,
      section_1: true,
      section_2: false,
      section_3: false,
      section_4: true,
      showUpsellModal: false,
      showUpgradeModal: false,
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
    DynamicTextControl,
    LiteCTABuilder,
    UpgradeCTABuilder,
    modal
  },
  props: {
    block: Object,
  },
};
</script>
