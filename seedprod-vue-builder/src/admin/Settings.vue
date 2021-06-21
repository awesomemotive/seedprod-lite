<template>
	<div>

		<div id="seedprod-settings">
			<router-view name="main"></router-view>
		</div>
	</div>
</template>

<script>
import qs from 'qs';
import NProgress from 'nprogress';
import { __ } from '@wordpress/i18n';

export default {
  name: 'Settings',
  data() {
    return {
      txt_1: __( 'General', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Emails', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Integrations', process.env.VUE_APP_TEXTDOMAIN ),
      shared: seedprod_store_admin,
    };
  },

  created: function() {

    // remove default
    var el = document.querySelector(
      '.wp-first-item  a[href=\'admin.php?page=' +
				this.shared.page_path +
				'\']'
    );
    var className = 'current';
    el.classList.remove( className );
    el.parentNode.classList.remove( className );

    // update current highlighted menu in WP
    var el = document.querySelector(
      'a[href=\'admin.php?page=' + this.shared.page_path + '_settings\']'
    );

    // apply current class to a
    var className = 'current';
    if ( el.classList ) {
      el.classList.add( className );
    } else {
      el.className += ' ' + className;
    }

    // aply current class to li
    if ( el.parentNode.classList ) {
      el.parentNode.classList.add( className );
    } else {
      el.parentNode.className += ' ' + className;
    }
  },
  methods: {},
};
</script>

