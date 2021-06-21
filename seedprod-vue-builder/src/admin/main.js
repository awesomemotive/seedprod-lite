
Vue.config.devtools = true;
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueSweetalert2 from 'vue-sweetalert2';
import VTooltip from 'v-tooltip';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VeeValidate from 'vee-validate';
import { ToggleButton } from 'vue-js-toggle-button';

//window.lodash = _.noConflict();

// find text strings regex >(s*[0-9a-zA-Z]+[ ][0-9a-zA-z]+\s*)<

Vue.component( 'ToggleButton', ToggleButton );
Vue.use( VueSweetalert2 );
Vue.use( VeeValidate );
Vue.use( VTooltip, {
  defaultClass: 'seedprod-tooltip',
});
Vue.use( VueAxios, axios );

Vue.config.productionTip = false;

let seedprod_store_admin = {
  active_license: seedprod_data_admin.active_license,
  lmsg: seedprod_data_admin.lmsg,
  show_topbar_cta: seedprod_data_admin.show_topbar_cta,
  show_inline_cta: seedprod_data_admin.show_inline_cta,
  seedprod_unsupported_feature: seedprod_data_admin.seedprod_unsupported_feature,
  seedprod_csp4_migrated: seedprod_data_admin.seedprod_csp4_migrated,
  seedprod_csp4_imported: seedprod_data_admin.seedprod_csp4_imported,
  seedprod_cspv5_migrated: seedprod_data_admin.seedprod_cspv5_migrated,
  seedprod_cspv5_imported: seedprod_data_admin.seedprod_cspv5_imported,
  page_count: seedprod_data_admin.page_count,
  subscriber_count: seedprod_data_admin.subscriber_count,
  notifications: seedprod_data_admin.notifications,
  csp_id: seedprod_data_admin.csp_id,
  mmp_id: seedprod_data_admin.mmp_id,
  p404_id: seedprod_data_admin.p404_id,
  loginp_id: seedprod_data_admin.loginp_id,
  csp_uuid: seedprod_data_admin.csp_uuid,
  mmp_uuid: seedprod_data_admin.mmp_uuid,
  p404_uuid: seedprod_data_admin.p404_uuid,
  loginp_uuid: seedprod_data_admin.loginp_uuid,
  csp_preview_url: seedprod_data_admin.csp_preview_url,
  mmp_preview_url: seedprod_data_admin.mmp_preview_url,
  p404_preview_url: seedprod_data_admin.p404_preview_url,
  loginp_preview_url: seedprod_data_admin.loginp_preview_url,
  api_token: seedprod_data_admin.api_token,
  license_key: seedprod_data_admin.license_key,
  license_name: seedprod_data_admin.license_name,
  per: seedprod_data_admin.per,
  page_path: seedprod_data_admin.page_path,
  name: seedprod_data_admin.name,
  email: seedprod_data_admin.email,
  upgrade_link: seedprod_data_admin.upgrade_link,
  doing_ajax: false,
  plugin_path: seedprod_data_admin.plugin_path,
  home_url: seedprod_data_admin.home_url,
  settings: seedprod_data_admin.settings,
  app_settings: seedprod_data_admin.app_settings,
  template_dev_mode: seedprod_data_admin.template_dev_mode,
  settings_page_meta: {
    lclass: seedprod_data_admin.lclass,
    lmsg: seedprod_data_admin.lmsg,
    button: '',
    api_key: seedprod_data_admin.api_key,
    timezones: seedprod_data_admin.timezones,
    dismiss_settings_lite_cta: seedprod_data_admin.dismiss_settings_lite_cta,
  },

};

window.seedprod_store_admin = seedprod_store_admin;

let seedprod_app = new Vue({
  router,
  mounted() {

  },
  render: h => h( App ),
}).$mount( '#seedprod-vue-app' );

let help_iframe = function() {
  iFrameResize({ log: false, checkOrigin: false }, '#inline-help' );
};
window.help_iframe = help_iframe;

