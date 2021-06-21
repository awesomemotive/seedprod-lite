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
          <label>{{txt_5}}</label>
          <select v-model="block.settings.type" class="sp-form-select">
            <option value="youtube">{{txt_6}}</option>
            <option value="custom">{{txt_7}}</option>
          </select>
        </div>

        <div class="sp-form-group" v-if="block.settings.type == 'youtube'">
          <label>{{txt_8}}</label>
          <input v-model="block.settings.youtubeUrl" class="sp-form-input sp-w-full" />
        </div>

        <div class="sp-form-group" v-if="block.settings.type == 'custom'">
          <label>{{txt_9}}</label>
          <textarea v-model="block.settings.code" class="sp-form-textarea sp-w-full"></textarea>
        </div>

        <div class="sp-form-group">
          <label>{{txt_10}}</label>
          <SliderControl v-model="block.settings.width" :min="10" :max="100" :step="10" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_11}}</label>
          <AlignControl v-model="block.settings.align" icons="alt" />
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
          <label>{{txt_12}}</label>
          <select v-model="block.settings.shadow" class="sp-form-select">
            <option value>{{txt_13}}</option>
            <option value="1">{{txt_14}}</option>
            <option value="2">{{txt_15}}</option>
            <option value="3">{{txt_16}}</option>
            <option value="4">{{txt_17}}</option>
            <option value="5">{{txt_18}}</option>
            <option value="6">{{txt_19}}</option>
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
import AlignControl from '@/components/AlignControl.vue';
import PaddingControl from '@/components/PaddingControl.vue';
import SpacingSectionControl from '@/components/SpacingSectionControl.vue';

export default {
  name: 'VideoOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Content', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Video', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Styles', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Type', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'YouTube', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Custom', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'YouTube URL', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Custom Video Code', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Width', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Align', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'None', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Hairline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( '2X Large', process.env.VUE_APP_TEXTDOMAIN ),
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
    lodash.forOwn( this.shared.block_templates.video, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  created() {},
  methods: {},
  components: {
    SliderControl,
    AlignControl,
    PaddingControl,
    SpacingSectionControl,
  },
  props: {
    block: Object,
  },
};
</script>
