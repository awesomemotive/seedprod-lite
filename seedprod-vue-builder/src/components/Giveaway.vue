<template>
  <div :id="'sp-'+block.id" class="sp-giveaway-wrapper" :style="giveawayWrapperStyleObject" :class="{'sp-has-form':block.settings.formId !== ''}">
    <span class="sp-hidden">START-REMOVE</span>
    <!--- if pro version not installed and lite version installed but not active prompt to install lite version -->
    <div v-if="shared.plugins_installed['rafflepress-pro'].status === 0">
      <div
        v-if="plugins['rafflepress'].status_code !== 1"
        class="sp-text-center sp-bg-primary-10 sp-text-primary sp-border sp-border-primary sp-p-4 sp-font-sans"
      >
        <span class="sp-text-base sp-font-semibold sp-font-sans">{{txt_1}}</span>
        <br />
        <a
          v-if="plugins['rafflepress'].status_code === 0 && doing_install === false"
          class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block sp-font-sans"
          :href="seedprod_giveaway_install_link"
          target="_blank"
          @click.prevent="plugin_action('rafflepress')"
        >
          <span class="sp-text-white">{{txt_3}} RafflePress</span>
          <span v-if="doing_install === true">
            Installing
            <i class="fas fa-spinner fa-spin"></i>
          </span>
        </a>
        <a
          v-if="plugins['rafflepress'].status_code === 2 && doing_install === false"
          class="sp-mt-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block sp-font-sans"
          :href="seedprod_giveaway_activate_link"
          target="_blank"
          @click.prevent="plugin_action('rafflepress')"
        >
          <span class="sp-text-white">{{txt_4}} RafflePress</span>
          <span v-if="doing_install === true">
            Installing
            <i class="fas fa-spinner fa-spin"></i>
          </span>
        </a>
      </div>
    </div>
    <span class="sp-hidden">END-REMOVE</span>
    <!--- Show Shortcode if lite or pro version is active -->
    <div
      v-if="plugins['rafflepress'].status_code === 1 || shared.plugins_installed['rafflepress-pro'].status === 1"
    >

      <div class="sp-preview-hidden">[rafflepress id="{{block.settings.formId}}"]</div>
      <span class="sp-hidden">START-REMOVE</span>
      <div v-html="preview" :style="giveawayPreviewStyleObject"></div>
      <div v-show="!preview" class="sp-text-center sp-text-sm">
        <div v-html="placeholder" class="sp-mb-2"></div>
        <div v-if="forms.length">
          <select v-model="block.settings.formId" v-on:change="selectFormPreviewOnChange" class="sp-form-select sp-w-full" style="max-width: 300px;">
            <option value="">{{ txt_7 }}</option>
            <option v-for="form in forms" v-bind:value="form.id" :key="form.id">{{ form.name }}</option>
          </select>
        </div>
        <div v-if="!forms.length">{{ txt_8 }}</div>
      </div>
      <span class="sp-hidden">END-REMOVE</span>

    </div>
    <span class="sp-hidden">START-REMOVE</span>
    <transition name="fade">
      <div id="wpforms-builder-elementor-popup" v-show="is_visible_iframe">
        <iframe v-bind:src="iframe_src" width="100%" height="100%" frameborder="0" id="wpforms-builder-iframe"></iframe>
      </div>
    </transition>
    <span class="sp-hidden">END-REMOVE</span>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';
import { EventBus } from '../event-bus.js';
import qs from 'qs';
export default {
  name: 'Giveaway',
  mixins: [ helpers ],
  props: {
    block: Object,
  },
  data() {
    return {
      txt_1: __( 'Install Giveaway plugin:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Install', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Activate', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Giveaway', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __(
        '(This shortcode will be rendered on the live preview.)',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_7: __( 'Select a Giveway', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'You can use RafflePress to build viral giveaways in minutes and explode your email list.', process.env.VUE_APP_TEXTDOMAIN ),
      seedprod_form_install_link: seedprod_form_install_link,
      seedprod_form_activate_link: seedprod_form_activate_link,
      has_an_form_plugin_active: false,
      shared: seedprod_store,
      doing_install: false,
      plugins: {
        rafflepress: {
          slug_base: 'rafflepress',
          slug: 'rafflepress/rafflepress.php',
          url: 'https://downloads.wordpress.org/plugin/rafflepress.zip',
          status: '',
          status_code: '',
          is_pro: false,
        },
      },
      create_new_form: false,
      is_visible_iframe: false,
      iframe_src: 'about:blank',
      placeholder: seedprod_data.rafflepress ? seedprod_data.rafflepress.placeholder : '',
      preview: '',
      forms: [],

    };
  },
  methods: {
    plugin_action( plugin ) {
      let self = this;

      let url = '';
      let type = '';
      let gplugin = plugin;
      this.doing_install = true;

      if ( 0 === this.plugins[plugin].status_code ) {
        url = seedprod_get_install_addon_url;
        var data = qs.stringify({
          plugin: this.plugins[plugin].url,
          type: 'plugin',
        });
        type = 'install';
      }
      if ( 1 === this.plugins[plugin].status_code ) {
        url = seedprod_deactivate_addon_url;
        var data = qs.stringify({
          plugin: this.plugins[plugin].slug,
          type: 'plugin',
        });
        type = 'deactivate';
      }
      if ( 2 === this.plugins[plugin].status_code ) {
        url = seedprod_activate_addon_url;
        var data = qs.stringify({
          plugin: this.plugins[plugin].slug,
          type: 'plugin',
        });
        type = 'activate';
      }

      this.axios
        .post( url, data, {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        })
        .then( function( response ) {
          self.shared.doing_ajax = false;

          //console.log(response.data);
          //console.log(type);

          if ( 'install' == type ) {
            if ( response.data.error ) {
              self.$swal({
                imageUrl:
                  self.shared.plugin_path + 'public/svg/error-24px-white.svg',
                text: response.data.error,
                toast: true,
                type: null,
                customClass: 'sp-toast-error',
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
              });
              let data = qs.stringify({
                plugin: self.plugins[gplugin].slug_base,
              });
              self.axios
                .post( seedprod_plugin_nonce_url, data, {
                  'Content-Type':
                    'application/x-www-form-urlencoded;charset=UTF-8',
                })
                .then( function( response ) {
                  if ( response.data ) {
                    window.open(
                      'update.php?action=install-plugin&plugin=' +
                        self.plugins[gplugin].slug_base +
                        '&_wpnonce=' +
                        response.data,
                      '_blank'
                    );
                  }
                });
            } else {
              self.$swal({
                imageUrl:
                  self.shared.plugin_path + 'public/svg/success-24px-white.svg',
                text: 'Plugin Installed, click Activate',
                toast: true,
                type: null,
                position: 'top-end',
                customClass: 'sp-toast-success',
                showConfirmButton: false,
                timer: 3000,
              });
              self.plugins[plugin].status = 'Inactive';
              self.plugins[plugin].status_code = 2;
              self.plugin_action( 'rafflepress' );
              self.$forceUpdate();
            }
          }
          if ( 'activate' == type ) {
            if ( response.data.success ) {
              self.$swal({
                imageUrl:
                  self.shared.plugin_path + 'public/svg/success-24px-white.svg',
                text: response.data.data,
                toast: true,
                type: null,
                position: 'top-end',
                customClass: 'sp-toast-success',
                showConfirmButton: false,
                timer: 3000,
              });
              self.plugins[plugin].status = 'Active';
              self.plugins[plugin].status_code = 1;
              self.$forceUpdate();
            } else {
              self.$swal({
                imageUrl:
                  self.shared.plugin_path + 'public/svg/error-24px-white.svg',
                text: response.data.data,
                toast: true,
                type: null,
                position: 'top-end',
                customClass: 'sp-toast-error',
                showConfirmButton: false,
                timer: 3000,
              });
            }
          }
          if ( 'deactivate' == type ) {
            if ( response.data.success ) {
              self.$swal({
                imageUrl:
                  self.shared.plugin_path + 'public/svg/success-24px-white.svg',
                text: response.data.data,
                toast: true,
                type: null,
                customClass: 'sp-toast-success',
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
              });
              self.plugins[plugin].status = 'Inactive';
              self.plugins[plugin].status_code = 2;
              self.$forceUpdate();
            } else {
              self.$swal({
                imageUrl:
                  self.shared.plugin_path + 'public/svg/error-24px-white.svg',
                text: response.data.data,
                toast: true,
                type: null,
                customClass: 'sp-toast-error',
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
              });
            }
          }
        })
        .catch( function( error ) {

          //console.log(error);
          self.shared.doing_ajax = false;
          self.$swal({
            imageUrl:
              self.shared.plugin_path + 'public/svg/error-24px-white.svg',
            text: error,
            toast: true,
            type: null,
            customClass: 'sp-toast-error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
          });
        });
    },
    selectFormPreviewOnChange( event ) {
      if ( event ) {
        this.loadForm( event.target.value );
      }
    },
    loadForm( id, args ) {
      args = args || {};

      let self = this,
        form_title = args.form_title ? args.form_title : 'false',
        form_description = args.form_description ? args.form_description : 'false';

      if ( self.block.settings.formId != id ) {
        self.block.settings.formId = id;
      }

      if ( ! id ) {
        self.preview = '';
        return;
      }

      self.axios
        .get( 'admin-ajax.php?action=' + self.shared.page_path + '_get_rafflepress_code&_wpnonce=' + seedprod_nonce + '&form_id=' + id + '&form_title=' + form_title + '&form_description=' + form_description )
        .then( function( response ) {
          if ( response.data ) {
            self.preview = response.data;
          }
        })
        .catch( function( error ) {
          console.log( error );
        });
    },
    initObserver( url ) {
      let self = this,
        obs = null;

      self.is_visible_iframe = true;
      self.iframe_src = url;

      obs = new MutationObserver( function( mutations ) {
        for ( let mutation of mutations ) {
          if (
            'attributes' === mutation.type &&
            'style' === mutation.attributeName &&
            'none' === mutation.target.style.display
          ) {
            self.is_visible_iframe = false;
            self.iframe_src = 'about:blank';
            EventBus.$emit( 'iframeClosed', obs );
            break;
          }
        }
      });

      obs.observe( document.getElementById( 'wpforms-builder-elementor-popup' ), {
        attributes: true,
        attributeFilter: [ 'style' ],
      });
    },
    getFormSettings() {
      return {
        form_id: this.block.settings.formId,
        form_title: this.block.settings.formTitle,
        form_description: this.block.settings.formDescription,
      };
    },
  },
  mounted: function() {
    let self = this,
      obs = null;

    self.loadForm( self.block.settings.formId, self.getFormSettings() );

    lodash.each( this.shared.plugins_installed, function( v, k ) {
      if ( self.plugins[k] !== undefined ) {
        self.plugins[k].status = self.shared.plugins_installed[k].label;
        self.plugins[k].status_code = self.shared.plugins_installed[k].status;
      }
    });
    lodash.each( this.shared.from_plugins_installed, function( value, key ) {
      if ( 1 === value ) {
        self.has_an_form_plugin_active = true;
      }
    });
    lodash.forOwn( this.shared.block_templates.giveaway, function(
      value,
      key
    ) {
      self.set_default_val( self.block.settings, key, value );
    });

    EventBus
      .$on( 'gformsLoaded', function( forms ) {
        self.forms = forms.length ? forms : [];
      })
      .$on( 'gformSelected', function( formSettings ) {
        self.loadForm( formSettings.form_id, formSettings );
      })
      .$on( 'giframeClosed', function( formId, obs ) {
        obs.disconnect();
      })
      .$on( 'gcreateNewLinkClicked', function( url ) {
        self.create_new_form = true;
        self.initObserver( url );
      })
      .$on( 'geditLinkClicked', function( url ) {
        self.initObserver( url );
      });

    if ( 'undefined' != typeof jQuery ) {
      jQuery( '#wpforms-builder-elementor-popup' ).on( 'wpformsBuilderInPopupClose', function( e, action, formId ) {

        if ( formId ) {
          self.loadForm( formId );
        }

        if ( formId && self.create_new_form ) {
          EventBus.$emit( 'newFormCreated', formId );
        }

        self.create_new_form = false;
      });
    }
  },
  computed: {
    giveawayWrapperStyleObject: function() {
      let mt = '';
      if ( '' != this.block.settings.marginTop ) {
        mt = this.block.settings.marginTop + 'px';
      }

      let p = '';
      if ( this.block.settings.paddingSync ) {
        p = this.padding_render(
          this.block.settings.paddingTop,
          this.block.settings.paddingTop,
          this.block.settings.paddingTop,
          this.block.settings.paddingTop
        );
      } else {
        p = this.padding_render(
          this.block.settings.paddingTop,
          this.block.settings.paddingRight,
          this.block.settings.paddingBottom,
          this.block.settings.paddingLeft
        );
      }

      let tc = '';
      if ( '' != this.block.settings.textColor ) {
        tc = this.block.settings.textColor;
      }

      let lh = '';
      if ( '' !== this.block.settings.lineHeight ) {
        lh = this.block.settings.lineHeight;
      }

      let ls = '';
      if ( '' != this.block.settings.letterSpacing ) {
        ls = this.block.settings.letterSpacing + 'px';
      }

      let tt = '';
      if ( '' != this.block.settings.typographyLetterCase ) {
        tt = this.block.settings.typographyLetterCase;
      }

      let fw = '';
      if ( true === this.block.settings.typographyBold ) {
        fw = 'bold';
      } else {
        fw = this.font_variant_render(
          this.block.settings.fontVariant,
          'weight'
        );
      }

      let fs = '';
      if ( true === this.block.settings.typographyItalic ) {
        fs = 'italic';
      } else {
        fs = this.font_variant_render( this.block.settings.fontVariant, 'style' );
      }

      let td = '';
      if ( true === this.block.settings.typographyUnderline ) {
        td = 'underline';
      }

      let fts = '';
      if ( '' !== this.block.settings.fontSize ) {
        fts = this.block.settings.fontSize + 'px';
      }

      return {
        'font-family': this.font_render( this.block.settings.font ),
        'line-height': lh,
        'letter-spacing': ls,
        'text-transform': tt,
        'text-decoration': td,
        'font-size': fts,
        'font-weight': fw,
        'font-style': fs,
        color: tc,
        padding: p,
        'margin-top': mt,
        'text-align': this.align_render( this.block.settings.align ),
      };
    },
    giveawayPreviewStyleObject: function() {

      return {
        'pointer-events': 'none',
        'curser': 'default',
      };
    },
  },
};
</script>
