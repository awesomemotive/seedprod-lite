<template>
  <div>
    <div id="sp-blocks-sections" class="sp-flex">
      <div class="sp-w-1/2 sp-cursor-pointer sp-secondary" @click="goto_blocks">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-w-4 sp-fill-current sp-inline-block sp-mr-2"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7-2h2v-3h3V9h-3V6h-2v3h-3v2h3z"
          />
        </svg>{{txt_1}}
      </div>
      <div class="sp-w-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-w-4 sp-fill-current sp-inline-block sp-mr-2"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M21 18H2v2h19v-2zm-2-8v4H4v-4h15m1-2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm1-4H2v2h19V4z"
          />
        </svg>{{txt_2}}
      </div>
    </div>
    <div class="sp-p-4">
      <div class="sp-text-neutral-60 sp-uppercase sp-text-12px sp-pt-1 sp-pb-2 sp-font-semibold">{{txt_5}}</div>
      <ul class="sp-section-categories">
        <li
          class="sp-cursor-pointer sp-flex sp-justify-between sp-items-center"
          :class="{'sp-section-cat-active':shared.sections_templates.templatecat == 0}"
          @click="filter_cat(0)"
        >
          {{txt_3}}
          <svg
            v-if="shared.sections_templates.templatecat == 0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-4 sp-h-4"
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </li>
        <li
          class="sp-cursor-pointer sp-flex sp-justify-between sp-items-center"
          :class="{'sp-section-cat-active':shared.sections_templates.templatecat == c}"
          v-for="(c,i) in shared.sections_templates.cats"
          :key="i"
         @click="filter_cat(c)"
        >
          {{c.charAt(0).toUpperCase() + c.slice(1)}}
          <svg
            v-if="shared.sections_templates.templatecat == c"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-4 sp-h-4"
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </li>
         <li
          class="sp-cursor-pointer sp-flex sp-justify-between sp-items-center"
          :class="{'sp-section-cat-active':shared.sections_templates.templatecat == 'favs'}"
         @click="filter_cat('favs')"
        >
            {{txt_4}}
            <svg
            v-if="shared.sections_templates.templatecat == 'favs'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-4 sp-h-4"
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { sections } from '../mixins/section-templates.js';
import qs from 'qs';
import NProgress from 'nprogress';

export default {
  name: 'sectiontemplates',
  mixins: [ sections ],
  data() {
    return {
      txt_1: __( 'Blocks', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Sections', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'All Sections', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Favorites', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Categories:', process.env.VUE_APP_TEXTDOMAIN ),
      template_api_url: seedprod_remote_api + 'templates?page=1',
      template_api_url_preview:
        seedprod_remote_api + 'templates-preview?page=1',
      shared: seedprod_store,
    };
  },
  methods: {
    goto_blocks() {
      this.$router.push({ name: 'setup_block_options' });
    },
  },
  created: function() {
    this.loadCats();
  },
};
</script>

