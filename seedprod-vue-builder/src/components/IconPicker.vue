<template>
  <div ref="fapicker sp-relative">
    <div v-if="type == 'min'">
      <button
        v-if="this.value"
        @click="togglePicker()"
        class="sp-border-r sp-border-neutral-20 sp-rounded-tl-md sp-rounded-bl-md sp-w-42px sp-h-42px sp-inline-block sp-border-r-0 sp-text-lg sp-flex sp-items-center sp-justify-center sp-bg-white sp-text-neutral-80"
      >
        <i :class="this.value"></i>
      </button>

      <button
        v-else
        @click="togglePicker()"
        class="sp-border-r sp-border-neutral-20 sp-rounded-tl-md sp-rounded-bl-md sp-w-42px sp-h-42px sp-inline-block sp-border-r-0 sp-text-lg sp-flex sp-items-center sp-justify-center sp-bg-neutral-10 sp-text-neutral-40 hover:sp-bg-white hover:sp-text-neutral-80"
        v-tooltip="{content:'Add Icon',delay:{ show: 1500, hide: 0 }}"
      >
        <i class="far fa-image"></i>
      </button>
    </div>
    <div v-else>
      <div v-if="!this.value">
        <div class="sp-border sp-border-neutral-20 sp-rounded-md">
          <div
            class="sp-border-2 sp-border-white sp-bg-neutral-10 sp-text-neutral-60 sp-font-semibold sp-flex sp-items-center sp-justify-center sp-flex-col sp-p-4 sp-rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-12 sp-h-12"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
              />
            </svg>

            <div class="sp-flex sp-items-center sp-justify-between sp-mt-2">
              <button
                @click="togglePicker()"
                class="sp-bg-neutral-15 hover:sp-bg-neutral-20 sp-text-neutral-80 sp-py-1 sp-px-2 sp-rounded sp-flex sp-items-center sp-mt-1 sp-text-11px sp-font-semibold"
              >{{txt_4}}</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="this.value">
        <div
          class="sp-form-input sp-py-12 sp-flex sp-items-center sp-justify-center sp-cursor-pointer sp-relative"
          @mouseover="show_hover = true"
          @mouseleave="show_hover = false"
        >
          <i class="fa-fw fa-lg" :class="this.value" style="font-size:72px"></i>
          <div
            v-show="show_hover"
            class="sp-form-input sp-absolute sp-top-0 sp-left-0 sp-hover-dim sp-w-full sp-h-full"
          >
            <div class="sp-flex sp-items-center sp-justify-center sp-h-full">
              <button
                @click.stop="togglePicker()"
                class="sp-mr-1 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-w-10 sp-h-10 sp-rounded-full sp-flex sp-items-center sp-justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-w-4 sp-h-4 sp-fill-current"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"
                  />
                </svg>
              </button>
              <button
                @click.stop="remove_icon"
                class="p-ml-1 sp-bg-neutral hover:sp-bg-neutral-80 sp-text-white sp-w-10 sp-h-10 sp-rounded-full sp-flex sp-items-center sp-justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-w-4 sp-h-4 sp-fill-current"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal v-if="displayPicker" @close="displayPicker = false" >
      <div slot="body" class="sp-flex " style="min-height:700px">
        <div class="sp-modal-left sp-bg-neutral-5 sp-py-6 sp-px-10">
          <h4 class="sp-text-lg sp-font-bold sp-mb-8">{{txt_5}}</h4>
          <ul>
            <li
              @click="iconp_cat = ''"
              class="sp-cursor-pointer sp-font-semibold sp-border-b sp-border-neutral-10 sp-py-4 sp-leading-none"
              :class="{'sp-text-primary': iconp_cat == ''}"
            >
              <div class="sp-flex sp-items-center sp-justify-between">
                {{txt_1}}
                <svg
                  v-if="iconp_cat == ''"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-6 sp-h-6"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
              </div>
            </li>
            <li
              @click="iconp_cat = 'fa'"
              class="sp-cursor-pointer sp-font-semibold sp-border-b sp-border-neutral-10 sp-py-4 sp-leading-none"
              :class="{'sp-text-primary': iconp_cat == 'fa'}"
            >
              <div class="sp-flex sp-items-center sp-justify-between">
                {{txt_2}}
                <svg
                  v-if="iconp_cat == 'fa'"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-6 sp-h-6"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
              </div>
            </li>
            <!-- <li
              @click="iconp_cat = 'cat 2'"
              class="sp-cursor-pointer sp-font-semibold sp-border-b sp-border-neutral-10 sp-py-4 sp-leading-none"
              :class="{'sp-text-primary': iconp_cat == 'cat 2'}"
            >
              <div class="sp-flex sp-items-center sp-justify-between">
                Cat 2
                <svg
                  v-if="iconp_cat == 'cat 2'"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-6 sp-h-6"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
              </div>
            </li>-->
          </ul>
        </div>
        <div class="sp-modal-right sp-bg-neutral-10 sp-flex-grow sp-py-5 sp-px-16 sp-relative">
          <div class="sp-flex sp-justify-center sp-items-center sp-relative sp-mb-10">
            <span class="sp-text-neutral-40 sp-absolute sp-left-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-fill-current sp-w-6 sp-h-6"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                />
              </svg>
            </span>
            <input
              v-model="iconp_search"
              :placeholder="txt_3"
              class="sp-form-input sp-w-full sp-pl-8"
            />
          </div>

          <div class="sp-flex sp-flex-wrap sp--mx-4">
            <div
              v-for="(f,i) in myIcons"
              :key="i"
              @click="insert_image(f.n)"
              class="sp-mb-10 sp-px-4 sp-text-center sp-cursor-pointer"
            >
              <div
                class="sp-bg-white sp-rounded-6px sp-p-4 sp-border-2 sp-border-white hover:sp-border-primary sp-relative"
                @mouseover="iconp_hover = i"
                @mouseleave="iconp_hover = false"
              >
                <i class="fa-fw fa-2x" :class="f.n"></i>

                <div
                  class="sp-bg-primary sp-p-1 sp-absolute sp-bottom-0 sp-right-0 sp-rounded-tl-md sp-text-white"
                  v-show="iconp_hover === i"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-4 sp-h-4"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    />
                  </svg>
                </div>
              </div>
              <span
                class="sp-hidden sp-inline-block sp-pt-1 sp-text-sm sp-font-semibold sp-text-neutral-60"
              >{{ f.n }}</span>
            </div>
          </div>

          <button
            class="sp-text-neutral-40 sp-absolute sp-top-0 sp-right-0 sp-mt-2 sp-mr-2"
            @click="displayPicker = false"
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
      </div>
      <div slot="header"></div>
    </modal>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import Modal from '@/components/Modal.vue';
export default {
  name: 'IconPicker',
  data() {
    return {
      txt_1: __( 'All Icons', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Font Awesome', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Search icons...', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Choose Icon', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Icon Library', process.env.VUE_APP_TEXTDOMAIN ),
      show_hover: false,
      iconp_hover: false,
      iconp_cat: '',
      iconp_search: '',
      displayPicker: false,
      icon: this.value,
      search_term: '',
      shared: seedprod_store,
    };
  },
  mounted: function() {},
  methods: {
    remove_icon: function() {
      this.icon = '';
      this.update_icon();
    },
    insert_image( icon ) {

      //console.log("ii" + icon);
      this.icon = icon;
      this.$forceUpdate();
      this.update_icon();

      //console.log("ff" + this.icon);
    },
    update_icon() {

      //console.log("gg" + this.icon);
      //this.icon = icon;
      this.$emit( 'input', this.icon );
      this.hidePicker();
      this.show_hover = false;
    },
    showPicker() {
      this.displayPicker = true;
    },
    hidePicker() {
      this.displayPicker = false;
    },
    togglePicker() {
      this.displayPicker ? this.hidePicker() : this.showPicker();
    },
  },
  computed: {
    myIcons: function() {
      let self = this;
      return this.shared.setup_page_meta.icons.filter( function( u ) {
        if ( '' != self.iconp_cat ) {
          return (
            u.c == self.iconp_cat &&
            u.n.toLowerCase().includes( self.iconp_search.toLowerCase() )
          );
        } else {
          return u.n.toLowerCase().includes( self.iconp_search.toLowerCase() );
        }
      });
    },
  },
  watch: {},
  props: [ 'value', 'type' ],
  components: {
    Modal,
  },
};
</script>
