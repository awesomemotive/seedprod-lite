<template>
  <div>
    <div
      class="sp-text-center sp-w-full"
    >
      <div>

        <h1 class="sp-mb-4 sp-leading-tight sp-text-2xl sp-font-bold sp-text-neutral">
          Upgrade to the get {{this.feature}}.
        </h1>

                <p class="sp-mb-8 sp-text-base">
We're sorry, {{feature}} is not available on your plan.<br>Please upgrade your license to unlock this feature.
        </p>

        <a
          :href="'https://app.seedprod.com/downloads?utm_source=WordPress&amp;utm_campaign=liteplugin&amp;utm_medium=pluginbuilder-'+feature_source"
          target="_blank"
          style="color:#fff !important"
          class="sp-bg-green sp-px-8 sp-py-4 sp-rounded sp-leading-none sp-text-white sp-no-underline sp-text-base hover:sp-bg-green-lighter sp-cursor-pointer sp-font-semibold sp-inline-flex sp-items-center sp-justify-center hover:sp-text-white"
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
          </svg> Upgrade Your SeedProd License
        </a>

      </div>
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import qs from 'qs';
export default {
  name: 'LiteCTASubscribers',
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
      txt_995: __( 'Drag & Drop Page Builder', process.env.VUE_APP_TEXTDOMAIN ),
      txt_996: __( '20+ PRO Page Blocks', process.env.VUE_APP_TEXTDOMAIN ),
      txt_997: __(
        'PRO Email Marketing Integrations',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_998: __( 'Custom 404 Pages', process.env.VUE_APP_TEXTDOMAIN ),
      txt_999: __( 'Page Access Controls', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9910: __( '100+ PRO Page Templates', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9911: __(
        'PRO Smart Sections',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_9912: __( 'Email Subscriber Management', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9913: __( 'Saved Templates', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9914: __( 'Plus much more...', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Bonus:', process.env.VUE_APP_TEXTDOMAIN ),
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
    };
  },
  props: {
    feature_source: {
      type: String,
      default: '',
    },
    feature: {
      type: String,
      default: '',
    },
  },
  methods: {
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
