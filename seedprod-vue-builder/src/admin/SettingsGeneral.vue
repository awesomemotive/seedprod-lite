<template>
	<div>
		<table class="form-table sp-text-neutral-80">
			<tbody>
				<tr valign="top" class="seedprod-settings-title">
					<td colspan="2" class="sp-p-0 sp-border-b sp-border-t-0 sp-border-l-0 sp-border-r-0 sp-border-neutral-10 sp-border-solid sp-pb-5">
						<h4 class="sp-text-xl sp-mt-4 sp-mb-1">{{txt_1}}</h4>
						<p v-if="shared.page_path == 'seedprod_pro'">
							{{txt_2}}
						</p>
						<p v-if="shared.page_path == 'seedprod_lite'">
							<span v-html="txt_3"></span>
							<img
								draggable="false"
								class="emoji"
								alt="🙂"
								src="https://s.w.org/images/core/emoji/11.2.0/svg/1f642.svg"
							/>
						</p>
						<p v-if="shared.page_path == 'seedprod_lite'" v-html="txt_4" class="sp-mt-2">
						</p>
						 <p
							v-if="shared.page_path == 'seedprod_lite'"
							style="margin-top:12px;"
							v-html="txt_5"
						>
						</p>
					</td>
				</tr>
				<tr valign="top" class="seedprod-settings-form sp-border-b sp-border-t-0 sp-border-l-0 sp-border-r-0 sp-border-neutral-10 sp-border-solid" >
					<th scope="row">
						<strong class="sp-text-neutral-80" v-html="txt_6"></strong>
					</th>
					<td>
						<form class="form-inline">
							<input
								type="password"
								class="sp-form-input sp-w-64 sp-m-0"
								v-model="shared.settings_page_meta.api_key"
								autocomplete="off"
								style="margin-bottom: 5px;"
								:placeholder="txt_7"
							/>

							<button
								class="sp-inline-block sp-text-sm sp-bg-primary sp-px-4 sp-py-3 sp-rounded-sm sp-leading-none sp-text-white sp-no-underline sp-rounded-md sp-text-base sp-ml-1 hover:sp-bg-primary-lighter sp-cursor-pointer"
								:disabled="
									shared.doing_ajax &&
										shared.settings_page_meta.button ==
											'api_key'
								"
								@click.prevent="save_api_key"
							>
								<i
									class="fas fa-spinner fa-spin"
									v-if="
										shared.doing_ajax &&
											shared.settings_page_meta.button ==
												'api_key'
									"
								></i
								>&nbsp;<span v-if="shared.license_name"
									>{{txt_8}}</span
								><span v-else>{{txt_9}}</span>
							</button>

							<span v-if="shared.license_name && shared.page_path == 'seedprod_pro'">
								<button
									class="sp-inline-block sp-text-sm sp-bg-neutral-10 sp-px-4 sp-py-3 sp-rounded-sm sp-leading-none sp-text-neutral-80 sp-no-underline sp-rounded-md sp-text-base sp-ml-1 hover:sp-bg-neutral-15 sp-cursor-pointer"
									:disabled="
										shared.doing_ajax &&
											shared.settings_page_meta.button ==
												'deactivate_api_key'
									"
									@click.prevent="deactivate_api_key"
								>
									<i
										class="fas fa-spinner fa-spin"
										v-if="
											shared.doing_ajax &&
												shared.settings_page_meta
													.button ==
													'deactivate_api_key'
										"
									></i
									>&nbsp;<span>{{txt_10}}</span>
								</button>
							</span>
							&nbsp;
							<span
								v-if="
									shared.page_path == 'seedprod_lite' &&
										show_unlock
								"
							>
								<button
									class="sp-inline-block sp-text-sm sp-bg-neutral-10 sp-px-4 sp-py-3 sp-rounded-sm sp-leading-none sp-text-neutral-80 sp-no-underline sp-rounded-md sp-text-base sp-ml-1 hover:sp-bg-neutral-15 sp-cursor-pointer"
									@click="start_free_to_pro_upgrade"
									:disabled="
										shared.doing_ajax &&
											shared.settings_page_meta.button ==
												'unlock'
									"
								>
									<i
										class="fas fa-spinner fa-spin"
										v-if="
											shared.doing_ajax &&
												shared.settings_page_meta
													.button == 'unlock'
										"
									></i
									>&nbsp;{{txt_11}}
								</button>
							</span>
						</form>
						<div v-if="shared.license_name" style="margin-top:2px;" class="sp-text-neutral-80" v-html="txt_12">
						</div>
					</td>
				</tr>
				<tr valign="top" class="seedprod-settings-title">
					<td colspan="2" class="sp-p-0 sp-border-b sp-border-t-0 sp-border-l-0 sp-border-r-0 sp-border-neutral-10 sp-border-solid sp-pb-5">
						<h4 class="sp-text-xl sp-mt-4 sp-mb-1">{{txt_15}}</h4>
					</td>
				</tr>
				 <tr valign="top" class="seedprod-settings-title" v-if="shared.page_path != 'seedprod_lite'">
					<th scope="row">
						<strong class="sp-text-neutral-80">{{txt_14}}</strong>
					</th>
					<td>
							<input
								type="text"
								class="sp-form-input sp-w-64 sp-m-0"
								v-model="shared.app_settings.facebook_g_app_id"
								autocomplete="off"
								style="margin-bottom: 5px;"
								:placeholder="txt_16"
							/>

					</td>

				</tr>  

				<tr valign="top" class="seedprod-settings-title">
					<th scope="row">
						<strong class="sp-text-neutral-80">{{txt_18}}</strong>
					</th>
					<td>
							<toggle-button
								:width="40"
								:sync="true"
								style="margin-bottom: 0"
								v-model="shared.app_settings.disable_seedprod_button"
								/>&nbsp;
								<span
								v-if="shared.app_settings.disable_seedprod_button"
								class="sp-text-11px sp-uppercase sp-pl-1 sp-font-bold"
								>{{ txt__2 }}</span
								>
								<span
								v-else
								class="sp-text-11px sp-uppercase sp-text-neutral-40 sp-pl-1 sp-font-bold"
								>{{ txt__3 }}</span
								>

					</td>
				</tr>

				<tr valign="top" class="seedprod-settings-title">
					<th scope="row">
						<strong class="sp-text-neutral-80"></strong>
					</th>
					<td>
							<button
								class="sp-inline-block sp-text-sm sp-bg-primary sp-px-4 sp-py-3 sp-rounded-sm sp-leading-none sp-text-white sp-no-underline sp-rounded-md sp-text-base sp-ml-1 hover:sp-bg-primary-lighter sp-cursor-pointer"
								@click.prevent="save_app_settings"
							>
							<span>{{txt_17}}</span>
							</button>
					</td>
				</tr>

				<tr valign="top" class="seedprod-settings-title">
					<td colspan="2" class="sp-p-0 sp-border-b sp-border-t-0 sp-border-l-0 sp-border-r-0 sp-border-neutral-10 sp-border-solid sp-pb-5">
						<h4 class="sp-text-xl sp-mt-4 sp-mb-1">{{txt_13}}</h4>

						<a href="admin.php?page=sp_pro_debug">View Debug Information</a>
					</td>
				</tr>

			</tbody>
		</table>
		<div v-if="shared.page_path == 'seedprod_lite' && shared.show_inline_cta">
		<SettingsLiteCTA />
		</div>
	</div>
</template>

<script>
import qs from 'qs';
import NProgress from 'nprogress';
import SettingsLiteCTA from '@/components/SettingsLiteCTA.vue';
import { helpers } from '../mixins/helpers.js';
import { __, sprintf  } from '@wordpress/i18n';

export default {
  name: 'SettingsGeneral',
  mixins: [ helpers ],
  data: function() {
    return {
      txt_1: __( 'License', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Your license key provides access to updates and addons.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'You\'re using <strong>SeedProd Lite</strong> - No License needed. Enjoy!', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: sprintf( __( 'To unlock more features consider <a href=\'%s\' target=\'_blank\'>upgrading to PRO</a> . As a valued SeedProd Lite user you\'ll receive <strong>a discount off the regular price</strong>, automatically applied at checkout! ', process.env.VUE_APP_TEXTDOMAIN ), 'https://www.seedprod.com/lite-upgrade/?discount=LITEUPGRADE&amp;utm_source=WordPress&amp;utm_medium=seedprod-license-page&amp;utm_campaign=liteplugin' ),
      txt_5: sprintf( __( 'If you already have a license key for <a href=\'%s\' target=\'_blank\'>SeedProd Pro</a>, please enter it to Upgrade to the Pro Features. An External Service will be used to verify and connect you to SeedProd.', process.env.VUE_APP_TEXTDOMAIN ), seedprod_store_admin.upgrade_link + 'welcome' ),
      txt_6: __( 'License Key', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Enter Your License Key Here', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Recheck Key', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Verify Key', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Deactivate Key', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Connect to SeedProd', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: sprintf( __( 'You currently have the <strong>%s</strong> license.',
			 process.env.VUE_APP_TEXTDOMAIN ), seedprod_store_admin.license_name ),
      txt_13: __( 'Debug Information', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Facebook APP ID', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Global Settings', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( '', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Save Settings', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Disable Edit SeedProd Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt__2: __( 'Yes', process.env.VUE_APP_TEXTDOMAIN ),
      		txt__3: __( 'No', process.env.VUE_APP_TEXTDOMAIN ),
      show_unlock: false,
      shared: seedprod_store_admin,
    };
  },
  computed: {
    slug: function() {
      let slug = this.slugify( this.page_meta.upgrade_feature );
      return slug;
    },
  }, mounted() {

    //console.log(this.shared.app_settings.facebook_g_app_id);
  },
  methods: {
    goto_dashboard() {
      this.$router.push({ name: 'dashboard' });
    },
    start_free_to_pro_upgrade: function() {
      let _self = this;
      NProgress.start();

      let data = qs.stringify({});
      _self.shared.doing_ajax = true;
      _self.shared.settings_page_meta.button = 'unlock';
      _self.$swal({
        imageUrl:
					_self.shared.plugin_path +
					'public/svg/success-24px-white.svg',
        text: 'Preparing to Unlock... Please wait...',
        toast: true,
        customClass: 'sp-toast-success',
        type: null,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
      });
      this.axios
        .post( seedprod_upgrade_license_url, data, {
          'Content-Type':
						'application/x-www-form-urlencoded;charset=UTF-8',
        })
        .then( function( response ) {
          _self.shared.doing_ajax = false;
          _self.shared.settings_page_meta.button = false;
          if ( response.data.success ) {

            //console.log(response.data);
            location.href = response.data.data.url;
          } else {

            //console.log(response.data);
            _self.$swal({
              imageUrl:
								_self.shared.plugin_path +
								'public/svg/error-24px-white.svg',
              text: response.data.data.message,
              toast: true,
              customClass: 'sp-toast-error',
              type: null,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
            });
          }
        })
        .catch( function( error ) {
          _self.shared.doing_ajax = false;
          _self.shared.settings.button = false;
          _self.$swal({
            imageUrl:
							_self.shared.plugin_path +
							'public/svg/error-24px-white.svg',
            text: error,
            toast: true,
            customClass: 'sp-toast-error',
            type: null,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
          });
        });
    },
    save_settings: function() {
      let _self = this;
      NProgress.start();
      this.$validator.validateAll().then( function( result ) {
        if ( result ) {
          let data = qs.stringify({
            settings: _self.shared.settings,
          });

          _self.shared.doing_ajax = true;
          _self.shared.settings_page_meta.button = 'settings';

          _self.axios
            .post( seedprod_save_settings_ajax_url, data, {
              'Content-Type':
								'application/x-www-form-urlencoded;charset=UTF-8',
            })
            .then( function( response ) {
              NProgress.done();
              _self.shared.doing_ajax = false;
              _self.shared.settings.button = false;

              _self.$	({
                imageUrl:
									_self.shared.plugin_path +
									'public/svg/success-24px-white.svg',
                text: __( 'Saved!', process.env.VUE_APP_TEXTDOMAIN ),
                toast: true,
                type: null,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
              });
            })
            .catch( function( error ) {
              _self.shared.doing_ajax = false;
              _self.shared.settings.button = false;
              _self.$swal({
                imageUrl:
									_self.shared.plugin_path +
									'public/svg/error-24px-white.svg',
                text: __( 'Could not be saved. Please contact Support if you continue to experience this issue.', process.env.VUE_APP_TEXTDOMAIN ),
                toast: true,
                type: null,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
              });
            });
          return;
        } else {
          let errors = '';
          _self.errors.all().forEach( function( value ) {
            errors = errors + value + '\n';
          });
          errors = errors + '';

          _self.$swal({
            imageUrl:
							_self.shared.plugin_path +
							'public/svg/error-24px-white.svg',
            text: errors,
            toast: true,
            type: null,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
    },
    save_app_settings: function() {

      let _self = this;
      NProgress.start();
      this.$validator.validateAll().then( function( result ) {

        //console.log(_self);
        if ( result ) {

          //console.log("save app settings");
          let data = qs.stringify({
            app_settings: _self.shared.app_settings,
          });

          _self.shared.doing_ajax = true;

          //_self.shared.settings_page_meta.button = "settings";

          _self.axios
            .post( seedprod_save_app_settings_ajax_url, data, {
              'Content-Type':
									'application/x-www-form-urlencoded;charset=UTF-8',
            })
            .then( function( response ) {

              //console.log(response);
              NProgress.done();
              _self.shared.doing_ajax = false;

              //_self.shared.settings.button = false;

              _self.$swal({
                imageUrl:
										_self.shared.plugin_path +
										'public/svg/success-24px-white.svg',
                text: __( 'Saved!', process.env.VUE_APP_TEXTDOMAIN ),
                toast: true,
                customClass: 'sp-toast-success',
                type: null,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
              });

              //console.log(response.data.msg);

            })
            .catch( function( error ) {

              _self.shared.doing_ajax = false;

              //_self.shared.settings.button = false;
              _self.$swal({
                imageUrl:
										_self.shared.plugin_path +
										'public/svg/error-24px-white.svg',
                text: __( 'Could not be saved. Please contact Support if you continue to experience this issue.', process.env.VUE_APP_TEXTDOMAIN ),
                toast: true,
                customClass: 'sp-toast-failure',
                type: null,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
              });

            });
          return;

          //console.log(_self.shared);

        } else {
          alert( 'else save app settings' );
        }
      });

    },
    deactivate_api_key: function() {
      let _self = this;
      let data = qs.stringify({
        api_key: _self.shared.settings_page_meta.api_key,
      });

      _self.shared.doing_ajax = true;
      NProgress.start();
      _self.shared.settings_page_meta.button = 'deactivate_api_key';
      _self.axios
        .post( seedprod_api_key_deactivate_url, data, {
          'Content-Type':
						'application/x-www-form-urlencoded;charset=UTF-8',
        })
        .then( function( response ) {
          NProgress.done();
          _self.shared.doing_ajax = false;
          _self.shared.settings_page_meta.button = false;

          //_self.shared.settings.lmsg =
          //response.data.msg;

          if ( 'true' == response.data.status ) {

            //_self.shared.settings.lclass =
            //	"alert-success";
            //_self.show_unlock = true;
            var type = 'success';
            _self.shared.license_name = '';
            _self.shared.settings_page_meta.api_key = '';
          } else {

            //_self.shared.settings.lclass =
            //	"alert-danger";
            var type = 'error';
          }

          _self.$swal({
            imageUrl:
							_self.shared.plugin_path + 'public/svg/' + type + '-24px-white.svg',
            text: response.data.msg,
            toast: true,
            type: null,
            customClass: 'sp-toast-' + type,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
          });
        })
        .catch( function( error ) {

          //console.log(error);
          _self.shared.doing_ajax = false;
          _self.shared.settings_page_meta.button = false;
          _self.$swal({
            imageUrl:
							_self.shared.plugin_path + 'public/svg/error-24px-white.svg',
            text: error.response.data.message,
            toast: true,
            type: null,
            customClass: 'sp-toast-error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
          });
        });
      return;
    },
    save_api_key: function() {
      let _self = this;

      let data = qs.stringify({
        api_key: _self.shared.settings_page_meta.api_key,
      });

      _self.shared.doing_ajax = true;
      NProgress.start();
      _self.shared.settings_page_meta.button = 'api_key';

      let url = 'admin-ajax.php?action=' + this.shared.page_path + '_save_api_key&_wpnonce=' + seedprod_nonce;

      _self.axios
        .post( url, data, {
          'Content-Type':
						'application/x-www-form-urlencoded;charset=UTF-8',
        })
        .then( function( response ) {
          NProgress.done();
          _self.shared.doing_ajax = false;
          _self.shared.settings_page_meta.button = false;
          _self.shared.license_name = 1;
          _self.txt_12 = response.data.license_name;
          //console.log( response.data.license_name );

          //_self.shared.settings.lmsg =
          //response.data.msg;

          if ( 'true' == response.data.status ) {

            //_self.shared.settings.lclass =
            //	"alert-success";
            _self.show_unlock = true;
            var type = 'success';
            if ( response.data.body.plugin_name ) {
              _self.shared.license_name =
								response.data.body.plugin_name;
            }
            //console.log(_self.shared.active_license);
            if(_self.shared.active_license === false){
							setTimeout(location.reload(), 3000);
						}
          } else {

            //_self.shared.settings.lclass =
            //	"alert-danger";
            var type = 'error';
            _self.shared.license_name = '';

          }

          _self.$swal({
            imageUrl:
							_self.shared.plugin_path + 'public/svg/' + type + '-24px-white.svg',
            text: response.data.msg,
            toast: true,
            type: null,
            customClass: 'sp-toast-' + type,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
          });
        })
        .catch( function( error ) {
          console.log( error );
          _self.shared.doing_ajax = false;
          _self.shared.settings_page_meta.button = false;
          _self.$swal({
            imageUrl:
							_self.shared.plugin_path + 'public/svg/error-24px-white.svg',
            text: error.response.data.message,
            toast: true,
            type: null,
            position: 'top-end',
            customClass: 'sp-toast-error',
            showConfirmButton: false,
            timer: 3000,
          });
        });
      return;
    },
  },
  components: {
    SettingsLiteCTA,
  },
};
</script>
