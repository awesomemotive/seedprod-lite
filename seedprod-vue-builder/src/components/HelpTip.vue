<template>
  <span ref="helptip" class="help_tip">
    <i class="fas fa-question-circle" v-tooltip.top-left="{
							content:
								text
						}"></i>
  </span>
</template>

<script>
export default {
  name: 'HelpTip',
  data() {
    return {};
  },
  mounted: function() {},
  methods: {},
  watch: {},
  props: [ 'text' ],
};
</script>
