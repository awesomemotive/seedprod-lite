<template>
  <div id="sp-revision-history">
    <div v-if="shared.doing_revisions_ajax">
      <p>
        {{txt_1}}
        <i class="fas fa-spinner fa-spin"></i>
      </p>
    </div>
    <div v-else>
      <div v-if="shared.revisions && shared.revisions.length > 0">
        <p>{{txt_2}}</p>
        <button
          :class="{ 'active-current':  shared.current_revision_active_index == -1 }"
          @click="set_revision('current')"
        >
          <img :src="'https://www.gravatar.com/avatar/'+ shared.current_user_email_hash" />
          <div class="sp-flex sp-flex-col sp-items-start">
            <span class="sp-rev-datefull">{{txt_3}}</span>
            <span class="sp-rev-author">{{txt_4}} {{shared.current_user_name}}</span>
          </div>
        </button>
        <div id="sp-revision-timeline">
          <div
            v-for="(r,index) in revisions_with_data"
            :key="index"
            :class="{ active:  shared.current_revision_active_index == index }"
            class="sp-revision-item"
          >
            <span class="sp-revision-item-circle"></span>
            <span class="sp-revision-item-line"></span>
            <button @click="set_revision(index)">
              <img :src="'https://www.gravatar.com/avatar/'+ r.author_email + '?s=39'" />
              <div class="sp-flex sp-flex-col sp-items-start">
                <span class="sp-rev-datefull">
                  {{ r.time_ago }} {{txt_6}}
                  <span class="sp-rev-date">({{ r.post_date_formated }})</span>
                </span>
                <span class="sp-rev-author">{{txt_4}} {{r.author_name}}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <p>{{txt_5}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import qs from 'qs';
import { helpers } from '../mixins/helpers.js';

export default {
  name: 'revisions',
  mixins: [ helpers ],
  data() {
    return {
      txt_1: __( 'Loading Revisons', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Click to preview version:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Current Version', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'by', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'There are no revisons to show.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'ago', process.env.VUE_APP_TEXTDOMAIN ),
      shared: seedprod_store,
    };
  },
  mounted() {
    this.get_revisisons();
  },
  computed: {
    'revisions_with_data': function() {
      return this.shared.revisions.filter( function( u ) {
        return '' != u.post_content_filtered;
      });
    },
  },
  methods: {
    get_revisisons() {
      let _self = this;
      let data = qs.stringify({
        lpage_id: this.shared.lpage.id,
      });
      _self.shared.doing_revisions_ajax = true;
      this.axios
        .post(
          'admin-ajax.php?action=' + this.shared.page_path + '_get_revisions&_wpnonce=' +
            seedprod_nonce,
          data,
          {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          }
        )
        .then( function( response ) {
          _self.shared.revisions = response.data.revisions;
          _self.shared.doing_revisions_ajax = false;
        })
        .catch( function( error ) {
          _self.shared.doing_revisions_ajax = false;
        });
    },
    set_revision( index ) {

      // store current active version
      if ( -1 == this.shared.current_revision_active_index ) {
        this.shared.current_revision_store = JSON.stringify(
          this.shared.settings
        );
      }
      if ( 'current' == index ) {
        this.shared.current_revision_active_index = -1;
        this.shared.settings = JSON.parse( this.shared.current_revision_store );
      } else {
        this.shared.current_revision_active_index = index;
        this.shared.settings = JSON.parse(
          this.shared.revisions[index].post_content_filtered
        );
      }

      // update css
      this.update_head_css();
      this.update_mobile_css();
      this.update_placeholder_css();

    },
  },
};
</script>

