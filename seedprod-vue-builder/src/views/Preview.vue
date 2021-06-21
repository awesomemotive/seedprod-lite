<template>
	<div>
		<p class="text-center">
			<label>{{txt_1}}</label>
		</p>
		<div class="iframe_loading">
			<iframe
				ref="seedprod_preview"
				id="seedprod_preview"
				v-bind:src="
					shared.home_url +
						'/seedprod/' +
						shared.lpage.id +
						'?seedprod-preview=1&iframe=1'
				"
				@load="seedprod_preview_iframe_loaded"
			></iframe>
		</div>
	</div>
</template>

<script>
import { helpers } from '../mixins/helpers.js';
export default {
  name: 'preview',
  mixins: [ helpers ],
  data() {
    return {
      txt_1: __( 'Preview', process.env.VUE_APP_TEXTDOMAIN ),
      shared: seedprod_store,
    };
  },
  methods: {},
  components: {},
};
</script>
