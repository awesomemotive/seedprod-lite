<template>
  <div>
    <!-- Block Top Nav -->
    <div id="sp-blocks-edit-sections" class="sp-flex">
      <div
        class="sp-w-1/2 sp-cursor-pointer"
        :class="{ 'sp-secondary': view != 1 }"
        @click="view = 1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-w-4 sp-fill-current sp-mr-2"
        >
          <path
            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>{{txt_1}}
      </div>

      <div
        class="sp-w-1/2 sp-cursor-pointer"
        :class="{ 'sp-secondary': view != 3 }"
        @click="view = 3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-w-4 sp-fill-current sp-mr-2"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
          />
        </svg>{{txt_2}}
      </div>
    </div>
    <!-- Content -->
    <div v-if="view == 1">
      <h3
        class="sp-sidebar-headers"
        @click="
        section_1 = !section_1
      "
        :class="{
        seedprod_collaspe: !section_1}"
      >
        {{txt_14}}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': !section_1}"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': section_1}"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>
      <div class="seedprod-sidebar-action-body" v-if="section_1">
        <div class="sp-form-group">
          <label class="sp-w-full">{{txt_4}}
            <select v-model="block.settings.formId" v-on:change="onChange" class="sp-form-select sp-mb-2">
              <option value="">{{ txt_6 }}</option>
              <option v-for="form in forms" v-bind:value="form.ID" :key="form.ID">{{ form.post_title }}</option>
            </select>
          </label>
          <div class="sp-text-sm sp-italic sp-font-semibold">
            <div v-if="forms.length && block.settings.formId" class="sp-mb-2">
              <a href="#" v-on:click="editLinkClick">{{ txt_7 }}</a>
            </div>
            <div class="sp-text-center">
              <button type="button" v-on:click="createNewLinkClick" class="sp-wp-button sp-wp-button-transparent">{{ txt_9 }}</button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="forms.length && block.settings.formId">
        <h3
        class="sp-sidebar-headers"
        @click="
        section_2 = !section_2
      "
        :class="{
        seedprod_collaspe: !section_2}"
      >
        {{txt_15}}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': !section_2}"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': section_2}"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
        </h3>
        <div class="seedprod-sidebar-action-body" v-if="section_2">
          <div class="sp-form-group">
            <label class="sp-w-full">{{ txt_12 }}
              <select v-model="block.settings.formTitle" v-on:change="onChange" class="sp-form-select">
                <option value="false">{{ txt_11 }}</option>
                <option value="true">{{ txt_10 }}</option>
              </select>
            </label>
          </div>
          <div class="sp-form-group">
            <label class="sp-w-full">{{ txt_13 }}
              <select v-model="block.settings.formDescription" v-on:change="onChange" class="sp-form-select">
                <option value="false">{{ txt_11 }}</option>
                <option value="true">{{ txt_10 }}</option>
              </select>
            </label>
          </div>
        </div>
      </div>

    </div>
    <!-- Advanced -->
    <div v-if="view == 3">
      <!-- Advanced Styles-->
      <h3
        class="sp-sidebar-headers"
        @click="
        section_4 = !section_4
      "
        :class="{
        seedprod_collaspe: !section_4}"
      >
        {{txt_3}}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': !section_4}"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': section_4}"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>
      <div class="seedprod-sidebar-action-body" v-if="section_4">
        <div class="sp-form-group">
          <TypographyControl :block="block" />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_5"
            :color="block.settings.textColor"
            v-model="block.settings.textColor"
          />
        </div>
      </div>

      <SpacingSectionControl :block="block" />

    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';
import { EventBus } from '../event-bus.js';
import ColorPicker from '@/components/ColorPicker.vue';
import TypographyControl from '@/components/TypographyControl.vue';
import SliderControl from '@/components/SliderControl.vue';
import PaddingControl from '@/components/PaddingControl.vue';
import SpacingSectionControl from '@/components/SpacingSectionControl.vue';

export default {
  name: 'ContactFormOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Content', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Advanced Styles', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Select a Form', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Text Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Select', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Need to make changes? Edit the selected form.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( '+ New Form', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Show', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Hide', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Form Name', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Form Description', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Form', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Display Options', process.env.VUE_APP_TEXTDOMAIN ),
      forms: [],
      view: 1,
      section_1: true,
      section_2: false,
      section_3: false,
      section_4: true,
      shared: seedprod_store,
      wpforms: seedprod_data.wpforms,
    };
  },
  methods: {
    editLinkClick( event ) {
      if ( event ) {
        let url = 0 < this.block.settings.formId ? this.wpforms.edit_form_url + this.block.settings.formId : this.wpforms.add_form_url;

        EventBus.$emit( 'editLinkClicked', url );
      }
    },
    createNewLinkClick( event ) {
      if ( event ) {
        EventBus.$emit( 'createNewLinkClicked', this.wpforms.add_form_url );
      }
    },
    onChange( event ) {
      if ( event ) {
        EventBus.$emit( 'formSelected', this.getFormSettings() );
      }
    },
    getFormSettings() {
      return {
        form_id: this.block.settings.formId,
        form_title: this.block.settings.formTitle,
        form_description: this.block.settings.formDescription,
      };
    },
    loadForms() {
      let self = this;

      self.axios
        .get(
          'admin-ajax.php?action=' + self.shared.page_path + '_get_wpforms&_wpnonce=' + seedprod_nonce
        )
        .then( function( response ) {
          self.forms = response.data;
          EventBus.$emit( 'formsLoaded', response.data );
        })
        .catch( function( error ) {
          console.log( error );
        });
    },
  },
  mounted: function() {
    let self = this;

    self.loadForms();

    EventBus
      .$on( 'pluginActivated', self.loadForms )
      .$on( 'newFormCreated', self.loadForms );

    lodash.forOwn( this.shared.block_templates.contactform, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  created() {},
  components: {
    ColorPicker,
    TypographyControl,
    PaddingControl,
    SliderControl,
    SpacingSectionControl,
  },
  props: {
    block: Object,
  },
};
</script>
