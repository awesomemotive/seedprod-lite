<template>
  <div>
    <div id="seedprod-settings" class="list-group">
      <router-link
        :to="{
					name: 'setup_settings_general',
					params: { id: shared.lpage.id }
				}"
        tag="button"
        :class="'list-group-item'"
        exact
      >
        <div class="sp-flex sp-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-6 sp-h-6 sp-mr-4"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
            />
          </svg>
          {{txt_6}}
        </div>
        <svg
          v-if="$route.name === 'setup_settings_general'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-fill-current sp-w-5 sp-h-5"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </router-link>
            <router-link
        v-if="shared.page_type == 'cs' || shared.page_type == 'mm'"
        :to="{
					name: 'setup_settings_access',
					params: { id: shared.lpage.id }
				}"
        tag="button"
        :class="'list-group-item'"
        exact
      >
        <div class="sp-flex sp-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-6 sp-h-6 sp-mr-4"
          >
            <g fill="none">
              <path d="M0 0h24v24H0V0z" />
              <path d="M0 0h24v24H0V0z" opacity=".87" />
            </g>
            <path
              d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            />
          </svg>
          {{txt_1}}
        </div>

        <svg
          v-if="$route.name === 'setup_settings_access'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-fill-current sp-w-5 sp-h-5"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </router-link>
      <router-link
        :to="{
					name: 'setup_settings_seo',
					params: { id: shared.lpage.id }
				}"
        tag="button"
        :class="'list-group-item'"
        exact
      >
        <div class="sp-flex sp-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-6 sp-h-6 sp-mr-4"
          >
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          {{txt_2}}
        </div>
        <svg
          v-if="$route.name === 'setup_settings_seo'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-fill-current sp-w-5 sp-h-5"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </router-link>

      <router-link
        v-if="shared.settings.no_conflict_mode !== true"
        :to="{
					name: 'setup_settings_analytics',
					params: { id: shared.lpage.id }
				}"
        tag="button"
        :class="'list-group-item'"
        exact
      >
        <div class="sp-flex sp-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-6 sp-h-6 sp-mr-4"
          >
            <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          {{txt_3}}
        </div>

        <svg
          v-if="$route.name === 'setup_settings_analytics'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-fill-current sp-w-5 sp-h-5"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </router-link>
      <router-link
        :to="{
					name: 'setup_settings_scripts',
					params: { id: shared.lpage.id }
				}"
        tag="button"
        :class="'list-group-item'"
        exact
      >
        <div class="sp-flex sp-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-6 sp-h-6 sp-mr-4"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
            />
          </svg>
          {{txt_4}}
        </div>

        <svg
          v-if="$route.name === 'setup_settings_scripts'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-fill-current sp-w-5 sp-h-5"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </router-link>
      <router-link
        v-if="shared.page_type == 'lp' && shared.per.includes('dm') && shared.page_path == 'seedprod_pro'"
        :to="{
					name: 'setup_settings_domain',
					params: { id: shared.lpage.id }
				}"
        tag="button"
        :class="'list-group-item'"
        exact
      >
        <div class="sp-flex sp-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-6 sp-h-6 sp-mr-4"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
            />
          </svg>
          {{txt_5}}
        </div>

        <svg
          v-if="$route.name === 'setup_settings_domain'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-fill-current sp-w-5 sp-h-5"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </router-link>

      <button
        v-if="shared.page_type == 'lp' && 1  == 0"
        :class="[
					'list-group-item',
					'seedprod-pro-feature',
					{ hidden: shared.per.includes('sl') }
				]"
        v-on:click="
					show_uplock_notice(
						'Social Logins',
						'social logins',
						'social-logins'
					)
				"
      >
        <div class="sp-flex sp-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-6 sp-h-6 sp-mr-4"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
            />
          </svg>
          {{txt_5}}
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';
export default {
  name: 'setupsettings',
  mixins: [ helpers ],
  data() {
    return {
      txt_1: __( 'Access Control', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'SEO', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Analytics', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Scripts', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Custom Domain', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'General', process.env.VUE_APP_TEXTDOMAIN ),
      shared: seedprod_store,
    };
  },
};
</script>
