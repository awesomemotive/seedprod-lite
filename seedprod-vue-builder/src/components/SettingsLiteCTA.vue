<template>
  <div>
    <div
      class="sp-mt-6 sp-bg-white sp-border-neutral-15 sp-border sp-rounded sp-border-solid sp-px-10 sp-py-10 sp-text-center sp-relative"

    >
    <span @click="dismiss_upsell" class="sp-neutral-60 sp-absolute sp-cursor-pointer sp-right-0 sp-top-0 sp-opacity-75 sp-mt-2 sp-mr-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sp-fill-current sp-w-5 sp-h-5"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg></span>
      <div>
        <span class="sp-text-primary sp-text-lg sp-font-bold">Special Upgrade Offer - Save 50% Off</span>
        <h1 class="sp-mt-4 sp-mb-8 sp-leading-tight sp-text-34px sp-font-bold sp-text-neutral">
          Upgrade to SeedProd Pro
          <br />Today and Save
        </h1>
        <div class="sp-text-center sp-mb-4 sp-text-base">
          <div class="sp-inline-flex sp-text-left">
            <ul class="sp-px-4">
              <li class="sp-font-normal">
                <span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>
                {{txt_995}}
              </li>
              <li class="sp-font-normal"><span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{{txt_996}}</li>
              <li class="sp-font-normal"><span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{{txt_997}}</li>
              <li class="sp-font-normal"><span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{{txt_998}}</li>
              <li class="sp-font-normal"><span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{{txt_999}}</li>
            </ul>
            <ul class="sp-px-4">
              <li class="sp-font-normal"><span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{{txt_9910}}</li>
              <li class="sp-font-normal"><span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{{txt_9911}}</li>
              <li class="sp-font-normal"><span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{{txt_9912}}</li>
              <li class="sp-font-normal"><span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{{txt_9913}}</li>
              <li class="sp-font-normal"><span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{{txt_9914}}</li>
            </ul>
          </div>
        </div>
        <a
          href="https://seedprod.com/lite-upgrade/?utm_source=WordPress&amp;utm_campaign=liteplugin&amp;utm_medium=pluginsettingsabout"
          target="_blank"
          class="sp-bg-green sp-px-8 sp-py-4 sp-rounded sp-leading-none sp-text-white sp-no-underline sp-text-17px hover:sp-bg-green-lighter sp-cursor-pointer sp-font-semibold sp-inline-flex sp-items-center sp-justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-mr-2 sp-w-5 sp-h-5"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg> Upgrade to SeedProd PRO Now
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import qs from 'qs';
export default {
  name: 'SettingsLiteCTA',
  data() {
    return {
      txt_1: __( 'Dismiss this message', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __(
        'Get SeedProd Pro and Unlock all the Powerful Features',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_3: __(
        `Thanks for being a loyal SeedProd Lite user. Upgrade to
SeedProd Pro to unlock all the awesome features and
experience why SeedProd is the best WordPress landing
page plugin.`,
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_4: __( 'Pro Features:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_995: __( 'Powerful Page Editor', process.env.VUE_APP_TEXTDOMAIN ),
      txt_996: __( '20+ PRO Page Blocks', process.env.VUE_APP_TEXTDOMAIN ),
      txt_997: __(
        'Email Marketing Integrations',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_998: __( 'Custom 404 Pages', process.env.VUE_APP_TEXTDOMAIN ),
      txt_999: __( 'Access Controls', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9910: __( '100+ PRO Page Templates', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9911: __(
        'PRO Smart Sections',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_9912: __( 'Subscriber Management', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9913: __( 'Saved Templates', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9914: __( 'Plus much more...', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Bonus:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'SeedProd Lite users get', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __(
        'a discount off the regular price',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_18: __(
        'automatically applied at checkout.',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_19: __(
        'Get SeedProd Pro Today and Unlock all the Powerful Features »',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      shared: seedprod_store_admin,
    };
  },
  methods: {
    dismiss_upsell() {
      let self = this;
      let data = qs.stringify({
        id: 3,
      });
      this.axios
        .post( seedprod_dismiss_upsell, data, {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        })
        .then( function( response ) {
          if ( response.data.status ) {
            location.reload();
          }
        });
    },
    dismiss: function() {
      let _self = this;

      let data = qs.stringify({
        dismiss: true,
      });

      this.shared.settings_page_meta.dismiss_settings_lite_cta = true;

      _self.axios.post( seedprod_dismiss_settings_lite_cta_url, data, {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      });
    },
  },
};
</script>
