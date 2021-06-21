<template>
  <div class="sp-form-group">
    <label>{{label_prefix}} {{txt_1}}</label>
    <div v-if="block.settings[pre + 'borderSync'] === false" class="sp-flex sp-items-center">
      <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
        <input
          type="number"
          min="0"
          v-model="block.settings[pre + 'borderTop']"
          class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-tr-none sp-rounded-br-none"
        />
        {{txt_2}}
      </span>
      <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
        <input
          type="number"
          min="0"
          v-model="block.settings[pre + 'borderRight']"
          class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
        />
        {{txt_3}}
      </span>
      <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
        <input
          type="number"
          min="0"
          v-model="block.settings[pre + 'borderBottom']"
          class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
        />
        {{txt_4}}
      </span>
      <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
        <input
          type="number"
          min="0"
          v-model="block.settings[pre + 'borderLeft']"
          class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-rounded-tl-none sp-rounded-bl-none"
        />
        {{txt_5}}
      </span>
      <span class="sp-ml-2 sp-text-neutral-20" @click="sync_border(true)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-fill-current sp-w-6 sp-h-6"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z"
          />
          <path d="M0 24V0" fill="none" />
        </svg>
      </span>
    </div>
    <div v-else class="sp-flex sp-items-center">
      <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
        <input
          type="number"
          min="0"
          v-model="block.settings[pre + 'borderTop']"
          class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-tr-none sp-rounded-br-none"
        />
        {{txt_2}}
      </span>
      <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
        <input
          type="number"
          min="0"
          v-model="block.settings[pre + 'borderTop']"
          class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
        />
        {{txt_3}}
      </span>
      <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
        <input
          type="number"
          min="0"
          v-model="block.settings[pre + 'borderTop']"
          class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
        />
        {{txt_4}}
      </span>
      <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
        <input
          type="number"
          min="0"
          v-model="block.settings[pre + 'borderTop']"
          class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-rounded-tl-none sp-rounded-bl-none"
        />
        {{txt_5}}
      </span>
      <span class="sp-ml-2 sp-text-primary" @click="sync_border(false)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-fill-current sp-6 sp-h-6"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';

export default {
  name: 'BorderWidthControl',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Border Width', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Top', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Right', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Bottom', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Left', process.env.VUE_APP_TEXTDOMAIN ),
      shared: seedprod_store,
    };
  },
  methods: {
    sync_border( sync ) {

      this.block.settings[this.pre + 'borderSync'] = sync;

      //if (sync) {
      this.block.settings[this.pre + 'borderLeft'] = this.block.settings.borderTop;
      this.block.settings[this.pre + 'borderBottom'] = this.block.settings.borderTop;
      this.block.settings[this.pre + 'borderRight'] = this.block.settings.borderTop;

      //}
    },

  },
  computed: {
    label_prefix: function() {
      let t = '';
      if ( this.prefix !== undefined ) {
        t = this.prefix.charAt( 0 ).toUpperCase() + this.prefix.slice( 1 );
      }
      return t;
    },
    pre: function() {
      if ( this.prefix === undefined ) {
        return '';
      } else {
        return this.prefix;
      }
    },
  },
  components: {},
  props: {
    block: Object,
    prefix: String,
  },
};
</script>
