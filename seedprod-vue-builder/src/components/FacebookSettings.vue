<template>
        <label v-if="getFacebookId==''">
            {{txt_1}}
            <router-link
                tag="a"  class="sp-text-primary"
                :to="{
                name: 'setup_settings',
                params: { id: shared.lpage.id }
                }"> {{txt_2}}
            </router-link>
        </label>
        <label v-else>
            {{txt_3}}
            <strong>
                {{getFacebookId}}
            </strong>
            <router-link
                tag="a" class="sp-text-primary"
                :to="{
                name: 'setup_settings',
                params: { id: shared.lpage.id }
                }"> {{txt_4}}
            </router-link>
        </label>

</template>

<script>
import { __ } from '@wordpress/i18n';

export default {
  name: 'FacebookSettings',
  data() {
    return {
      txt_1: __( 'Set your Facebook App ID in the ', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Page Settings', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'You are connected to Facebook App', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Change App Id', process.env.VUE_APP_TEXTDOMAIN ),
      shared: seedprod_store,
      app_id_type: 'global',
    };
  },
  computed: {
    getFacebookId: function() {

      let facebookid = '';
      let gfacebookid = this.shared.app_settings.facebook_g_app_id;

      if ( '' != this.shared.settings.facebook_app_id ) {
        facebookid = this.shared.settings.facebook_app_id;
        this.app_id_type = 'local';
      } else {
        if ( '' != gfacebookid ) {
          facebookid = gfacebookid;
        }
        this.app_id_type = 'global';
      }
      return facebookid;
    },
  },
};
</script>

<style>

</style>
