<template>
  <div>
    <v-popover offset="10">
      <div
        class="sp-flex sp-items-center sp-justify-between sp-relative sp-cursor-pointer"
        ref="colorpicker"
        @click="togglePicker()"
      >
        <span class="sp-text-sm">{{label}}</span>
        <div
          :class="{'sp-active':displayPicker}"
          class="sp-bg-neutral-10 hover:sp-bg-neutral-60 sp-text-neutral-60 hover:sp-text-white sp-flex sp-p-2px sp-rounded-full"
        >
          <span
            class="color-picker-container sp-bg-white sp-flex sp-items-center sp-border-white sp-border-2 sp-rounded-full"
          >
            <span class="sp-bg-cv-transparent sp-h-6 sp-w-16">
              <span
                class="current-color sp-h-6 sp-w-16 sp-rounded-full sp-cursor-pointer"
                :style="'background-color: ' + colorValue"
              ></span>
            </span>
          </span>
          <div class="sp-flex sp-align-center sp-pl-2 sp-pr-2">
            <span
              class="sp-flex sp-items-center sp-justify-center sp-cursor-pointer"
              v-if="!displayPicker"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-fill-current sp-w-4"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"
                />
                <circle cx="6.5" cy="11.5" r="1.5" />
                <circle cx="9.5" cy="7.5" r="1.5" />
                <circle cx="14.5" cy="7.5" r="1.5" />
                <circle cx="17.5" cy="11.5" r="1.5" />
              </svg>
            </span>

            <span
              class="sp-flex sp-items-center sp-justify-center sp-cursor-pointer"
              v-if="displayPicker"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-fill-current sp-w-4"
              >
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                <path d="M0 0h24v24H0V0z" fill="none" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <template slot="popover">
        <div ref="cpfloat" class="color-picker-float-overflow">
          <div class="sp-flex">
            <div class="sp-flex-grow sp-flex sp-flex-col">
              <div class="sp-bg-neutral-5 sp-rounded-6px sp-px-2 sp-py-2 sp-mb-2 sp-mr-2">
                <div class="sp-uppercase sp-text-10px sp-mb-2">{{txt_1}}:</div>
                <div class="sp-grid sp-grid-cols-5 sp-gap-1">
                  <button
                    :style="{background: shared.settings.document.settings.headerColor}"
                    class="sp-rounded-full sp-w-6 sp-h-6 sp-bg-secondary sp-border sp-border-white"
                    @click="setColor(shared.settings.document.settings.headerColor)"
                  ></button>
                  <button
                    :style="{background: shared.settings.document.settings.textColor}"
                    class="sp-rounded-full sp-w-6 sp-h-6 sp-bg-secondary sp-border sp-border-white"
                    @click="setColor(shared.settings.document.settings.textColor)"
                  ></button>
                  <button
                    :style="{background: shared.settings.document.settings.buttonColor}"
                    class="sp-rounded-full sp-w-6 sp-h-6 sp-bg-secondary sp-border sp-border-white"
                    @click="setColor(shared.settings.document.settings.buttonColor)"
                  ></button>
                  <button
                    :style="{background: shared.settings.document.settings.linkColor}"
                    class="sp-rounded-full sp-w-6 sp-h-6 sp-bg-secondary sp-border sp-border-white"
                    @click="setColor(shared.settings.document.settings.linkColor)"
                  ></button>
                  <button
                    :style="{background: shared.settings.document.settings.bgColor}"
                    class="sp-rounded-full sp-w-6 sp-h-6 sp-bg-secondary sp-border sp-border-white"
                    @click="setColor(shared.settings.document.settings.bgColor)"
                  ></button>
                </div>
              </div>

              <div class="sp-bg-neutral-5 sp-rounded-6px sp-px-2 sp-py-2 sp-mb-2 sp-mr-2">
                <div class="sp-uppercase sp-text-10px sp-mb-2">{{txt_2}}:</div>
                <div class="sp-grid sp-grid-cols-5 sp-gap-1">
                  <button
                    :style="{background: '#e53935'}"
                    class="sp-rounded-full sp-w-6 sp-h-6 sp-bg-secondary sp-border sp-border-white"
                    @click="setColor('#e53935')"
                  ></button>
                  <button
                    :style="{background: '#fb8c00'}"
                    class="sp-rounded-full sp-w-6 sp-h-6 sp-bg-secondary sp-border sp-border-white"
                    @click="setColor('#fb8c00')"
                  ></button>
                  <button
                    :style="{background: '#fdd835'}"
                    class="sp-rounded-full sp-w-6 sp-h-6 sp-bg-secondary sp-border sp-border-white"
                    @click="setColor('#fdd835')"
                  ></button>
                  <button
                    :style="{background: '#43a047'}"
                    class="sp-rounded-full sp-w-6 sp-h-6 sp-bg-secondary sp-border sp-border-white"
                    @click="setColor('#43a047')"
                  ></button>
                  <button
                    :style="{background: '#7cb342'}"
                    class="sp-rounded-full sp-w-6 sp-h-6 sp-bg-secondary sp-border sp-border-white"
                    @click="setColor('#7cb342')"
                  ></button>
                  <button
                    :style="{background: '#1e88e5'}"
                    class="sp-rounded-full sp-w-6 sp-h-6 sp-bg-secondary sp-border sp-border-white"
                    @click="setColor('#1e88e5')"
                  ></button>
                  <button
                    :style="{background: '#ffffff'}"
                    class="sp-rounded-full sp-w-6 sp-h-6 sp-bg-secondary sp-border sp-border-white"
                    @click="setColor('#ffffff')"
                  ></button>
                  <button
                    :style="{background: '#cccccc'}"
                    class="sp-rounded-full sp-w-6 sp-h-6 sp-bg-secondary sp-border sp-border-white"
                    @click="setColor('#cccccc')"
                  ></button>
                  <button
                    :style="{background: '#9e9e9e'}"
                    class="sp-rounded-full sp-w-6 sp-h-6 sp-bg-secondary sp-border sp-border-white"
                    @click="setColor('#9e9e9e')"
                  ></button>
                  <button
                    :style="{background: '#000000'}"
                    class="sp-rounded-full sp-w-6 sp-h-6 sp-bg-secondary sp-border sp-border-white"
                    @click="setColor('#000000')"
                  ></button>
                </div>
              </div>

              <div class="sp-bg-neutral-5 sp-rounded-6px sp-px-2 sp-py-2 sp-mr-2 sp-flex-grow">
                <div class="sp-uppercase sp-text-10px sp-mb-2">{{txt_3}}:</div>
                <div class="sp-grid sp-grid-cols-5 sp-gap-1">
                  <button
                    v-for="(c,i) in shared.recent_colors"
                    :key="i"
                    :style="{background: c}"
                    class="sp-rounded-full sp-w-6 sp-h-6 sp-bg-secondary sp-inline-block sp-border sp-border-white"
                    @click="setColor(c)"
                  ></button>
                </div>
              </div>
            </div>
            <div class>
              <chrome-picker :value="colors" @input="updateFromPicker" />
              <div class="sp-flex sp-justify-end">
                <button
                  @click="clear_color"
                  class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-text-neutral-80 sp-py-2 sp-px-3 sp-rounded sp-flex sp-items-center sp-mt-6 sp-text-xs sp-font-semibold sp-leading-none sp-mr-2"
                >{{txt_4}}</button>
                <button
                  @click="close"
                  v-close-popover="true"
                  class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-text-neutral-80 sp-py-2 sp-px-3 sp-rounded sp-flex sp-items-center sp-mt-6 sp-text-xs sp-font-semibold sp-leading-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="sp-fill-current sp-w-4 sp-mr-1"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                    />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>{{txt_5}}
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </v-popover>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { Chrome } from 'vue-color';

export default {
  name: 'ColorPicker',
  data() {
    return {
      txt_1: __( 'Global Colors', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Common Colors', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Recently Used', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Clear', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Close', process.env.VUE_APP_TEXTDOMAIN ),
      colors: {
        hex: '#000000',
      },
      colorValue: '',
      displayPicker: false,
      shared: seedprod_store,
    };
  },
  mounted: function() {
    this.setColor( this.color || '' );
  },
  beforeDestroy: function() {
    this.update_recent_color();
  },
  methods: {
    clear_color() {
      this.colorValue = '';
      this.$emit( 'input', '' );

    },

    // update_recent_color: _.debounce(function() {
    //   if(this.shared.recent_colors.length > 11){
    //     this.shared.recent_colors.pop();
    //   }
    //   this.shared.recent_colors.unshift(this.colorValue);
    //   //console.log('fired');
    // }, 500),
    update_recent_color: function() {
      if ( false == this.shared.recent_colors.includes( this.colorValue ) ) {
        if ( 10 < this.shared.recent_colors.length ) {
          this.shared.recent_colors.pop();
        }

        this.shared.recent_colors.unshift( this.colorValue );
      }

      //console.log('fired');
    },
    setColor( color ) {

      //console.log(color);
      this.updateColors( color );
      this.colorValue = color;
      this.$emit( 'input', color );

      //this.update_recent_color();
    },
    updateColors( color ) {
      if ( '#' == color.slice( 0, 1 ) ) {
        this.colors = {
          hex: color,
        };
      } else if ( 'rgba' == color.slice( 0, 4 ) ) {
        let rgba = color.replace( /^rgba?\(|\s+|\)$/g, '' ).split( ',' ),
          hex =
            '#' +
            (
              ( 1 << 24 ) +
              ( parseInt( rgba[0]) << 16 ) +
              ( parseInt( rgba[1]) << 8 ) +
              parseInt( rgba[2])
            )
              .toString( 16 )
              .slice( 1 );
        this.colors = {
          hex: hex,
          a: rgba[3],
        };
      }
    },
    showPicker() {

      //document.addEventListener("click", this.documentClick);
      this.displayPicker = true;
    },
    close() {

      //console.log("close");
      document.removeEventListener( 'click', this.documentClick );
      this.displayPicker = false;
    },
    hidePicker() {

      //document.removeEventListener("click", this.documentClick);
      this.displayPicker = false;
    },
    togglePicker() {
      this.displayPicker ? this.hidePicker() : this.showPicker();
    },
    updateFromInput() {
      this.updateColors( this.colorValue );
      this.$emit( 'input', this.colorValue );
    },
    updateFromPicker( color ) {
      this.colors = color;
      if ( 1 == color.rgba.a ) {
        this.colorValue = color.hex;
      } else {
        this.colorValue =
          'rgba(' +
          color.rgba.r +
          ', ' +
          color.rgba.g +
          ', ' +
          color.rgba.b +
          ', ' +
          color.rgba.a +
          ')';
      }
      this.$emit( 'input', this.colorValue );
    },
    documentClick( e ) {

      //console.log("dd");
      let el = this.$refs.colorpicker;
      let target = '';
      if ( ! lodash.isEmpty( e.target ) ) {
        target = e.target;
      }

      if (
        el !== target &&
        ! el.contains( target ) &&
        false === target.classList.toString().includes( 'vc-' ) &&
        'vc-chrome-toggle-icon' !== target.parentElement.classList.toString()
      ) {
        this.hidePicker();
      }
    },
  },
  watch: {
    displayPicker( n, o ) {
      if ( false == n && true == o ) {
        this.update_recent_color();
      }
    },
    colorValue( val ) {

      //if (val) {
      this.updateColors( val );

      //this.$emit("input", val);
      //this.$emit("change", val);
      //document.body.style.background = val;
      //}
    },
    color: function( newVal, oldVal ) {

      // watch it
      this.setColor( newVal );
    },
  },
  props: [ 'color', 'label' ],
  components: {
    'chrome-picker': Chrome,
  },
};
</script>
