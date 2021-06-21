<template>
  <div class="seedprod-settings-page">
    <div class="seedprod-settings-page-wrapper">
      <h1>{{txt_1}}</h1>
      <div v-if="has_an_analytics_plugin_active">
        <div v-for="(v,k) in this.shared.analytics_plugins_installed" :key="k">
          <div v-if="k == 'monster-insights' && v === 1">
            <span class="sp-text-base sp-font-semibold">{{txt_2}}</span> MonsterInsights
            <br />
            <a
              class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
              :href="'admin.php?page=monsterinsights_settings#/'"
              target="_blank"
            >{{txt_3}}</a>
          </div>
          <div v-else-if="k == 'exactmetrics' && v === 1">
            <span class="sp-text-base sp-font-semibold">{{txt_4}}</span> Rank Math
            <br />
            <a
              class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
              :href="'admin.php?page=exactmetrics_reports#/'"
              target="_blank"
            >{{txt_3}}</a>
          </div>
        </div>
      </div>
      <div v-else>
        <div>
          <!-- <span class="sp-text-base sp-font-semibold">{{txt_5}}</span>
          <br />
          <a
           v-if="shared.analytics_plugins_installed['monster-insights'] === 0"
            class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
            :href="seedprod_analytics_install_link"
            target="_blank"
          >{{txt_6}}</a>
        <a
           v-if="shared.analytics_plugins_installed['monster-insights'] === 2"
            class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
            :href="seedprod_analytics_activate_link"
            target="_blank"
          >{{txt_7}}</a>-->

          <div v-if="shared.plugins_installed['monsterinsights-pro'].status === 0">
            <div
              v-if="plugins['monsterinsights'].status_code !== 1"
              class="sp-text-center sp-bg-primary-10 sp-text-primary sp-border sp-border-primary sp-p-4 sp-font-sans"
            >
              <span class="sp-text-base sp-font-semibold sp-font-sans">{{txt_11}}</span>
              <br />
              <a
                v-if="plugins['monsterinsights'].status_code === 0 && doing_install === false"
                class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block sp-font-sans"
                :href="seedprod_seo_install_link"
                target="_blank"
                @click.prevent="plugin_action('monsterinsights')"
              >
                <span class="sp-text-white">{{txt_33}} MonsterInsights</span>
              </a>
              <span v-if="doing_install === true">
                Installing
                <i class="fas fa-spinner fa-spin"></i>
              </span>
              <a
                v-if="plugins['monsterinsights'].status_code === 2 && doing_install === false"
                class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block sp-font-sans"
                :href="seedprod_analytics_activate_link"
                target="_blank"
                @click.prevent="plugin_action('monsterinsights')"
              >
                <span class="sp-text-white">{{txt_44}} MonsterInsights</span>
                <span v-if="doing_install === true">
                  Installing
                  <i class="fas fa-spinner fa-spin"></i>
                </span>
              </a>
            </div>
            <div
              v-if="plugins['monsterinsights'].status_code === 1 || shared.plugins_installed['monsterinsights-pro'].status === 1"
            >
              <a
                class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
                :href="'admin.php?page=monsterinsights_settings#/'"
                target="_blank"
              >{{txt_3}}</a>
            </div>
            <div v-else-if="plugins['exactmetrics'].status_code === 1 || shared.plugins_installed['exactmetrics-pro'].status === 1">
              <span class="sp-text-base sp-font-semibold">{{txt_4}}</span> Exact Metrics
              <br />
              <a
                class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
                :href="'admin.php?page=exactmetrics_reports#/'"
                target="_blank"
              >{{txt_3}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import ImageControl from '@/components/ImageControl.vue';
import { helpers } from '../mixins/helpers.js';
import qs from 'qs';

export default {
  name: 'settingsanalytics',
  mixins: [ helpers ],
  data() {
    return {
      txt_1: __( 'Analytics', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __(
        'Your Analytics settings are being managed by:',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_3: __( 'Edit Analytics Settings', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __(
        'Your SEO settings are being managed by:',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_5: __(
        'Install Google Analytics plugin:',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_6: __( 'Install MonsterInsights', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Activate MonsterInsights', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Install Analytics plugin:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( 'Install', process.env.VUE_APP_TEXTDOMAIN ),
      txt_44: __( 'Activate', process.env.VUE_APP_TEXTDOMAIN ),
      seedprod_analytics_install_link: seedprod_analytics_install_link,
      seedprod_analytics_activate_link: seedprod_analytics_activate_link,
      showModal: false,
      shared: seedprod_store,
      has_an_analytics_plugin_active: false,
      doing_install: false,
      plugins: {
        monsterinsights: {
          slug_base: 'google-analytics-for-wordpress',
          slug: 'google-analytics-for-wordpress/googleanalytics.php',
          url:
            'https://downloads.wordpress.org/plugin/google-analytics-for-wordpress.zip',
          status: '',
          status_code: '',
          is_pro: false,
        },
        exactmetrics: {
          slug_base: 'google-analytics-dashboard-for-wp',
          slug: 'google-analytics-dashboard-for-wp/gadwp.php',
          url:
            'https://downloads.wordpress.org/plugin/google-analytics-dashboard-for-wp.zip',
          status: '',
          status_code: '',
          is_pro: false,
        },
      },
    };
  },
  components: {
    ImageControl,
  },
  mounted: function() {
    let self = this;
    lodash.each( this.shared.plugins_installed, function( v, k ) {
      if ( self.plugins[k] !== undefined ) {
        self.plugins[k].status = self.shared.plugins_installed[k].label;
        self.plugins[k].status_code = self.shared.plugins_installed[k].status;
      }
    });
    lodash.each( this.shared.analytics_plugins_installed, function( value, key ) {
      if ( 1 === value ) {
        self.has_an_analytics_plugin_active = true;
      }
    });
  },
  methods: {
    plugin_action( plugin ) {
      let self = this;

      let url = '';
      let type = '';
      let gplugin = plugin;
      this.doing_install = true;

      if ( 0 === this.plugins[plugin].status_code ) {
        url = seedprod_get_install_addon_url;
        var data = qs.stringify({
          plugin: this.plugins[plugin].url,
          type: 'plugin',
        });
        type = 'install';
      }
      if ( 1 === this.plugins[plugin].status_code ) {
        url = seedprod_deactivate_addon_url;
        var data = qs.stringify({
          plugin: this.plugins[plugin].slug,
          type: 'plugin',
        });
        type = 'deactivate';
      }
      if ( 2 === this.plugins[plugin].status_code ) {
        url = seedprod_activate_addon_url;
        var data = qs.stringify({
          plugin: this.plugins[plugin].slug,
          type: 'plugin',
        });
        type = 'activate';
      }

      this.axios
        .post( url, data, {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        })
        .then( function( response ) {
          self.shared.doing_ajax = false;

          //console.log(response.data);
          //console.log(type);

          if ( 'install' == type ) {
            if ( response.data.error ) {
              self.$swal({
                imageUrl:
                  self.shared.plugin_path + 'public/svg/error-24px-white.svg',
                text: response.data.error,
                toast: true,
                type: null,
                customClass: 'sp-toast-error',
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
              });
              let data = qs.stringify({
                plugin: self.plugins[gplugin].slug_base,
              });
              self.axios
                .post( seedprod_plugin_nonce_url, data, {
                  'Content-Type':
                    'application/x-www-form-urlencoded;charset=UTF-8',
                })
                .then( function( response ) {
                  if ( response.data ) {
                    window.open(
                      'update.php?action=install-plugin&plugin=' +
                        self.plugins[gplugin].slug_base +
                        '&_wpnonce=' +
                        response.data,
                      '_blank'
                    );
                  }
                });
            } else {
              self.$swal({
                imageUrl:
                  self.shared.plugin_path + 'public/svg/success-24px-white.svg',
                text: 'Plugin Installed, click Activate',
                toast: true,
                type: null,
                position: 'top-end',
                customClass: 'sp-toast-success',
                showConfirmButton: false,
                timer: 3000,
              });
              self.plugins[plugin].status = 'Inactive';
              self.plugins[plugin].status_code = 2;
              self.plugin_action( 'monsterinsights' );
              self.$forceUpdate();
            }
          }
          if ( 'activate' == type ) {
            if ( response.data.success ) {
              self.$swal({
                imageUrl:
                  self.shared.plugin_path + 'public/svg/success-24px-white.svg',
                text: response.data.data,
                toast: true,
                type: null,
                position: 'top-end',
                customClass: 'sp-toast-success',
                showConfirmButton: false,
                timer: 3000,
              });
              self.plugins[plugin].status = 'Active';
              self.plugins[plugin].status_code = 1;
              self.$forceUpdate();
            } else {
              self.$swal({
                imageUrl:
                  self.shared.plugin_path + 'public/svg/error-24px-white.svg',
                text: response.data.data,
                toast: true,
                type: null,
                position: 'top-end',
                customClass: 'sp-toast-error',
                showConfirmButton: false,
                timer: 3000,
              });
            }
          }
          if ( 'deactivate' == type ) {
            if ( response.data.success ) {
              self.$swal({
                imageUrl:
                  self.shared.plugin_path + 'public/svg/success-24px-white.svg',
                text: response.data.data,
                toast: true,
                type: null,
                customClass: 'sp-toast-success',
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
              });
              self.plugins[plugin].status = 'Inactive';
              self.plugins[plugin].status_code = 2;
              self.$forceUpdate();
            } else {
              self.$swal({
                imageUrl:
                  self.shared.plugin_path + 'public/svg/error-24px-white.svg',
                text: response.data.data,
                toast: true,
                type: null,
                customClass: 'sp-toast-error',
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
              });
            }
          }
        })
        .catch( function( error ) {

          //console.log(error);
          self.shared.doing_ajax = false;
          self.$swal({
            imageUrl:
              self.shared.plugin_path + 'public/svg/error-24px-white.svg',
            text: error,
            toast: true,
            type: null,
            customClass: 'sp-toast-error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
          });
        });
    },
  },
};
</script>
