<template>
	<div id="seedprod-aboutus">
		<nav class="sp-hidden">
			<ul class="">
				<router-link tag="li" :to="{ name: 'aboutus_aboutus' }">
					<a><span>{{txt_1}}</span></a>
				</router-link>
				<router-link tag="li" :to="{ name: 'aboutus_gettingstarted' }">
					<a><span>{{txt_2}}</span></a>
				</router-link>

				<router-link
					tag="li"
					:to="{ name: 'aboutus_litevspro' }"
					v-if="shared.page_path == 'seedprod_lite'"
				>
					<a><span>{{txt_3}}</span></a>
				</router-link>
			</ul>
		</nav>
		<div >
			<router-view name="main"></router-view>
		</div>
	</div>
</template>

<script>
import qs from 'qs';
import NProgress from 'nprogress';
import { __ } from '@wordpress/i18n';

export default {
  name: 'Aboutus',
  data() {
    return {
      txt_1: __( 'About Us', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Getting Started', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Lite vs Pro', process.env.VUE_APP_TEXTDOMAIN ),
      shared: seedprod_store_admin,
    };
  },
  computed: {},
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
      'a[href=\'admin.php?page=' + this.shared.page_path + '_about_us\']'
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
