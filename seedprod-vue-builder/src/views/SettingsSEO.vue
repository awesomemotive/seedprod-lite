<template>
  <div class="seedprod-settings-page">
    <div class="seedprod-settings-page-wrapper">
      <h1>{{txt_1}}</h1>
      <div v-if="shared.settings.no_conflict_mode">
            <div class="sp-flex sp-items-center sp-mb-8" >
        <label class="sp-w-48">SEO Title:</label>
        <input
          type="text"
          v-model="shared.settings.seo_title"
          class="sp-form-input sp-w-full sp-flex-1"
        />
      </div>
      <div class="sp-flex sp-items-center sp-mb-8">
        <label class="sp-w-48">SEO Description:</label>
        <textarea class="sp-form-textarea " style="width:400px;height:200px" v-model="shared.settings.seo_description"></textarea>
      </div>

      <div class="sp-flex sp-items-center sp-mb-8">
        <label class="sp-w-48">Favicon:</label>
        <ImageControl v-model="shared.settings.favicon"  :block="shared" prefix="img"/>
      </div>

      <div class="sp-flex sp-items-center sp-mb-8">
        <label class="sp-w-48">Social Media Thumbnail:</label>
        <ImageControl v-model="shared.settings.social_thumbnail"  :block="shared" prefix="imgthumb"/>
      </div>

      <div class="sp-flex sp-items-center sp-mb-8">
        <label class="sp-w-48">Enable No Index:</label>
        <toggle-button
            :width="36"
            v-model="shared.settings.no_index"
            class="sp-mr-2"
          />
      </div>

      </div>

      <div v-else>
      <div v-if="has_an_seo_plugin_active"  >
        <div v-for="(v,k) in this.shared.seo_plugins_installed" :key="k">
          <div v-if="k == 'yoast' && v === 1">
            <span class="sp-text-base sp-font-semibold">{{txt_2}}</span>
            {{txt_3}}
            <br />
            <a
              v-if="shared.page_type == 'lp'"
              class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
              :href="'post.php?post='+shared.lpage.ID+'&action=edit'"
              target="_blank"
            >{{txt_4}}</a>
            <a
              v-else
              class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
              :href="'admin.php?page=wpseo_titles'"
              target="_blank"
            >{{txt_4}}</a>
          </div>
          <div v-else-if="k == 'rank-math' && v === 1">
            <span class="sp-text-base sp-font-semibold">{{txt_2}}</span> Rank Math
            <br />
            <a
              v-if="shared.page_type == 'lp'"
              class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
              :href="'post.php?post='+shared.lpage.ID+'&action=edit'"
              target="_blank"
            >{{txt_4}}</a>
            <a
              v-else
              class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
              :href="'admin.php?page=rank-math-options-titles'"
              target="_blank"
            >{{txt_4}}</a>
          </div>
          <div v-else-if="k == 'seo-framework' && v === 1">
            <span class="sp-text-base sp-font-semibold">{{txt_2}}</span> SEO Framework
            <br />
            <a
              v-if="shared.page_type == 'lp'"
              class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
              :href="'post.php?post='+shared.lpage.ID+'&action=edit'"
              target="_blank"
            >{{txt_4}}</a>
            <a
              v-else
              class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
              :href="'admin.php?page=theseoframework-settings'"
              target="_blank"
            >{{txt_4}}</a>
          </div>
          <div v-else-if="k == 'all-in-one' && v === 1">
            <span class="sp-text-base sp-font-semibold">{{txt_2}}</span> All In One SEO
            <br />
            <a
              v-if="shared.page_type == 'lp'"
              class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
              :href="'post.php?post='+shared.lpage.ID+'&action=edit'"
              target="_blank"
            >{{txt_4}}</a>
            <a
              v-else
              class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
              :href="'admin.php?page=all-in-one-seo-pack%2Fall-in-onep_class.php'"
              target="_blank"
            >{{txt_4}}</a>
          </div>
          <div  v-else-if="k == 'all-in-one-pro' && v === 1">
            <span class="sp-text-base sp-font-semibold">{{txt_2}}</span> All In One SEO Pro
            <br />
            <a
              v-if="shared.page_type == 'lp'"
              class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
              :href="'post.php?post='+shared.lpage.ID+'&action=edit'"
              target="_blank"
            >{{txt_4}}</a>
            <a
              v-else
              class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
              :href="'admin.php?page=all-in-one-seo-pack%2Fall-in-onep_class.php'"
              target="_blank"
            >{{txt_4}}</a>
          </div>
          <div  v-else-if="k == 'yoast-pro' && v === 1">
            <span class="sp-text-base sp-font-semibold">{{txt_2}}</span> Yoast SEO
            <br />
            <a
              v-if="shared.page_type == 'lp'"
              class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
              :href="'post.php?post='+shared.lpage.ID+'&action=edit'"
              target="_blank"
            >{{txt_4}}</a>
            <a
              v-else
              class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
              :href="'admin.php?page=all-in-one-seo-pack%2Fall-in-onep_class.php'"
              target="_blank"
            >{{txt_4}}</a>
          </div>
        </div>
      </div>
      <div v-else>
        <div>
          <!-- <span class="sp-text-base sp-font-semibold">{{txt_5}}</span>
          <br />
          <a
            v-if="shared.seo_plugins_installed['all-in-one'] === 0"
            class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
            :href="seedprod_seo_install_link"
            target="_blank"
          >{{txt_6}}</a>
          <a
            v-if="shared.seo_plugins_installed['all-in-one'] === 2"
            class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
            :href="seedprod_seo_activate_link"
            target="_blank"
          >{{txt_7}}</a>-->

          <div v-if="shared.plugins_installed['all-in-one-pro'].status === 0">
            <div
              v-if="plugins['all-in-one'].status_code !== 1"
              class="sp-text-center sp-bg-primary-10 sp-text-primary sp-border sp-border-primary sp-p-4 sp-font-sans"
            >
              <span class="sp-text-base sp-font-semibold sp-font-sans">{{txt_11}}</span>
              <br />
              <a
                v-if="plugins['all-in-one'].status_code === 0 && doing_install === false"
                class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block sp-font-sans"
                :href="seedprod_seo_install_link"
                target="_blank"
                @click.prevent="plugin_action('all-in-one')"
              >
                <span class="sp-text-white">{{txt_33}} All In One SEO</span>
              </a>
              <span v-if="doing_install === true">
                Installing
                <i class="fas fa-spinner fa-spin"></i>
              </span>
              <a
                v-if="plugins['all-in-one'].status_code === 2 && doing_install === false"
                class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block sp-font-sans"
                :href="seedprod_seo_activate_link"
                target="_blank"
                @click.prevent="plugin_action('all-in-one')"
              >
                <span class="sp-text-white">{{txt_44}} All In One SEO</span>
                <span v-if="doing_install === true">
                  Installing
                  <i class="fas fa-spinner fa-spin"></i>
                </span>
              </a>
            </div>
            <div
              v-if="plugins['all-in-one'].status_code === 1 || shared.plugins_installed['all-in-one-pro'].status === 1"
            >
              <a
                v-if="shared.page_type == 'lp'"
                class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
                :href="'post.php?post='+shared.lpage.ID+'&action=edit'"
                target="_blank"
              >{{txt_4}}</a>
              <a
                v-else
                class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
                :href="'admin.php?page=all-in-one-seo-pack%2Fall-in-onep_class.php'"
                target="_blank"
              >{{txt_4}}</a>
            </div>
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
  name: 'settingseo',
  mixins: [ helpers ],
  data() {
    return {
      txt_1: __( 'SEO', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __(
        'Your SEO settings are being managed by:',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_3: __( 'Yoast SEO', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __(
        'Edit this page\'s SEO Settings',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_5: __( 'Install SEO plugin:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Install All In One SEO', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Activate All in One SEO', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Install SEO plugin:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( 'Install', process.env.VUE_APP_TEXTDOMAIN ),
      txt_44: __( 'Activate', process.env.VUE_APP_TEXTDOMAIN ),
      seedprod_seo_install_link: seedprod_seo_install_link,
      seedprod_seo_activate_link: seedprod_seo_activate_link,
      showModal: false,
      shared: seedprod_store,
      has_an_seo_plugin_active: false,
      doing_install: false,
      plugins: {
        'all-in-one': {
          slug_base: 'all-in-one-seo-pack',
          slug: 'all-in-one-seo-pack/all_in_one_seo_pack.php',
          url: 'https://downloads.wordpress.org/plugin/all-in-one-seo-pack.zip',
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
    lodash.each( this.shared.seo_plugins_installed, function( value, key ) {
      if ( 1 === value ) {
        self.has_an_seo_plugin_active = true;
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
              self.plugin_action( 'all-in-one' );
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
