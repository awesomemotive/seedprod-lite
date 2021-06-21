<template>
  <div>
    <!-- Top Nav -->
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
      <!-- Settings -->
      <div class="seedprod-sidebar-action-body" v-if="section_1">
        <!-- Field List -->
        <div class="sp-form-group">
          <draggable :list="block.settings.items">
            <div
              v-for="(item, index) in block.settings.items"
              :key="index"
              class="sp-flex sp-items-center sp-mb-3"
              @mouseover="current_index = index"
              @mouseleave="current_index = false"
            >
              <button
                v-if="item.icon"
                class="sp-border sp-border-neutral-20 sp-rounded-tl-md sp-rounded-bl-md sp-w-42px sp-h-42px sp-inline-block sp-border-r-0 sp-text-lg sp-flex sp-items-center sp-justify-center sp-bg-white sp-text-neutral-80"
              >
                <i :class="item.icon"></i>
              </button>
              <button
                v-else
                class="sp-border sp-border-neutral-20 sp-rounded-tl-md sp-rounded-bl-md sp-w-42px sp-h-42px sp-inline-block sp-border-r-0 sp-text-lg sp-flex sp-items-center sp-justify-center sp-bg-neutral-10 sp-text-neutral-40 hover:sp-bg-white hover:sp-text-neutral-80"
                v-tooltip="{content:'Add Icon',delay:{ show: 1500, hide: 0 }}"
              >
                <i class="far fa-image"></i>
              </button>
              <input
                v-model="item.txt"
                class="sp-rounded-tl-none sp-rounded-bl-none sp-form-input"
                style="width:178px"
              />

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
            </svg>{{txt_4}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';
import draggable from 'vuedraggable';

export default {
  name: 'FormOptions',
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
      current_index: false,
      view: 1,
      section_1: true,
      shared: seedprod_store,
    };
  },
  mounted: function() {},
  created() {},
  methods: {
    add_item() {
      let index = this.block.settings.items.push({
        icon: '',
        txt: '',
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
  components: {draggable},
  props: {
    block: Object,
  },
};
</script>
