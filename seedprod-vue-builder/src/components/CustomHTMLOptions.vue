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
          <textarea v-model="block.settings.code" class="sp-form-textarea sp-w-full sp-h-48"></textarea>
          <button
            @click="show_modal_customhtml = true"
            class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-text-neutral-80 sp-py-2.5 sp-px-5 sp-rounded sp-flex sp-items-center sp-mt-3 sp-text-sm sp-font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              class="sp-w-4 sp-fill-current sp-mr-2"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
              />
            </svg>{{txt_4}}
          </button>
        </div>
      </div>
    </div>

    <!-- Advanced -->
    <div v-if="view == 3">
      <SpacingSectionControl :block="block" />
    </div>

    <modal
      v-if="show_modal_customhtml"
      @close="show_modal_customhtml = false"
      class="sp-edit-custom-css-modal"
    >
      <div slot="body" class="sp-py-6 sp-px-10 sp-relative">
        <h3 class="sp-text-lg sp-font-bold sp-mb-6">{{txt_6}}</h3>
        <textarea v-model="block.settings.code" class="sp-custom-css sp-form-textarea"></textarea>

        <button
          @click="show_modal_customhtml = false"
          class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-text-neutral-80 sp-py-2.5 sp-px-5 sp-rounded sp-flex sp-items-center sp-mt-3 sp-text-sm sp-font-semibold"
        >{{txt_7}}</button>

        <button
          class="sp-text-neutral-40 sp-absolute sp-top-0 sp-right-0 sp-mt-2 sp-mr-2"
          @click="show_modal_customhtml  = false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-6 sp-h-6"
          >
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </div>
      <h3 slot="header"></h3>
    </modal>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';
import SliderControl from '@/components/SliderControl.vue';
import PaddingControl from '@/components/PaddingControl.vue';
import SpacingSectionControl from '@/components/SpacingSectionControl.vue';
import Modal from '@/components/Modal.vue';

export default {
  name: 'CustomHTMLOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Content', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Settings', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Expand Editor', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Custom Code', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Edit Custom HMTL', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Close', process.env.VUE_APP_TEXTDOMAIN ),
      show_modal_customhtml: false,
      view: 1,
      section_1: true,
      section_2: false,
      section_3: true,
      section_4: true,
      shared: seedprod_store,
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.customhtml, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  created() {},
  methods: {},
  components: { SliderControl, Modal, PaddingControl, SpacingSectionControl },
  props: {
    block: Object,
  },
};
</script>
