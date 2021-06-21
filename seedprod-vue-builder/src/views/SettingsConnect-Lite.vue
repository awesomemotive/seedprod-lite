<template>
  <div id="app" class="sp-p-6 sp-px-8 sp-pb-40 ">
    <div class="sp-text-20px sp-font-bold sp-mt-2 sp-text-neutral-80">Email Marketing</div>
    <div class="sp-flex sp-flex-wrap sp-pt-8">
      <div class="es-wrapper sp-cursor-pointer" @click="showUpsellModal = true">
        <div class="sp-absolute sp-top-0 sp-right-0 sp-bg-green sp-rounded sp-text-white sp-z-20 sp-py-1 sp-px-2 sp-text-12px sp-font-semibold sp-mt-2 sp-mr-2">PRO</div>

        <div class="es" style="opacity:0.6"><div></div>

          <span
            ><img

:src="shared.plugin_path + '/public/svg/'+'logos/activecampaign-logo.svg'"
              style="width: 80px; margin-top: 5px" /></span
          ><span class="sp-mb-5 sp-text-neutral-80 sp-font-semibold sp-text-15px"
            >ActiveCampaign</span
          >
        </div>
      </div>
      <div class="es-wrapper sp-cursor-pointer" @click="showUpsellModal = true">
        <div class="sp-absolute sp-top-0 sp-right-0 sp-bg-green sp-rounded sp-text-white sp-z-20 sp-py-1 sp-px-2 sp-text-12px sp-font-semibold sp-mt-2 sp-mr-2">PRO</div>

        <div class="es" style="opacity:0.6"><div></div>

          <span
            ><img

:src="shared.plugin_path + '/public/svg/'+'logos/aweber-logo.svg'"
              style="width: 52px; margin-top: 10px" /></span
          ><span class="sp-mb-5 sp-text-neutral-80 sp-font-semibold sp-text-15px"
            >AWeber</span
          >
        </div>
      </div>
      <div class="es-wrapper sp-cursor-pointer" @click="showUpsellModal = true">
        <div class="sp-absolute sp-top-0 sp-right-0 sp-bg-green sp-rounded sp-text-white sp-z-20 sp-py-1 sp-px-2 sp-text-12px sp-font-semibold sp-mt-2 sp-mr-2">PRO</div>

        <div class="es" style="opacity:0.6"><div></div>

          <span
            ><img

:src="shared.plugin_path + '/public/svg/'+'logos/campaignmonitor-logo.png'"
              style="width: 52px; margin-top: 10px" /></span
          ><span class="sp-mb-5 sp-text-neutral-80 sp-font-semibold sp-text-15px"
            >Campaign Monitor</span
          >
        </div>
      </div>
      <div class="es-wrapper sp-cursor-pointer" @click="showUpsellModal = true">
        <div class="sp-absolute sp-top-0 sp-right-0 sp-bg-green sp-rounded sp-text-white sp-z-20 sp-py-1 sp-px-2 sp-text-12px sp-font-semibold sp-mt-2 sp-mr-2">PRO</div>

        <div class="es" style="opacity:0.6"><div></div>

          <span
            ><img

:src="shared.plugin_path + '/public/svg/'+'logos/contact-contact.svg'"
              style="width: 46px; margin-top: 15px" /></span
          ><span class="sp-mb-5 sp-text-neutral-80 sp-font-semibold sp-text-15px"
            >Constant Contact</span
          >
        </div>
      </div>
      <div class="es-wrapper sp-cursor-pointer" @click="showUpsellModal = true">
        <div class="sp-absolute sp-top-0 sp-right-0 sp-bg-green sp-rounded sp-text-white sp-z-20 sp-py-1 sp-px-2 sp-text-12px sp-font-semibold sp-mt-2 sp-mr-2">PRO</div>

        <div class="es" style="opacity:0.6"><div></div>

          <span
            ><img

:src="shared.plugin_path + '/public/svg/'+'logos/convertkit-logo.svg'"
              style="width: 40px; margin-top: 18px" /></span
          ><span class="sp-mb-5 sp-text-neutral-80 sp-font-semibold sp-text-15px"
            >ConvertKit</span
          >
        </div>

      </div>
      <div class="es-wrapper sp-cursor-pointer" @click="showUpsellModal = true">
        <div class="sp-absolute sp-top-0 sp-right-0 sp-bg-green sp-rounded sp-text-white sp-z-20 sp-py-1 sp-px-2 sp-text-12px sp-font-semibold sp-mt-2 sp-mr-2">PRO</div>

        <div class="es" style="opacity:0.6"><div></div>

          <span
            ><img

:src="shared.plugin_path + '/public/svg/'+'logos/drip-logo.svg'"
              style="width: 35px; margin-top: 15px" /></span
          ><span class="sp-mb-5 sp-text-neutral-80 sp-font-semibold sp-text-15px">Drip</span
          >
        </div>

      </div>
      <div class="es-wrapper sp-cursor-pointer" @click="showUpsellModal = true">
        <div class="sp-absolute sp-top-0 sp-right-0 sp-bg-green sp-rounded sp-text-white sp-z-20 sp-py-1 sp-px-2 sp-text-12px sp-font-semibold sp-mt-2 sp-mr-2">PRO</div>

        <div class="es" style="opacity:0.6"><div></div>

          <span
            ><img

:src="shared.plugin_path + '/public/svg/'+'logos/getresponse-logo.png'"
              style="width: 52px; margin-top: 10px" /></span
          ><span class="sp-mb-5 sp-text-neutral-80 sp-font-semibold sp-text-15px"
            >GetResponse</span
          >
        </div>

      </div>
      <div class="es-wrapper sp-cursor-pointer" @click="showUpsellModal = true">
        <div class="sp-absolute sp-top-0 sp-right-0 sp-bg-green sp-rounded sp-text-white sp-z-20 sp-py-1 sp-px-2 sp-text-12px sp-font-semibold sp-mt-2 sp-mr-2">PRO</div>

        <div class="es" style="opacity:0.6"><div></div>

          <span
            ><img

:src="shared.plugin_path + '/public/svg/'+'logos/icontact-logo.png'"
              style="width: 25px; margin-top: 15px" /></span
          ><span class="sp-mb-5 sp-text-neutral-80 sp-font-semibold sp-text-15px"
            >iContact</span
          >
        </div>

      </div>
      <div class="es-wrapper sp-cursor-pointer" @click="showUpsellModal = true">
        <div class="sp-absolute sp-top-0 sp-right-0 sp-bg-green sp-rounded sp-text-white sp-z-20 sp-py-1 sp-px-2 sp-text-12px sp-font-semibold sp-mt-2 sp-mr-2">PRO</div>

        <div class="es" style="opacity:0.6"><div></div>

          <span
            ><img

:src="shared.plugin_path + '/public/svg/'+'logos/madmimi-logo.png'"
              style="width: 30px; margin-top: 15px" /></span
          ><span class="sp-mb-5 sp-text-neutral-80 sp-font-semibold sp-text-15px"
            >Mad Mimi</span
          >
        </div>

      </div>
      <div class="es-wrapper sp-cursor-pointer" @click="showUpsellModal = true">
        <div class="sp-absolute sp-top-0 sp-right-0 sp-bg-green sp-rounded sp-text-white sp-z-20 sp-py-1 sp-px-2 sp-text-12px sp-font-semibold sp-mt-2 sp-mr-2">PRO</div>

        <div class="es" style="opacity:0.6"><div></div>

          <span
            ><img

:src="shared.plugin_path + '/public/svg/'+'logos/mailchimp-logo.svg'"
              style="width: 48px; margin-top: 15px" /></span
          ><span class="sp-mb-5 sp-text-neutral-80 sp-font-semibold sp-text-15px"
            >Mailchimp</span
          >
        </div>

      </div>
      <div class="es-wrapper sp-cursor-pointer" @click="showUpsellModal = true">
        <div class="sp-absolute sp-top-0 sp-right-0 sp-bg-green sp-rounded sp-text-white sp-z-20 sp-py-1 sp-px-2 sp-text-12px sp-font-semibold sp-mt-2 sp-mr-2">PRO</div>

        <div class="es" style="opacity:0.6"><div></div>

          <span
            ><img

:src="shared.plugin_path + '/public/svg/'+'logos/sendy-logo.png'"
              style="width: 45px; margin-top: 15px" /></span
          ><span class="sp-mb-5 sp-text-neutral-80 sp-font-semibold sp-text-15px"
            >Sendy</span
          >
        </div>

      </div>
    </div>
    <div class="sp-text-20px sp-font-bold sp-mt-2 sp-text-neutral-80">Other</div>
    <div class="sp-flex sp-flex-wrap sp-pt-8">
      <div class="es-wrapper sp-cursor-pointer" @click="showUpsellModal = true">
        <div class="sp-absolute sp-top-0 sp-right-0 sp-bg-green sp-rounded sp-text-white sp-z-20 sp-py-1 sp-px-2 sp-text-12px sp-font-semibold sp-mt-2 sp-mr-2">PRO</div>

        <div class="es" style="opacity:0.6"><div></div>

          <span
            ><img

:src="shared.plugin_path + '/public/svg/'+'logos/zapier-logo.png'"
              style="width: 50px; margin-top: 5px" /></span
          ><span class="sp-mb-5 sp-text-neutral-80 sp-font-semibold sp-text-15px"
            >Zapier</span
          >
        </div>

      </div>
      <div class="es-wrapper sp-cursor-pointer" @click="goto_analytics">

        <div class="es"><div></div>

          <span
            ><img

:src="shared.plugin_path + '/public/svg/'+'logos/ga-logo.png'"
              style="width: 52px; margin-top: 10px" /></span
          ><span class="sp-mb-5 sp-text-neutral-80 sp-font-semibold sp-text-15px"
            >Google Analytics</span
          >
        </div>

      </div>
      <div class="es-wrapper sp-cursor-pointer" @click="showUpsellModal = true">
        <div class="sp-absolute sp-top-0 sp-right-0 sp-bg-green sp-rounded sp-text-white sp-z-20 sp-py-1 sp-px-2 sp-text-12px sp-font-semibold sp-mt-2 sp-mr-2">PRO</div>

        <div class="es" style="opacity:0.6"><div></div>

          <span
            ><img

:src="shared.plugin_path + '/public/svg/'+'logos/recaptcha-logo.png'"
              style="width: 56px; margin-top: 10px" /></span
          ><span class="sp-mb-5 sp-text-neutral-80 sp-font-semibold sp-text-15px"
            >Recaptcha</span
          >
        </div>

      </div>
    </div>

      <!-- Lite CTA -->
    <modal v-if="showUpsellModal" @close="showUpsellModal = false" class="sp-w-550px">
      <div slot="body" class="sp-px-10 sp-py-12 sp-text-neutral sp-relative">
          <button
          class="sp-text-neutral-40 hover:sp-text-neutral-60 sp-absolute sp-top-0 sp-right-0 sp-m-2"
          @click="showUpsellModal = false"
        > <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-6 sp-h-6"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            />
          </svg>
        </button>
        <LiteCTABuilder feature_source="connect" feature="Email Integrations" />
           </div>
      <h3 slot="header"></h3>
    </modal>
  </div>
</template>

<script>
import { helpers } from '../mixins/helpers.js';
import modal from '@/components/Modal.vue';
import LiteCTABuilder from '@/components/LiteCTABuilder.vue';

export default {
  name: 'settingsconnect',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      shared: seedprod_store,
      showUpsellModal: false,
    };
  },
  computed: {},
  beforeDestroy: function() {

    // console.log(this.iframe);
    // this.iframe.iFrameResizer.close();
  },
  methods: {
    goto_analytics() {
      this.$router.push({ name: 'setup_settings_analytics', params: { id: this.shared.lpage.id } });
    },
  },
  components: {
    modal,
    LiteCTABuilder,
  },
};
</script>
