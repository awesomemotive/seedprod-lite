<template>
  <div>
    <div
      v-if="$router.currentRoute.name == 'template'"
      ref="spbuilder"
      id="seedprod-customizer"
      class="sp--ml-5 sp-antialiased sp-font-sans"
      :key="componentKey"
    >
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <div id="seedprod-ajax-status" v-if="shared.doing_ajax">
        <i class="fas fa-spinner fa-spin"></i>
      </div>
      <!-- <Keypress key-event="keyup" :key-code="74" :modifiers="['ctrlKey']" @success="kb_shortcuts" /> -->
    </div>

    <div
      v-else
      ref="spbuilder"
      id="seedprod-customizer"
      class="seedprod sp-fixed sp-bg-neutral-5 sp-top-0 sp-left-0 sp-bottom-0 sp-right-0 sp-h-full sp-z-10 sp-antialiased sp-font-sans"
      :class="{
			'sp-overflow-y-scroll':
				$router.currentRoute.name == 'publish' ||
				$router.currentRoute.name == 'template'
		}"
      :key="componentKey"
    >
      <router-view v-on:undo="undoMe" v-on:redo="redoMe"></router-view>

      <div id="seedprod-ajax-status" v-if="shared.doing_ajax">
        <i class="fas fa-spinner fa-spin"></i>
      </div>
      <!-- <Keypress key-event="keyup" :key-code="74" :modifiers="['ctrlKey']" @success="kb_shortcuts" /> -->
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import qs from 'qs';
import NProgress from 'nprogress';
import tinycolor from 'tinycolor2';
import { helpers } from './mixins/helpers.js';
import { __ } from '@wordpress/i18n';

export default {
  mixins: [ helpers ],
  data() {
    return {
      shared: seedprod_store,
      componentKey: 0,
      renderComponent: true,
      historyIndex: 0,
      undoing: false,
      redoing: false,
    };
  },
  components: {

    // Keypress: () => import("vue-keypress")
  },
  created() {},
  mounted: function() {
    this.history_init();

    // this.shared.code_container = this.$el.querySelector(
    //   "#seedprod-builder-view"
    // );

    // update button color
    // var el2 = document.getElementById("seedprod-font-button-css");

    // if (el2) {
    //   el2.parentNode.removeChild(el2);
    // }

    // var lightness = tinycolor(this.shared.settings.button_color);
    // var textcolor = "#fff";
    // if (lightness.getLuminance() >= 0.65) {
    //   textcolor = "#000";
    // }
    // //console.log(textcolor);
    // var el_parent2 = document.head;
    // var html =
    //    +
    //   this.shared.settings.button_color +
    //   " !important; border-color:" +
    //   this.shared.settings.button_color +
    //   " !important; color:" +
    //   textcolor +
    //   " !important}";

    // var el_new2 = document.createElement("style");
    // el_new2.setAttribute("id", "seedprod-font-button-css");
    // el_new2.innerHTML = html;

    //el_parent2.appendChild(el_new2);

    // head css
    this.update_head_css();

    //   let self = this;
    //  window.addEventListener("keypress", function(e) {
    //   var key = String.fromCharCode(e.keyCode);
    //   console.log(String.fromCharCode(e.keyCode));
    //   console.log(key == 'j');
    //   if(key == 'j'){
    //     self.$router.push({ name: 'setup_block_options' });
    //   }
    // });
  },
  watch: {
    $route( to, from ) {
      if (
        ( 'template' == from.name && 'setup_details' == to.name ) ||
        ( 'template' == from.name && 'publish' == to.name )
      ) {
        this.save_lpage( true );
      }
    },

    // 'shared.settings.document': _.debounce(function(newVal){
    // console.log('changed');
    // }, 100),

    'shared.settings.document': {
      handler( val ) {
        this.update_storage();
      },

      deep: true,
    },
  },
  methods: {
    kb_shortcuts( response ) {

      //console.log(response);
      if ( response.expectedEvent.keyCode ) {
        this.$router.push({ name: 'setup_block_options' });
      }
    },
    history_init: function() {

      // Clear History
      localStorage.removeItem( 'sp_history' );

      // Push settings to History
      let settings = this.shared.settings.document;
      let history = [];
      history.push( settings );
      localStorage.setItem( 'sp_history', JSON.stringify( history ) );

      this.historyIndex = 0;
    },
    update_storage: _.debounce( function() {
      let settings = this.shared.settings.document;

      if ( null === localStorage.getItem( 'sp_history' ) ) {
        var history = [];
        history.push( settings );
        localStorage.setItem( 'sp_history', JSON.stringify( history ) );
        this.historyIndex = 0;
        return;
      } else {
        var history = JSON.parse( localStorage.getItem( 'sp_history' ) );
      }

      if ( ! this.undoing && ! this.redoing ) {
        if ( 20 < history.length ) {
          history.shift();
          this.historyIndex = 0 < this.historyIndex ? this.historyIndex - 1 : 0;
        }
        let newHistory = history.slice( 0, this.historyIndex + 1 );
        newHistory.push( settings );
        localStorage.setItem( 'sp_history', JSON.stringify( newHistory ) );
        this.historyIndex++;

        // console.log( this.historyIndex );
        return;
      }
      this.undoing = false;
      this.redoing = false;
    }, 500 ),
    undoMe: function() {
      let history = JSON.parse( localStorage.getItem( 'sp_history' ) );
      if ( null === history ) {
        return;
      }
      this.undoing = true;
      this.historyIndex = 0 < this.historyIndex ? this.historyIndex - 1 : 0;

      // console.log( this.historyIndex );
      this.shared.settings.document = history[this.historyIndex];
      this.forceRerender();
    },
    redoMe: function() {
      let history = JSON.parse( localStorage.getItem( 'sp_history' ) );
      if ( null === history ) {
        return;
      }
      this.redoing = true;
      this.historyIndex = this.historyIndex < history.length - 1 ? this.historyIndex + 1 : history.length - 1;

      // console.log( this.historyIndex );
      this.shared.settings.document = history[this.historyIndex];
      this.forceRerender();
    },
    forceRerender() {

      // Remove my-component from the DOM
      this.renderComponent = false;

      // If you like promises better you can
      // also use nextTick this way
      this.$nextTick().then( () => {

        // Add the component back in
        this.renderComponent = true;
      });
    },
  },
};

window.onbeforeunload = function() {
  if ( ! seedprod_page.includes( '_template' ) ) {
    if (
      JSON.stringify( seedprod_store.settings ) !== seedprod_store.settings_org
    ) {
      return __(
        'Changes not saved, are you sure you want to leave?',
        process.env.VUE_APP_TEXTDOMAIN
      );
    }
  }
};
</script>
