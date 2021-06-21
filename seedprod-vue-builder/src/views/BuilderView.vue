<template>
  <div
    id="seedprod-builder-view"
    class="sp-flex sp-flex-col"
    :class="{ 'sp-mobile-view': shared.preview_mode == 'mobile' }"
    ref="seedprodhtml"
    :style="builderStyles"
  >
    <div
      id="sp-html-code"
      class="sp-flex-grow sp-html"
      @mouseleave="shared.highlight_option_target = false"
      @click.capture="goto_global()"
    >
      <draggable
        id="sp-page"
        :class="pageClasses"
        :style="pageStyles"
        :list="shared.settings.document.sections"
        group="sections"
        handle=".sp-drag-section"
        @start="start_move"
        @end="end_move"
      >
        <Section
          :section="section"
          :sindex="sindex"
          v-for="(section,sindex) in shared.settings.document.sections"
          :key="section.id"
        ></Section>
      </draggable>
    </div>
    <div id="sp-sp-bottom-section-dropzone" class="sp-bg-white sp-px-1 sp-py-3">
      <div v-if="show_cols === false">
        <draggable
          class="sp-bottom-section-dropzone"
          :list="section_dropzone"
          :group="{name:'blocks',put:true, pull: false}"
          @add="add_new_section_block"
          draggable=".none"
          ghost-class="sp-exclude-ghost"
          chosen-class="sp-exclude-chosen"
        >
          <div
            class="sp-flex sp-justify-center sp-py-2 sp-items-center sp-bg-secondary-10 sp-border-secondary sp-border-dotted sp-border-2"
            v-for="(b,i) in section_dropzone"
            :key="i"
          >
            <div class="sp-flex sp-justify-center sp-items-center">
              <button
                @click="set_show_cols(true)"
                class="sp-bg-secondary-50 hover:sp-bg-primary sp-flex sp-justify-center sp-items-center sp-w-8 sp-h-8 sp-rounded-full sp-text-white sp-mr-2"
                v-tooltip="{content:'Add Columns',delay:{ show: 1500, hide: 0 }}"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sp-w-4 sp-h-4 sp-fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M21 4H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z"
                  />
                </svg>
              </button>
              <button
                @click="goto_template_section"
                class="sp-bg-secondary-50 hover:sp-bg-primary sp-flex sp-justify-center sp-items-center sp-w-8 sp-h-8 sp-rounded-full sp-text-white"
                v-tooltip="{content:'Add Section',delay:{ show: 1500, hide: 0 }}"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sp-w-4 sp-h-4 sp-fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M21 18H2v2h19v-2zm-2-8v4H4v-4h15m1-2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm1-4H2v2h19V4z"
                  />
                </svg>
              </button>
            </div>
            <div class="sp-px-2 sp-italic sp-text-xs sp-text-secondary">{{txt_1}}</div>
            <div
              class="sp-font-bold sp-text-xs sp-text-secondary sp-cursor-pointer"
              @click="add_block"
            >{{txt_2}}</div>
          </div>
        </draggable>
      </div>
      <div v-else>
        <div
          class="sp-flex sp-justify-center sp-py-2 sp-items-center sp-bg-secondary-10 sp-border-secondary sp-border-dotted sp-border-2 sp-relative sp-flex-col"
        >
          <div class="sp-font-bold sp-text-xs sp-text-secondary sp-pb-6 sp-pt-2 sp-font-sans">{{txt_3}}</div>
          <div class="sp-flex sp-text-secondary-50 sp-pb-5">
            <button
              @click="insert_section_row_layout('1-col')"
              class="sp-px-3 hover:sp-text-secondary"
            >
              <svg
                class="sp-fill-current"
                width="81"
                height="32"
                viewBox="0 0 81 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="80" height="32" rx="1" />
              </svg>
            </button>
            <button
              @click="insert_section_row_layout('right-sidebar')"
              class="sp-px-3 hover:sp-text-secondary"
            >
              <svg
                class="sp-fill-current"
                width="81"
                height="32"
                viewBox="0 0 81 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0C0.447715 0 0 0.447715 0 1V31C0 31.5523 0.447715 32 0.999999 32H52C52.5523 32 53 31.5523 53 31V1C53 0.447715 52.5523 0 52 0H1Z"
                />
                <path
                  d="M57 0C56.4477 0 56 0.447715 56 1V31C56 31.5523 56.4477 32 57 32H80C80.5523 32 81 31.5523 81 31V1C81 0.447715 80.5523 0 80 0H57Z"
                />
              </svg>
            </button>
            <button
              @click="insert_section_row_layout('left-sidebar')"
              class="sp-px-3 hover:sp-text-secondary"
            >
              <svg
                class="sp-fill-current"
                width="81"
                height="32"
                viewBox="0 0 81 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 0C24.5523 0 25 0.447715 25 1V31C25 31.5523 24.5523 32 24 32H1C0.447716 32 0 31.5523 0 31V1C0 0.447715 0.447716 0 1 0H24Z"
                />
                <path
                  d="M80 0C80.5523 0 81 0.447715 81 1V31C81 31.5523 80.5523 32 80 32H29C28.4477 32 28 31.5523 28 31V1C28 0.447715 28.4477 0 29 0H80Z"
                />
              </svg>
            </button>
            <button
              @click="insert_section_row_layout('2-col')"
              class="sp-px-3 hover:sp-text-secondary"
            >
              <svg
                class="sp-fill-current"
                width="81"
                height="32"
                viewBox="0 0 81 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0C0.447715 0 0 0.447715 0 1V31C0 31.5523 0.447715 32 1 32H38C38.5523 32 39 31.5523 39 31V1C39 0.447715 38.5523 0 38 0H1Z"
                />
                <path
                  d="M43 0C42.4477 0 42 0.447715 42 1V31C42 31.5523 42.4477 32 43 32H80C80.5523 32 81 31.5523 81 31V1C81 0.447715 80.5523 0 80 0H43Z"
                />
              </svg>
            </button>
          </div>
          <div class="sp-flex sp-text-secondary-50 sp-pb-4">
            <button
              @click="insert_section_row_layout('3-col')"
              class="sp-px-3 hover:sp-text-secondary"
            >
              <svg
                class="sp-fill-current"
                width="81"
                height="32"
                viewBox="0 0 81 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1C0 0.447715 0.447715 0 1 0H24C24.5523 0 25 0.447715 25 1V31C25 31.5523 24.5523 32 24 32H1C0.447716 32 0 31.5523 0 31V1Z"
                />
                <path
                  d="M28 1C28 0.447715 28.4477 0 29 0H52C52.5523 0 53 0.447715 53 1V31C53 31.5523 52.5523 32 52 32H29C28.4477 32 28 31.5523 28 31V1Z"
                />
                <path
                  d="M57 0C56.4477 0 56 0.447715 56 1V31C56 31.5523 56.4477 32 57 32H80C80.5523 32 81 31.5523 81 31V1C81 0.447715 80.5523 0 80 0H57Z"
                />
              </svg>
            </button>
            <button
              @click="insert_section_row_layout('4-col')"
              class="sp-px-3 hover:sp-text-secondary"
            >
              <svg
                class="sp-fill-current"
                width="81"
                height="32"
                viewBox="0 0 81 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0C0.447715 0 0 0.447715 0 1V31C0 31.5523 0.447716 32 1 32H17C17.5523 32 18 31.5523 18 31V1C18 0.447715 17.5523 0 17 0H1Z"
                />
                <path
                  d="M22 0C21.4477 0 21 0.447715 21 1V31C21 31.5523 21.4477 32 22 32H38C38.5523 32 39 31.5523 39 31V1C39 0.447715 38.5523 0 38 0H22Z"
                />
                <path
                  d="M42 1C42 0.447715 42.4477 0 43 0H59C59.5523 0 60 0.447715 60 1V31C60 31.5523 59.5523 32 59 32H43C42.4477 32 42 31.5523 42 31V1Z"
                />
                <path
                  d="M64 0C63.4477 0 63 0.447715 63 1V31C63 31.5523 63.4477 32 64 32H80C80.5523 32 81 31.5523 81 31V1C81 0.447715 80.5523 0 80 0H64Z"
                />
              </svg>
            </button>
            <button
              @click="insert_section_row_layout('5-col')"
              class="sp-px-3 hover:sp-text-secondary"
            >
              <svg
                class="sp-fill-current"
                width="81"
                height="32"
                viewBox="0 0 81 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1C0 0.447715 0.447715 0 1 0H13C13.5523 0 14 0.447715 14 1V31C14 31.5523 13.5523 32 13 32H1C0.447716 32 0 31.5523 0 31V1Z"
                />
                <path
                  d="M17 1C17 0.447715 17.4477 0 18 0H30C30.5523 0 31 0.447715 31 1V31C31 31.5523 30.5523 32 30 32H18C17.4477 32 17 31.5523 17 31V1Z"
                />
                <path
                  d="M35 0C34.4477 0 34 0.447715 34 1V31C34 31.5523 34.4477 32 35 32H47C47.5523 32 48 31.5523 48 31V1C48 0.447715 47.5523 0 47 0H35Z"
                />
                <path
                  d="M51 1C51 0.447715 51.4477 0 52 0H64C64.5523 0 65 0.447715 65 1V31C65 31.5523 64.5523 32 64 32H52C51.4477 32 51 31.5523 51 31V1Z"
                />
                <path
                  d="M69 0C68.4477 0 68 0.447715 68 1V31C68 31.5523 68.4477 32 69 32H81C81.5523 32 82 31.5523 82 31V1C82 0.447715 81.5523 0 81 0H69Z"
                />
              </svg>
            </button>
            <button
              @click="insert_section_row_layout('6-col')"
              class="sp-px-3 hover:sp-text-secondary"
            >
              <svg
                class="sp-fill-current"
                width="81"
                height="32"
                viewBox="0 0 81 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0C0.447715 0 0 0.447715 0 1V31C0 31.5523 0.447715 32 1 32H10C10.5523 32 11 31.5523 11 31V1C11 0.447715 10.5523 0 10 0H1Z"
                />
                <path
                  d="M15 0C14.4477 0 14 0.447715 14 1V31C14 31.5523 14.4477 32 15 32H24C24.5523 32 25 31.5523 25 31V1C25 0.447715 24.5523 0 24 0H15Z"
                />
                <path
                  d="M28 1C28 0.447715 28.4477 0 29 0H38C38.5523 0 39 0.447715 39 1V31C39 31.5523 38.5523 32 38 32H29C28.4477 32 28 31.5523 28 31V1Z"
                />
                <path
                  d="M43 0C42.4477 0 42 0.447715 42 1V31C42 31.5523 42.4477 32 43 32H52C52.5523 32 53 31.5523 53 31V1C53 0.447715 52.5523 0 52 0H43Z"
                />
                <path
                  d="M56 1C56 0.447715 56.4477 0 57 0H66C66.5523 0 67 0.447715 67 1V31C67 31.5523 66.5523 32 66 32H57C56.4477 32 56 31.5523 56 31V1Z"
                />
                <path
                  d="M71 0C70.4477 0 70 0.447715 70 1V31C70 31.5523 70.4477 32 71 32H80C80.5523 32 81 31.5523 81 31V1C81 0.447715 80.5523 0 80 0H71Z"
                />
              </svg>
            </button>
          </div>
          <button
            @click="set_show_cols(false)"
            class="sp-absolute sp-top-0 sp-right-0 sp-text-secondary sp-mt-2 sp-mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-4 sp-h-4"
            >
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </div>
      </div>
    </div>
      <!-- Lite User Upgrade -->
    <div v-if="shared.page_path == 'seedprod_lite' && shared.show_bottombar_cta" class="sp-bg-green sp-text-white sp-py-2 sp-px-8 sp-text-sm sp-flex sp-justify-center sp-leading-normal sp-relative"
    :class="{'sp-hidden':hidebottombar}"
    >
      You’re using SeedProd Lite. To unlock more features consider
      <a href="https://seedprod.com/lite-upgrade/?utm_source=WordPress&amp;utm_campaign=liteplugin&amp;utm_medium=pluginbuilderbottombar" target="_blank" class="sp-ml-1 sp-text-white hover:sp-text-white sp-no-underline sp-border-0 sp-border-b sp-border-white sp-border-dotted">upgrading to Pro</a>.
      <span @click="dismiss_upsell" class="sp-text-white sp-absolute sp-cursor-pointer sp-right-0 sp-top-0 sp-opacity-75 sp-mt-2 sp-mr-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sp-fill-current sp-w-5 sp-h-5"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg></span>
    </div>
    <!-- Inactive License -->
    <div v-if="shared.page_path == 'seedprod_pro' && shared.active_license === false" class="sp-bg-red sp-text-white sp-py-2 sp-px-8 sp-text-sm sp-flex sp-justify-center sp-leading-normal sp-relative sp-uppercase sp-font-semibold"
    >
            You’re license key is invalid!
      <a
        href="admin.php?page=seedprod_pro#/settings"
        class="sp-ml-1 sp-text-white hover:sp-text-white sp-no-underline sp-border-0 sp-border-b sp-border-white sp-border-dotted"
      >Click Here to Enter Your License Key</a>
    </div>


    <div v-if="shared.template_dev_mode === true" class="sp-bg-primary sp-text-white sp-py-2 sp-px-8 sp-text-sm sp-flex sp-justify-center sp-leading-normal sp-relative"
    :class="{'sp-hidden':hidebottombar}"
    >
      Template Dev Mode - Under "Save" select "Save Global Tempate" to Create/ Edit the template. If you selected a Blank Template to start with a New Template will be created otherwise the template will be updated. After creating a new global template you will need to go back and select the template to edit it.
    </div>

    <!-- Lite CTA -->
    <modal v-if="showUpsellModal" @close="showUpsellModal = false" class="sp-w-720px">
      <div slot="body" class="sp-px-10 sp-py-12 sp-text-neutral sp-relative">
          <button
          class="sp-text-neutral-40 hover:sp-text-neutral-60 sp-absolute sp-top-0 sp-right-0 sp-m-2"
          @click="showUpsellModal = false"
        > <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-6 sp-h-6"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            />
          </svg>
        </button>
        <LiteCTATemplates />
           </div>
      <h3 slot="header"></h3>
    </modal>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import qs from 'qs';
import { helpers } from '../mixins/helpers.js';
import Section from '@/components/Section.vue';
import { __ } from '@wordpress/i18n';
import LiteCTATemplates from '@/components/LiteCTATemplates.vue';
import modal from '@/components/Modal.vue';

export default {
  comments: true,
  name: 'builder_view',
  mixins: [ helpers ],
  data() {
    return {
      txt_1: __( 'or', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Drag a new block here', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Choose your layout:', process.env.VUE_APP_TEXTDOMAIN ),
      show_cols: false,
      showUpsellModal: false,
      hidebottombar: false,
      section_dropzone: [ { id: 0 } ],
      page_meta: {
        highlight_option: false,
      },
      shared: seedprod_store,
    };
  },
  inject: {
    $validator: '$validator',
  },

  methods: {
    dismiss_upsell() {
      let self = this;
      let data = qs.stringify({
        id: 2,
      });
      this.hidebottombar = true;
      this.axios
        .post( seedprod_dismiss_upsell, data, {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        })
        .then( function( response ) {
          if ( response.data.status ) {

            //location.reload();
          }
        });
    },
    goto_global() {

      //this.$router.push({ name: "setup_design" });
    },
    insert_section_row_layout( type ) {
      let cols = this.generate_cols( type );

      let r;
      r = {
        id: this.uid(),
        type: 'row',
        colType: type,
        cols: cols,
        settings: JSON.parse( JSON.stringify( this.shared.block_templates.row ) ),
      };

      // new section
      let section_id = this.uid();
      let newObj = {
        id: section_id,
        type: 'section',
        rows: [ r ],
        settings: JSON.parse(
          JSON.stringify( this.shared.block_templates.section )
        ),
      };
      this.shared.settings.document.sections.push( newObj );
      this.show_cols = false;

      // focus block
      this.focus_block( section_id );
      this.edit_block( section_id, null, true );
    },
    set_show_cols( v ) {
      this.show_cols = v;
      this.focus_block( 'sp-bottom-section-dropzone', 'bottom' );
    },
    add_new_section_block( evt ) {
      if ( 0 == this.section_dropzone[0].id ) {
        var new_block = JSON.parse( JSON.stringify( this.section_dropzone[1]) );
        this.section_dropzone.splice( 1, 1 );
      } else {
        var new_block = JSON.parse( JSON.stringify( this.section_dropzone[0]) );
        this.section_dropzone.splice( 0, 1 );
      }

      if ( 'row' == new_block.type ) {
        this.show_cols = true;
        return;
      }

      // add new 1 col section with block
      let newObj = {
        id: this.uid(),
        type: 'section',
        rows: [
          {
            id: this.uid(),
            type: 'row',
            colType: '1-col',
            cols: [
              {
                id: this.uid(),
                type: 'col',
                blocks: [ new_block ],
                settings: JSON.parse(
                  JSON.stringify( this.shared.block_templates.col )
                ),
              },
            ],
            settings: JSON.parse(
              JSON.stringify( this.shared.block_templates.row )
            ),
          },
        ],
        settings: JSON.parse(
          JSON.stringify( this.shared.block_templates.section )
        ),
      };
      this.shared.settings.document.sections.push( newObj );

      //console.log('fasfsdf');
      this.edit_block( new_block.id );
      this.focus_block( new_block.id );
    },
    goto_template_section() {
      this.$router.push({ name: 'sectiontemplates' });
    },
    update_toolbar_position() {
      try {
        this.shared.builder_top =
          jQuery( '.sp-el-section:first' ).offset().top -
          jQuery( '#sp-page' ).offset().top;
      } catch ( err ) {}
    },
  },
  computed: {
    pageClasses: function() {
      let key = '';
      let obj = {};
      if ( '' != this.shared.settings.document.settings.bgPosition ) {
        obj['spBg' + this.shared.settings.document.settings.bgPosition] = true;
      }
      if ( '' != this.shared.settings.document.settings.contentPosition ) {
        obj[
          'sp-content-' + this.shared.settings.document.settings.contentPosition
        ] = true;
      }
      return obj;
    },
    builderStyles: function() {
      let width, height;
      if ( 'desktop' == this.shared.preview_mode ) {
        width = '100%';
        height = '100%';
      } else {
        width = '360px';
        height = '680px';
      }
      return {
        width: width,
        'max-height': height,
        transition: 'width 0.5s',
      };
    },
    pageStyles: function() {
      let backgroundImage = '';
      if ( '' != this.shared.settings.document.settings.bgImage ) {
        backgroundImage =
          'url(\'' + this.shared.settings.document.settings.bgImage + '\')';
      }

      if (
        '' != this.shared.settings.document.settings.bgImage &&
        '' != this.shared.settings.document.settings.bgDimming
      ) {

        backgroundImage =
          'linear-gradient(0deg, ' +
          'rgba(0,0,0,0.' +
          this.shared.settings.document.settings.bgDimming +
          ')' +
          ', ' +
          'rgba(0,0,0,0.' +
          this.shared.settings.document.settings.bgDimming +
          ')' +
          '),' +
          'url(\'' +
          this.shared.settings.document.settings.bgImage +
          '\')';
      }
      let fontFamily = '';
      if ( '' != this.shared.settings.document.settings.textFont ) {
        fontFamily = this.shared.settings.document.settings.textFont;
        if ( false === fontFamily.includes( ',' ) ) {
          fontFamily = fontFamily + ', sans-serif';
        }
      }
      let fontWeight = '';
      let fontStyle = '';
      if ( '' != this.shared.settings.document.settings.textFontVariant ) {
        fontWeight = parseInt(
          this.shared.settings.document.settings.textFontVariant
        );
        if (
          false === lodash.isEmpty(
            this.shared.settings.document.settings.textFontVariant
          )
        ) {
          fontStyle = this.shared.settings.document.settings.textFontVariant.replace(
            /[0-9]/g,
            ''
          );
        }
      }

      if ( '' == this.shared.settings.document.settings.bgImage ) {
        if ( 'g' == this.shared.settings.document.settings.bgStyle ) {
          if (
            'linear' == this.shared.settings.document.settings.bgGradient.type
          ) {
            backgroundImage =
              'linear-gradient(' +
              this.shared.settings.document.settings.bgGradient.angle +
              'deg, ' +
              this.shared.settings.document.settings.bgGradient.color1 +
              ' ' +
              this.shared.settings.document.settings.bgGradient.color1location +
              '%, ' +
              this.shared.settings.document.settings.bgGradient.color2 +
              ' ' +
              this.shared.settings.document.settings.bgGradient.color2location +
              '%)';
          } else {
            backgroundImage =
              'radial-gradient(circle at ' +
              this.shared.settings.document.settings.bgGradient.position +
              ', ' +
              this.shared.settings.document.settings.bgGradient.color1 +
              ' ' +
              this.shared.settings.document.settings.bgGradient.color1location +
              '%, ' +
              this.shared.settings.document.settings.bgGradient.color2 +
              ' ' +
              this.shared.settings.document.settings.bgGradient.color2location +
              '%)';
          }
        }
      }

      return {
        'background-color': this.shared.settings.document.settings.bgColor,
        'background-image': backgroundImage,
        'font-family': fontFamily,
        'font-weight': fontWeight,
        'font-style': fontStyle,
      };
    },
  },
  mounted: function() {
    let self = this;

    // check top section
    self.update_toolbar_position();

    jQuery( window ).resize( function() {
      self.update_toolbar_position();
    });
    this.update_placeholder_css();

    this.shared.code_container = this.$el.querySelector(
      '#seedprod-builder-view'
    );
    this.shared.code_container = this.$refs.seedprodhtml;

    //console.log(this.$refs.seedprodhtml);
  },
  components: {
    draggable,
    Section,
    LiteCTATemplates,
    modal,
  },
  beforeRouteLeave( to, from, next ) {

    // validate before we leave the route
    let _self = this;

    this.$validator.validateAll().then( ( result ) => {
      if ( result ) {
        next();
      } else {
        let errors = '';
        this.errors.all().forEach( function( value ) {
          errors = errors + value + '\n';
        });
        errors = errors + '';

        this.$swal({
          imageUrl:
            _self.shared.plugin_path + 'public/svg/success-24px-white.svg',
          text: errors,
          toast: true,
          type: null,
          customClass: 'sp-toast-success',
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
        });
      }
    });
  },
};
</script>
