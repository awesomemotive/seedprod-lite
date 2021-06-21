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
        :class="{ 'sp-secondary': view != 2 }"
        @click="view = 2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-w-4 sp-fill-current sp-mr-2"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3zm-2 2H6V4h10v2z"
          />
        </svg>{{txt_2}}
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
        </svg>{{txt_3}}
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
        {{txt_4}}
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
          <label>{{txt_5}}</label>
          <select
            v-model="block.settings.countdownType"
            class="sp-form-select"
            @change="updateLabelSize"
          >
            <option value="vt">{{txt_6}}</option>
            <option value>{{txt_7}}</option>
          </select>
        </div>
        <div v-if="block.settings.countdownType == 'vt'">
          <div class="sp-form-group">
            <label>{{txt_8}}</label>
            <div class="sp-flex sp-items-center">
              <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
                <input
                  min="0"
                  max="24"
                  type="number"
                  v-model="block.settings.vtHours"
                  class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-tr-none sp-rounded-br-none"
                />
                Hours
              </span>
              <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
                <input
                  min="0"
                  max="59"
                  type="number"
                  v-model="block.settings.vtMinutes"
                  class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
                />
                Minutes
              </span>
              <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
                <input
                  min="0"
                  max="59"
                  type="number"
                  v-model="block.settings.vtSeconds"
                  class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-rounded-tl-none sp-rounded-bl-none"
                />
                Seconds
              </span>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="sp-form-group">
            <label>{{txt_9}}</label>
            <div class="sp-w-full">
              <date-picker
                type="date"
                v-model="block.settings.endDate"
                lang="en"
                format="YYYY-MM-DD"
                value-type="format"
                :not-before="shared.setup_page_meta.now"
              ></date-picker>
            </div>
          </div>
          <div class="sp-form-group">
            <label>{{txt_10}}</label>
            <span class="sp-relative">
              <select v-model="block.settings.endTime" class="sp-form-select">
                <option
                  v-for="(option, index) in shared
											.setup_page_meta.times"
                  :value="option.v"
                  :key="index"
                >{{ option.l }}</option>
              </select>
            </span>
          </div>

          <div
            class="sp-form-group"
            :class="{
						input: true,
						'has-error': errors.has('timezone')
					}"
          >
            <label for="timezone">{{txt_11}}</label>
            <select
              name="timezone"
              v-model="block.settings.timezone"
              class="sp-form-select sp-w-full"
            >
              <optgroup
                v-for="(group, name) in shared.setup_page_meta
								.timezones"
                :label="name"
                :key="name"
              >
                <option
                  v-for="(option, index) in group"
                  :value="option.v"
                  :key="index"
                >{{ option.l }}</option>
              </optgroup>
            </select>
          </div>
        </div>

        <div class="sp-form-group">
          <label>{{txt_12}}</label>
          <AlignControl v-model="block.settings.align" icons="alt" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_13}}</label>
          <select v-model="block.settings.size" class="sp-form-select" @change="updateLabelSize">
            <!-- <option value="1">{{txt_14}}</option> -->
            <option value="sm">{{txt_15}}</option>
            <option value="md">{{txt_16}}</option>
            <option value="lg">{{txt_17}}</option>
          </select>
        </div>

        <div class="sp-form-group">
          <label>{{txt_18}}</label>
          <select v-model="block.settings.action" class="sp-form-select">
            <option value="1">{{txt_19}}</option>
            <option value="2">{{txt_20}}</option>
          </select>
        </div>
        <div class="sp-form-group" v-if="block.settings.action == '1'">
          <div>
            <label>{{txt_21}}</label>
          </div>

          <editor
            v-model="block.settings.thankyouTxt"
            :init="{
         height: 200,
         branding: false,
         menubar: false,
         plugins: [
           'link'
         ],
         toolbar:
           'bold,italic,underline,strikethrough,link,alignleft,aligncenter,alignright'
       }"
          ></editor>
        </div>

        <div class="sp-form-group" v-if="block.settings.action == '2'">
          <div>
            <label>{{txt_22}}</label>
          </div>
          <input type="text" v-model="block.settings.redirectUrl" class="sp-form-input" />
        </div>

        <div class="sp-flex sp-items-center sp-justify-between sp-mt-4 sp-mb-3">
          <label class="sp-text-sm">{{txt_23}}</label>
          <toggle-button :width="45" v-model="customize_labels" />
        </div>
        <div v-if="customize_labels">
          <div class="sp-form-group">
            <div>
              <label>{{txt_24}}</label>
            </div>
            <input type="text" v-model="block.settings.dayTxt" class="sp-form-input" />
          </div>
          <div class="sp-form-group">
            <div>
              <label>{{txt_25}}</label>
            </div>
            <input type="text" v-model="block.settings.hourTxt" class="sp-form-input" />
          </div>
          <div class="sp-form-group">
            <div>
              <label>{{txt_26}}</label>
            </div>
            <input type="text" v-model="block.settings.minuteTxt" class="sp-form-input" />
          </div>
          <div class="sp-form-group">
            <div>
              <label>{{txt_27}}</label>
            </div>
            <input type="text" v-model="block.settings.secondTxt" class="sp-form-input" />
          </div>
        </div>
      </div>
    </div>

    <!-- Templates -->
    <div v-if="view == 2" class="sp-flex sp-items-center sp-flex-col sp-pb-8 sp-optin-templates">
      <div
        class="sp-uppercase sp-text-12px sp-font-semibold sp-text-neutral-60 sp-mt-2"

      >{{txt_28}}</div>
      <div class="sp-template-preview" :class="{'sp-template-preview-dark':luminance == 'light'}" @click="apply_template(1)">

        <div class="sp-countdown-group">
          <div id="sp-cd-hours" class="sp-cd-group " style="margin: 0px 10.5px;">
            <div
              class="sp-cd-amount" :style="amountStyle"
              style="font-size: 20px;
    padding: 10px;color: rgb(255, 255, 255); background-color: rgb(66, 153, 225); border-radius: 6px;"
            >01</div>
            <div class="sp-cd-unit sp-uppercase" style="font-size: 10px; color: rgb(0, 0, 0);">{{txt_29}}</div>
          </div>
          <div id="sp-cd-minutes" class="sp-cd-group " style="margin: 0px 10.5px;">
            <div
              class="sp-cd-amount" :style="amountStyle"
              style="font-size: 20px;
    padding: 10px;color: rgb(255, 255, 255); background-color: rgb(66, 153, 225); border-radius: 6px;"
            >03</div>
            <div
              class="sp-cd-unit sp-uppercase"
              style="font-size: 10px; color: rgb(0, 0, 0);"
            >{{txt_30}}</div>
          </div>
          <div id="sp-cd-seconds" class="sp-cd-group " style="margin: 0px 10.5px;">
            <div
              class="sp-cd-amount" :style="amountStyle"
              style="font-size: 20px;
    padding: 10px;color: rgb(255, 255, 255); background-color: rgb(66, 153, 225); border-radius: 6px;"
            >19</div>
            <div
              class="sp-cd-unit sp-uppercase"
              style="font-size: 10px; color: rgb(0, 0, 0);"
            >{{txt_31}}</div>
          </div>
        </div>
      </div>
      <div class="sp-template-preview" :class="{'sp-template-preview-dark':luminance == 'light'}"@click="apply_template(2)">
        <div class="sp-countdown-group">
          <div id="sp-cd-hours" class="sp-cd-group " style="margin: 0px 10.5px;">
            <div
              class="sp-cd-amount" :style="amountStyle"
              style="font-size: 20px;
    padding: 10px;color: rgb(255, 255, 255); background-color: rgb(66, 153, 225); border-radius: 0px;"
            >01</div>
            <div class="sp-cd-unit sp-uppercase" style="font-size: 10px; color: rgb(0, 0, 0);">{{txt_29}}</div>
          </div>
          <div id="sp-cd-minutes" class="sp-cd-group " style="margin: 0px 10.5px;">
            <div
              class="sp-cd-amount" :style="amountStyle"
              style="font-size: 20px;
    padding: 10px;color: rgb(255, 255, 255); background-color: rgb(66, 153, 225); border-radius: 0px;"
            >03</div>
            <div
              class="sp-cd-unit sp-uppercase"
              style="font-size: 10px; color: rgb(0, 0, 0);"
            >{{txt_30}}</div>
          </div>
          <div id="sp-cd-seconds" class="sp-cd-group " style="margin: 0px 10.5px;">
            <div
              class="sp-cd-amount" :style="amountStyle"
              style="font-size: 20px;
    padding: 10px;color: rgb(255, 255, 255); background-color: rgb(66, 153, 225); border-radius: 0px;"
            >19</div>
            <div
              class="sp-cd-unit sp-uppercase"
              style="font-size: 10px; color: rgb(0, 0, 0);"
            >{{txt_31}}</div>
          </div>
        </div>
      </div>

      <div class="sp-template-preview" :class="{'sp-template-preview-dark':luminance == 'light'}"@click="apply_template(3)">
        <div class="sp-countdown-group">
          <div id="sp-cd-hours" class="sp-cd-group " style="margin: 0px 10.5px;">
            <div
              class="sp-cd-amount" :style="amountStyle"
              style="font-size: 20px;
    padding: 10px;color: rgb(255, 255, 255); background-color: rgb(66, 153, 225); border-radius: 99px;"
            >01</div>
            <div class="sp-cd-unit sp-uppercase" style="font-size: 10px; color: rgb(0, 0, 0);">{{txt_29}}</div>
          </div>
          <div id="sp-cd-minutes" class="sp-cd-group " style="margin: 0px 10.5px;">
            <div
              class="sp-cd-amount" :style="amountStyle"
              style="font-size: 20px;
    padding: 10px;color: rgb(255, 255, 255); background-color: rgb(66, 153, 225); border-radius: 99px;"
            >03</div>
            <div
              class="sp-cd-unit sp-uppercase"
              style="font-size: 10px; color: rgb(0, 0, 0);"
            >{{txt_30}}</div>
          </div>
          <div id="sp-cd-seconds" class="sp-cd-group " style="margin: 0px 10.5px;">
            <div
              class="sp-cd-amount" :style="amountStyle"
              style="font-size: 20px;
    padding: 10px;color: rgb(255, 255, 255); background-color: rgb(66, 153, 225); border-radius: 99px;"
            >19</div>
            <div
              class="sp-cd-unit sp-uppercase"
              style="font-size: 10px; color: rgb(0, 0, 0);"
            >{{txt_31}}</div>
          </div>
        </div>
      </div>

      <div class="sp-template-preview" :class="{'sp-template-preview-dark':luminance == 'light'}"@click="apply_template(4)">
        <div class="sp-countdown-group">
          <div id="sp-cd-hours" class="sp-cd-group " style="margin: 0px 10.5px;">
            <div
              class="sp-cd-amount" :style="textStyle"
              style="font-size: 20px;
    padding: 10px;color: rgb(66, 153, 225); border-radius: 6px;"
            >01</div>
            <div class="sp-cd-unit sp-uppercase" style="font-size: 10px; color: rgb(0, 0, 0);">{{txt_29}}</div>
          </div>
          <div id="sp-cd-minutes" class="sp-cd-group " style="margin: 0px 10.5px;">
            <div
              class="sp-cd-amount" :style="textStyle"
              style="font-size: 20px;
    padding: 10px;color: rgb(66, 153, 225); border-radius: 6px;"
            >03</div>
            <div
              class="sp-cd-unit sp-uppercase"
              style="font-size: 10px; color: rgb(0, 0, 0);"
            >{{txt_30}}</div>
          </div>
          <div id="sp-cd-seconds" class="sp-cd-group " style="margin: 0px 10.5px;">
            <div
              class="sp-cd-amount" :style="textStyle"
              style="font-size: 20px;
    padding: 10px;color: rgb(66, 153, 225); border-radius: 6px;"
            >19</div>
            <div
              class="sp-cd-unit sp-uppercase"
              style="font-size: 10px; color: rgb(0, 0, 0);"
            >{{txt_31}}</div>
          </div>
        </div>
      </div>

      <div class="sp-template-preview" :class="{'sp-template-preview-dark':luminance == 'light'}"@click="apply_template(5)">
        <div class="sp-countdown-group">
          <div id="sp-cd-hours" class="sp-cd-group " style="margin: 0px 10.5px;">
            <div
              class="sp-cd-amount" :style="borderStyle"

              style="font-size: 20px;
    padding: 10px;color: rgb(66, 153, 225); border-radius: 99px; border: 1px solid rgb(66, 153, 225)"
            >01</div>
            <div class="sp-cd-unit sp-uppercase" style="font-size: 10px; color: rgb(0, 0, 0);">{{txt_29}}</div>
          </div>
          <div id="sp-cd-minutes" class="sp-cd-group " style="margin: 0px 10.5px;">
            <div
              class="sp-cd-amount" :style="borderStyle"
              style="font-size: 20px;
    padding: 10px;color: rgb(66, 153, 225); border-radius: 99px; border: 1px solid rgb(66, 153, 225)"
            >03</div>
            <div
              class="sp-cd-unit sp-uppercase"
              style="font-size: 10px; color: rgb(0, 0, 0);"
            >{{txt_30}}</div>
          </div>
          <div id="sp-cd-seconds" class="sp-cd-group " style="margin: 0px 10.5px;">
            <div
              class="sp-cd-amount" :style="borderStyle"
              style="font-size: 20px;
    padding: 10px;color: rgb(66, 153, 225); border-radius: 99px; border: 1px solid rgb(66, 153, 225)"
            >19</div>
            <div
              class="sp-cd-unit sp-uppercase"
              style="font-size: 10px; color: rgb(0, 0, 0);"
            >{{txt_31}}</div>
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
        {{txt_42}}
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
            :label="txt_43"
            :color="block.settings.bgColor"
            v-model="block.settings.bgColor"
          />
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_44"
            :color="block.settings.labelColor"
            v-model="block.settings.labelColor"
          />
        </div>

        <div class="sp-form-group">
          <label>{{txt_32}}</label>
          <SliderControl v-model="block.settings.spaceBetween" :min="0" :max="100" :step="1" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_33}}</label>
          <SliderControl v-model="block.settings.borderRadius" :min="0" :max="100" :step="1" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_34}}</label>
          <select v-model="block.settings.shadow" class="sp-form-select">
            <option value>{{txt_35}}</option>
            <option value="1">{{txt_36}}</option>
            <option value="2">{{txt_37}}</option>
            <option value="3">{{txt_38}}</option>
            <option value="4">{{txt_39}}</option>
            <option value="5">{{txt_40}}</option>
            <option value="6">{{txt_41}}</option>
          </select>
        </div>
      </div>

       <SpacingSectionControl :block="block" />
    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import DatePicker from 'vue2-datepicker';
import AlignControl from '@/components/AlignControl.vue';
import SliderControl from '@/components/SliderControl.vue';
import ColorPicker from '@/components/ColorPicker.vue';
import TypographyControl from '@/components/TypographyControl.vue';
import FontControl from '@/components/FontControl.vue';
import FontVariantControl from '@/components/FontVariantControl.vue';
import { helpers } from '../mixins/helpers.js';
import PaddingControl from '@/components/PaddingControl.vue';
import Editor from '@tinymce/tinymce-vue';
import SpacingSectionControl from '@/components/SpacingSectionControl.vue';
import tinycolor from 'tinycolor2';
import qs from 'qs';

export default {
  name: 'CountdownOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {

      txt_1: __( 'Content', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Templates', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Settings', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Countdown Type', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Visitor Timer (Evergreen)', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'DateTime Countdown', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Set Timer For', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'End Date', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'End Time', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Timezone', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Align', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Tiny', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Action To Take On Expires', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Show Message', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'Redirect', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'Message', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( 'Redirect URL', process.env.VUE_APP_TEXTDOMAIN ),
      txt_23: __( 'Customize Labels', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'Day Label', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __( 'Hour Label', process.env.VUE_APP_TEXTDOMAIN ),
      txt_26: __( 'Minute Label', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( 'Second Label', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( 'Choose Your Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( 'Hours', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( 'Minutes', process.env.VUE_APP_TEXTDOMAIN ),
      txt_31: __( 'Seconds', process.env.VUE_APP_TEXTDOMAIN ),
      txt_32: __( 'Space Between', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( 'Border Radius', process.env.VUE_APP_TEXTDOMAIN ),
      txt_34: __( 'Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_35: __( 'None', process.env.VUE_APP_TEXTDOMAIN ),
      txt_36: __( 'Hairline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_37: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_38: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_39: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_40: __( 'X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_41: __( '2X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_42: __( 'Styles', process.env.VUE_APP_TEXTDOMAIN ),
      txt_43: __( 'Hightlight Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_44: __( 'Label Color', process.env.VUE_APP_TEXTDOMAIN ),
      luminance: 'dark',

      view: 1,
      section_1: true,
      section_2: false,
      section_3: false,
      section_4: true,
      customize_labels: false,
      shared: seedprod_store,
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.countdown, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  computed: {
    textStyle: function() {
      let tc = '';
      if ( '' == this.block.settings.bgColor ) {
        tc = this.shared.settings.document.settings.buttonColor;
      } else {
        tc = this.block.settings.bgColor;
      }

      return {
        color: tc,
      };
    },
    borderStyle: function() {
      let tc = '';
      if ( '' == this.block.settings.bgColor ) {
        tc = this.shared.settings.document.settings.buttonColor;
      } else {
        tc = this.block.settings.bgColor;
      }

      return {
        color: tc,
        'border-color': tc,
      };
    },
    amountStyle: function() {
      let bg = '';
      if ( '' == this.block.settings.bgColor ) {
        bg = this.shared.settings.document.settings.buttonColor;
      } else {
        bg = this.block.settings.bgColor;
      }

      let tc = '';
      let lightness = tinycolor( bg );
      if ( 0.5 <= lightness.getLuminance() ) {
        tc = 'rgba(0,0,0,0.8)';
        this.luminance = 'light';
      } else {
        tc = '#fff';
        this.luminance = 'dark';
      }

      return {
        color: tc,
        'background-color': bg,

        // "border-radius": br,
        // "box-shadow": bs,
        // border: border
      };
    },
  },
  created() {},
  watch: {
    'block.settings.endDate': {
      handler: function( val, oldVal ) {
        this.update_countdown_view();
      },
    },
    'block.settings.endTime': {
      handler: function( val, oldVal ) {
        this.update_countdown_view();
      },
    },
    'block.settings.timezone': {
      handler: function( val, oldVal ) {
        this.update_countdown_view();
      },
    },
  },
  methods: {
    apply_template( id ) {
      this.block.settings.blockTemplateId = id;
      if ( 1 == id ) {
        this.block.settings.borderRadius = 6;
      }

      if ( 2 == id ) {
        this.block.settings.borderRadius = 0;
      }

      if ( 3 == id ) {
        this.block.settings.borderRadius = 999;
      }

      if ( 5 == id ) {
        this.block.settings.borderRadius = 999;
      }
    },
    updateLabelSize() {
      if ( 'sm' == this.block.settings.size ) {
        this.block.settings.fontSize = 10;
      }
      if ( 'md' == this.block.settings.size ) {
        this.block.settings.fontSize = 13;
      }
      if ( 'lg' == this.block.settings.size ) {
        this.block.settings.fontSize = 16;
      }
    },
    update_countdown_view: function() {
      let data = qs.stringify({
        ends: this.block.settings.endDate,
        ends_time: this.block.settings.endTime,
        timezone: this.block.settings.timezone,
      });

      let _self = this;

      _self.axios
        .post( seedprod_utc_url, data, {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        })
        .then( function( response ) {
          _self.block.settings.endTimestamp = response.data.ends_timestamp;
        });
    },
  },
  components: {
    DatePicker,
    ColorPicker,
    AlignControl,
    SliderControl,
    FontControl,
    PaddingControl,
    FontVariantControl,
    TypographyControl,
    editor: Editor,
    SpacingSectionControl,
  },
  props: {
    block: Object,
  },
};
</script>
