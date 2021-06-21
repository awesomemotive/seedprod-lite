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
    <!-- End Block Top Nav -->

    <!-- Settings -->
    <div v-if="view == 1">

      <!-- Content -->
      <h3
        class="sp-sidebar-headers"
        @click="
        section_1 = !section_1
      "
        :class="{
        seedprod_collaspe: !section_1}"
      >
        {{txt_50}}
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
          <label class="sp-text-sm">{{txt_53}}</label>
          <span class="sp-flex sp-flex-col sp-text-11px">
            <input type="number" min="0" v-model="block.settings.columns" class="sp-form-input sp-w-20" />
          </span>
        </div>

        <div class="sp-form-group sp-flex sp-items-center sp-justify-between sp-mt-4 sp-mb-3">
          <label class="sp-text-sm">{{txt_55}}</label>
          <toggle-button :width="45" v-model="block.settings.pagination" />
        </div>

        <div v-if="block.settings.pagination">

          <div class="sp-form-group sp-flex sp-items-center sp-justify-between sp-mt-4 sp-mb-3">
            <label class="sp-text-sm">{{txt_154}}</label>
            <toggle-button :width="45" v-model="block.settings.showItemsCount" />
          </div>

          <div class="sp-form-group sp-flex sp-items-center sp-justify-between sp-mt-4 sp-mb-3">
            <label class="sp-text-sm">{{txt_155}}</label>
            <toggle-button :width="45" v-model="block.settings.showOrderBy" />
          </div>

          <div class="sp-form-group">
            <label>{{txt_115}}</label>
            <span class="sp-flex sp-flex-col sp-text-11px">
              <input type="number" min="-1" v-model="block.settings.limit" class="sp-form-input sp-w-20" />
            </span>
          </div>

        </div>

      </div>
      <!-- End Content -->

      <!-- Query -->
      <h3
        class="sp-sidebar-headers"
        @click="
        section_2 = !section_2
      "
        :class="{
        seedprod_collaspe: !section_2}"
      >
        {{txt_51}}
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
          <label>{{txt_58}}</label>
          <select v-model="block.settings.querySource" class="sp-form-select">
            <option value="all_products">{{txt_54}}</option>
            <option value="custom_query">{{txt_151}}</option>
            <option value="featured_products">{{txt_59}}</option>
            <option value="sale_products">{{txt_60}}</option>
            <option value="best_selling_products">{{txt_61}}</option>
            <option value="recent_products">{{txt_62}}</option>
            <option value="top_rated_products">{{txt_63}}</option>
          </select>
        </div>

        <div v-if="block.settings.querySource === 'custom_query'">

          <div class="sp-form-group sp-flex sp-items-center sp-justify-between sp-mt-4 sp-mb-3">
            <label class="sp-text-sm">{{txt_135}}</label>
            <toggle-button :width="45" v-model="block.settings.queryByAttribute" />
          </div>

          <div v-if="block.settings.queryByAttribute">
            <div class="sp-form-group">
              <select v-model="block.settings.queryAttribute" class="sp-form-select" @change="get_attribute_terms">
                <option value="">{{txt_136}}</option>
                <option v-for="attribute in attributes" :value="attribute.attribute_name" :key="attribute.attribute_id">{{ attribute.attribute_label }}</option>
              </select>
            </div>
          </div>

          <div v-if="block.settings.queryByAttribute && attributeTerms.length">

            <div class="sp-form-group sp-flex sp-justify-around sp-items-center">
              <button
                @click="block.settings.queryTermsOperator = 'IN'"
                class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-neutral-80 sp-py-2 sp-px-3 sp-rounded sp-flex sp-items-center sp-text-xs sp-font-semibold sp-leading-none sp-mr-1 sp-rounded-full"
              >
              {{txt_64}}
              </button>
              <button
                @click="block.settings.queryTermsOperator = 'NOT IN'"
                class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-neutral-80 sp-py-2 sp-px-3 sp-rounded sp-flex sp-items-center sp-text-xs sp-font-semibold sp-leading-none sp-rounded-full"
              >
                {{txt_65}}
              </button>
            </div>

            <div class="sp-form-group">
              <div v-if="block.settings.queryTermsOperator == 'IN'">
                <label>{{txt_138}}</label>
              </div>
              <div v-if="block.settings.queryTermsOperator == 'NOT IN'">
                <label>{{txt_139}}</label>
              </div>
              <select multiple="true" v-model="block.settings.queryAttributeTerms" class="sp-form-select">
                <option value="">{{txt_137}}</option>
                <option v-for="attributeTerm in attributeTerms" :value="attributeTerm.slug" :key="attributeTerm.term_id">{{ attributeTerm.name }}</option>
              </select>
            </div>

          </div>

          <div class="sp-form-group sp-flex sp-items-center sp-justify-between sp-mt-4 sp-mb-3">
            <label class="sp-text-sm">{{txt_128}}</label>
            <toggle-button :width="45" v-model="block.settings.selectTags" />
          </div>

          <div v-if="block.settings.selectTags">

            <div class="sp-form-group sp-flex sp-justify-around sp-items-center">
              <button
                @click="block.settings.queryTagsOperator = 'IN'"
                class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-neutral-80 sp-py-2 sp-px-3 sp-rounded sp-flex sp-items-center sp-text-xs sp-font-semibold sp-leading-none sp-mr-1 sp-rounded-full"
              >
              {{txt_64}}
              </button>
              <button
                @click="block.settings.queryTagsOperator = 'NOT IN'"
                class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-neutral-80 sp-py-2 sp-px-3 sp-rounded sp-flex sp-items-center sp-text-xs sp-font-semibold sp-leading-none sp-rounded-full"
              >
                {{txt_65}}
              </button>
            </div>

            <div class="sp-form-group">
              <div v-if="block.settings.queryTagsOperator == 'IN'">
                <label>{{txt_140}}</label>
              </div>
              <div v-if="block.settings.queryTagsOperator == 'NOT IN'">
                <label>{{txt_141}}</label>
              </div>
              <select multiple="true" v-model="block.settings.productTags" class="sp-form-select">
                <option value="">{{txt_129}}</option>
                <option v-for="tag in tags" :value="tag.slug" :key="tag.term_id">{{ tag.name }}</option>
              </select>
            </div>

          </div>

          <div class="sp-form-group sp-flex sp-items-center sp-justify-between sp-mt-4 sp-mb-3">
            <label class="sp-text-sm">{{txt_126}}</label>
            <toggle-button :width="45" v-model="block.settings.selectCategories" />
          </div>

          <div v-if="block.settings.selectCategories">

            <div class="sp-form-group sp-flex sp-justify-around sp-items-center">
              <button
                @click="block.settings.queryCategoriesOperator = 'IN'"
                class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-neutral-80 sp-py-2 sp-px-3 sp-rounded sp-flex sp-items-center sp-text-xs sp-font-semibold sp-leading-none sp-mr-1 sp-rounded-full"
              >
              {{txt_64}}
              </button>
              <button
                @click="block.settings.queryCategoriesOperator = 'NOT IN'"
                class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-neutral-80 sp-py-2 sp-px-3 sp-rounded sp-flex sp-items-center sp-text-xs sp-font-semibold sp-leading-none sp-rounded-full"
              >
                {{txt_65}}
              </button>
            </div>

            <div class="sp-form-group">
              <div v-if="block.settings.queryCategoriesOperator == 'IN'">
                <label>{{txt_142}}</label>
              </div>
              <div v-if="block.settings.queryCategoriesOperator == 'NOT IN'">
                <label>{{txt_143}}</label>
              </div>
              <select multiple="true" v-model="block.settings.productCategories" class="sp-form-select">
                <option value="">{{txt_127}}</option>
                <option v-for="category in categories" :value="category.slug" :key="category.term_id">{{ category.name }}</option>
              </select>
            </div>

          </div>

          <div class="sp-form-group sp-flex sp-items-center sp-justify-between sp-mt-4 sp-mb-3">
            <label class="sp-text-sm">{{txt_152}}</label>
            <toggle-button :width="45" v-model="block.settings.selectProductIds" />
          </div>

          <div v-if="block.settings.selectProductIds">
            <div class="sp-form-group">
              <select multiple="true" v-model="block.settings.productIds" class="sp-form-select">
                <option value="">{{txt_153}}</option>
                <option v-for="product in products" :value="product.id" :key="product.id">{{ product.name }}</option>
              </select>
            </div>
          </div>

          <div class="sp-form-group sp-flex sp-items-center sp-justify-between sp-mt-4 sp-mb-3">
            <label class="sp-text-sm">{{txt_124}}</label>
            <toggle-button :width="45" v-model="block.settings.selectProductSkus" />
          </div>

          <div v-if="block.settings.selectProductSkus">
            <div class="sp-form-group">
              <select multiple="true" v-model="block.settings.productSkus" class="sp-form-select">
                <option value="">{{txt_125}}</option>
                <option v-for="product in productsWithSkus" :value="product.sku" :key="product.id">{{ product.name }}</option>
              </select>
            </div>
          </div>

          <div class="sp-form-group sp-flex sp-items-center sp-justify-between sp-mt-4 sp-mb-3">
            <label class="sp-text-sm">{{txt_130}}</label>
            <toggle-button :width="45" v-model="block.settings.selectGroup" />
          </div>

          <div v-if="block.settings.selectGroup">
            <div class="sp-form-group">
              <select v-model="block.settings.productGroups" class="sp-form-select">
                <option value="">{{txt_131}}</option>
                <option value="on_sale">{{txt_132}}</option>
                <option value="best_selling">{{txt_133}}</option>
                <option value="top_rated">{{txt_134}}</option>
              </select>
            </div>
          </div>

          <div class="sp-form-group sp-flex sp-items-center sp-justify-between sp-mt-4 sp-mb-3">
            <label class="sp-text-sm">{{txt_144}}</label>
            <toggle-button :width="45" v-model="block.settings.selectByVisibility" />
          </div>

          <div v-if="block.settings.selectByVisibility">
            <div class="sp-form-group">
              <select v-model="block.settings.productVisibility" class="sp-form-select">
                <option value="">{{txt_145}}</option>
                <option value="visible">{{txt_146}}</option>
                <option value="catalog">{{txt_147}}</option>
                <option value="search">{{txt_148}}</option>
                <option value="hidden">{{txt_149}}</option>
                <option value="featured">{{txt_150}}</option>
              </select>
            </div>
          </div>

        </div>

        <div v-if="block.settings.querySource === 'all_products' || block.settings.querySource === 'custom_query'">
          <div class="sp-form-group">
            <label>{{txt_69}}</label>
            <select multiple="true" v-model="block.settings.queryOrderBy" class="sp-form-select">
              <option value="">{{txt_116}}</option>
              <option value="date">{{txt_117}}</option>
              <option value="id">{{txt_118}}</option>
              <option value="menu_order">{{txt_119}}</option>
              <option value="popularity">{{txt_120}}</option>
              <option value="rand">{{txt_121}}</option>
              <option value="rating">{{txt_122}}</option>
              <option value="title">{{txt_123}}</option>
            </select>
          </div>

          <div class="sp-form-group">
            <label>{{txt_70}}</label>
            <select v-model="block.settings.queryOrder" class="sp-form-select">
              <option value="ASC">{{txt_78}}</option>
              <option value="DESC">{{txt_79}}</option>
            </select>
          </div>
        </div>

      </div>
      <!-- End Query -->

    </div><!-- End Settings -->

    <!-- Advanced -->
    <div v-if="view == 3">

      <!-- Styles -->
      <h3
        class="sp-sidebar-headers"
        @click="
        section_3 = !section_3
      "
        :class="{
        seedprod_collaspe: !section_3}"
      >
        {{txt_1}}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': !section_3}"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': section_3}"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>
      <div class="seedprod-sidebar-action-body" v-if="section_3">

        <div class="sp-form-group">
          <label>{{txt_81}}</label>
          <AlignControl v-model="block.settings.align" />
        </div>

        <div class="sp-form-group">
          <TypographyControl :block="block" prefix="description" />
        </div>

        <div class="sp-form-group">
          <TypographyControl :block="block" prefix="price" />
        </div>
        <div class="sp-form-group">
          <ColorPicker
            :label="txt_84"
            :color="block.settings.priceColor"
            v-model="block.settings.priceColor"
          />
        </div>
        <div class="sp-form-group">
          <ColorPicker
            :label="txt_156"
            :color="block.settings.saleColor"
            v-model="block.settings.saleColor"
          />
        </div>

      </div>

            <h3
        class="sp-sidebar-headers"
        @click="
        section_5 = !section_5
      "
        :class="{
        seedprod_collaspe: !section_5}"
      >
        {{txt_85}}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': !section_5}"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': section_5}"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>
      <div class="seedprod-sidebar-action-body" v-if="section_5">
        <div class="sp-form-group">
          <label>{{txt_86}}</label>
          <select v-model="block.settings.btnStyle" class="sp-form-select">
            <option value="flat">{{txt_33}}</option>
            <option value="2d">{{txt_34}}</option>
            <option value="3d">{{txt_35}}</option>
            <option value="ghost">{{txt_36}}</option>
            <option value="link">{{txt_37}}</option>
          </select>
        </div>

        <div class="sp-form-group">
          <ColorPicker
            :label="txt_87"
            :color="block.settings.btnBgColor"
            v-model="block.settings.btnBgColor"
          />
        </div>

        <div class="sp-form-group">
          <TypographyControl :block="block" prefix="button" />
        </div>

        <div class="sp-form-group">
          <label>{{txt_88}}</label>
          <select v-model="block.settings.btnSize" class="sp-form-select" @change="update_button_size">
            <option value="2">{{txt_89}}</option>
            <option value="3">{{txt_90}}</option>
            <option value="4">{{txt_91}}</option>
            <option value="5">{{txt_92}}</option>
            <option value="6">{{txt_93}}</option>
          </select>
        </div>

        <div class="sp-form-group">
          <label>{{txt_32}}</label>
          <SliderControl v-model="block.settings.btnBorderRadius" :min="0" :max="100" :step="1" />
        </div>
      </div>
      <!-- End Styles -->

               <h3
        class="sp-sidebar-headers"
        @click="
        section_6 = !section_6
      "
        :class="{
        seedprod_collaspe: !section_6}"
      >
        {{txt_94}}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': !section_6}"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-w-5 sp-fill-current"
            :class="{
        'sp-hidden': section_6}"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </span>
      </h3>
      <div class="seedprod-sidebar-action-body" v-if="section_6">
        <div class="sp-form-group">
          <label>{{txt_95}}</label>
          <select v-model="block.settings.imageShadow" class="sp-form-select">
            <option value>{{txt_100}}</option>
            <option value="1">{{txt_101}}</option>
            <option value="2">{{txt_102}}</option>
            <option value="3">{{txt_103}}</option>
            <option value="4">{{txt_104}}</option>
            <option value="5">{{txt_105}}</option>
            <option value="6">{{txt_106}}</option>
            <option value="7">{{txt_107}}</option>
          </select>
        </div>
        <div class="sp-form-group">
          <label>{{txt_32}}</label>
          <SliderControl v-model="block.settings.imageBorderRadius" :min="0" :max="100" :step="1" />
        </div>
        <div class="sp-form-group">
          <label>{{txt_96}}</label>
          <select v-model="block.settings.imageBorderStyle" class="sp-form-select">
            <option value="solid">{{txt_97}}</option>
            <option value="dotted">{{txt_98}}</option>
            <option value="dashed">{{txt_99}}</option>
          </select>
        </div>
        <div class="sp-form-group">
          <ColorPicker
            :label="txt_108"
            :color="block.settings.imageBorderColor"
            v-model="block.settings.imageBorderColor"
          />
        </div>

        <div class="sp-form-group">
          <label>{{txt_109}}</label>
          <div v-if="block.settings.imageBorderSync === false" class="sp-flex sp-items-center">
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-tr-none sp-rounded-br-none"
              />
              {{txt_110}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderRight"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
              />
              {{txt_111}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderBottom"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
              />
              {{txt_112}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderLeft"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-rounded-tl-none sp-rounded-bl-none"
              />
              {{txt_113}}
            </span>
            <span class="sp-ml-2 sp-text-neutral-20" @click="sync_image_border(true)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-fill-current sp-w-6 sp-h-6"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z"
                />
                <path d="M0 24V0" fill="none" />
              </svg>
            </span>
          </div>
          <div v-else class="sp-flex sp-items-center">
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-tr-none sp-rounded-br-none"
              />
              {{txt_110}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
              />
              {{txt_111}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-border-r-0 sp-rounded-none"
              />
              {{txt_112}}
            </span>
            <span class="sp-flex sp-flex-col sp-items-center sp-text-11px">
              <input
                type="number"
                v-model="block.settings.imageBorderTop"
                class="sp-form-input focus:sp-border-neutral-20 sp-w-16 sp-rounded-tl-none sp-rounded-bl-none"
              />
              {{txt_113}}
            </span>
            <span class="sp-ml-2 sp-text-primary" @click="sync_image_border(false)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-fill-current sp-6 sp-h-6"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div class="sp-form-group" v-if="block.settings.imageBorderTop > 0">
          <label>{{txt_114}}</label>
          <SliderControl v-model="block.settings.imagePadding" :min="0" :max="50" :step="1" />
        </div>
      </div>

      <SpacingSectionControl :block="block" />

    </div>
    <!-- End Advanced -->
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import SliderControl from '@/components/SliderControl.vue';
import { helpers } from '../mixins/helpers.js';
import SpacingSectionControl from '@/components/SpacingSectionControl.vue';
import ColorPicker from '@/components/ColorPicker.vue';
import TypographyControl from '@/components/TypographyControl.vue';
import AlignControl from '@/components/AlignControl.vue';

export default {
  name: 'WCCustomProductsGridOptions',
  mixins: [ helpers ],
  inject: {
    $validator: '$validator',
  },
  data() {
    return {
      txt_1: __( 'Styles', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Settings', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Advanced', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Layout', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Headers', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Fields', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Buttons', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Alerts', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Cart', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Payment Section', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Choose Your Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Light Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'No Border Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Wide Border Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Inner Shadow Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Grey Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Dark Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Bottom Border Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Transparent Input Field', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'One Column', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'Two Column', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( 'Header Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_23: __( 'Field Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'Field Text Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __( 'Field Border Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_26: __( 'Field Border Width', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( 'Label Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( 'Label Font', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( 'Row Spacing', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( 'Button Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_31: __( 'Button Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_32: __( 'Border Radius', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( 'Flat', process.env.VUE_APP_TEXTDOMAIN ),
      txt_34: __( '2D', process.env.VUE_APP_TEXTDOMAIN ),
      txt_35: __( 'Vintage', process.env.VUE_APP_TEXTDOMAIN ),
      txt_36: __( 'Ghost', process.env.VUE_APP_TEXTDOMAIN ),
      txt_37: __( 'Link', process.env.VUE_APP_TEXTDOMAIN ),
      txt_38: __( 'Info Highlight Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_39: __( 'Error Highlight Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_40: __( 'Success Highlight Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_41: __( 'Cart Border Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_42: __( 'Cart Border Width', process.env.VUE_APP_TEXTDOMAIN ),
      txt_43: __( 'Border Radius', process.env.VUE_APP_TEXTDOMAIN ),
      txt_44: __( 'Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_45: __( 'Text Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_46: __( 'Font Family', process.env.VUE_APP_TEXTDOMAIN ),
      txt_47: __( 'Header Background Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_48: __( 'Header Font Family', process.env.VUE_APP_TEXTDOMAIN ),
      txt_49: __( 'Header Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_50: __( 'Content', process.env.VUE_APP_TEXTDOMAIN ),
      txt_51: __( 'Query', process.env.VUE_APP_TEXTDOMAIN ),
      txt_52: __( 'Spacing', process.env.VUE_APP_TEXTDOMAIN ),
      txt_53: __( 'Columns', process.env.VUE_APP_TEXTDOMAIN ),
      txt_54: __( 'All Products', process.env.VUE_APP_TEXTDOMAIN ),
      txt_55: __( 'Pagination', process.env.VUE_APP_TEXTDOMAIN ),
      txt_56: __( 'Show Order By', process.env.VUE_APP_TEXTDOMAIN ),
      txt_57: __( 'Show Items Count', process.env.VUE_APP_TEXTDOMAIN ),
      txt_58: __( 'Type', process.env.VUE_APP_TEXTDOMAIN ),
      txt_59: __( 'Featured Products', process.env.VUE_APP_TEXTDOMAIN ),
      txt_60: __( 'Sale Products', process.env.VUE_APP_TEXTDOMAIN ),
      txt_61: __( 'Best Selling Products', process.env.VUE_APP_TEXTDOMAIN ),
      txt_62: __( 'Recent Products', process.env.VUE_APP_TEXTDOMAIN ),
      txt_63: __( 'Top Rated Products', process.env.VUE_APP_TEXTDOMAIN ),
      txt_64: __( 'Include', process.env.VUE_APP_TEXTDOMAIN ),
      txt_65: __( 'Exclude', process.env.VUE_APP_TEXTDOMAIN ),
      txt_66: __( 'Include By', process.env.VUE_APP_TEXTDOMAIN ),
      txt_67: __( 'Exclude By', process.env.VUE_APP_TEXTDOMAIN ),
      txt_68: __( 'Term', process.env.VUE_APP_TEXTDOMAIN ),
      txt_69: __( 'Order By', process.env.VUE_APP_TEXTDOMAIN ),
      txt_70: __( 'Order', process.env.VUE_APP_TEXTDOMAIN ),
      txt_71: __( 'Date', process.env.VUE_APP_TEXTDOMAIN ),
      txt_72: __( 'Title', process.env.VUE_APP_TEXTDOMAIN ),
      txt_73: __( 'Price', process.env.VUE_APP_TEXTDOMAIN ),
      txt_74: __( 'Popularity', process.env.VUE_APP_TEXTDOMAIN ),
      txt_75: __( 'Rating', process.env.VUE_APP_TEXTDOMAIN ),
      txt_76: __( 'Random', process.env.VUE_APP_TEXTDOMAIN ),
      txt_77: __( 'Menu Order', process.env.VUE_APP_TEXTDOMAIN ),
      txt_78: __( 'ASC', process.env.VUE_APP_TEXTDOMAIN ),
      txt_79: __( 'DESC', process.env.VUE_APP_TEXTDOMAIN ),
      txt_80: __( 'General', process.env.VUE_APP_TEXTDOMAIN ),
      txt_81: __( 'Alignment', process.env.VUE_APP_TEXTDOMAIN ),
      txt_82: __( 'Description', process.env.VUE_APP_TEXTDOMAIN ),
      txt_83: __( 'Price', process.env.VUE_APP_TEXTDOMAIN ),
      txt_84: __( 'Price Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_85: __( 'Button', process.env.VUE_APP_TEXTDOMAIN ),
      txt_86: __( 'Button Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_87: __( 'Button Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_88: __( 'Button Size', process.env.VUE_APP_TEXTDOMAIN ),
      txt_89: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_90: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_91: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_92: __( 'X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_93: __( '2X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_94: __( 'Image', process.env.VUE_APP_TEXTDOMAIN ),
      txt_95: __( 'Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_96: __( 'Border Style', process.env.VUE_APP_TEXTDOMAIN ),
      txt_97: __( 'Solid', process.env.VUE_APP_TEXTDOMAIN ),
      txt_98: __( 'Dotted', process.env.VUE_APP_TEXTDOMAIN ),
      txt_99: __( 'Dashed', process.env.VUE_APP_TEXTDOMAIN ),
      txt_100: __( 'None', process.env.VUE_APP_TEXTDOMAIN ),
      txt_101: __( 'Hairline', process.env.VUE_APP_TEXTDOMAIN ),
      txt_102: __( 'Small', process.env.VUE_APP_TEXTDOMAIN ),
      txt_103: __( 'Medium', process.env.VUE_APP_TEXTDOMAIN ),
      txt_104: __( 'Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_105: __( 'X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_106: __( '2X Large', process.env.VUE_APP_TEXTDOMAIN ),
      txt_107: __( 'Bottom Drop Shadow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_108: __( 'Image Border Color', process.env.VUE_APP_TEXTDOMAIN ),
      txt_109: __( 'Image Border Width', process.env.VUE_APP_TEXTDOMAIN ),
      txt_110: __( 'Top', process.env.VUE_APP_TEXTDOMAIN ),
      txt_111: __( 'Right', process.env.VUE_APP_TEXTDOMAIN ),
      txt_112: __( 'Bottom', process.env.VUE_APP_TEXTDOMAIN ),
      txt_113: __( 'Left', process.env.VUE_APP_TEXTDOMAIN ),
      txt_114: __( 'Image Whitespace Padding', process.env.VUE_APP_TEXTDOMAIN ),
      txt_115: __( 'Limit', process.env.VUE_APP_TEXTDOMAIN ),
      txt_116: __( '- Select Options -', process.env.VUE_APP_TEXTDOMAIN ),
      txt_117: __( 'Date', process.env.VUE_APP_TEXTDOMAIN ),
      txt_118: __( 'ID', process.env.VUE_APP_TEXTDOMAIN ),
      txt_119: __( 'Menu Order', process.env.VUE_APP_TEXTDOMAIN ),
      txt_120: __( 'Popularity', process.env.VUE_APP_TEXTDOMAIN ),
      txt_121: __( 'Random', process.env.VUE_APP_TEXTDOMAIN ),
      txt_122: __( 'Rating', process.env.VUE_APP_TEXTDOMAIN ),
      txt_123: __( 'Title', process.env.VUE_APP_TEXTDOMAIN ),
      txt_124: __( 'Select By SKU', process.env.VUE_APP_TEXTDOMAIN ),
      txt_125: __( '- Select SKU(s) -', process.env.VUE_APP_TEXTDOMAIN ),
      txt_126: __( 'Select By Category', process.env.VUE_APP_TEXTDOMAIN ),
      txt_127: __( '- Select Categories -', process.env.VUE_APP_TEXTDOMAIN ),
      txt_128: __( 'Select By Tags', process.env.VUE_APP_TEXTDOMAIN ),
      txt_129: __( '- Select Tags -', process.env.VUE_APP_TEXTDOMAIN ),
      txt_130: __( 'Select By Group', process.env.VUE_APP_TEXTDOMAIN ),
      txt_131: __( '- Select Group -', process.env.VUE_APP_TEXTDOMAIN ),
      txt_132: __( 'On Sale', process.env.VUE_APP_TEXTDOMAIN ),
      txt_133: __( 'Best Selling', process.env.VUE_APP_TEXTDOMAIN ),
      txt_134: __( 'Top Rated', process.env.VUE_APP_TEXTDOMAIN ),
      txt_135: __( 'Query By Attribute', process.env.VUE_APP_TEXTDOMAIN ),
      txt_136: __( '- Select Attribute -', process.env.VUE_APP_TEXTDOMAIN ),
      txt_137: __( '- Select Attribute Terms -', process.env.VUE_APP_TEXTDOMAIN ),
      txt_138: __( 'Include Selected Terms', process.env.VUE_APP_TEXTDOMAIN ),
      txt_139: __( 'Exclude Selected Terms', process.env.VUE_APP_TEXTDOMAIN ),
      txt_140: __( 'Include Selected Tags', process.env.VUE_APP_TEXTDOMAIN ),
      txt_141: __( 'Exclude Selected Tags', process.env.VUE_APP_TEXTDOMAIN ),
      txt_142: __( 'Include Selected Categories', process.env.VUE_APP_TEXTDOMAIN ),
      txt_143: __( 'Exclude Selected Categories', process.env.VUE_APP_TEXTDOMAIN ),
      txt_144: __( 'Select By Visibility', process.env.VUE_APP_TEXTDOMAIN ),
      txt_145: __( '- Select Product Visibility -', process.env.VUE_APP_TEXTDOMAIN ),
      txt_146: __( 'Visible', process.env.VUE_APP_TEXTDOMAIN ),
      txt_147: __( 'Catalog', process.env.VUE_APP_TEXTDOMAIN ),
      txt_148: __( 'Search', process.env.VUE_APP_TEXTDOMAIN ),
      txt_149: __( 'Hidden', process.env.VUE_APP_TEXTDOMAIN ),
      txt_150: __( 'Featured', process.env.VUE_APP_TEXTDOMAIN ),
      txt_151: __( 'Custom Query', process.env.VUE_APP_TEXTDOMAIN ),
      txt_152: __( 'Select By ID', process.env.VUE_APP_TEXTDOMAIN ),
      txt_153: __( '- Select ID(s) -', process.env.VUE_APP_TEXTDOMAIN ),
      txt_154: __( 'Show Items Count', process.env.VUE_APP_TEXTDOMAIN ),
      txt_155: __( 'Show Order By', process.env.VUE_APP_TEXTDOMAIN ),
      txt_156: __( 'Sale Badge Color', process.env.VUE_APP_TEXTDOMAIN ),
      view: 1,
      section_1: true,
      section_2: true,
      section_3: true,
      section_4: true,
      section_5: false,
      section_6: false,
      queryIncludeExclude: 'include',
      products: [],
      categories: [],
      tags: [],
      productsWithSkus: [],
      attributes: [],
      attributeTerms: [],
      shared: seedprod_store,
    };
  },
  mounted() {
    let self = this;
    self.get_products();
    self.get_categories();
    self.get_tags();
    self.get_attributes();
    self.get_attribute_terms();
    lodash.forOwn( this.shared.block_templates[self.type], function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });
  },
  methods: {
    get_products() {
      let self = this;
      self.axios
        .get(
          'admin-ajax.php?action=' + self.shared.page_path + '_get_woocommerce_products&_wpnonce=' + seedprod_nonce
        )
        .then( function( response ) {
          self.products = response.data;

          // Filter products.
          self.filter_products_with_skus();
        })
        .catch( function( error ) {
          console.log( error );
        });
    },
    get_categories() {
      let self = this;
      self.axios
        .get(
          'admin-ajax.php?action=' + self.shared.page_path + '_get_woocommerce_product_taxonomy&taxonomy=product_cat&_wpnonce=' + seedprod_nonce
        )
        .then( function( response ) {
          self.categories = response.data;
        })
        .catch( function( error ) {
          console.log( error );
        });
    },
    get_tags() {
      let self = this;
      self.axios
        .get(
          'admin-ajax.php?action=' + self.shared.page_path + '_get_woocommerce_product_taxonomy&taxonomy=product_tag&_wpnonce=' + seedprod_nonce
        )
        .then( function( response ) {
          self.tags = response.data;
        })
        .catch( function( error ) {
          console.log( error );
        });
    },
    get_attributes() {
      let self = this;
      self.axios
        .get(
          'admin-ajax.php?action=' + self.shared.page_path + '_get_woocommerce_product_attributes&_wpnonce=' + seedprod_nonce
        )
        .then( function( response ) {
          self.attributes = response.data;
        })
        .catch( function( error ) {
          console.log( error );
        });
    },
    get_attribute_terms() {
      let self = this;
      self.axios
        .get(
          'admin-ajax.php?action=' + self.shared.page_path + '_get_woocommerce_product_attribute_terms&attribute=' + this.block.settings.queryAttribute + '&_wpnonce=' + seedprod_nonce
        )
        .then( function( response ) {
          self.attributeTerms = response.data;
        })
        .catch( function( error ) {
          console.log( error );
        });
    },
    filter_products_with_skus() {
      let self = this;
      let products_with_skus = [];
      let products = self.products;

      for ( let i = 0; i < products.length; i++ ) {
        if ( products[i].sku ) {
          products_with_skus.push( products[i]);
        }
      }

      self.productsWithSkus = products_with_skus;
    },
    update_button_size() {

      // xs
      if ( '1' === this.block.settings.btnSize ) {
        this.block.settings.buttonfontSize = 13;
        this.block.settings.buttonPaddingTop = 4;
        this.block.settings.buttonPaddingLeft = 8;
      }

      // sm
      if ( '2' === this.block.settings.btnSize ) {
        this.block.settings.buttonfontSize = 15;
        this.block.settings.buttonPaddingTop = 8;
        this.block.settings.buttonPaddingLeft = 12;
      }

      // md
      if ( '3' === this.block.settings.btnSize ) {
        this.block.settings.buttonfontSize = 18;
        this.block.settings.buttonPaddingTop = 12;
        this.block.settings.buttonPaddingLeft = 16;
      }

      // lg
      if ( '4' === this.block.settings.btnSize ) {
        this.block.settings.buttonfontSize = 22;
        this.block.settings.buttonPaddingTop = 16;
        this.block.settings.buttonPaddingLeft = 20;
      }

      // xl
      if ( '5' === this.block.settings.btnSize ) {
        this.block.settings.buttonfontSize = 26;
        this.block.settings.buttonPaddingTop = 20;
        this.block.settings.buttonPaddingLeft = 26;
      }

      // 2xl
      if ( '6' === this.block.settings.btnSize ) {
        this.block.settings.buttonfontSize = 32;
        this.block.settings.buttonPaddingTop = 28;
        this.block.settings.buttonPaddingLeft = 32;
      }
    },
    sync_image_border( sync ) {
      this.block.settings.imageBorderSync = sync;
      if ( sync ) {
        this.block.settings.imageBorderLeft = this.block.settings.imageBorderTop;
        this.block.settings.imageBorderBottom = this.block.settings.imageBorderTop;
        this.block.settings.imageBorderRight = this.block.settings.imageBorderTop;
      }
    },
  },
  components: {
    ColorPicker,
    TypographyControl,
    SliderControl,
    SpacingSectionControl,
    AlignControl,
  },
  props: {
    block: Object,
    type: String,
  },
};
</script>

