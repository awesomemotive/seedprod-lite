<template>
  <div>
    <div class="lg:sp-flex sp-mt-10 sp-a">
      <div class="sp-mr-20">
        <h3 class="sp-mt-0 sp-text-neutral sp-text-xl sp-leading-normal">
          {{ txt_1 }}
        </h3>
        <p class="sp-text-neutral-80 sp-text-17px">
          {{ txt_2 }}
        </p>
        <p class="sp-text-neutral-80 sp-text-17px">
          {{ txt_3 }}
        </p>
        <p class="sp-text-neutral-80 sp-text-17px">
          {{ txt_4 }}
          <a
            href="https://www.wpbeginner.com/?utm_source=seedprodplugin&utm_medium=pluginaboutpage&utm_campaign=aboutseedprod"
            target="_blank"
            rel="noopener noreferrer"
            >WPBeginner</a
          >, {{ txt_6 }},
          <a
            href="https://optinmonster.com/?utm_source=seedprodplugin&utm_medium=pluginaboutpage&utm_campaign=aboutseedprod"
            target="_blank"
            rel="noopener noreferrer"
            >OptinMonster</a
          >, {{ txt_7 }},
          <a
            href="https://www.monsterinsights.com/?utm_source=seedprodplugin&utm_medium=pluginaboutpage&utm_campaign=aboutseedprod"
            target="_blank"
            rel="noopener noreferrer"
            >MonsterInsights</a
          >, {{ txt_8 }},
          <a
            href="https://www.wpforms.com/?utm_source=seedprodplugin&utm_medium=pluginaboutpage&utm_campaign=aboutseedprod"
            target="_blank"
            rel="noopener noreferrer"
            >WPForms</a
          >, {{ txt_9 }},
          <a
            href="https://rafflepress.com/?utm_source=seedprodplugin&utm_medium=pluginaboutpage&utm_campaign=aboutseedprod"
            target="_blank"
            rel="noopener noreferrer"
            >RafflePress</a
          >, {{ txt_10 }},
          <a
            href="https://trustpulse.com/?utm_source=seedprodplugin&utm_medium=pluginaboutpage&utm_campaign=aboutseedprod"
            target="_blank"
            rel="noopener noreferrer"
            >TrustPulse</a
          >.
        </p>
        <p class="sp-text-neutral-80 sp-text-17px">
          {{ txt_5 }}
        </p>
      </div>
      <div class="">
        <img
          class="sp-rounded"
          :src="shared.plugin_path + 'public/img/team.jpg'"
          :alt="txt_11"
        />

        <figcaption
          class="sp-text-neutral-80 sp-text-15px sp-text-center sp-mt-6"
        >
          {{ txt_12 }}: Syed, John & Thomas<br />
        </figcaption>
      </div>
    </div>
    <div v-if="shared.page_path == 'seedprod_lite' && shared.show_inline_cta">
      <SettingsLiteCTA />
    </div>
  </div>
</template>

<script>
import qs from 'qs';
import NProgress from 'nprogress';
import { __ } from '@wordpress/i18n';
import SettingsLiteCTA from '@/components/SettingsLiteCTA.vue';

export default {
  name: 'AboutusAbout',
  data() {
    return {
      txt_1: __(
        'Hello and welcome to SeedProd, the most beginner friendly drag & drop WordPress landing page plugin. At SeedProd, we build software that helps you create beautiful responsive landing pages for your website in minutes.',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_2: __(
        'Over the years, we found that most WordPress landing page plugins were bloated, buggy, slow, and very hard to use. So we started with a simple goal: build a WordPress landing page plugin that’s both easy and powerful.',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_3: __(
        'Our goal is to take the pain out of creating landing pages and make it easy.',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_4: __(
        'SeedProd is brought to you by the same team that’s behind the largest WordPress resource site,',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_5: __(
        'Yup, we know a thing or two about building awesome products that customers love.',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_6: __(
        'the most popular lead-generation software',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_7: __(
        'the best WordPress analytics plugin',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_8: __(
        'the best WordPress forms plugin',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_9: __(
        'the best WordPress giveaway plugin',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_10: __(
        'and finally the best WordPress FOMO plugin',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_11: __( 'SeedProd Team photo', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'The SeedProd Team', process.env.VUE_APP_TEXTDOMAIN ),
      shared: seedprod_store_admin,
    };
  },

  methods: {},
  components: {
    SettingsLiteCTA,
  },
};
</script>
