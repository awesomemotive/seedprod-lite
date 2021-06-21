<template>
  <div class="sp-image-control sp-relative" ref="image">
    <div v-if="!value">
      <div class="sp-border sp-border-neutral-20 sp-rounded-5px">
        <div
          class="sp-border-2 sp-border-white sp-bg-neutral-10 sp-text-neutral-60 sp-font-semibold sp-flex sp-items-center sp-justify-center sp-flex-col sp-p-4 sp-rounded-5px"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-12 sp-h-12"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
            />
          </svg>
          {{txt_1}}
          <div class="sp-flex sp-items-center sp-justify-between sp-mt-2">
            <button
              @click="insert_image"
              class="sp-bg-neutral-15 hover:sp-bg-neutral-20 sp-text-neutral-80 sp-py-1 sp-px-2 sp-rounded sp-flex sp-items-center sp-justify-center sp-mt-1 sp-text-11px sp-font-semibold"
            >
              {{txt_6}}
              <br />{{txt_7}}
            </button>
            <span class="sp-px-4">{{txt_8}}</span>
            <button
              @click="showModal = true"
              class="sp-bg-neutral-15 hover:sp-bg-neutral-20 sp-text-neutral-80 sp-py-1 sp-px-2 sp-rounded sp-flex sp-items-center sp-justify-center sp-mt-1 sp-text-11px sp-font-semibold"
            >
              {{txt_11}}
              <br />{{txt_12}}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="value">
      <div
        class="seedprod-img-preview sp-border sp-border-neutral-20 sp-rounded-5px "
        @mouseover="show_hover = true"
        @mouseleave="show_hover = false"
      >
        <input v-model="block.settings[pre+'SrcSet']" type="hidden" />
        <div
          class="sp-border-2 sp-border-white sp-bg-neutral-10 sp-text-neutral-60 sp-font-semibold sp-flex sp-items-center sp-justify-center sp-flex-col sp-rounded-5px sp-relative sp-bg-white"
        >
          <img v-bind:src="preview_image" />
          <div
            v-show="show_hover"
            class="sp-absolute sp-top-0 sp-left-0 sp-hover-dim sp-w-full sp-h-full"
          >
            <div class="sp-flex sp-items-center sp-justify-center sp-h-full">
              <button
                @click.stop="insert_image"
                class="sp-mr-1 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-w-10 sp-h-10 sp-rounded-full sp-flex sp-items-center sp-justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-w-4 sp-h-4 sp-fill-current"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"
                  />
                </svg>
              </button>
              <button
                @click="remove_image"
                class="sp-ml-1 sp-bg-neutral hover:sp-bg-neutral-80 sp-text-white sp-w-10 sp-h-10 sp-rounded-full sp-flex  sp-items-center sp-justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-w-4 sp-h-4 sp-fill-current"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal v-if="showModal" @close="showModal = false" class="sp-w-masonary">
      <div slot="body" class="sp-flex">
        <div class="sp-relative sp-w-full sp-bg-neutral-5 sp-py-6 sp-px-10 sp-rounded-lg">
          <h3 class="sp-text-lg sp-font-bold sp-mb-8">{{txt_9}} <div v-if="shared.page_path == 'seedprod_lite'" class="sp-inline-block sp-bg-green sp-rounded sp-text-white sp-z-20 sp-py-1 sp-px-2 sp-text-12px sp-font-semibold  sp-ml-2">PRO</div></h3>

          <div class="sp-flex sp-justify-center sp-items-center sp-relative sp-mb-10 ">
            <span class="sp-text-neutral-40 sp-absolute sp-left-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-fill-current sp-w-6 sp-h-6"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                />
              </svg>
            </span>
            <input
              v-model="q"
              v-on:keyup.enter="select_stock_image()"
              :placeholder="txt_13"
              class="sp-form-input sp-w-full sp-pl-8"
            />
            <button
              @click="select_stock_image()"
              class="sp-w-32 sp-ml-2 sp-bg-primary hover:sp-bg-primary-lighter sp-text-white sp-font-semibold sp-py-3 sp-px-5 sp-rounded sp-leading-none sp-inline-block"
            >
              <span v-if="!doing_unsplash_ajax">{{txt_10}}</span>
              <span v-else>
                <i class="fas fa-spinner fa-spin"></i>
              </span>
            </button>
          </div>
          <div :class="{'sp-pro-only':shared.page_path == 'seedprod_lite'}">
          <div
            v-masonry
            transition-duration="0.3s"
            item-selector=".item"
            :key="componentKey"
            :gutter="10"
          >
            <div
              id="seedprod-unsplash"
              v-masonry-tile
              v-for="(i, index) in images"
              :key="index"
              class="item"
            >
              <img :src="i.urls.thumb" @click="set_unsplash_image(i.urls.regular)" />
            </div>
          </div>
          </div>
          <!-- pagination -->
          <div
            v-if="q != '' && images.length > 0"
            class="sp-flex sp-items-center sp-justify-center sp-text-xs sp-text-neutral-40"
          >
            <a
              href="#"
              @click.prevent="pagination('first')"
              class="sp-mx-2 sp-flex sp-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-fill-current sp-w-5 sp-h-5"
              >
                <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
                <path d="M24 24H0V0h24v24z" fill="none" />
              </svg>{{txt_2}}
            </a>
            <a href="#" @click.prevent="pagination('prev')" class="sp-mx-2 sp-flex sp-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-fill-current sp-w-5 sp-h-5"
              >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>{{txt_3}}
            </a>
            <span v-if="!doing_unsplash_ajax" class="sp-px-4">{{current_page}}</span>
            <span v-else class="sp-px-4">
              <i class="fas fa-spinner fa-spin"></i>
            </span>
            <a href="#" @click.prevent="pagination('next')" class="sp-mx-2 sp-flex sp-items-center">
              {{txt_4}}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-fill-current sp-w-5 sp-h-5"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </a>
            <a href="#" @click.prevent="pagination('last')" class="sp-mx-2 sp-flex sp-items-center">
              {{txt_5}}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-fill-current sp-w-5 sp-h-5"
              >
                <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" />
                <path d="M0 0h24v24H0V0z" fill="none" />
              </svg>
            </a>
          </div>

          <button
            class="sp-text-neutral-40 sp-absolute sp-top-0 sp-right-0 sp-mt-2 sp-mr-2"
            @click="showModal= false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-6 sp-h-6"
            >
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </div>
      </div>
      <h3 slot="header"></h3>
    </modal>
     <!-- Lite CTA -->
    <modal v-if="showUpsellModal" @close="showUpsellModal = false" class="sp-w-550px">
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
        <LiteCTABuilder feature_source="stock-images" feature="Stock Images"  />
           </div>
      <h3 slot="header"></h3>
    </modal>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import modal from '@/components/Modal.vue';
import LiteCTABuilder from '@/components/LiteCTABuilder.vue';

export default {
  name: 'ImageControl',
  data() {
    return {
      txt_1: __( 'Choose New Image', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'First Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Prev', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Next', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Last Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Use Your', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Own Image', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'or', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Stock Images Library', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Search', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Use a', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Stock Image', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Search images...', process.env.VUE_APP_TEXTDOMAIN ),
      doing_unsplash_ajax: false,
      was_removed: false,
      show_hover: false,
      containerId: 'seedprod-unsplash',
      componentKey: 0,
      showUpsellModal: false,
      q: '',
      imagedata: {},
      images: {},
      showModal: false,
      image: this.value,
      shared: seedprod_store,
      current_page: 1,
      last_page: 1,
      unsplash_api_url: seedprod_remote_api + 'background_search',
      srcsetsize:"",
    };
  },
  computed: {
    pre: function() {
      if ( this.prefix === undefined ) {
        return '';
      } else {
        return this.prefix;
      }
    },
    preview_image: function() {

      //console.log(this.value)
      let url = '';
      if ( false === lodash.isEmpty( this.value ) ) {
        url = this.value;
      }

      return url;
    },
  },
  mounted: function() {

    //this.$forceUpdate();
  },
  methods: {

    pagination( page ) {
      if ( 'first' == page ) {
        this.current_page = 1;
        this.select_stock_image();
      }
      if ( 'prev' == page ) {
        if ( 1 != this.current_page ) {
          this.current_page = parseInt( this.current_page ) - 1;
          this.select_stock_image();
        }
      }
      if ( 'next' == page ) {
        if ( this.current_page != this.last_page ) {
          this.current_page = parseInt( this.current_page ) + 1;
          this.select_stock_image();
        }
      }
      if ( 'last' == page ) {
        this.current_page = this.last_page;
        this.select_stock_image();
      }
    },
    set_unsplash_image( img ) {
      if ( 'seedprod_lite' == this.shared.page_path ) {
        this.showUpsellModal = true;
        this.showModal = false;
        return;
      }
      this.image = img;
      this.showModal = false;
      this.update_image();

      // download
      let self = this;
      this.axios
        .get(
          seedprod_backgrounds_download_url +
            '&image=' +
            encodeURIComponent( img )
        )
        .then( function( response ) {

          //console.log(response);
        })
        .catch( function( error ) {});

      // sideload
      this.axios
        .get(
          seedprod_backgrounds_sideload_url +
            '&image=' +
            encodeURIComponent( img )
        )
        .then( function( response ) {
          if ( false === self.was_removed ) {
            //console.log(response.data.file);
            self.image = response.data.file;
            self.block.settings[self.pre+'SrcSet'] =  response.data.imgsrcset;
            //let media_id = response.data;
            //console.log(wp.media.attachment(media_id));
            //console.log(wp.media.attachment(media_id).get('url'));

          }
          self.update_image();
          //console.log(response);
        })
        .catch( function( error ) {});

        
    },
    select_stock_image: function() {
      this.was_removed = false;
      this.showModal = true;
      this.doing_unsplash_ajax = true;
      let self = this;

      //http://api.seedprod.test/v4/background_search?query=cat&api_key=4b51fd72-69b7-4796-8d24-f3499c2ec44b&domain=http%3A%2F%2Fam.testing.seedprod.local
      this.axios
        .get(
          this.unsplash_api_url +
            '?page=' +
            self.current_page +
            '&query=' +
            encodeURIComponent( this.q ) +
            '&api_token=' +
            self.shared.api_token
        )
        .then( function( response ) {
          self.imagedata = response.data;
          self.doing_unsplash_ajax = false;
          self.last_page = self.imagedata.backgrounds.total_pages;
          self.current_page = self.imagedata.page;

          if ( self.imagedata.backgrounds.data ) {
            self.images = self.imagedata.backgrounds.data;
          } else {
            self.images = self.imagedata.backgrounds.results;

            //console.log(self.imagedata);
            //self.$redrawVueMasonry(self.containerId);
            //self.$nextTick(() => self.$redrawVueMasonry());
            self.componentKey++;
          }
        })
        .catch( function( error ) {
          self.doing_unsplash_ajax = false;
          console.log( error );
        });
    },

    update_image() {
      this.$emit( 'input', this.image );
    },
    insert_image: function() {
      this.was_removed = false;
      let _self = this;
      let image_frame;
      if ( image_frame ) {
        image_frame.open();
      }

      // Define image_frame as wp.media object
      image_frame = wp.media({
        title: 'Select Image',
        multiple: false,
        library: {
          type: 'image',
        },
      });

      image_frame.on( 'close', function() { 

        // On close, get selections and save to the hidden input
        // plus other AJAX stuff to refresh the image preview
        let selection = image_frame.state().get( 'selection' );
        selection.each( function( attachment ) {

          //var media_id = attachment.id; console.log(media_id);
          //console.log(attachment);
          //console.log(wp.media.attachment(media_id));
          //console.log(attachment.attributes.sizes);
          
          /*if(attachment.attributes.sizes.length>0){
              console.log("greater than 1");
          }
          */
         let sourcesetdata = "";
         let srcsetcount = 0;
         Object.values(attachment.attributes.sizes).forEach(val => {
              if(srcsetcount!=0){  sourcesetdata = sourcesetdata+","; } 
              sourcesetdata = sourcesetdata+" "+val.url +" "+val.width+"w";
              srcsetcount++;
         });
         
         /*
         if(sourcesetdata==""){
              sourcesetdata = attachment.attributes.url;
         }*/

         //console.log(sourcesetdata);
         //console.log("logg");
          
         //console.log(_self.pre+'SrcSet');

          _self.block.settings[_self.pre+'SrcSet'] =  sourcesetdata; //attachment.attributes.sizes ; 
          //_self.srcsetsize =  attachment.attributes.sizes ; 
          //console.log(attachment.attributes.url);
          
          _self.image = attachment.attributes.url;
        });
        _self.$forceUpdate();
        _self.update_image();
      });

      image_frame.open();
    },
    remove_image: function() {
      this.was_removed = true;
      this.block.settings[this.pre+'SrcSet'] = '';
      this.image = '';
      this.update_image();
    },
  },
  watch: {},
  components: {
    modal,
    LiteCTABuilder,
  },
  //props: [ 'value' , block ],
  props: {
    value: String,
    block: Object,
    prefix:String,
  },
};
</script>
