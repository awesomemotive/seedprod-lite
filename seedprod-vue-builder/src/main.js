Vue.config.devtools = true;
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VeeValidate from 'vee-validate';

//import "./test.less";
// import { Validator, install as VeeValidate } from 'vee-validate/dist/vee-validate.minimal.esm.js';
// import { required, min, max, regex } from 'vee-validate/dist/rules.esm.js';
// import veeEn from 'vee-validate/dist/locale/en';
import VueClipboard from 'vue-clipboard2';
import VTooltip from 'v-tooltip';
import VueSweetalert2 from 'vue-sweetalert2';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { ToggleButton } from 'vue-js-toggle-button';
import VueCountdown from '@chenfengyuan/vue-countdown';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import {VueMasonryPlugin} from 'vue-masonry';
import VueMasonry from 'vue-masonry-css'

window.tinymce = tinymce;
window.lodash = _.noConflict();

Vue.component( VueCountdown.name, VueCountdown );
Vue.component( 'VueSlider', VueSlider );
Vue.use( VueMasonryPlugin );

Vue.use(VueMasonry);



Vue.component( 'ToggleButton', ToggleButton );

// // Add the rules you need.
// Validator.extend('required', required);
// Validator.extend('regex', regex);
// Validator.extend('min', min);
// Validator.extend('max', max);

// // Merge the messages.
// Validator.localize('en', veeEn);

// install the plugin
Vue.use( VeeValidate );

Vue.use( VueSweetalert2 );
Vue.use( VueClipboard );
Vue.use( VTooltip, {
  defaultClass: 'seedprod-tooltip',
});
Vue.use( VueAxios, axios );

Vue.config.productionTip = false;

let seedprod_store = {
  unfiltered_html: seedprod_data.unfiltered_html,
  template_dev_mode: seedprod_data.template_dev_mode,
  template_dev_mode_url: seedprod_data.template_dev_mode_url,
  template_dev_mode_password: seedprod_data.template_dev_mode_password,
  show_bottombar_cta: seedprod_data.show_bottombar_cta,
  last_block_added: false,
  section_template_id_stub_index: false,
  template_preview_path: seedprod_data.template_preview_path,
  page_uuid: seedprod_data.page_uuid,
  stop: true,
  my_ip: seedprod_data.my_ip,
  plugins_installed: seedprod_data.plugins_installed,
  giveaway_plugins_installed: seedprod_data.giveaway_plugins_installed,
  form_plugins_installed: seedprod_data.form_plugins_installed,
  seo_plugins_installed: seedprod_data.seo_plugins_installed,
  analytics_plugins_installed: seedprod_data.analytics_plugins_installed,
  saved_blocks: [],
  checked_for_saved_blocks: false,
  page_type: seedprod_data.page_type,
  recent_colors: [],
  current_revision_store: false,
  current_revision_active_index: -1,
  current_user_name: seedprod_data.current_user_name,
  current_user_email_hash: seedprod_data.current_user_email_hash,
  current_user_email: seedprod_data.current_user_email,
  free_templates_subscribed: seedprod_data.free_templates_subscribed,
  code_container: false,
  active_inline_editor_id: false,
  revisions: [],
  preview_mode: 'desktop',
  preview_link: seedprod_data.preview_link,
  builder_top: false,
  api_token: seedprod_data.api_token,
  seedprod_user_id: seedprod_data.seedprod_user_id,
  site_token: seedprod_data.site_token,
  license_key: seedprod_data.license_key,
  per: seedprod_data.per,
  active_license: seedprod_data.active_license,
  view: 'builder',
  page_path: seedprod_data.page_path,
  web_path: seedprod_data.web_path,
  upgrade_link: seedprod_data.upgrade_link,
  doing_ajax: false,
  doing_revisions_ajax: false,
  highlight_option: false,
  highlight_option_target: false,
  is_moving: false,
  mousedown_el: false,
  home_url: seedprod_data.home_url,
  block_templates: seedprod_data.block_templates,
  sections_templates: {
    cats: false,
    templatecat: '',
    templatesearch: '',
    themes: false,
    saved: false,
    favs: false,
  },
  setup_page_meta: {
    placeholder_image: seedprod_data.placeholder_image,
    placeholder_sm_image: seedprod_data.placeholder_sm_image,
    expire_times: seedprod_data.expire_times,
    current_block: false,
    timezones: seedprod_data.timezones,
    times: seedprod_data.times,
    show_stockphotos_modal: false,
    block_options: seedprod_data.block_options,
    icons: seedprod_data.icons,
    googlefonts: seedprod_data.googlefonts,
    email_integration_url: seedprod_data.email_integration_url,
    roles: seedprod_data.roles,
    wc_active: seedprod_data.wc_active,
  },
  plugin_path: seedprod_data.plugin_path,
  lpage: seedprod_data.lpage,
  settings: seedprod_data.settings,
  app_settings: seedprod_data.app_settings,
  expand_collapse_state: {
    show_detail_settings: true,
    show_time_settings: true,
    show_entry_settings: true,
    show_entry_settings_2: true,
    show_entry_settings_3: true,
    show_entry_settings_4: true,
    show_design_settings: true,
    show_background_settings: true,
    show_customcss_settings: true,
    show_action_refer_a_friend: true,
    show_action_refer_a_friend_fb: false,
    show_action_refer_a_friend_twitter: false,
    show_action_refer_a_friend_pinterest: false,
    show_action_refer_a_friend_linkedin: false,
    show_action_refer_a_friend_email: false,
    show_action_visit_fb: true,
    show_action_twitter_follow: true,
    show_action_instagram_follow: true,
    show_action_pinterest_follow: true,
    show_action_youtube_follow: true,
    show_action_join_newsletter: true,
    show_action_fb_page_post: true,
    show_action_instagram_page_post: true,
    show_action_watch_a_video: true,
    show_action_tweet: true,
    show_action_visit_a_page: true,
    show_action_question: true,
    show_action_invent_your_own: true,
    show_action_automatic_entry: true,
    show_action_images: true,
    show_action_polls: true,
  },

};

if ( undefined == seedprod_store.settings.show_powered_by_link && 'seedprod_pro' == seedprod_store.page_path ) {
  seedprod_store.settings.show_powered_by_link = true;
}

if ( undefined == seedprod_store.settings.show_powered_by_link && 'seedprod_lite' == seedprod_store.page_path ) {
  seedprod_store.settings.show_powered_by_link = false;
}

window.seedprod_store = seedprod_store;

let seedprod_app = new Vue({
  router,
  comments: true,
  mounted() {
    if ( document.getElementsByClassName( 'seedprod-builder' )[0]) {
      document.getElementsByClassName( 'seedprod-builder' )[0].style.display = 'block';
    }
    seedprod_store.settings_org = JSON.stringify( seedprod_store.settings );
  },

  render: h => h( App ),
}).$mount( '#seedprod-vue-app-builder' );

window.seedprod_app = seedprod_app;
let media_uploader;
window.media_uploader = media_uploader;

let help_iframe = function() {
  iFrameResize({ log: false, checkOrigin: false }, '#inline-help' );
};
window.help_iframe = help_iframe;

