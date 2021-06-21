<template>
  <div class="seedprod-settings-page">
    <div class="seedprod-settings-page-wrapper">
      <!-- <div v-for="(v,i) in templates" @click="add_template_section(v)" :key="i">{{v}}</div> -->
      <!-- Chooser -->
      <div class="sp-p-8">
        <!-- <div class="sp-grid sp-grid-cols-3"> -->
        <div
          v-if="
            shared.sections_templates.themes === false ||
            shared.sections_templates.themes.data.length > 0
          "
          class="themes clearfix"
        >
          <!-- <div
            v-masonry
            transition-duration="0.3s"
            item-selector=".theme"
            :key="componentKey"
            :gutter="10"
          > -->
          <masonry
            :cols="{ default: 4, 1000: 3, 700: 2, 400: 1 }"
            :gutter="{ default: '30px', 700: '15px' }"
          >
            <div
              v-for="theme in shared.sections_templates.themes.data"
              class="theme"
              style="border: none; margin-bottom: 5%"
              :key="theme.id"
            >
              <div
                class="
                  sp-bg-white sp-p-1 sp-border sp-border-neutral-15 sp-relative
                "
                @mouseenter="set_template_hover(theme.id)"
                @mouseleave="set_template_hover(false)"
              >
                <div
                  class="
                    sp-absolute
                    sp-top-0
                    sp-right-0
                    sp-bg-green
                    sp-rounded
                    sp-text-white
                    sp-z-20
                    sp-py-1
                    sp-px-2
                    sp-text-12px
                    sp-font-semibold
                    sp-mt-2
                    sp-mr-2
                  "
                >
                  PRO
                </div>

                <img
                  class="sp-border-none"
                  v-if="theme.section_category == 'saved'"
                  :src="'https://assets.seedprod.com/preview-saved.png'"
                />

                <img
                  class="sp-border-none"
                  v-else
                  :src="
                    'https://assets.seedprod.com/full_length_thumbnails/preview-' +
                    theme.id +
                    '.jpeg'
                  "
                  style="opacity: 0.5"
                />

                <div
                  class="
                    sp-absolute
                    sp-top-0
                    sp-left-0
                    sp-right-0
                    sp-bottom-0
                    sp-flex
                    sp-items-center
                    sp-justify-center
                  "
                  v-show="template_hover == theme.id"
                >
                  <div
                    class="
                      sp-bg-neutral
                      sp-opacity-75
                      sp-absolute
                      sp-top-0
                      sp-left-0
                      sp-right-0
                      sp-bottom-0
                      sp-m-1
                    "
                  ></div>
                  <button
                    class="
                      sp-mr-1
                      sp-bg-primary
                      sp-w-10
                      sp-h-10
                      sp-rounded-full
                      sp-z-10
                      sp-text-white
                      sp-flex
                      sp-items-center
                      sp-justify-center
                    "
                    @click="add_template_section(theme.id)"
                    :disabled="shared.doing_ajax ? true : false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="sp-fill-current sp-w-5 sp-h-5"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                      />
                    </svg>
                  </button>
                  <button
                    @click="preview_template(theme.id, theme.name)"
                    class="
                      sp-ml-1
                      sp-bg-neutral
                      sp-w-10
                      sp-h-10
                      sp-rounded-full
                      sp-z-10
                      sp-text-white
                      sp-flex
                      sp-items-center
                      sp-justify-center
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="sp-fill-current sp-w-5 sp-h-5"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path
                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm.5-7H9v2H7v1h2v2h1v-2h2V9h-2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                class="
                  sp-mt-3
                  sp-text-neutral-60
                  sp-text-xs
                  sp-font-semibold
                  sp-flex
                  sp-items-center
                  sp-justify-between
                "
              >
                {{ theme.name }}
                <span v-if="theme.saved">
                  <span
                    class="sp-text-neutral-40 sp-cursor-pointer"
                    @click="remove_saved(theme.id)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="sp-fill-current sp-w-4 sp-h-4"
                    >
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"
                      />
                      <path d="M0 0h24v24H0V0z" fill="none" />
                    </svg>
                  </span>
                </span>
                <span v-else>
                  <span
                    v-if="theme.favorited"
                    class="sp-text-red sp-cursor-pointer"
                    @click="updateFavs(theme.id, 'detach')"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="sp-fill-current sp-w-4 sp-h-4"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                  </span>
                  <span
                    v-else
                    class="sp-text-neutral-40 sp-cursor-pointer"
                    @click="updateFavs(theme.id, 'attach')"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="sp-fill-current sp-w-4 sp-h-4"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                      />
                    </svg>
                  </span>
                </span>
              </div>
            </div>
            <!-- </div> -->
          </masonry>
        </div>
        <div v-else class="sp-text-center sp-m-20 sp-text-neutral">
          {{ txt_1 }}
        </div>
      </div>
    </div>
    <!-- Preview -->
    <div
      v-if="showPreview"
      class="sp-fixed sp-top-0 sp-left-0 sp-bottom-0 sp-right-0"
      style="z-index: 99999"
    >
      <div
        class="
          sp-absolute
          sp-bg-neutral-60
          sp-top-0
          sp-left-0
          sp-bottom-0
          sp-right-0
          sp-opacity-75
        "
      ></div>
      <div
        class="
          sp-relative
          sp-z-40
          sp-bg-neutral
          sp-text-white
          sp-h-72px
          sp-flex
          sp-items-center
          sp-px-5
          sp-justify-between
        "
      >
        <div class="sp-flex sp-items-center sp-w-1/3">
          <svg
            width="32"
            height="34"
            viewBox="0 0 32 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0C0 0 0.74666 0.0506396 16.0822 2.054C31.4178 4.05737 36.7255 19.603 27.3358 33.1707C28.7883 21.0478 26.13 8.47161 15.4523 7.00138C4.77453 5.53114 5.70455 5.75641 5.70455 5.75641C5.70455 5.75641 5.88147 8.42652 6.8834 15.6043C7.88534 22.7821 13.4921 26.3022 18.3988 28.1143C18.3988 28.1143 18.6866 19.714 15.949 16.0165C13.2114 12.3191 9.80548 9.86362 9.80548 9.86362C9.80548 9.86362 17.8094 10.8232 20.8313 16.4032C23.8532 21.9832 23.5588 33.7778 23.5588 33.7778L20.2989 33.6092C11.5273 32.556 3.33239 27.2759 1.939 16.198C0.545613 5.1201 0 0 0 0Z"
              fill="#7B6B7A"
            />
          </svg>

          <span
            class="sp-pl-8 sp-text-base sp-text-neutral-40 sp-text-semibold"
            >{{ preview_page_name }}</span
          >
        </div>
        <div class="sp-flex sp-items-center sp-w-1/3 sp-justify-center">
          <button
            @click="set_preview_mode('desktop')"
            class="
              sp-w-8
              sp-h-8
              sp-rounded-full
              sp-flex
              sp-items-center
              sp-justify-center
              sp-mr-1
              sp-cursor-pointer
            "
            :class="{
              'sp-bg-white sp-text-neutral-80': preview_mode == 'desktop',
              'sp-bg-neutral-40': preview_mode == 'mobile',
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-4 sp-h-4"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"
              />
            </svg>
          </button>
          <button
            @click="set_preview_mode('mobile')"
            class="
              sp-w-8
              sp-h-8
              sp-rounded-full
              sp-flex
              sp-items-center
              sp-justify-center
              sp-ml-2
              sp-cursor-pointer
            "
            :class="{
              'sp-bg-white sp-text-neutral-80': preview_mode == 'mobile',
              'sp-bg-neutral-40': preview_mode == 'desktop',
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-4 sp-h-4"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"
              />
            </svg>
          </button>
        </div>
        <div class="sp-flex sp-items-center sp-w-1/3 sp-justify-end">
          <button
            @click="add_template_section(previewId)"
            class="
              sp-inline-block
              sp-bg-primary
              sp-px-4
              sp-py-3
              sp-rounded
              sp-leading-none
              sp-text-white
              sp-no-underline
              sp-text-sm
              hover:sp-bg-primary-lighter
              sp-cursor-pointer sp-font-semibold sp-mr-5
            "
          >
            {{ txt_2 }}
          </button>
          <button class="sp-text-neutral-40" @click="close_preview_template">
            <svg
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
        </div>
      </div>
      <div class="sp-overflow-y-scroll sp-h-full">
        <iframe
          :src="shared.template_preview_path + previewId + '.html'"
          class
          :class="{
            'sp-transition-width sp-duration-500 sp-ease-out sp-h-full sp-h-600px sp-relative sp-w-350px  sp-mx-auto sp-my-10 sp-rounded-lg sp-p-3 sp-bg-white':
              preview_mode == 'mobile',
            'sp-h-full sp-relative sp-w-full ': preview_mode == 'desktop',
          }"
        ></iframe>
      </div>
    </div>
    <!-- Lite CTA -->
    <modal
      v-if="showUpsellModal"
      @close="showUpsellModal = false"
      class="sp-w-550px"
    >
      <div slot="body" class="sp-px-10 sp-py-12 sp-text-neutral sp-relative">
        <button
          class="
            sp-text-neutral-40
            hover:sp-text-neutral-60
            sp-absolute sp-top-0 sp-right-0 sp-m-2
          "
          @click="showUpsellModal = false"
        >
          <svg
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
        <LiteCTABuilder feature_source="sections" feature="Sections" />
      </div>
      <h3 slot="header"></h3>
    </modal>
  </div>
</template>

<script>
import { __ } from "@wordpress/i18n";
import qs from "qs";
import { helpers } from "../mixins/helpers.js";
import NProgress from "nprogress";
import { sections } from "../mixins/section-templates.js";
import LiteCTABuilder from "@/components/LiteCTABuilder.vue";
import modal from "@/components/Modal.vue";

export default {
  name: "sectiontemplateoptions",
  mixins: [sections, helpers],
  data() {
    return {
      componentKey: 0,
      txt_1: __("No Templates Found", process.env.VUE_APP_TEXTDOMAIN),
      txt_2: __("Choose This Section", process.env.VUE_APP_TEXTDOMAIN),
      preview_mode: "desktop",
      preview_page_name: false,
      previewId: false,
      showPreview: false,
      template_api_url: seedprod_remote_api + "templates?page=1",
      template_update_api_url: seedprod_remote_api + "template-update",
      template_api_url_preview:
        seedprod_remote_api + "templates-preview?page=1",

      //cats: false,
      template_hover: false,
      showUpsellModal: false,
      shared: seedprod_store,
    };
  },
  components: {
    modal,
    LiteCTABuilder,
  },
  methods: {
    preview_template(id, name) {
      this.previewId = id;
      this.showPreview = true;
      this.preview_page_name = name;
      this.set_template_hover(false);
    },
    close_preview_template() {
      this.previewId = false;
      this.showPreview = false;
      this.preview_page_name = false;
    },
    set_preview_mode(mode) {
      this.preview_mode = mode;
    },
    remove_saved(id) {
      let theme_id = id;
      let self = this;

      NProgress.start();

      this.$swal({
        imageUrl: "",
        title: __(
          "Are you sure you want to delete?",
          process.env.VUE_APP_TEXTDOMAIN
        ),
        type: null,
        showCancelButton: true,
        confirmButtonColor: "#d33",

        //cancelButtonColor: '',
        confirmButtonText: __(
          "Yes, delete it!",
          process.env.VUE_APP_TEXTDOMAIN
        ),
      }).then((result) => {
        if (result.value) {
          // remove saved call
          //this.$delete(this.shared.settings.block_options, index);
          let data = qs.stringify({
            template_id: theme_id,
            method: "remove-saved-section",
            api_token: this.shared.api_token,
            site_token: this.shared.site_token,
          });

          this.axios
            .post(this.template_update_api_url, data, {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            })
            .then(function (response) {
              NProgress.done();

              // remove from saved
              let t = self.shared.sections_templates.themes.data;

              for (let key in t) {
                if (t[key].id == id) {
                  t.splice(key, 1);
                }
              }
            })
            .catch(function (error) {
              console.log(error);
              NProgress.done();
              self.$swal({
                imageUrl:
                  self.shared.plugin_path + "public/svg/error-24px-white.svg",
                text: error.response.data.message,
                toast: true,
                type: null,
                customClass: "sp-toast-error",
                position: "top-end",
                showConfirmButton: false,
                timer: 5000,
              });
            });

          // show confirmations
          this.$swal({
            imageUrl:
              self.shared.plugin_path + "public/svg/error-24px-white.svg",
            text: __("Deleted!", process.env.VUE_APP_TEXTDOMAIN),
            toast: true,
            type: null,
            customClass: "sp-toast-error",
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
          });
        } else {
          NProgress.done();
        }
      });
    },
    set_template_hover: function (id) {
      this.template_hover = id;
    },
    uid() {
      let uid =
        String.fromCharCode(97 + Math.floor(Math.random() * 26)) +
        Math.random().toString(36).substring(2, 15).toLowerCase();
      return uid;
    },
    updateFavs(id, method) {
      return;
      let data = qs.stringify({
        template_id: id,
        method: method,
        api_token: this.shared.api_token,
        site_token: this.shared.site_token,
      });

      var t = this.shared.sections_templates.themes.data;
      t.forEach(function (v) {
        if (v.id == id) {
          v.favorited = !v.favorited;
        }
      });

      // remove from favs
      var t = this.shared.sections_templates.data;

      for (let key in this.shared.sections_templates.data) {
        if (this.shared.sections_templates.data[key].id == id) {
          this.shared.sections_templates.data.splice(key, 1);
        }
      }

      this.axios
        .post(this.template_update_api_url, data, {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        })
        .then(function (response) {
          NProgress.done();
        })
        .catch(function (error) {
          console.log(error.response);
          self.shared.doing_ajax = false;
          self.$swal({
            imageUrl:
              self.shared.plugin_path + "public/svg/error-24px-white.svg",
            text: error.response.data.message,
            toast: true,
            type: null,
            customClass: "sp-toast-error",
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
          });
        });
    },
    add_template_section(id) {
      this.showUpsellModal = true;
    },
  },
  created: function () {
    //this.loadCats();
    this.loadSections();
  },
};
</script>
