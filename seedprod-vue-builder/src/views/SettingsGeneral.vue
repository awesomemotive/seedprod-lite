<template>
  <div class="seedprod-settings-page">
    <div class="seedprod-settings-page-wrapper">
      <h1>{{txt_14}}</h1>
      <div class="sp-flex sp-items-center sp-mb-8">
        <label class="sp-w-48">{{txt_1}}</label>
        <input
          type="text"
          v-model="shared.lpage.post_title"
          class="sp-form-input sp-w-full sp-flex-1"
        />
      </div>

      <div v-if="shared.page_type == 'lp' || shared.page_type == 'loginp'" class="sp-flex sp-items-center sp-mb-8">
        <label class="sp-w-48">{{txt_2}}</label>
        <div class="sp-flex sp-items-center">
          <span
            class="sp-bg-neutral-10 sp-border sp-border-neutral-20 sp-inline-block sp-border-r-0 sp-rounded-tl-6px sp-rounded-bl-6px sp-h-42px sp-flex sp-items-center sp-justify-center sp-px-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-inline-block sp-fill-current sp-w-6 sp-h-6"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"
              />
            </svg>
          </span>
          <span
            class="sp-border-t sp-border-b sp-border-neutral-20 sp-h-42px sp-flex sp-items-center sp-justify-center sp-px-4"
          >{{ shared.home_url }}/</span>
          <input
            type="text"
            v-model="shared.lpage.post_name"
            v-validate="'alpha_dash'"
            class="sp-form-input sp-rounded-none sp-border-r-0 sp-border-l-0 focus:sp-border-neutral-20"
            name="slug"
            style="display:inline-block;width: 300px;"
            @mouseover="shared.highlight_option_target = false"
            :class="{
						'seedprod-highlight-option-target':
							shared.highlight_option_target == 'page_permalink'
					}"
          />
          <button
            class="sp-bg-white sp-border sp-border-neutral-20 sp-inline-block sp-border-l-0 sp-rounded-tr-6px sp-rounded-br-6px sp-h-42px sp-flex sp-items-center sp-justify-center sp-px-2"
            @click="preview_page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-inline-block sp-fill-current sp-w-6 sp-h-6"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
              />
            </svg>
          </button>
          <span v-show="errors.has('slug')" class="help-block error">
            {{
            errors.first("slug")
            }}
          </span>
        </div>
      </div>

      <div class="sp-flex sp-items-center sp-mb-8">
        <label class="sp-w-48">{{txt_3}}</label>
        <div>
          <div
            class="sp-border sp-border-neutral-10 sp-rounded-full sp-p-2px sp-bg-white sp-h-full sp-flex sp-align-center"
          >
            <button
              @click="shared.lpage.post_status = 'draft'"
              :class="{'sp-bg-primary sp-text-white hover:sp-bg-primary-darker': shared.lpage.post_status == 'draft','sp-bg-white sp-text-neutral-60 hover:sp-bg-neutral-10': shared.lpage.post_status != 'draft'}"
              class="sp-cursor-pointer sp-rounded-full sp-h-42px sp-text-sm sp-font-semibold sp-px-6"
            >{{txt_4}}</button>
            <button
              @click="shared.lpage.post_status = 'publish'"
              :class="{'sp-bg-green sp-text-white hover:sp-bg-green-darker': shared.lpage.post_status == 'publish','sp-bg-white sp-text-neutral-60 hover:sp-bg-neutral-10': shared.lpage.post_status != 'publish'}"
              class="sp-cursor-pointer sp-rounded-full sp-h-42px sp-text-sm sp-font-semibold sp-px-6"
            >{{txt_5}}</button>
          </div>
        </div>
      </div>

      <div class="sp-flex sp-items-start sp-mb-8">
        <label class="sp-w-48">{{txt_15}}:</label>

        <div class="sp-flex-1">
          <toggle-button
            :width="36"
            v-model="shared.settings.show_powered_by_link"
            class="sp-mr-2"
          />{{txt_8}}
          <strong>{{txt_6}}</strong> {{txt_7}}
          <div class="sp-bg-neutral-10 sp-rounded-6px sp-mt-6 sp-p-5">
            <div class="sp-text-sm sp-mb-2">{{txt_16}}</div>

            <input
              type="text"
              v-model="shared.settings.affiliate_url"
              class="sp-form-input sp-w-full"
            />
            <div class="sp-mt-2 sp-text-sm">
              <a
                href="https://www.seedprod.com/affiliates/"
                target="_blank"
                class="sp-text-primary hover:sp-text-page_type-darker"
              >{{txt_17}}</a>
              {{txt_18}}
            </div>
          </div>
        </div>
      </div>

      <div class="sp-flex sp-items-start sp-mb-8">
        <label class="sp-w-48">{{txt_19}}:</label>

        <div class="sp-flex-1">
          <toggle-button
            :width="36"
            v-model="shared.settings.no_conflict_mode"
            class="sp-mr-2"
          />{{txt_12}}

          <div class="sp-bg-neutral-10 sp-rounded-6px sp-mt-6 sp-p-5">
            <div  class="sp-text-sm sp-mb-2">Isolation Mode prevents two WordPress hooks from running called wp_head and wp_footer. This will prevent conflicts with your theme or other plugins. While it prevents conflicts, it also means other plugins would not run on the page such as SEO and analytics plugins. You can manually set these under the SEO and Scripts menus on the left. </div>

          </div>
        </div>
      </div>

     <div class="sp-flex sp-items-center sp-mb-8" v-if="shared.page_path != 'seedprod_lite'">
        <label class="sp-w-48">{{txt_21}}</label>
        <input
          type="text"
          v-model="shared.settings.facebook_app_id"
          class="sp-form-input sp-w-full sp-flex-1"
        />
      </div> 

      <div class="sp-flex sp-items-start sp-mb-8" v-if="shared.settings.page_type != 'lp' && shared.settings.page_type != 'loginp' ">
        <label class="sp-w-48">{{txt_10}}:</label>

        <div class="sp-flex-1">
          <toggle-button
            :width="36"
            v-model="shared.settings.redirect_mode"
            class="sp-mr-2"
          />{{txt_12}}

          <div class="sp-bg-neutral-10 sp-rounded-6px sp-mt-6 sp-p-5">
            <div v-if="shared.settings.page_type == 'p404'" class="sp-text-sm sp-mb-2">{{txt_13}}</div>
            <div v-else class="sp-text-sm sp-mb-2">{{txt_11}}</div>
            <input
              type="text"
              v-model="shared.settings.redirect_url"
              class="sp-form-input sp-w-full"
            />

          </div>
        </div>
      </div>

      <div class="sp-flex sp-items-start sp-mb-8" v-if="shared.settings.page_type == 'loginp'">
        <label class="sp-w-48">{{txt_20}}:</label>

        <div class="sp-flex-1">
          <toggle-button
            :width="36"
            v-model="shared.settings.redirect_login_page"
            class="sp-mr-2"
          />{{txt_12}}

          <div class="sp-bg-neutral-10 sp-rounded-6px sp-mt-6 sp-p-5">
            <div  class="sp-text-sm sp-mb-2">The Redirect the Default Login Page option should redirect all calls to the default login page which is located at
<br>
https://example.com/wp-login.php
<br>
however it does not prevent it from being accessed as that default login page will still be used for password resets, login errors, and registration if that is enabled.</div>

          </div>

        </div>
      </div>

      <div class="sp-flex sp-items-center sp-mb-8" v-if="shared.settings.page_type != 'lp'">

        <label class="sp-w-48">{{txt_9}}</label>

        <div class="sp-flex-1">
          <a href="#" @click.prevent="reset_template" class="sp-mt-2 sp-bg-red hover:sp-bg-red-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block sp-font-sans"><span class="sp-text-white">Choose Template</span></a>
          <span class="sp-ml-4 sp-text-sm sp-text-neutral-30">(<strong>Warning:</strong> This will delete the current template and content.)</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import qs from 'qs';
import NProgress from 'nprogress';
import { helpers } from '../mixins/helpers.js';
export default {
  name: 'settingsdisplayoptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Page Title:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Page URL:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Page Status:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Draft', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Publish', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( '"Powered by SeedProd"', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Link', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Show', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Choose New Template:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Redirect Mode', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Redirect URL: A temporary redirect (302 status) will be created to the url entered.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Enable', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Redirect URL: A permanent redirect (301 status) will be created to the url entered.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'General', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'SeedProd Link', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Enter Your Affiliate URL and Make Money with SeedProd', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Join our affiliate program', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'and get a 20% commission on all sales generated from your powered by link.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Isolation Mode', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'Redirect the Default Login Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'Facebook App ID:', process.env.VUE_APP_TEXTDOMAIN ),
      shared: seedprod_store,
    };
  },
  computed: {
    slug: function() {
      let slug = this.slugify( this.shared.lpage.slug );
      return slug;
    },
  },
  watch: {
    'shared.lpage.post_title': {
      handler: function( val, oldVal ) {
        this.shared.settings.post_title = val;
      },
    },
    'shared.lpage.post_name': {
      handler: function( val, oldVal ) {
        this.shared.settings.post_name = val;
      },
    },
    'shared.lpage.post_status': {
      handler: function( val, oldVal ) {
        this.shared.settings.post_status = val;
      },
    },
  },
  methods: {
    reset_template() {
      let id = this.$route.params.id;
      location.href = 'admin.php?page=' + this.shared.page_path + '_template&id=' + id + '#/template/' + id;
    },
    maybe_show_unlock() {
      if ( ! this.shared.per.includes( 'lp' ) ) {
        this.show_uplock_notice(
          'Standalone Landing Pages',
          'Standalone Landing Page',
          'landing-page'
        );
      }
    },
    preview_page: function() {
      if (
        JSON.stringify( seedprod_store.settings ) === seedprod_store.settings_org
      ) {
        window.open(
          this.shared.home_url + '/' + this.shared.lpage.post_name,
          '_blank'
        );
      } else {
        alert( 'Save your changes before previewing.' );
      }
    },
  },
  components: {},
};
</script>
