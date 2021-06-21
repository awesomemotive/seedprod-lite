<template>
  <div class="seedprod-settings-page">
    <div class="seedprod-settings-page-wrapper">
      <h1>{{ txt_1 }}</h1>
      <div class="sp-flex sp-items-start sp-mb-8">
        <label class="sp-w-48">{{ txt_2 }}</label>
        <div class="sp-flex sp-flex-col sp-flex-1 sp-h-48">
          <textarea
          :disabled="!this.shared.unfiltered_html"
            v-model="header_scripts"
            class="sp-form-textarea sp-w-full sp-flex-1"
            
          ></textarea>
          <div class="sp-mt-2 sp-text-neutral-60" :class="{'sp-hidden':!this.shared.unfiltered_html}" v-html="txt_3"></div>
          <div class="sp-mt-2 sp-text-neutral-60" :class="{'sp-hidden':this.shared.unfiltered_html}" v-html="txt_8"></div>
        </div>
      </div>

      <div class="sp-flex sp-items-start sp-mb-8">
        <label class="sp-w-48">{{ txt_6 }}</label>
        <div class="sp-flex sp-flex-col sp-flex-1 sp-h-48">
          <textarea
          :disabled="!this.shared.unfiltered_html"
            v-model="body_scripts"
            class="sp-form-textarea sp-w-full sp-flex-1"
          ></textarea>
          <div class="sp-mt-2 sp-text-neutral-60" :class="{'sp-hidden':!this.shared.unfiltered_html}" v-html="txt_7"></div>
          <div class="sp-mt-2 sp-text-neutral-60" :class="{'sp-hidden':this.shared.unfiltered_html}" v-html="txt_8"></div>
        </div>
      </div>

      <div class="sp-flex sp-items-start sp-mb-8">
        <label class="sp-w-48">{{ txt_4 }}</label>
        <div class="sp-flex sp-flex-col sp-flex-1 sp-h-48">
          <textarea
            :disabled="!this.shared.unfiltered_html"
            v-model="footer_scripts"
            class="sp-form-textarea sp-w-full sp-flex-1"
          ></textarea>
          <div class="sp-mt-2 sp-text-neutral-60" :class="{'sp-hidden':!this.shared.unfiltered_html}" v-html="txt_5"></div>
          <div class="sp-mt-2 sp-text-neutral-60" :class="{'sp-hidden':this.shared.unfiltered_html}" v-html="txt_8"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { __ } from "@wordpress/i18n";
import { helpers } from "../mixins/helpers.js";
export default {
  name: "settingsscripts",
  mixins: [helpers],
  data() {
    return {
      txt_1: __("Scripts", process.env.VUE_APP_TEXTDOMAIN),
      txt_2: __("Header Scripts:", process.env.VUE_APP_TEXTDOMAIN),
      txt_3: __(
        "This code will be rendered before the closing &lt;/head&gt; tag.",
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_4: __("Footer Scripts:", process.env.VUE_APP_TEXTDOMAIN),
      txt_5: __(
        "The code will be rendered before the closing &lt;/body&gt; tag.",
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_6: __("Body Scripts:", process.env.VUE_APP_TEXTDOMAIN),
      txt_7: __(
        "The code will be rendered after the &lt;body&gt; tag.",
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_8: __(
        "You do not have the proper WordPress permissions to add scripts.",
        process.env.VUE_APP_TEXTDOMAIN
      ),
      shared: seedprod_store,
    };
  },
  methods: {},
  components: {},
  computed: {
    header_scripts: {
      get: function () {
        return this.shared.settings.header_scripts;
      },
      set: function (newValue) {
        if (this.shared.unfiltered_html) {
          this.shared.settings.header_scripts = newValue;
          return this.shared.settings.header_scripts;
        } else {
          this.shared.settings.header_scripts = newValue.replace("<script>", "");
          return this.shared.settings.header_scripts;
        }
      },
    },
    body_scripts: {
      get: function () {
        return this.shared.settings.body_scripts;
      },
      set: function (newValue) {
        if (this.shared.unfiltered_html) {
          this.shared.settings.body_scripts = newValue;
          return this.shared.settings.body_scripts;
        } else {
          this.shared.settings.body_scripts = newValue.replace("<script>", "");
          return this.shared.settings.body_scripts;
        }
      },
    },
    footer_scripts: {
      get: function () {
        return this.shared.settings.footer_scripts;
      },
      set: function (newValue) {
        if (this.shared.unfiltered_html) {
          this.shared.settings.footer_scripts = newValue;
          return this.shared.settings.footer_scripts;
        } else {
          this.shared.settings.footer_scripts = newValue.replace("<script>", "");
          return this.shared.settings.footer_scripts;
        }
      },
    },
  },
};
</script>
