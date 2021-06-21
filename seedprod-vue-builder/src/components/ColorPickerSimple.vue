<template>
  <div class="sp-relative">
    <div
      class="simple-color-picker sp-flex sp-items-center sp-relative"
      ref="colorpicker"
      @mouseover="show_edit = true"
      @mouseleave="show_edit = false"
    >
      <span
        class="simple-color-picker-container sp-rounded-full sp-bg-white sp-flex sp-items-center sp-mr-4"
      >
        <span class="sp-bg-cv-transparent">
          <span
            class="current-color sp-h-5 sp-w-5 sp-cursor-pointer"
            :style="'background-color: ' + colorValue"
            @click="togglePicker()"
          ></span>
        </span>
      </span>

      <span class="sp-cp-label" @click="togglePicker()">{{label}}</span>
      <div class="sp-flex-grow sp-flex sp-justify-end sp-pr-2">
        <span
          class="sp-w-6 sp-h-6 sp-bg-neutral-10 sp-rounded-full sp-flex sp-items-center sp-justify-center sp-text-neutral-60 sp-cursor-pointer"
          v-if="show_edit && !displayPicker"
          @click="togglePicker()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-3"
          >
            <path
              d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </span>

        <span
          class="sp-w-6 sp-h-6 sp-bg-neutral-60 sp-rounded-full sp-flex sp-items-center sp-justify-center sp-text-white sp-cursor-pointer"
          v-if="displayPicker"
          @click="togglePicker()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-3"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </div>
    </div>
    <div class="color-picker-float" v-if="displayPicker">
      <chrome-picker :value="colors" @input="updateFromPicker" />
    </div>

  </div>
</template>

<script>
import { Chrome } from 'vue-color';

export default {
  name: 'ColorPickerSimple',
  data() {
    return {
      show_edit: false,
      colors: {
        hex: '#000000',
      },
      colorValue: '',
      displayPicker: false,
    };
  },
  mounted: function() {
    this.setColor( this.color || '' );
  },
  methods: {
    setColor( color ) {
      this.updateColors( color );
      this.colorValue = color;
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
      document.addEventListener( 'click', this.documentClick );
      this.displayPicker = true;
    },
    hidePicker() {
      document.removeEventListener( 'click', this.documentClick );
      this.displayPicker = false;
    },
    togglePicker() {
      this.displayPicker ? this.hidePicker() : this.showPicker();
    },
    updateFromInput() {
      this.updateColors( this.colorValue );
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
    },
    documentClick( e ) {
      let el = this.$refs.colorpicker,
        target = e.target;

      //console.log( target.parentElement.classList.toString());
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
    colorValue( val ) {

      //if (val) {
      this.updateColors( val );
      this.$emit( 'input', val );
      this.$emit( 'change', val );

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
