<template>
	<transition name="seedprod-modal">
		<div class="seedprod-modal-mask" @click.self="$emit('close')">
			<div class="seedprod-modal-wrapper">
				<div class="seedprod-modal-container">
					<div class="seedprod-modal-header">
						<slot name="header">{{txt_1}}</slot>
					</div>

					<div class="seedprod-modal-body">
						<slot name="body">{{txt_2}}</slot>
						<!-- <button
							class="seedprod-modal-default-button btn btn-primary"
							@click="$emit('close')"
						>
							OK
						</button> -->
						<!-- <button class="seedprod-modal-default-button btn btn-primary" @click="$emit('cancel')">
                Cancel
            </button>-->
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import { __ } from '@wordpress/i18n';
export default {
  data() {
    return {
      txt_1: __( 'default header', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'default body', process.env.VUE_APP_TEXTDOMAIN ),
    };
  },
  name: 'modal',
};
</script>
