<template>
  <div>
    <!-- Block Top Nav -->
    <div
      id="sp-blocks-edit-sections"
      class="sp-flex"
    >
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
          <path
            d="M0 0h24v24H0z"
            fill="none"
          />
        </svg>{{ txt_1 }}
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
          <path
            d="M0 0h24v24H0V0z"
            fill="none"
          />
          <path
            d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
          />
        </svg>{{ txt_2 }}
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
        {{ txt_3 }}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-6 sp-fill-current"
            :class="{
              'sp-hidden': !section_1}"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path
              d="M0 0h24v24H0V0z"
              fill="none"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
              'sp-hidden': section_1}"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path
              d="M0 0h24v24H0V0z"
              fill="none"
            />
          </svg>
        </span>
      </h3>
      <div
        class="seedprod-sidebar-action-body"
        v-if="section_1"
      >
        <!--
        <div class="sp-form-group">
          <label>{{txt_9}}</label>
          <select v-model="block.settings.layoutType" class="sp-form-select">
            <option value="standard">{{txt_10}}</option>
            <option value="button">{{txt_11}}</option>
            <option value="button_count">{{txt_12}}</option>
            <option value="box_count">{{txt_13}}</option>
          </select>
        </div>

        <div class="sp-form-group">
          <label>{{txt_14}}</label>
          <select v-model="block.settings.buttonSize" class="sp-form-select">
            <option value="small">{{txt_15}}</option>
            <option value="large">{{txt_16}}</option>
          </select>
        </div>

        -->

        <div class="sp-form-group">
          <label>{{ txt_17 }}</label>
          <select
            v-model="block.settings.colorScheme"
            class="sp-form-select"
          >
            <option value="light">
              {{ txt_18 }}
            </option>
            <option value="dark">
              {{ txt_19 }}
            </option>
          </select>
        </div>

        <div
          class="sp-form-group sp-flex sp-justify-between sp-items-center sp-mt-4"
        >
          <label>{{ txt__1 }}</label>
          <div
            class="sp-bg-neutral-5 sp-flex sp-items-center sp-justify-center"
          >
            <toggle-button
              :width="40"
              :sync="true"
              style="margin-bottom: 0"
              v-model="block.settings.conversationNone"
            />&nbsp;
            <span
              v-if="block.settings.conversationNone"
              class="sp-text-11px sp-uppercase sp-pl-1 sp-font-bold"
            >{{ txt__2 }}</span>
            <span
              v-else
              class="sp-text-11px sp-uppercase sp-text-neutral-40 sp-pl-1 sp-font-bold"
            >{{ txt__3 }}</span>
          </div>
        </div>

        <div
          class="sp-form-group sp-flex sp-justify-between sp-items-center sp-mt-4"
        >
          <label>{{ txt__4 }}</label>
          <div
            class="sp-bg-neutral-5 sp-flex sp-items-center sp-justify-center"
          >
            <toggle-button
              :width="40"
              :sync="true"
              style="margin-bottom: 0"
              v-model="block.settings.cardsHidden"
            />&nbsp;
            <span
              v-if="block.settings.cardsHidden"
              class="sp-text-11px sp-uppercase sp-pl-1 sp-font-bold"
            >{{ txt__2 }}</span>
            <span
              v-else
              class="sp-text-11px sp-uppercase sp-text-neutral-40 sp-pl-1 sp-font-bold"
            >{{ txt__3 }}</span>
          </div>
        </div>

        <div class="sp-form-group">
          <div><label>{{ txt__8 }}</label></div>
          <input
            :name="'Tweet Id'"
            type="text"
            v-model="block.settings.tweeterid"
            v-validate="'required'"
            class="sp-form-input sp-w-full"
          >
          <span
            v-show="errors.has('Link')"
            class="help-block has-error sp-text-red"
          >{{ errors.first("Tweet Id") }}</span>
        </div>

        <div class="sp-form-group">
          <label>{{ txt_20 }}</label>
          <AlignControl
            v-model="block.settings.align"
            icons="alt"
          />
        </div>

        <div class="sp-form-group">
          <label>{{ txt_21 }}</label>
          <SliderControl
            v-model="block.settings.width"
            :min="250"
            :max="550"
            :step="10"
          />
        </div>

        <div class="sp-form-group">
          <label>{{ txt_22 }}</label>

          <select
            v-model="block.settings.lang"
            class="sp-form-select"
          >
            <option value="">
              {{ txt_l_1 }} 
            </option><option value="en">
              {{ txt_l_2 }} 
            </option><option value="ar">
              {{ txt_l_3 }} 
            </option><option value="bn">
              {{ txt_l_4 }} 
            </option><option value="cs">
              {{ txt_l_5 }} 
            </option><option value="da">
              {{ txt_l_6 }}
            </option><option value="de">
              {{ txt_l_7 }}
            </option><option value="el">
              {{ txt_l_8 }}
            </option><option value="es">
              {{ txt_l_9 }}
            </option><option value="fa">
              {{ txt_l_10 }}
            </option><option value="fi">
              {{ txt_l_11 }}
            </option><option value="fil">
              {{ txt_l_12 }}
            </option><option value="fr">
              {{ txt_l_13 }}
            </option><option value="he">
              {{ txt_l_14 }}
            </option><option value="hi">
              {{ txt_l_15 }}
            </option><option value="hu">
              {{ txt_l_16 }}
            </option><option value="id">
              {{ txt_l_17 }}
            </option><option value="it">
              {{ txt_l_18 }}
            </option><option value="ja">
              {{ txt_l_19 }}
            </option><option value="ko">
              {{ txt_l_20 }}
            </option><option value="msa">
              {{ txt_l_21 }}
            </option><option value="nl">
              {{ txt_l_22 }}
            </option><option value="no">
              {{ txt_l_23 }}
            </option><option value="pl">
              {{ txt_l_24 }}
            </option><option value="pt">
              {{ txt_l_25 }}
            </option><option value="ro">
              {{ txt_l_26 }}
            </option><option value="ru">
              {{ txt_l_27 }}
            </option><option value="sv">
              {{ txt_l_28 }}
            </option><option value="th">
              {{ txt_l_29 }}
            </option><option value="tr">
              {{ txt_l_30 }}
            </option><option value="uk">
              {{ txt_l_31 }}
            </option><option value="ur">
              {{ txt_l_32 }}
            </option><option value="vi">
              {{ txt_l_33 }}
            </option><option value="zh-cn">
              {{ txt_l_34 }}
            </option><option value="zh-tw">
              {{ txt_l_35 }}
            </option>
          </select>

        </div>
      </div>
    </div>

    <!-- Advanced -->
    <div v-if="view == 3">
      <SpacingSectionControl :block="block" />
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';
import ColorPicker from '@/components/ColorPicker.vue';
import TypographyControl from '@/components/TypographyControl.vue';
import AlignControl from '@/components/AlignControl.vue';
import SliderControl from '@/components/SliderControl.vue';
import FontControl from '@/components/FontControl.vue';
import FontVariantControl from '@/components/FontVariantControl.vue';
import PaddingControl from '@/components/PaddingControl.vue';
import HelpTip from '@/components/HelpTip.vue';
import SpacingSectionControl from '@/components/SpacingSectionControl.vue';

export default {
  name: 'TwitterEmbedTweetOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt__1: __( 'Hide Conversation', process.env.VUE_APP_TEXTDOMAIN ),
      txt__2: __( 'Yes', process.env.VUE_APP_TEXTDOMAIN ),
      txt__3: __( 'No', process.env.VUE_APP_TEXTDOMAIN ),
      txt__4: __( 'Hide Photo/Videos/Cards', process.env.VUE_APP_TEXTDOMAIN ),
      txt__5: __( 'Target Url', process.env.VUE_APP_TEXTDOMAIN ),
      txt__6: __( 'Current Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt__7: __( 'Custom', process.env.VUE_APP_TEXTDOMAIN ),
      txt__8: __( 'Tweet ID', process.env.VUE_APP_TEXTDOMAIN ),
      txt__9: __( 'Url Format', process.env.VUE_APP_TEXTDOMAIN ),
      txt__10: __( 'Plain Permalink', process.env.VUE_APP_TEXTDOMAIN ),
      txt__11: __( 'Pretty Permalink', process.env.VUE_APP_TEXTDOMAIN ),
      txt_1: __( 'Content', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Twitter Setting', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Styles', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Facebook App Id:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Type', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Like', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Recommend', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Layout', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Standard', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Button Count', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Box Count', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Color Scheme', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Light', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Dark', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'Align', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'Width', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( 'Language', process.env.VUE_APP_TEXTDOMAIN ),
      txt_23: __( 'Hairline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_26: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( 'X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( '2X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( 'Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( 'Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_31: __( 'Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_32: __( 'Text Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( 'Set your Facebook App ID in the ', process.env.VUE_APP_TEXTDOMAIN ),
      txt_34: __( 'Page Settings', process.env.VUE_APP_TEXTDOMAIN ),
      txt_35: __( 'You are connected to Facebook App', process.env.VUE_APP_TEXTDOMAIN ),
      txt_36: __( 'Change App', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_1: __( 'Automatic', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_2: __( 'English (default)', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_3: __( 'Arabic', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_4: __( 'Bengali', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_5: __( 'Czech', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_6: __( 'Danish', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_7: __( 'German', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_8: __( 'Greek', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_9: __( 'Spanish', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_10: __( 'Persian', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_11: __( 'Finnish', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_12: __( 'Filipino', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_13: __( 'French', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_14: __( 'Hebrew', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_15: __( 'Hindi', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_16: __( 'Hungarian', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_17: __( 'Indonesian', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_18: __( 'Italian', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_19: __( 'Japanese', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_20: __( 'Korean', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_21: __( 'Malay', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_22: __( 'Dutch', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_23: __( 'Norwegian', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_24: __( 'Polish', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_25: __( 'Portuguese', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_26: __( 'Romanian', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_27: __( 'Russian', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_28: __( 'Swedish', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_29: __( 'Thai', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_30: __( 'Turkish', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_31: __( 'Ukrainian', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_32: __( 'Urdu', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_33: __( 'Vietnamese', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_34: __( 'Chinese (Simplified)', process.env.VUE_APP_TEXTDOMAIN ),
      txt_l_35: __( 'Chinese (Traditional)', process.env.VUE_APP_TEXTDOMAIN ),
      view: 1,
      section_1: true,
      section_2: false,
      section_3: false,
      section_4: true,
      conversation: '',
      cards: '',
      shared: seedprod_store,
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.text, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });

    setTimeout( function() {
      twttr.widgets.load(
            document.getElementById('sp-twitterembedtimeline-' + self.block.id)
      );
    }, 600 );

    /*
    setTimeout( function() {
      self.onTwitterEmbedTweetChange();
      //twttr.widgets.load();
    }, 500 );
    */

  },
  created() {
    //this.onTwitterEmbedTweetChange();
  },
  methods: {
    onTwitterEmbedTweetChange() {

          let self = this;

          twttr.widgets.load(
                    document.getElementById('sp-twitterembedtweet-' + self.block.id)
          );

          setTimeout( function() {

              document.getElementById( 'sp-twitterembedtweet-' + self.block.id ).innerHTML = '';
              let tweetid = self.block.settings.tweeterid;

              window.twttr.widgets.createTweet( tweetid, document.getElementById( 'sp-twitterembedtweet-' + self.block.id ), {
                conversation: self.conversation,
                cards: self.cards,
                width: self.block.settings.width,
                align: self.block.settings.align,
                theme: self.block.settings.colorScheme,
                lang : self.block.settings.lang,
              });

          }, 400 );
    },
    changeConversionData() {
      if ( true == this.block.settings.conversationNone ) {
        this.conversation = 'none';
      } else {
        this.conversation = '';
      }
    },
    changeCardsData() {
      if ( true == this.block.settings.cardsHidden ) {
        this.cards = 'hidden';
      } else {
        this.cards = '';
      }
    },

  },
  watch: {

    'block.settings.layoutType': function( newVal, oldVal ) {
      this.onTwitterEmbedTweetChange();
    },
    'block.settings.buttonSize': function( newVal, oldVal ) {
      this.onTwitterEmbedTweetChange();
    },
    'block.settings.conversationNone': function( newVal, oldVal ) {
      this.changeConversionData();
      this.onTwitterEmbedTweetChange();
    },
    'block.settings.cardsHidden': function( newVal, oldVal ) {
      this.changeCardsData();
      this.onTwitterEmbedTweetChange();
    },
    'block.settings.colorScheme': function( newVal, oldVal ) {
      this.onTwitterEmbedTweetChange();
    },
    'block.settings.tweeterid': function( newVal, oldVal ) {
      this.onTwitterEmbedTweetChange();
    },
    'block.settings.width': function( newVal, oldVal ) {
      this.onTwitterEmbedTweetChange();
    },
    'block.settings.lang': function( newVal, oldVal ) {
      this.onTwitterEmbedTweetChange();
    },
  },
  components: {
    ColorPicker,
    AlignControl,
    SliderControl,
    FontControl,
    FontVariantControl,
    PaddingControl,
    HelpTip,
    TypographyControl,
    SpacingSectionControl,
  },
  props: {
    block: Object,
  },
};
</script>
