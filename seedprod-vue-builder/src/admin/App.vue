<template>
  <div class="seedprod-app seedprod sp-antialiased sp-font-display"> 
    <!-- Lite User Prompt -->
    <div
      v-if="shared.page_path == 'seedprod_lite' && shared.show_topbar_cta"
      class="sp--ml-5 sp-bg-green sp-text-white sp-py-2 sp-px-8 sp-text-sm sp-flex sp-justify-center sp-leading-normal sp-relative"
    >
      You’re using SeedProd Lite. To unlock more features consider
      <a
        href="https://seedprod.com/lite-upgrade/?utm_source=WordPress&amp;utm_campaign=liteplugin&amp;utm_medium=plugintopbar"
        class="sp-ml-1 sp-text-white hover:sp-text-white sp-no-underline sp-border-0 sp-border-b sp-border-white sp-border-dotted"
        target="_blank"
      >upgrading to Pro</a>
      <span @click="dismiss_upsell" class="sp-text-white sp-absolute sp-cursor-pointer sp-right-0 sp-top-0 sp-opacity-75 sp-mt-2 sp-mr-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sp-fill-current sp-w-5 sp-h-5"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg></span>
    </div>
    <!-- Inactive License -->
    <div
      v-if="shared.page_path == 'seedprod_pro' && shared.active_license === false && $route.name != 'welcome'"
      class="sp--ml-5 sp-bg-red sp-text-white sp-py-2 sp-px-8 sp-text-sm sp-flex sp-justify-center sp-leading-normal sp-relative sp-uppercase sp-font-semibold"
    >
      You’re license key is invalid!
      <a
        v-if="$route.name != 'settings_general'"
        href="admin.php?page=seedprod_pro#/settings"
        class="sp-ml-1 sp-text-white hover:sp-text-white sp-no-underline sp-border-0 sp-border-b sp-border-white sp-border-dotted"
      >Click Here to Enter Your License Key</a>
    </div>
    <div
      v-if="shared.seedprod_csp4_migrated === false && shared.seedprod_csp4_imported == true"
      class="sp--ml-5 sp-bg-green sp-text-white sp-py-4 sp-px-8 sp-text-lg sp-flex sp-justify-center sp-leading-normal"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="sp-fill-current sp-w-20 sp-mr-2"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM11 5h2v6h-2zm0 8h2v2h-2z"
        />
      </svg>
      <div>
        We have migrated your page settings from the old version to our new builder. Don't worry nothing has changed with your page. Your old version will continue to display until you click "Edit" on the Coming Soon or Maintenance Page and then "Save". After Saving the new version will be displayed.
        <br>
        <a
          href="https://www.seedprod.com/docs/migrating-from-the-previous-free-version/"
          target="_blank"
          class="sp-text-white sp-font-bold"
        >Learn more about the all new SeedProd plugin and how to complete the migration process.</a>
      </div>
    </div>

    <div
      v-if="shared.seedprod_cspv5_migrated === false && shared.seedprod_cspv5_imported == true"
      class="sp--ml-5 sp-bg-green sp-text-white sp-py-4 sp-px-8 sp-text-lg sp-flex sp-justify-center sp-leading-normal"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="sp-fill-current sp-w-20 sp-mr-2"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM11 5h2v6h-2zm0 8h2v2h-2z"
        />
      </svg>
      <div>
        We have migrated your page settings from the old version to our new builder. Don't worry nothing has changed with your pages. However, a lot has changed in the plugin.
        <a
          :href="'https://www.seedprod.com/docs/migrating-from-the-previous-pro-version/?dep='+shared.seedprod_unsupported_feature"
          target="_blank"
          class="sp-text-white sp-font-bold"
        >Learn more about the all new SeedProd plugin and how to complete the migration process.</a>
      </div>
    </div>
    <div
      class="sp-bg-white sp--ml-5 sp-pt-6 sp-pb-8 sp-px-8 sp-text-neutral sp-flex sp-items-end sp-justify-between"
      v-if="$router.currentRoute.name != 'welcome'"
    >
      <div class="sp-flex sp-items-end sp-flex-1">
        <img
          id="seedprod-logo"
          :src="
						shared.plugin_path + 'public/svg/seedprod-logo.svg'
					"
          :alt="txt_6"
        />
        <span class="sp-inline-block sp-px-6 sp-flex sp-items-end">
          <svg
            width="12"
            height="29"
            viewBox="0 0 12 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 28L11 0.999998" stroke="#D3CED2" />
          </svg>
        </span>

        <div
          v-if="this.$route.name == 'pages' || this.$route.name == 'dashboard'"
          class="sp-text-2xl sp-font-semibold"
        >{{txt_1}}</div>
        <div v-if="this.$route.name == 'growthtools'" class="sp-text-2xl sp-font-semibold">{{txt_2}}</div>
        <div
          v-if="this.$route.name == 'aboutus_aboutus'"
          class="sp-text-2xl sp-font-semibold"
        >{{txt_3}}</div>
        <div v-if="this.$route.name == 'subscribers'" class="sp-text-2xl sp-font-semibold">{{txt_4}}</div>
        <div
          v-if="this.$route.name == 'settings_general'"
          class="sp-text-2xl sp-font-semibold"
        >{{txt_5}}</div>
      </div>
      <div>
        <a
          href="https://www.seedprod.com/docs/"
          target="_blank"
          class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-rounded-full sp-flex sp-items-center sp-justify-center sp-p-c63 sp-text-neutral-60"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-5 sp-h-5"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
            />
          </svg>
        </a>
      </div>
    </div>

    <div
      v-if="shared.notifications.length > 0"
      class="sp-notifications-custom sp-ml-3 sp-rounded sp-p-4 sp-mt-4 sp-mr-4 sp-flex"
    >
      <img
        v-if="shared.notifications[notification_index].img"
        class="sp-mr-4"
        :src="shared.notifications[notification_index].img"
      />
      <img v-else class="sp-mr-4 sp-mb-10" :src="
						shared.plugin_path + 'public/svg/bell-orange.svg'
					" />
      <div class="sp-flex-1">
        <div class="sp-text-lg sp-font-semibold sp-mb-2 sp-flex sp-justify-between">
          {{shared.notifications[notification_index].title}}
          <span
            class="sp-cursor-pointer sp-text-neutral-40 hover:sp-text-red"
            @click="dismiss_notifications(shared.notifications[notification_index].id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-4"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
              />
            </svg>
          </span>
        </div>
        <div class="sp-mb-3 sp-text-base" v-html="shared.notifications[notification_index].content"></div>
        <div class="sp-flex sp-justify-between sp-items-center">
          <div>
            <a
              v-if="shared.notifications[notification_index].btns.main"
              :href="shared.notifications[notification_index].btns.main.url"
              class="button sp-notification-button sp-px-3 sp-py-1 sp-text-sm sp-mr-2"
              target="_blank"
            >{{shared.notifications[notification_index].btns.main.text}}</a>

            <a
              v-if="shared.notifications[notification_index].btns.alt"
              :href="shared.notifications[notification_index].btns.alt.url"
              class="button sp-notification-alt-button sp-px-3 sp-alt-notification-button-y sp-text-sm sp-mr-2"
              target="_blank"
            >{{shared.notifications[notification_index].btns.alt.text}}</a>
          </div>
          <div>
            <a
              class="sp-cursor-pointer sp-border sp-border-neutral-20 sp-border-solid sp-rounded sp-p-2 sp-text-10px sp-text-neutral-40 hover:sp-border-neutral-40 hover:sp-text-40 sp-mr-1"
              :title="txt_7"
              :class="{'sp-invisible': notification_index == 0}"
              @click.prevent="scroll_notifications('prev')"
            >
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </a>
            <a
              class="sp-cursor-pointer sp-border sp-border-neutral-20 sp-border-solid sp-rounded sp-p-2 sp-text-10px sp-text-neutral-40 hover:sp-border-neutral-40 hover:sp-text-40"
              :title="txt_8"
              :class="{'sp-invisible': notification_index == shared.notifications.length -1}"
              @click.prevent="scroll_notifications('next')"
            >
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="sp-pl-3 sp-pr-8">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import qs from 'qs';
import _ from 'lodash';
import { __ } from '@wordpress/i18n';

export default {
  data() {
    return {
      txt_1: __( 'Pages', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Growth Tools', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'About Us', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Subscribers', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Settings', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'SeedProd Logo', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Previous message ', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Next message', process.env.VUE_APP_TEXTDOMAIN ),
      notification_index: 0,
      shared: seedprod_store_admin,
    };
  },
  mounted: function() {},
  watch: {
    $route( to, from ) {
      jQuery( 'html' ).scrollTop( 0 );
    },
  },
  methods: {
    dismiss_upsell() {
      let self = this;
      let data = qs.stringify({
        id: 1,
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
    dismiss_notifications( id ) {
      let self = this;
      let data = qs.stringify({
        id: id,
      });
      self.$delete( self.shared.notifications, self.notification_index );
      if ( 0 < self.notification_index ) {
        self.notification_index = self.notification_index - 1;
      } else if (
        1 < self.notification_index.length &&
        0 == self.notification_index
      ) {
        self.notification_index = self.notification_index + 1;
      } else {
        self.notification_index = 0;
      }

      this.axios
        .post( seedprod_notification_dismiss, data, {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        })
        .then( function( response ) {
          if ( response.data.success ) {
            location.reload();
          }
        });
    },
    scroll_notifications( dir ) {
      if ( 'prev' == dir ) {
        this.notification_index--;
      }
      if ( 'next' == dir ) {
        this.notification_index++;
      }
    },
    goto_settings() {
      this.$router.push({ name: 'settings' }).catch( ( err ) => {});
    },
    show_upgrade_notice: function(
      feature,
      details,
      medium = 'link',
      generic = false
    ) {
      if ( generic ) {
        feature = 'Upgrade to PRO';
        details =
          'Increase traffic, engagement, and get more email subscribers. Click below to learn more about all our awesome features.';
      } else {
        feature = feature + ' is a PRO Feature';
        details =
          'We\'re sorry, the ' +
          details +
          ' feature is not available on your plan. Please upgrade to the PRO plan to unlock all these awesome features.';
      }
      this.$swal({
        title: feature,
        text: details,
        type: 'success',
        showCancelButton: false,
        confirmButtonColor: '#4CAF50',
        cancelButtonColor: '#d33',
        confirmButtonText: 'UPGRADE TO PRO',
      }).then( ( result ) => {
        if ( result.value ) {
          window.open( this.shared.upgrade_link + medium, '_blank' );
          this.$swal.fire(
            '',
            'Thanks for your interest in SeedProd Pro!<br>If you have any questions or issues just <a href=\'https://www.seedprod.com/?contact=1\' target=\'_blank\'>let us know</a>.<br><br>After purchasing SeedProd Pro, you\'ll need to download and install the Pro version of the plugin, and then remove the free plugin. <br><br>(Don\'t worry, all your settings will be preserved.)',
            'info'
          );
        }
      });
    },
  },
};
</script>

