<template>
  <div>
    <div
      class="sp-grid sp-grid-cols-1 lg:sp-grid-cols-2 xl:sp-grid-cols-3 sp-gap-6 sp-mt-10 "
    >
      <div
        v-for="(p, index) in plugins"
        class="sp-w-full sp-bg-white sp-border-neutral-15 sp-border sp-border-solid sp-py-10 sp-px-8 sp-flex sp-justify-between sp-flex-col"
        :key="index"
      >
        <div class="seedprod-plugin-recommendations-block sp-flex sp-flex-col">
          <div class="sp-flex sp-items-center sp-flex-col">
            <div>
              <img :src="p.icon" class="sp-w-16" />
            </div>
            <div class="sp-text-center sp-text-neutral-80">
              <h3 class="sp-text-neutral-80 sp-text-xl">{{ p.name }}</h3>
              <p v-html="p.desc" class="sp-text-sm"></p>
            </div>
          </div>
        </div>
        <div>
          <div v-if="
						shared.doing_ajax == index || shared.doing_ajax == 'all'
					">
            <div style="text-align:center;flex: 1;">
              <i class="fas fa-spinner fa-spin"></i>
            </div>
          </div>
          <div class="sp-flex sp-flex-col sp-items-center" v-else>

            <div v-if="p.is_pro === true">
              {{plugins['wpforms-pro']}}
                <strong>{{txt_1}}:</strong> {{txt_2}}
            </div>

            <div v-else class="sp-flex sp-flex-col sp-items-center">
            <div>
              <strong>{{txt_1}}:</strong>
              {{ p.status }}
            </div>
            <button
              class="sp-mt-1 sp-inline-block sp-bg-primary sp-px-5 sp-py-3 sp-rounded sp-leading-none sp-text-white sp-no-underline sp-text-base hover:sp-bg-primary-lighter sp-cursor-pointer sp-font-semibold"
              @click="plugin_action(index)"
            >{{ plugin_btn_txt(p) }}</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs';
import { __ } from '@wordpress/i18n';
export default {
  name: 'GrowthTools',

  components: {},

  data() {
    return {
      txt_1: __( 'Status', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'PRO Version installed', process.env.VUE_APP_TEXTDOMAIN ),
      all_plugins: {},
      plugins: {
        rafflepress: {
          slug_base: 'rafflepress',
          slug: 'rafflepress/rafflepress.php',
          icon: seedprod_store_admin.plugin_path + 'public/img/plugin-rp.png',
          name: 'RafflePress',
          desc:
            'Turn your visitors into brand ambassadors! Easily grow your email list, website traffic, and social media followers with powerful viral giveaways & contests.',
          url: 'https://downloads.wordpress.org/plugin/rafflepress.zip',
          status: '',
          status_code: '',
          is_pro: false,
        },
        wpforms: {
          slug_base: 'wpforms-lite',
          slug: 'wpforms-lite/wpforms.php',
          icon:
            seedprod_store_admin.plugin_path + 'public/img/plugin-wpforms.png',
          name: 'WPForms',
          desc:
            'The most beginner friendly drag & drop WordPress forms plugin allowing you to create beautifdivcontact forms, subscription forms, payment forms, and more in minutes, not hours!',
          url: 'https://downloads.wordpress.org/plugin/wpforms-lite.zip',
          status: '',
          status_code: '',
          is_pro: false,
        },

        optinmonster: {
          slug_base: 'optinmonster',
          slug: 'optinmonster/optin-monster-wp-api.php',
          icon: seedprod_store_admin.plugin_path + 'public/img/plugin-om.png',
          name: 'OptinMonster',
          desc:
            'Our high-converting optin forms like Exit-Intent® popups, Fullscreen Welcome Mats, and Scroll boxes help you dramatically boost conversions and get more email subscribers.',
          url: 'https://downloads.wordpress.org/plugin/optinmonster.zip',
          status: '',
          status_code: '',
          is_pro: false,
        },

        wpmailsmtp: {
          slug_base: 'wp-mail-smtp',
          slug: 'wp-mail-smtp/wp_mail_smtp.php',
          icon: seedprod_store_admin.plugin_path + 'public/img/plugin-smtp.png',
          name: 'WP Mail SMTP',
          desc:
            'SMTP (Simple Mail Transfer Protocol) is an industry standard for sending emails. SMTP helps increase email deliverability by using proper authentication.',
          url: 'https://downloads.wordpress.org/plugin/wp-mail-smtp.zip',
          status: '',
          status_code: '',
          is_pro: false,
        },
        monsterinsights: {
          slug_base: 'google-analytics-for-wordpress',
          slug: 'google-analytics-for-wordpress/googleanalytics.php',
          icon: seedprod_store_admin.plugin_path + 'public/img/plugin-mi.png',
          name: 'MonsterInsights',
          desc:
            'MonsterInsights makes it “effortless” to properly connect your WordPress site with Google Analytics, so you can start making data-driven decisions to grow your business.',
          url:
            'https://downloads.wordpress.org/plugin/google-analytics-for-wordpress.zip',
          status: '',
          status_code: '',
          is_pro: false,
        },

        trustpulse: {
          slug_base: 'trustpulse-api',
          slug: 'trustpulse-api/trustpulse.php',
          icon:
            seedprod_store_admin.plugin_path +
            'public/img/plugin-trustpulse.png',
          name: 'TrustPulse',
          desc:
            'TrustPulse uses FOMO (Fear of Missing Out) to boost your sales and conversions with social proof notifications. Use it to boost sales on your Woocommerce store, increase signups on your membership site, get more email subscribers, and more.',
          url: 'https://downloads.wordpress.org/plugin/coming-soon.zip',
          status: '',
          status_code: '',
          is_pro: false,
        },
      },
      shared: seedprod_store_admin,
    };
  },

  methods: {
    plugin_action( plugin ) {
      let self = this;

      this.doing_ajax = true;

      let url = '';
      let type = '';
      let gplugin = plugin;
      self.shared.doing_ajax = plugin;

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
    plugin_btn_txt( plugin ) {
      let txt = '';
      if ( 'Not Installed' == plugin.status ) {
        txt = __( 'Install', process.env.VUE_APP_TEXTDOMAIN );
      }
      if ( 'Active' == plugin.status ) {
        txt = __( 'Deactivate', process.env.VUE_APP_TEXTDOMAIN );
      }
      if ( 'Inactive' == plugin.status ) {
        txt = __( 'Activate', process.env.VUE_APP_TEXTDOMAIN );
      }
      return txt;
    },
  },
  mounted: function() {
    let self = this;

    // get plugins status
    self.shared.doing_ajax = 'all';
    this.axios
      .get( seedprod_get_plugins_list_url )
      .then( function( response ) {
        self.shared.doing_ajax = false;
        if ( response.data ) {
          for ( let k in response.data ) {
            if ( self.plugins[k] !== undefined ) {
              if ( 'wpforms' == k && 0 !== response.data['wpforms-pro'].status ) {
                self.plugins[k].is_pro = true;
              }
              if ( 'rafflepress' == k && 0 !== response.data['rafflepress-pro'].status ) {
                self.plugins[k].is_pro = true;
              }
              if ( 'monsterinsights' == k && 0 !== response.data['monsterinsights-pro'].status ) {
                self.plugins[k].is_pro = true;
              }
              if ( 'wpmailsmtp' == k && 0 !== response.data['wpmailsmtp-pro'].status ) {
                self.plugins[k].is_pro = true;
              }
              self.plugins[k].status = response.data[k].label;
              self.plugins[k].status_code = response.data[k].status;
            }
          }
        }
      })
      .catch( function( error ) {
        self.shared.doing_ajax = false;

        //console.log(error);
        self.shared.doing_ajax = false;
        self.$swal({
          imageUrl: self.shared.plugin_path + 'public/svg/error-24px-white.svg',
          text: error,
          toast: true,
          type: null,
          position: 'top-end',
          customClass: 'sp-toast-error',
          showConfirmButton: false,
          timer: 3000,
        });
      });
  },
  created() {

    // Highlight Growth Tools admin sub-menu link when it is current page
    const pagesMenuLink = document.querySelector( '[id^="toplevel_page_seedprod_"] > .wp-submenu > li:nth-of-type(2)' );
    const growthtoolsMenuLink = document.querySelector( '[id^="toplevel_page_seedprod_"] > .wp-submenu > li:nth-of-type(6)' );
    pagesMenuLink.classList.remove( 'current' );
    growthtoolsMenuLink.classList.add( 'current' );
  },
};
</script>
