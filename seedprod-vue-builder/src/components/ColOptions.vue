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
          <path d="M0 0h24v24H0z" fill="none" /></svg
        >{{ txt_1 }}
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
          /></svg
        >{{ txt_2 }}
      </div>
    </div>
    <!-- Content -->
    <div v-if="view == 1">
      <h3
        class="sp-sidebar-headers"
        @click="section_1 = !section_1"
        :class="{
          seedprod_collaspe: !section_1,
        }"
      >
        {{ txt_13 }}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
              'sp-hidden': !section_1,
            }"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
              'sp-hidden': section_1,
            }"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>

      <div class="seedprod-sidebar-action-body" v-if="section_1">
        <BackgroundControl :block="block" />
      </div>
      <h3
        class="sp-sidebar-headers"
        @click="section_2 = !section_2"
        :class="{
          seedprod_collaspe: !section_2,
        }"
      >
        {{ txt_14 }}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
              'sp-hidden': !section_1,
            }"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
              'sp-hidden': section_1,
            }"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>

      <div class="seedprod-sidebar-action-body" v-if="section_2">

        <div class="sp-form-group sp-mb-5">
          <label>{{ txt_3 }}</label>
          <SliderControl
            v-model="block.settings.colWidth"
            :min="10"
            :max="100"
            :step="1"
          />
        </div>
        <div class="sp-form-group sp-flex sp-justify-between sp-items-center ">
          <label>{{ txt_16 }}</label>
          <!-- <div class="sp-flex sp-justify-center sp-items-center">
            <button
              @click="update_align_type('s')"
              class="
                sp-bg-neutral-10
                hover:sp-bg-neutral-15
                sp-neutral-80
                sp-py-2
                sp-px-3
                sp-rounded
                sp-flex
                sp-items-center
                sp-text-xs
                sp-font-semibold
                sp-leading-none
                sp-mr-1
                sp-rounded-full
              "
              :class="{ 'sp-active': block.settings.alignType == 's' }"
            >
              {{ txt_17 }}
            </button>
            <button
              @click="update_align_type('a')"
              class="
                sp-bg-neutral-10
                hover:sp-bg-neutral-15
                sp-neutral-80
                sp-py-2
                sp-px-3
                sp-rounded
                sp-flex
                sp-items-center
                sp-text-xs
                sp-font-semibold
                sp-leading-none
                sp-rounded-full
              "
              :class="{ 'sp-active': block.settings.alignType == 'a' }"
            >
              {{ txt_18 }}
            </button>
          </div> -->
        </div>
        <div
          v-if="block.settings.alignType == 's'"
          class="sp-flex sp-justify-between"
        >
          <div class="sp-form-group">
            <label>{{ txt_19 }}</label>
            <div class="sp-flex sp-align-center">
              <button
                class="
                  sp-w-32px
                  sp-h-32px
                  sp-bg-neutral-10
                  sp-rounded-full
                  sp-flex
                  sp-justify-center
                  sp-items-center
                  sp-mr-1
                  hover:sp-bg-neutral-15
                "
                @click="update_h_align('flex-start')"
                :class="{
                  'sp-active': block.settings.alignItems == 'flex-start',
                }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-w-4 sp-fill-current sp-transform sp-rotate-90"
                >
                  <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </button>
              <button
                class="
                  sp-w-32px
                  sp-h-32px
                  sp-bg-neutral-10
                  sp-rounded-full
                  sp-flex
                  sp-justify-center
                  sp-items-center
                  sp-mr-1
                  hover:sp-bg-neutral-15
                "
                @click="update_h_align('center')"
                :class="{ 'sp-active': block.settings.alignItems == 'center' }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-w-4 sp-fill-current sp-transform sp-rotate-90"
                >
                  <path
                    d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </button>
              <button
                class="
                  sp-w-32px
                  sp-h-32px
                  sp-bg-neutral-10
                  sp-rounded-full
                  sp-flex
                  sp-justify-center
                  sp-items-center
                  sp-mr-1
                  hover:sp-bg-neutral-15
                "
                @click="update_h_align('flex-end')"
                :class="{
                  'sp-active': block.settings.alignItems == 'flex-end',
                }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-w-4 sp-fill-current sp-transform sp--rotate-90"
                >
                  <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </button>
            </div>
          </div>

          <div class="sp-form-group">
            <label>{{ txt_20 }}</label>
            <div class="sp-flex sp-align-center">
              <button
                class="
                  sp-w-32px
                  sp-h-32px
                  sp-bg-neutral-10
                  sp-rounded-full
                  sp-flex
                  sp-justify-center
                  sp-items-center
                  sp-mr-1
                  hover:sp-bg-neutral-15
                "
                @click="update_v_align('flex-start')"
                :class="{
                  'sp-active': block.settings.justifyContent == 'flex-start',
                }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-w-4 sp-fill-current"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" />
                </svg>
              </button>
              <button
                class="
                  sp-w-32px
                  sp-h-32px
                  sp-bg-neutral-10
                  sp-rounded-full
                  sp-flex
                  sp-justify-center
                  sp-items-center
                  sp-mr-1
                  hover:sp-bg-neutral-15
                "
                @click="update_v_align('center')"
                :class="{
                  'sp-active': block.settings.justifyContent == 'center',
                }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-w-4 sp-fill-current"
                >
                  <path
                    d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </button>
              <button
                class="
                  sp-w-32px
                  sp-h-32px
                  sp-bg-neutral-10
                  sp-rounded-full
                  sp-flex
                  sp-justify-center
                  sp-items-center
                  sp-mr-1
                  hover:sp-bg-neutral-15
                "
                @click="update_v_align('flex-end')"
                :class="{
                  'sp-active': block.settings.justifyContent == 'flex-end',
                }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-w-4 sp-fill-current"
                >
                  <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </button>

              <button
                class="
                  sp-w-32px
                  sp-h-32px
                  sp-bg-neutral-10
                  sp-rounded-full
                  sp-flex
                  sp-justify-center
                  sp-items-center
                  sp-mr-1
                  hover:sp-bg-neutral-15
                "
                @click="update_v_align('space-between')"
                :class="{
                  'sp-active': block.settings.justifyContent == 'space-between',
                }"
              >


<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"  viewBox="0 0 24 24" class="sp-w-4 sp-fill-current"><rect fill="none" height="24" width="24"/><path d="M22,2v2H2V2H22z M7,10.5v3h10v-3H7z M2,20v2h20v-2H2z"/></svg>
              </button>
            </div>
          </div>
        </div>
        <div v-if="block.settings.alignType == 'a'">


          <div class="sp-form-group">
            <label>{{ txt_22 }}</label>
            <select v-model="block.settings.flexDirection" class="sp-form-select" @change="update_flex">
              <option value="column">{{ txt_25 }}</option>
              <option value="row">{{ txt_26 }}</option>
            </select>
          </div>

          <div class="sp-form-group">
            <label>{{ txt_23 }}</label>
            <select v-model="block.settings.justifyContent" class="sp-form-select"  @change="update_flex">
              <option value="">{{ txt_35 }}</option>
              <option value="flex-start">{{ txt_27 }}</option>
              <option value="center">{{ txt_28 }}</option>
              <option value="flex-end">{{ txt_29 }}</option>
              <option value="space-between">{{ txt_30 }}</option>
              <option value="space-around">{{ txt_31 }}</option>
              <option value="space-evenly">{{ txt_32 }}</option>
            </select>
          </div>

          <div class="sp-form-group">
            <label>{{ txt_24 }}</label>
            <select v-model="block.settings.alignItems" class="sp-form-select"  @change="update_flex">
              <option value="">{{ txt_35 }}</option>
              <option value="flex-start">{{ txt_27 }}</option>
              <option value="center">{{ txt_28 }}</option>
              <option value="flex-end">{{ txt_29 }}</option>
              <option value="baseline">{{ txt_33 }}</option>
              <option value="stretch">{{ txt_34 }}</option>
            </select>
          </div>

        </div>

      </div>
    </div>

    <!-- Advanced -->
    <div v-if="view == 3">
      <!-- Advanced Styles-->
      <h3
        class="sp-sidebar-headers"
        @click="section_4 = !section_4"
        :class="{
          seedprod_collaspe: !section_4,
        }"
      >
        {{ txt_15 }}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
              'sp-hidden': !section_4,
            }"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
              'sp-hidden': section_4,
            }"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>
      <div class="seedprod-sidebar-action-body" v-if="section_4">
        <div class="sp-form-group">
          <ColorPicker
            :label="txt_12"
            :color="block.settings.bgColor"
            v-model="block.settings.bgColor"
          />
        </div>

        <div class="sp-form-group">
          <label>{{ txt_4 }}</label>
          <select v-model="block.settings.shadow" class="sp-form-select">
            <option value>{{ txt_5 }}</option>
            <option value="1">{{ txt_6 }}</option>
            <option value="2">{{ txt_7 }}</option>
            <option value="3">{{ txt_8 }}</option>
            <option value="4">{{ txt_9 }}</option>
            <option value="5">{{ txt_10 }}</option>
            <option value="6">{{ txt_11 }}</option>
          </select>
        </div>
      </div>

      <SpacingSectionControl :block="block" />
      <BorderSectionControl :block="block" />
    </div>
  </div>
</template>

<script>
import ColorPicker from "@/components/ColorPicker.vue";
import { helpers } from "../mixins/helpers.js";
import SliderControl from "@/components/SliderControl.vue";
import ImageControl from "@/components/ImageControl.vue";
import PaddingControl from "@/components/PaddingControl.vue";
import BorderWidthControl from "@/components/BorderWidthControl.vue";
import BorderRadiusControl from "@/components/BorderRadiusControl.vue";
import BackgroundControl from "@/components/BackgroundControl.vue";
import BorderSectionControl from "@/components/BorderSectionControl.vue";
import SpacingSectionControl from "@/components/SpacingSectionControl.vue";
import { __ } from "@wordpress/i18n";

export default {
  name: "ColOptions",
  mixins: [helpers],
  inject: {
    $validator: "$validator",
  },
  data() {
    return {
      current_index: false,
      txt_1: __("Content", process.env.VUE_APP_TEXTDOMAIN),
      txt_2: __("Advanced", process.env.VUE_APP_TEXTDOMAIN),
      txt_3: __("Column Width", process.env.VUE_APP_TEXTDOMAIN),
      txt_4: __("Text Shadow", process.env.VUE_APP_TEXTDOMAIN),
      txt_5: __("None", process.env.VUE_APP_TEXTDOMAIN),
      txt_6: __("Hairline", process.env.VUE_APP_TEXTDOMAIN),
      txt_7: __("Small", process.env.VUE_APP_TEXTDOMAIN),
      txt_8: __("Medium", process.env.VUE_APP_TEXTDOMAIN),
      txt_9: __("Large", process.env.VUE_APP_TEXTDOMAIN),
      txt_10: __("X Large", process.env.VUE_APP_TEXTDOMAIN),
      txt_11: __("2X Large", process.env.VUE_APP_TEXTDOMAIN),
      txt_12: __("Background Color", process.env.VUE_APP_TEXTDOMAIN),
      txt_13: __("Background", process.env.VUE_APP_TEXTDOMAIN),
      txt_14: __("Layout", process.env.VUE_APP_TEXTDOMAIN),
      txt_15: __("Advanced Styles", process.env.VUE_APP_TEXTDOMAIN),
      txt_16: __("Content Alignment", process.env.VUE_APP_TEXTDOMAIN),
      txt_17: __("Simple", process.env.VUE_APP_TEXTDOMAIN),
      txt_18: __("Advanced", process.env.VUE_APP_TEXTDOMAIN),
      txt_19: __("Horizontal", process.env.VUE_APP_TEXTDOMAIN),
      txt_20: __("Vertical", process.env.VUE_APP_TEXTDOMAIN),
      txt_21: __("Display", process.env.VUE_APP_TEXTDOMAIN),
      txt_22: __("Flex Direction", process.env.VUE_APP_TEXTDOMAIN),
      txt_23: __("Justify Content", process.env.VUE_APP_TEXTDOMAIN),
      txt_24: __("Align Items", process.env.VUE_APP_TEXTDOMAIN),
      txt_25: __("Column", process.env.VUE_APP_TEXTDOMAIN),
      txt_26: __("Row", process.env.VUE_APP_TEXTDOMAIN),
      txt_27: __("Flex Start", process.env.VUE_APP_TEXTDOMAIN),
      txt_28: __("Center", process.env.VUE_APP_TEXTDOMAIN),
      txt_29: __("Flex End", process.env.VUE_APP_TEXTDOMAIN),
      txt_30: __("Space Between", process.env.VUE_APP_TEXTDOMAIN),
      txt_31: __("Space Around", process.env.VUE_APP_TEXTDOMAIN),
      txt_32: __("Space Evenly", process.env.VUE_APP_TEXTDOMAIN),
      txt_33: __("Baseline", process.env.VUE_APP_TEXTDOMAIN),
      txt_34: __("Stretch", process.env.VUE_APP_TEXTDOMAIN),
      txt_35: __("Default", process.env.VUE_APP_TEXTDOMAIN),
      view: 1,
      section_1: true,
      section_2: true,
      section_3: false,
      section_4: true,
      section_5: false,
      shared: seedprod_store,
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn(this.shared.block_templates.col, function (value, key) {
      self.set_default_val(self.block.settings, key, value);
    });
  },
  created() {},
  methods: {
    update_align_type(t) {
      this.block.settings.alignType = t;
    },
    update_flex(){
      if (
        this.block.settings.alignItems == "" &&
        this.block.settings.justifyContent == ""
      ) {
        this.block.settings.display = "";
      } else{
        this.block.settings.display = "flex";
      }
    },
    update_h_align(a) {
      if (this.block.settings.alignItems == a) {
        this.block.settings.alignItems = "";
      } else {
        this.block.settings.display = "flex";
        this.block.settings.flexDirection = "column";
        this.block.settings.alignItems = a;
      }

      if (
        this.block.settings.alignItems == "" &&
        this.block.settings.justifyContent == ""
      ) {
        this.block.settings.display = "";
      }
    },
    update_v_align(a) {
      if (this.block.settings.justifyContent == a) {
        this.block.settings.justifyContent = "";
      } else {
        this.block.settings.display = "flex";
        this.block.settings.flexDirection = "column";
        this.block.settings.justifyContent = a;
      }

      if (
        this.block.settings.alignItems == "" &&
        this.block.settings.justifyContent == ""
      ) {
        this.block.settings.display = "";
      }
    },
  },
  components: {
    ColorPicker,
    SliderControl,
    PaddingControl,
    BorderWidthControl,
    BorderRadiusControl,
    ImageControl,
    BackgroundControl,
    BorderSectionControl,
    SpacingSectionControl,
  },
  props: {
    block: Object,
  },
};
</script>
