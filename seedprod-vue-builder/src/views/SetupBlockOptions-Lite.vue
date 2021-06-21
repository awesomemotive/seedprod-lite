<template>
  <div id="sp-blocks-sections-wrapper" style="width: inherit">
    <div id="sp-blocks-sections" class="sp-flex" v-if="!$route.params.blockid">
      <div class="sp-w-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-w-4 sp-fill-current sp-inline-block sp-mr-2"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7-2h2v-3h3V9h-3V6h-2v3h-3v2h3z"
          /></svg
        >{{ txt_1 }}
      </div>
      <div
        class="sp-w-1/2 sp-cursor-pointer sp-secondary"
        @click="goto_sectiontemplates"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-w-4 sp-fill-current sp-inline-block sp-mr-2"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M21 18H2v2h19v-2zm-2-8v4H4v-4h15m1-2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm1-4H2v2h19V4z"
          /></svg
        >{{ txt_2 }}
      </div>
    </div>
    <div class="sp-fixed sp-z-50" style="width: inherit">
      <div
        id="sp-blocks-editing"
        class="sp-flex sp-items-center sp-px-4"
        :class="{
          'sp-block-type-row':
            shared.setup_page_meta.current_block.type == 'row' ||
            shared.setup_page_meta.current_block.type == 'col',
          'sp-block-type-section':
            shared.setup_page_meta.current_block.type == 'section'
        }"
        v-if="$route.params.blockid"
      >
        <div class="sp-flex-grow">
          <span class="sp-pb-1">{{ txt_6 }}</span>
          {{ get_display_name }}
        </div>
        <div
          class="sp-cursor-pointer"
          @click="goto_blocks"
          v-tooltip="{ content: 'Blocks', delay: { show: 400, hide: 0 } }"
        >
          <svg
            class="sp-w-5 sp-fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.68164" cy="2.33057" r="1.5" />
            <circle cx="1.68164" cy="10.3306" r="1.5" />
            <circle cx="1.68164" cy="18.3306" r="1.5" />
            <circle cx="9.68164" cy="2.33057" r="1.5" />
            <circle cx="9.68164" cy="10.3306" r="1.5" />
            <circle cx="9.68164" cy="18.3306" r="1.5" />
            <circle cx="17.6816" cy="2.33057" r="1.5" />
            <circle cx="17.6816" cy="10.3306" r="1.5" />
            <circle cx="17.6816" cy="18.3306" r="1.5" />
          </svg>
        </div>
      </div>
    </div>
    <div
      class="sp-options-body"
      ref="spoptionsbody"
      v-if="$route.params.blockid && shared.setup_page_meta.current_block"
    >
      <div class="seedprod-sidebar-form-body seedprod-action-single">
        <RowOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'row'"
        />
        <SectionOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'section'"
        />
        <ColOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'col'"
        />
        <ButtonOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'button'"
        />
        <IconOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'icon'"
        />
        <FeatureOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'feature'"
        />
        <TestimonialOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'testimonial'"
        />
        <IconFeatureOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'iconfeature'"
        />
        <HeaderOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'header'"
        />
        <TextOptions
          :key="componentKey"
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'text'"
        />
        <ImageOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'image'"
        />
        <DividerOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'divider'"
        />
        <SpacerOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'spacer'"
        />

        <CustomHTMLOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'custom-html'"
        />
        <ShortcodeOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'shortcode'"
        />
        <LoginOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'login'"
        />
        <BulletListOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'bullet-list'"
        />
        <OptinFormOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'optin-form'"
        />
        <MyFormOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'form'"
        />
        <ProgressBarOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'progress-bar'"
        />
        <SocialProfilesOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'social-profiles'"
        />
        <SocialSharingOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'social-sharing'"
        />
        <ContactFormOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'contact-form'"
        />
        <GiveawayOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'giveaway'"
        />
        <VideoOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'video'"
        />
        <StarRatingOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'starrating'"
        />
        <CountdownOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'countdown'"
        />
        <NavOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'nav'"
        />
        <AnchorOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'anchor'"
        />

        <WCAddToCartOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'wcaddtocart'"
        />

        <AccordionOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'accordion'"
        />
        <WCCustomProductsGridOptions
          :type="'wccustomproductsgrid'"
          :block="shared.setup_page_meta.current_block"
          v-if="
						shared.setup_page_meta.current_block.type ==
							'wccustomproductsgrid'
					"
        />
        <WCFeaturedProductsGridOptions
          :block="shared.setup_page_meta.current_block"
          v-if="
						shared.setup_page_meta.current_block.type ==
							'wcfeaturedproductsgrid'
					"
        />
        <WCSaleProductsGridOptions
          :block="shared.setup_page_meta.current_block"
          v-if="
						shared.setup_page_meta.current_block.type ==
							'wcsaleproductsgrid'
					"
        />
        <WCBestSellingProductsGridOptions
          :block="shared.setup_page_meta.current_block"
          v-if="
						shared.setup_page_meta.current_block.type ==
							'wcbestsellingproductsgrid'
					"
        />
        <WCRecentProductsGridOptions
          :block="shared.setup_page_meta.current_block"
          v-if="
						shared.setup_page_meta.current_block.type ==
							'wcrecentproductsgrid'
					"
        />
        <WCTopRatedProductsGridOptions
          :block="shared.setup_page_meta.current_block"
          v-if="
						shared.setup_page_meta.current_block.type ==
							'wctopratedproductsgrid'
					"
        />
        <WCCartOptions
          :block="shared.setup_page_meta.current_block"
          v-if="
						shared.setup_page_meta.current_block.type ==
							'wccart'
					"
        />
        <WCCheckoutOptions
          :block="shared.setup_page_meta.current_block"
          v-if="
						shared.setup_page_meta.current_block.type ==
							'wccheckout'
					"
        />
        <GoogleMapsOptions
          :block="shared.setup_page_meta.current_block"
          v-if="
						shared.setup_page_meta.current_block.type ==
							'googlemaps'
					"
        />
        <PricingTableOptions
          :block="shared.setup_page_meta.current_block"
          v-if="shared.setup_page_meta.current_block.type == 'pricingtable'"
        />
      </div>
    </div>
    <!-- Blocks -->
    <div v-else id="seedprod-add-actions">
      <div
        class="sp-pt-5 sp-px-5 sp-pb-2 sp-flex sp-justify-center sp-items-center sp-relative"
      >
        <span class="sp-text-neutral-40 sp-absolute sp-left-26">
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
          v-model="blocksearch"
          :placeholder="txt_7"
          class="sp-form-input sp-w-full sp-pl-8"
        />
      </div>
      <!-- Layout Blocks -->
      <h3
        class="sp-flex sp-items-center sp-justify-between"
        @click="
          shared.expand_collapse_state.show_entry_settings = !shared
            .expand_collapse_state.show_entry_settings
        "
        :class="{
          seedprod_collaspe: !shared.expand_collapse_state.show_entry_settings
        }"
      >
        {{ txt_3 }}
        <span class="sp-cursor-pointer sp-text-neutral-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-6 sp-fill-current"
            :class="{
              'sp-hidden': !shared.expand_collapse_state.show_entry_settings
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
              'sp-hidden': shared.expand_collapse_state.show_entry_settings
            }"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>

      <transition name="seedprod">
        <div
          v-if="shared.expand_collapse_state.show_entry_settings"
          class="seedprod-sidebar-form-body"
        >
          <draggable
            :sort="false"
            :clone="add_block_option"
            @start="start_move"
            @end="end_move"
            class="seedprod-drag-source sp-flex sp-flex-wrap"
            :list="standardBlocks"
            :group="{ name: 'blocks', pull: 'clone', put: false }"
          >
            <div
              v-for="(block_option, index) in standardBlocks"
              :key="index"
              class="seedprod-block-option"
            >
              <button
                @mouseover="page_meta.show_icon = index"
                @mouseleave="page_meta.show_icon = false"
              >
                <div
                  class="sp-inline-block sp-mt-6"
                  v-html="block_option.icon"
                ></div>

                <span class="sp-font-semibold">{{ block_option.name }}</span>
              </button>
            </div>
            <draggable
              :sort="false"
              :clone="add_block_option"
              @start="start_move"
              @end="end_move"
              class="seedprod-drag-source sp-flex sp-flex-wrap"
              :list="shared.setup_page_meta.block_options"
              :group="{ name: 'rows', pull: 'clone', put: false }"
            >
              <div
                v-for="(block_option, index) in layoutBlocks"
                :key="index"
                class="seedprod-block-option"
              >
                <button
                  @mouseover="page_meta.show_icon = index"
                  @mouseleave="page_meta.show_icon = false"
                >
                  <div
                    class="sp-inline-block sp-mt-6"
                    v-html="block_option.icon"
                  ></div>

                  <span class="sp-font-semibold">{{ block_option.name }}</span>
                </button>
              </div>
            </draggable>
          </draggable>
        </div>
      </transition>
      <!-- Common Blocks -->

      <h3
        class="sp-flex sp-items-center sp-justify-between"
        @click="
          shared.expand_collapse_state.show_entry_settings_2 = !shared
            .expand_collapse_state.show_entry_settings_2
        "
        v-bind:class="{
          seedprod_collaspe: !shared.expand_collapse_state
            .show_entry_settings_2
        }"
      >
        {{ txt_4 }}
        <span class="sp-cursor-pointer sp-text-neutral-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-6 sp-fill-current"
            :class="{
              'sp-hidden': !shared.expand_collapse_state.show_entry_settings_2
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
              'sp-hidden': shared.expand_collapse_state.show_entry_settings_2
            }"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>

      <transition name="seedprod">
        <div
          v-if="shared.expand_collapse_state.show_entry_settings_2"
          class="seedprod-sidebar-form-body"
        >
          <draggable
            :sort="false"
            :clone="add_block_option"
            @start="start_move"
            @end="end_move"
            handle=".sp-blockdrag-handle"
            class="seedprod-drag-source sp-flex sp-flex-wrap"
            :list="advancedBlocks"
            :group="{ name: 'blocks', pull: 'clone', put: false }"
          >
            <div
              v-for="(block_option, index) in advancedBlocks"
              :key="index"
              class="seedprod-block-option sp-relative"
              :class="{ 'sp-pro-only': block_option.is_pro }"
            >
              <div
                v-if="block_option.is_pro"
                class="sp-absolute sp-top-0 sp-right-0 sp-text-green sp-rounded sp-z-20 sp-px-1 sp-text-10px sp-font-semibold sp-mt-2 sp-mr-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-3"
                >
                  <g fill="none">
                    <path d="M0 0h24v24H0V0z" />
                    <path d="M0 0h24v24H0V0z" opacity=".87" />
                  </g>
                  <path
                    d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                  />
                </svg>
              </div>

              <button
                :class="{ 'sp-blockdrag-handle': !block_option.is_pro }"
                @mouseover="page_meta.show_icon = index + 100"
                @mouseleave="page_meta.show_icon = false"
                @click="maybe_show_upsell(block_option)"
              >
                <div
                  class="sp-inline-block sp-mt-6"
                  v-html="block_option.icon"
                ></div>

                <span class="sp-font-semibold">{{ block_option.name }}</span>
              </button>
            </div>
          </draggable>
        </div>
      </transition>

      <!-- WooCommerce Blocks -->
      <h3
        class="sp-flex sp-items-center sp-justify-between"
        @click="
          shared.expand_collapse_state.show_entry_settings_4 = !shared
            .expand_collapse_state.show_entry_settings_4
        "
        v-bind:class="{
          seedprod_collaspe: !shared.expand_collapse_state
            .show_entry_settings_4
        }"
      >
        {{ txt_8 }}
        <span class="sp-cursor-pointer sp-text-neutral-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-6 sp-fill-current"
            :class="{
              'sp-hidden': !shared.expand_collapse_state.show_entry_settings_4
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
              'sp-hidden': shared.expand_collapse_state.show_entry_settings_4
            }"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>

      <transition name="seedprod">
        <div
          v-if="shared.expand_collapse_state.show_entry_settings_4"
          class="seedprod-sidebar-form-body"
        >
          <draggable
            :sort="false"
            :clone="add_block_option"
            @start="start_move"
            @end="end_move"
            handle=".sp-blockdrag-handle"
            class="seedprod-drag-source sp-flex sp-flex-wrap"
            :list="wcBlocks"
            :group="{ name: 'blocks', pull: 'clone', put: false }"
          >
            <div
              v-for="(block_option, index) in wcBlocks"
              :key="index"
              class="seedprod-block-option sp-relative"
              :class="{ 'sp-pro-only': block_option.is_pro }"
            >
              <div
                v-if="block_option.is_pro"
                class="sp-absolute sp-top-0 sp-right-0 sp-text-green sp-rounded sp-z-20 sp-px-1 sp-text-10px sp-font-semibold sp-mt-2 sp-mr-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-3"
                >
                  <g fill="none">
                    <path d="M0 0h24v24H0V0z" />
                    <path d="M0 0h24v24H0V0z" opacity=".87" />
                  </g>
                  <path
                    d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                  />
                </svg>
              </div>
              <button
                :class="{ 'sp-blockdrag-handle': !block_option.is_pro }"
                @mouseover="page_meta.show_icon = index + 100"
                @mouseleave="page_meta.show_icon = false"
                @click="maybe_show_upsell(block_option)"
              >
                <div
                  class="sp-inline-block sp-mt-6"
                  v-html="block_option.icon"
                ></div>

                <span class="sp-font-semibold">{{ block_option.name }}</span>
              </button>
            </div>
          </draggable>
        </div>
      </transition>

      <!-- Misc Blocks -->
      <h3
        class="sp-border-t-0 sp-flex sp-items-center sp-justify-between"
        @click="
          feature = 'Saved Blocks';
          feature_source = 'saved-blocks';
          showUpsellModal = true;
        "
        :class="{
          seedprod_collaspe: !shared.expand_collapse_state
            .show_entry_settings_3
        }"
      >
        <span
          >{{ txt_5 }}
          <div
            class="sp-inline-block sp-bg-green sp-rounded sp-text-white sp-z-20 sp-py-1 sp-px-2 sp-text-12px sp-font-semibold sp-ml-2"
          >
            PRO
          </div></span
        >
        <span class="sp-cursor-pointer sp-text-neutral-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-6 sp-fill-current"
            :class="{
              'sp-hidden': !shared.expand_collapse_state.show_entry_settings_3
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
              'sp-hidden': shared.expand_collapse_state.show_entry_settings_3
            }"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>
      <transition name="seedprod">
        <div
          v-if="shared.expand_collapse_state.show_entry_settings_3"
          class="seedprod-sidebar-form-body"
        ></div>
      </transition>
    </div>
    <br />
    <!-- Lite CTA -->
    <modal
      v-if="showUpsellModal"
      @close="showUpsellModal = false"
      class="sp-w-550px"
    >
      <div slot="body" class="sp-px-10 sp-py-12 sp-text-neutral sp-relative">
        <button
          class="sp-text-neutral-40 hover:sp-text-neutral-60 sp-absolute sp-top-0 sp-right-0 sp-m-2"
          @click="showUpsellModal = false"
        >
          <svg
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
        <LiteCTABuilder
          :feature_source="'blocks-' + feature_source"
          :feature="feature"
        />
      </div>
      <h3 slot="header"></h3>
    </modal>
  </div>
</template>

<script>
import { helpers } from '../mixins/helpers.js';
import draggable from 'vuedraggable';
import Vue from 'vue';
import ButtonOptions from '@/components/ButtonOptions.vue';
import HeaderOptions from '@/components/HeaderOptions.vue';
import TextOptions from '@/components/TextOptions.vue';
import BulletListOptions from '@/components/BulletListOptions.vue';
import ImageOptions from '@/components/ImageOptions.vue';
import VideoOptions from '@/components/VideoOptions.vue';
import CountdownOptions from '@/components/CountdownOptions.vue';
import DividerOptions from '@/components/DividerOptions.vue';
import SpacerOptions from '@/components/SpacerOptions.vue';
import SocialProfilesOptions from '@/components/SocialProfilesOptions.vue';
import SocialSharingOptions from '@/components/SocialSharingOptions.vue';
import CustomHTMLOptions from '@/components/CustomHTMLOptions.vue';
import ProgressBarOptions from '@/components/ProgressBarOptions.vue';
import ShortcodeOptions from '@/components/ShortcodeOptions.vue';
import LoginOptions from '@/components/LoginOptions.vue';
import OptinFormOptions from '@/components/OptinFormOptions.vue';
import MyFormOptions from '@/components/FormOptions.vue';
import ContactFormOptions from '@/components/ContactFormOptions.vue';
import GiveawayOptions from '@/components/GiveawayOptions.vue';
import IconOptions from '@/components/IconOptions.vue';
import FeatureOptions from '@/components/FeatureOptions.vue';
import TestimonialOptions from '@/components/TestimonialOptions.vue';
import IconFeatureOptions from '@/components/IconFeatureOptions.vue';
import SectionOptions from '@/components/SectionOptions.vue';
import ColOptions from '@/components/ColOptions.vue';
import RowOptions from '@/components/RowOptions.vue';
import NavOptions from '@/components/NavOptions.vue';
import StarRatingOptions from '@/components/StarRatingOptions.vue';
import AnchorOptions from '@/components/AnchorOptions.vue';
import AccordionOptions from '@/components/AccordionOptions.vue';
import GoogleMapsOptions from "@/components/GoogleMapsOptions.vue";
import { __ } from '@wordpress/i18n';
import LiteCTABuilder from '@/components/LiteCTABuilder.vue';
import modal from '@/components/Modal.vue';
import WCAddToCartOptions from '@/components/WCAddToCartOptions.vue';
import WCCheckoutOptions from '@/components/WCCheckoutOptions.vue';

import WCCartOptions from '@/components/WCCartOptions.vue';
import WCCustomProductsGridOptions from '@/components/WCCustomProductsGridOptions.vue';
import WCFeaturedProductsGridOptions from '@/components/WCFeaturedProductsGridOptions.vue';
import WCSaleProductsGridOptions from '@/components/WCSaleProductsGridOptions.vue';
import WCBestSellingProductsGridOptions from '@/components/WCBestSellingProductsGridOptions.vue';
import WCRecentProductsGridOptions from '@/components/WCRecentProductsGridOptions.vue';
import WCTopRatedProductsGridOptions from '@/components/WCTopRatedProductsGridOptions.vue';
import PricingTableOptions from '@/components/PricingTableOptions.vue';

export default {
  name: 'settingsentryoptions',
  mixins: [ helpers ],
  data() {
    return {
      showUpsellModal: false,
      txt_1: __( 'Blocks', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Sections', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Standard', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Saved Blocks', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Editing:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Search blocks...', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'WooCommerce', process.env.VUE_APP_TEXTDOMAIN ),
      template_api_url: seedprod_remote_api + 'templates?page=1',
      componentKey: 0,
      blocksearch: '',
      feature: '',
      feature_source: '',
      page_meta: {
        show_icon: false,
      },
      shared: seedprod_store,
    };
  },
  inject: {
    $validator: '$validator',
  },
  computed: {
    get_display_name: function() {
      let self = this;
      let n = this.shared.setup_page_meta.current_block.type;
      this.shared.setup_page_meta.block_options.forEach( function( item ) {
        if ( item.type == self.shared.setup_page_meta.current_block.type ) {
          n = item.name;
        }
      });

      return n;
    },
    wcBlocks: function() {
      let self = this;
      return this.shared.setup_page_meta.block_options.filter( function( u ) {
        return (
          'wc' === u.cat &&
          u.name.toLowerCase().includes( self.blocksearch.toLowerCase() )
        );
      });
    },
    advancedBlocks: function() {
      let self = this;
      return this.shared.setup_page_meta.block_options.filter( function( u ) {
        return (
          'adv' === u.cat &&
          u.name.toLowerCase().includes( self.blocksearch.toLowerCase() )
        );
      });
    },
    standardBlocks: function() {
      let self = this;
      return this.shared.setup_page_meta.block_options.filter( function( u ) {
        return (
          'common' === u.cat &&
          u.name.toLowerCase().includes( self.blocksearch.toLowerCase() )
        );
      });
    },
    layoutBlocks: function() {
      let self = this;
      return this.shared.setup_page_meta.block_options.filter( function( u ) {
        return (
          'layout' === u.cat &&
          u.name.toLowerCase().includes( self.blocksearch.toLowerCase() )
        );
      });
    },
    savedBlocks: function() {
      let self = this;
      return this.shared.saved_blocks.filter( function( u ) {
        return u.name.toLowerCase().includes( self.blocksearch.toLowerCase() );
      });
    },
  },
  methods: {
    slugify: function( text ) {
      return text
        .toString()
        .toLowerCase()
        .replace( /\s+/g, '-' ) // Replace spaces with -
        .replace( /[^\w\-]+/g, '' ) // Remove all non-word chars
        .replace( /\-\-+/g, '-' ) // Replace multiple - with single -
        .replace( /^-+/, '' ) // Trim - from start of text
        .replace( /-+$/, '' ); // Trim - from end of text
    },
    maybe_show_upsell( block ) {
      if ( block.is_pro ) {
        this.feature = block.name + ' Block';
        this.feature_source = this.slugify( block.name );
        this.showUpsellModal = true;
      }
    },
    loadSavedBlocks() {
      return;
      let self = this;

      this.axios
        .get(
          this.template_api_url +
            '&filter=saved-blocks' +
            '&api_token=' +
            self.shared.api_token +
            '&site_token=' +
            self.shared.site_token
        )
        .then( function( response ) {

          //console.log(response);
          self.shared.saved_blocks = response.data.templates.data;
        })
        .catch( function( error ) {
          console.log( error );
          self.shared.doing_ajax = false;
          self.$swal({
            imageUrl:
              self.shared.plugin_path + 'public/svg/error-24px-white.svg',
            text: error.response.data.message,
            toast: true,
            type: null,
            customClass: 'sp-toast-error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
          });
        });
    },
    goto_sectiontemplates() {
      this.$router.push({ name: 'sectiontemplates' });
    },
    goto_blocks() {
      this.$router.push({ name: 'setup_block_options' });
    },
    render_block( evt ) {

      // console.log(evt.to);
      //  console.log(evt);
      //   var ComponentClass = Vue.extend(Button);
      //   var instance = new ComponentClass({
      //     propsData: { type: "primary" }
      //   });
      //   instance.$slots.default = ["Click me!"];
      //   instance.$mount(); // pass nothing
      //   this.$refs[this.block_id].appendChild(instance.$el);
    },
    add_block_option: function({ id, type, cat, code }) {
      if ( 'layout' == cat ) {
        var r;
        r = {
          id: this.uid(),
          type: 'row',
          cols: [],
          settings: JSON.parse( JSON.stringify( this.shared.block_templates.row ) ),
        };
      } else {

        // blocks
        let settings = {};
        if ( 'block' == type ) {
          code = JSON.parse( code );
          code.id = this.uid();
          return code;
        }
        if ( 'button' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.button )
          );
        }
        if ( 'header' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.header )
          );
        }
        if ( 'text' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.text )
          );
        }
        if ( 'image' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.image )
          );
        }
        if ( 'divider' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.divider )
          );
        }
        if ( 'spacer' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.spacer )
          );
        }
        if ( 'custom-html' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.customhtml )
          );
        }
        if ( 'shortcode' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.shortcode )
          );
        }
        if ( 'login' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.login )
          );
        }
        if ( 'video' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.video )
          );
        }
        if ( 'countdown' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.countdown )
          );
        }
        if ( 'bullet-list' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.bulletlist )
          );
        }
        if ( 'nav' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.nav )
          );
        }
        if ( 'form' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.form )
          );
        }
        if ( 'optin-form' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.optinform )
          );
        }
        if ( 'contact-form' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.contactform )
          );
        }
        if ( 'progress-bar' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.progressbar )
          );
        }
        if ( 'social-profiles' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.socialprofiles )
          );
        }
        if ( 'social-sharing' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.socialsharing )
          );
        }
        if ( 'icon' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.icon )
          );
        }
        if ( 'feature' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.feature )
          );
        }
        if ( 'testimonial' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.testimonial )
          );
        }
        if ( 'iconfeature' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.iconfeature )
          );
        }
        if ( 'anchor' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.anchor )
          );
        }

        if ( 'wcaddtocart' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.wcaddtocart )
          );
        }

        if ( 'accordion' == type ) {
          settings = JSON.parse(
            JSON.stringify( this.shared.block_templates.accordion )
          );
        }

        let block_id = this.uid();

        r = {
          id: block_id,
          elType: 'block',
          type: type,
          settings: settings,
        };

        // focus block
        this.shared.last_block_added = block_id;
      }

      return r;
    },

    goto_block_option_view() {
      if ( 'setup_block_options' == this.$route.name ) {
        if ( this.$route.params.blockid && 0 != this.$route.params.blockid ) {
          let _self = this;
          this.shared.settings.document.sections.forEach( function( section ) {
            if ( section.id == _self.$route.params.blockid ) {
              _self.shared.setup_page_meta.current_block = section;
            }
            if ( section.rows ) {
              section.rows.forEach( function( row ) {
                if ( row.id == _self.$route.params.blockid ) {
                  _self.shared.setup_page_meta.current_block = row;
                }
                if ( row.cols ) {
                  row.cols.forEach( function( col ) {
                    if ( col.id == _self.$route.params.blockid ) {
                      _self.shared.setup_page_meta.current_block = col;
                    }
                    if ( col.blocks ) {
                      col.blocks.forEach( function( block ) {
                        if ( block.id == _self.$route.params.blockid ) {
                          _self.shared.setup_page_meta.current_block = block;

                          // console.log(block.type);
                          // console.log(_self.componentKey);
                          if ( 'text' == block.type ) {

                            //_self.componentKey += 1;
                          }
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      }
    },
  },
  components: {
    draggable,
    ButtonOptions,
    HeaderOptions,
    TextOptions,
    BulletListOptions,
    ImageOptions,
    VideoOptions,
    CountdownOptions,
    DividerOptions,
    SpacerOptions,
    SocialProfilesOptions,
    SocialSharingOptions,
    CustomHTMLOptions,
    ShortcodeOptions,
    LoginOptions,
    OptinFormOptions,
    MyFormOptions,
    ContactFormOptions,
    GiveawayOptions,
    IconOptions,
    FeatureOptions,
    TestimonialOptions,
    IconFeatureOptions,
    ProgressBarOptions,
    SectionOptions,
    ColOptions,
    RowOptions,
    NavOptions,
    AnchorOptions,
    AccordionOptions,
    GoogleMapsOptions,
    StarRatingOptions,
    LiteCTABuilder,
    modal,
    WCAddToCartOptions,
    WCCheckoutOptions,
    WCCartOptions,
    WCCustomProductsGridOptions,
    WCFeaturedProductsGridOptions,
    WCSaleProductsGridOptions,
    WCBestSellingProductsGridOptions,
    WCRecentProductsGridOptions,
    WCTopRatedProductsGridOptions,
    PricingTableOptions,
  },
  created() {
    if ( false === this.shared.checked_for_saved_blocks ) {
      this.loadSavedBlocks();
      this.shared.checked_for_saved_blocks = true;
    }
  },
  mounted() {
    this.goto_block_option_view();
  },
  watch: {
    $route( to, from ) {
      this.goto_block_option_view();

      // scroll div to top
      jQuery( '.seedprod-sidebar-form' ).scrollTop( 0 );
    },
  },
  beforeRouteLeave( to, from, next ) {
    this.$validator.validateAll().then( ( result ) => {
      if ( result ) {
        next();
      } else {
        next( false );
        let errors = '';
        this.errors.all().forEach( function( value ) {
          errors = errors + value + '\n';
        });

        this.$swal({
          imageUrl: this.shared.plugin_path + 'public/svg/error-24px-white.svg',
          text: errors,
          toast: true,
          type: null,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
        });
      }
    });
  },
  beforeRouteUpdate( to, from, next ) {
    this.$validator.validateAll().then( ( result ) => {
      if ( result ) {
        next();
      } else {
        next( false );
        let errors = '';
        this.errors.all().forEach( function( value ) {
          errors = errors + value + '\n';
        });

        this.$swal({
          imageUrl: this.shared.plugin_path + 'public/svg/error-24px-white.svg',
          text: errors,
          toast: true,
          type: null,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
        });
      }
    });
  },
};
</script>
