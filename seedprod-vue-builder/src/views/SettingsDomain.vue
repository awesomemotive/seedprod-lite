<template>
  <div class="seedprod-settings-page">
    <div class="seedprod-settings-page-wrapper">
      <h1>{{txt_1}}</h1>

            <div class="sp-flex sp-items-center sp-mb-8">
        <label class="sp-w-48">{{txt_2}}</label>
        <div>
          <div
            class="sp-border sp-border-neutral-10 sp-rounded-full sp-p-2px sp-bg-white sp-h-full sp-flex sp-align-center"
          >
            <button
              @click="shared.settings.domain_mapping_status = false"
              :class="{'sp-bg-primary sp-text-white hover:sp-bg-primary-darker': shared.settings.domain_mapping_status == false,'sp-bg-white sp-text-neutral-60 hover:sp-bg-neutral-10': shared.settings.domain_mapping_status != false}"
              class="sp-cursor-pointer sp-rounded-full sp-h-42px sp-text-sm sp-font-semibold sp-px-6"
            >{{txt_3}}</button>
            <button
              @click="shared.settings.domain_mapping_status = true"
              :class="{'sp-bg-green sp-text-white hover:sp-bg-green-darker': shared.settings.domain_mapping_status == true,'sp-bg-white sp-text-neutral-60 hover:sp-bg-neutral-10': shared.settings.domain_mapping_status != true}"
              class="sp-cursor-pointer sp-rounded-full sp-h-42px sp-text-sm sp-font-semibold sp-px-6"
            >{{txt_4}}</button>
          </div>
        </div>
      </div>

      <div class="sp-flex sp-items-start sp-mb-8">
          <label class="sp-w-48 sp-mt-2">{{txt_5}}</label>
          <div>
            <div class="sp-flex sp-items-center">
              <span
                class="sp-bg-neutral-10 sp-border sp-border-neutral-20 sp-inline-block sp-border-r-0 sp-rounded-tl-6px sp-rounded-bl-6px sp-h-42px sp-flex sp-items-center sp-justify-center sp-px-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-inline-block sp-fill-current sp-w-6 sp-h-6"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"
                  />
                </svg>
              </span>
              <span
                class="sp-border-t sp-border-b sp-border-neutral-20 sp-h-42px sp-flex sp-items-center sp-justify-center sp-px-4"
              >{{scheme}}</span>

              <input
                type="text"
                id="domain-mapping-url"
                name="domain_mapping_url_input"
                v-model="shared.settings.domain_mapping"
                v-validate="'url'"
                data-vv-as="Domain Name"
                class="sp-form-input sp-border-l-0 sp-rounded-none focus:sp-border-neutral-20"
                style="display:inline-block;width: 300px;"
              />
              <button
                class="sp-bg-white sp-border sp-border-neutral-20 sp-inline-block sp-border-l-0 sp-rounded-tr-6px sp-rounded-br-6px sp-h-42px sp-flex sp-items-center sp-justify-center sp-px-2"
                @click="open_mapped_url"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-inline-block sp-fill-current sp-w-6 sp-h-6"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
                  />
                </svg>
              </button>
              <span class="sp-text-red">{{ errors.first('domain_mapping_url_input') }}</span>
            </div>

            <div>
              {{txt_6}}
              <br>
              {{txt_12}}
              <br>
              {{txt_13}}
              <br>
              <a href="https://www.seedprod.com/docs/domain-mapping-setup/"
                 target="_target"
                 class="sp-text-primary hover:sp-text-primary-lighter sp-underline"
              >{{txt_7}}</a> {{txt_8}}
            </div>

          </div>
      </div>

      <div class="sp-flex sp-items-start sp-mb-8">
          <label class="sp-w-48 sp-mt-2">{{txt_9}}</label>
          <div class="sp-mt-2">
              <toggle-button
                  :width="36"
                  v-model="shared.settings.domain_mapping_force_https"
                  class="sp-mr-2"
              />{{txt_10}}
          </div>
      </div>

    </div>
  </div>
</template>

<script>
import qs from 'qs';
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';

export default {
  name: 'settingsdomain',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Custom Domain', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Custom Domain:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'OFF', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'ON', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Domain Name:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Please enter your domain.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Click here to learn more', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'how to map your custom domain.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Force HTTPS', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Only enable this if you have an SSL certificate installed and you wish to redirect users to https://', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Please enter a valid URL that will be pointed to this landing page, such as', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'It should look something like, \'mynewdomain.com\' or \'mynewdomain.com/coming-soon\'', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'You can leave out the \'http://\'. If you are using \'https://\', turn on Force HTTPS below.', process.env.VUE_APP_TEXTDOMAIN ),
      shared: seedprod_store,
    };
  },
  created: function() {
    let self = this;
    let data = qs.stringify({
      lpage_id: this.shared.lpage.id,
    });

    this.axios
      .post(
        'admin-ajax.php?action=seedprod_pro_get_domain_mapping_domain&_wpnonce=' +
          seedprod_nonce,
        data,
        {
          'Content-Type':
          'application/x-www-form-urlencoded;charset=UTF-8',
        }
      )
      .then( function( response ) {
        if ( !! response && null !== response.data ) {
          let urlFromData = response.data.domain + '/' + response.data.path;
          self.shared.settings.domain_mapping = urlFromData;
        }
      });
  },
  methods: {
    open_mapped_url: function() {
      window.open(
        this.scheme + this.shared.settings.domain_mapping,
        'open_mapped_url'
      );
    },

    //    strip_scheme: function ( url ) {
    //      var stripped_url.replace('');
    //    }
  },
  computed: {
    scheme: function() {
      return this.shared.settings.domain_mapping_force_https ? 'https://' : 'http://';
    },
  },
};
</script>
