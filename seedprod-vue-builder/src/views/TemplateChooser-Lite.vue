<template>
  <div class>
    <div
      v-if="shared.free_templates_subscribed === false"
      class="
        sp--ml-5
        sp-bg-primary
        sp-text-white
        sp-py-2
        sp-px-8
        sp-text-sm
        sp-flex
        sp-justify-center
        sp-leading-normal
        sp-items-center
      "
    >
      <strong>Send Us Your Email and Get 10 Free Templates</strong>
      <input
        class="sp-ml-2 sp-form-input sp-pl-8 sp-rounded sp-mr-1 sp-text-neutral"
        style="padding: 4px"
        v-model="shared.current_user_email"
      />
      <button
        @click="subscribe_to_free_templates"
        class="sp-rounded sp-bg-neutral hover:sp-bg-neutral-80"
        style="padding: 6px 10px"
      >
        Get <strong>FREE</strong> Templates
      </button>
    </div>
    <!-- Top -->
    <div class="sp-bg-white">
      <div
        class="
          sp-bg-white
          sp-pt-6
          sp-pb-10
          sp-px-8
          sp-text-neutral
          sp-flex
          sp-justify-between
        "
        v-if="$router.currentRoute.name != 'welcome'"
      >
        <div class="sp-flex sp-justify-center sp-flex-1 sp-flex-col">
          <a
            :href="'admin.php?page=' + shared.page_path + '#/'"
            class="
              sp-text-neutral-60
              sp-text-12px
              sp-font-semibold
              sp-uppercase
              sp-mb-2
            "
            v-html="go_back_txt"
          ></a>
          <h1 class="sp-text-neutral sp-text-xl sp-font-bold">{{ txt_2 }}</h1>
        </div>
        <div>
          <a
            href="https://www.seedprod.com/docs/"
            target="_blank"
            class="
              sp-bg-neutral-10
              sp-rounded-full
              sp-flex
              sp-items-center
              sp-justify-center
              sp-p-c63
              sp-text-neutral-60
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-5 sp-h-5"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
              />
            </svg>
          </a>
        </div>
      </div>
      <!-- Tabs -->
      <div class="sp-flex sp-px-8 sp-bg-white">
        <div
          @click="set_tab(1)"
          :class="{
            'sp-border-b-2 sp-border-primary sp-text-neutral sp-font-bold':
              tab == 1,
          }"
          class="
            sp-text-base
            sp-cursor-pointer
            sp-font-semibold
            sp-text-neutral-60
            sp-pb-5
            sp-mr-8
            hover:sp-text-neutral
          "
        >
          {{ txt_3 }}
        </div>
        <div
          @click="showUpsellModal = true"
          :class="{
            'sp-border-b-2 sp-border-primary sp-text-neutral sp-font-bold':
              tab == 2,
          }"
          class="
            sp-text-base
            sp-cursor-pointer
            sp-font-semibold
            sp-text-neutral-60
            sp-mr-8
            hover:sp-text-neutral
          "
        >
          {{ txt_4 }}
        </div>
        <div
          @click="showUpsellModal = true"
          :class="{
            'sp-border-b-2 sp-border-primary sp-text-neutral sp-font-bold':
              tab == 3,
          }"
          class="
            sp-text-base sp-cursor-pointer sp-font-semibold sp-text-neutral-60
            hover:sp-text-neutral
          "
        >
          {{ txt_5 }}
        </div>
      </div>
    </div>

    <!-- Filter -->
    <div v-if="tab == 2">
      <div class="sp-p-8">
        <!-- <div class="sp-grid sp-grid-cols-3"> -->
        <div
          v-if="favs === false || favs.data.length > 0"
          class="themes clearfix"
        >
          <!-- <div
            v-masonry
            transition-duration="0.3s"
            item-selector=".theme"
            :key="componentKey"
            :gutter="10"
          > -->
          <masonry
            :cols="{ default: 5, 1500: 4, 1000: 3, 700: 2, 400: 1 }"
            :gutter="{ default: '30px', 700: '15px' }"
          >
            <div
              v-for="theme in favs.data"
              class="theme"
              style="border: none; margin-bottom: 2%"
              :key="theme.id"
            >
              <div
                class="
                  sp-bg-white sp-p-1 sp-border sp-border-neutral-15 sp-relative
                "
                @mouseenter="set_template_hover(theme.id)"
                @mouseleave="set_template_hover(false)"
              >
                <img
                  class="sp-border-none"
                  :src="
                    'https://assets.seedprod.com/preview-' + theme.id + '.png'
                  "
                />

                <div
                  class="
                    sp-absolute
                    sp-top-0
                    sp-left-0
                    sp-right-0
                    sp-bottom-0
                    sp-flex
                    sp-items-center
                    sp-justify-center
                  "
                  v-show="template_hover == theme.id"
                >
                  <div
                    class="
                      sp-bg-neutral
                      sp-opacity-75
                      sp-absolute
                      sp-top-0
                      sp-left-0
                      sp-right-0
                      sp-bottom-0
                      sp-m-1
                    "
                  ></div>
                  <button
                    class="
                      sp-mr-1
                      sp-bg-primary
                      sp-w-10
                      sp-h-10
                      sp-rounded-full
                      sp-z-10
                      sp-text-white
                      sp-flex
                      sp-items-center
                      sp-justify-center
                    "
                    @click="save_template(theme.id)"
                    :disabled="shared.doing_ajax ? true : false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="sp-fill-current sp-w-5 sp-h-5"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                      />
                    </svg>
                  </button>
                  <button
                    @click="preview_template(theme.id, theme.name)"
                    class="
                      sp-ml-1
                      sp-bg-neutral
                      sp-w-10
                      sp-h-10
                      sp-rounded-full
                      sp-z-10
                      sp-text-white
                      sp-flex
                      sp-items-center
                      sp-justify-center
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="sp-fill-current sp-w-5 sp-h-5"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path
                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm.5-7H9v2H7v1h2v2h1v-2h2V9h-2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                class="
                  sp-mt-2
                  sp-text-neutral-80
                  sp-text-xs
                  sp-font-bold
                  sp-flex
                  sp-items-center
                  sp-justify-between
                "
              >
                {{ theme.name }}
                <span
                  class="sp-text-red sp-cursor-pointer"
                  v-if="theme.favorited"
                  @click="updateFavs(theme.id, 'detach')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-4 sp-h-4"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                </span>
                <span
                  v-else
                  class="sp-text-neutral-40 sp-cursor-pointer"
                  @click="updateFavs(theme.id, 'attach')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-4 sp-h-4"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </masonry>
          <!-- </div> -->
        </div>

        <div v-else class="sp-text-center sp-text-base sp-m-20 sp-text-neutral">
          {{ txt_6 }}
          <i
            class="fas fa-question-circle sp-ml-2"
            v-tooltip.top-left="{
              content: txt_24,
            }"
          ></i>
        </div>

        <!-- pagination -->
      </div>
    </div>
    <div v-if="tab == 3">
      <div class="sp-p-8 theme-browser">
        <!-- <div class="sp-grid sp-grid-cols-3"> -->
        <div
          v-if="saved === false || saved.data.length > 0"
          class="themes clearfix"
        >
          <div
            v-for="theme in saved.data"
            class="theme"
            style="border: none; margin-bottom: 5%"
            :key="theme.id"
          >
            <div
              class="
                sp-bg-white sp-p-1 sp-border sp-border-neutral-15 sp-relative
              "
              @mouseenter="set_template_hover(theme.id)"
              @mouseleave="set_template_hover(false)"
            >
              <img
                class="sp-border-none"
                :src="'https://assets.seedprod.com/preview-saved.png'"
              />

              <div
                class="
                  sp-absolute
                  sp-top-0
                  sp-left-0
                  sp-right-0
                  sp-bottom-0
                  sp-flex
                  sp-items-center
                  sp-justify-center
                "
                v-show="template_hover == theme.id"
              >
                <div
                  class="
                    sp-bg-neutral
                    sp-opacity-75
                    sp-absolute
                    sp-top-0
                    sp-left-0
                    sp-right-0
                    sp-bottom-0
                    sp-m-1
                  "
                ></div>
                <button
                  class="
                    sp-mr-1
                    sp-bg-primary
                    sp-w-10
                    sp-h-10
                    sp-rounded-full
                    sp-z-10
                    sp-text-white
                    sp-flex
                    sp-items-center
                    sp-justify-center
                  "
                  @click="save_template(theme.id)"
                  :disabled="shared.doing_ajax ? true : false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5 sp-h-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                    />
                  </svg>
                </button>
                <button
                  @click="preview_template(theme.id, theme.name)"
                  class="
                    sp-ml-1
                    sp-bg-neutral
                    sp-w-10
                    sp-h-10
                    sp-rounded-full
                    sp-z-10
                    sp-text-white
                    sp-flex
                    sp-items-center
                    sp-justify-center
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5 sp-h-5"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm.5-7H9v2H7v1h2v2h1v-2h2V9h-2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              class="
                sp-mt-2
                sp-text-neutral-80
                sp-text-xs
                sp-font-bold
                sp-flex
                sp-items-center
                sp-justify-between
              "
            >
              {{ theme.name }}
              <span
                class="sp-text-neutral-40 sp-cursor-pointer"
                @click="remove_saved(theme.id)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-4 sp-h-4"
                >
                  <path
                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"
                  />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div v-else class="sp-text-center sp-text-base sp-m-20 sp-text-neutral">
          {{ txt_7 }}
          <i
            class="fas fa-question-circle sp-ml-2"
            v-tooltip.top-left="{
              content: txt_25,
            }"
          ></i>
        </div>

        <!-- pagination -->
      </div>
    </div>
    <div v-if="tab == 1">
      <div class="sp-px-8 sp-flex sp-items-center sp-pt-12">
        <div class="sp-flex-1">
          <span
            class="
              sp-text-neutral-60
              sp-uppercase
              sp-text-12px
              sp-tracking-wider
              sp-mr-4
              sp-font-semibold
            "
            >{{ txt_8 }}</span
          >
          <button
            :class="{
              'sp-cat-active': templatecat == 0,
            }"
            class="
              sp-inline-block
              sp-px-4
              sp-py-2
              sp-rounded-sm
              sp-leading-none
              sp-no-underline
              sp-text-xs
              hover:sp-bg-neutral-20
              sp-cursor-pointer
              sp-font-semibold
              sp-mr-2
              sp-bg-neutral-15
              sp-text-neutral-80
            "
            @click="filter_cat(0)"
          >
            {{ txt_9 }}
          </button>
          <button
            v-for="(c, i) in cats"
            :key="i"
            :class="{
              'sp-cat-active': templatecat == c.id,
            }"
            class="
              sp-inline-block
              sp-px-4
              sp-py-2
              sp-rounded-sm
              sp-leading-none
              sp-no-underline
              sp-text-xs
              hover:sp-bg-neutral-20
              sp-cursor-pointer
              sp-font-semibold
              sp-bg-neutral-15
              sp-text-neutral-80
              sp-mr-2
              sp-mb-2
            "
            @click="filter_cat(c.id)"
          >
            {{ c.name }}
          </button>
        </div>

        <div
          class="
            sp-pl-5
            sp-flex
            sp-justify-center
            sp-items-center
            sp-relative
            sp-w-280
          "
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
            v-model="templatesearch"
            v-on:keyup.enter="search"
            :placeholder="txt_22"
            class="sp-form-input sp-w-full sp-pl-8 sp-rounded sp-mr-1"
          />
        </div>
        <span
          v-if="templatesearch != ''"
          class="
            sp-text-neutral-40 sp--ml-6 sp-relative sp-z-10 sp-cursor-pointer
          "
          @click="clear_search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-4 sp-h-4"
          >
            <path
              d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </span>
      </div>

      <!-- Chooser -->
      <div class="sp-p-8 theme-browser">
        <!-- <div class="sp-grid sp-grid-cols-3"> -->
        <div
          v-if="themes === false || themes.data.length > 0"
          class="themes clearfix"
        >
          <div
            v-for="theme in themes.data"
            class="theme"
            style="border: none; margin-bottom: 2%"
            :key="theme.id"
          >
            <div
              class="
                sp-bg-white sp-p-1 sp-border sp-border-neutral-15 sp-relative
              "
              @mouseenter="set_template_hover(theme.id)"
              @mouseleave="set_template_hover(false)"
            >
              <img
                class="sp-border-none"
                :src="
                  'https://assets.seedprod.com/preview-' + theme.id + '.png'
                "
              />

              <div
                v-if="theme.free == 0"
                class="
                  sp-absolute
                  sp-top-0
                  sp-right-0
                  sp-bg-green
                  sp-rounded
                  sp-text-white
                  sp-z-20
                  sp-py-1
                  sp-px-2
                  sp-text-12px
                  sp-font-semibold
                  sp-mt-2
                  sp-mr-2
                "
              >
                PRO
              </div>

              <div
                v-if="theme.free_w_email == 1"
                class="
                  sp-absolute
                  sp-top-0
                  sp-right-0
                  sp-bg-primary
                  sp-rounded
                  sp-text-white
                  sp-z-20
                  sp-py-1
                  sp-px-2
                  sp-text-12px
                  sp-font-semibold
                  sp-mt-2
                  sp-mr-2
                "
              >
                SUBSCRIBE ABOVE TO UNLOCK
              </div>

              <div
                class="
                  sp-absolute
                  sp-top-0
                  sp-left-0
                  sp-right-0
                  sp-bottom-0
                  sp-flex
                  sp-items-center
                  sp-justify-center
                "
                v-show="template_hover == theme.id"
              >
                <div
                  class="
                    sp-bg-neutral
                    sp-opacity-75
                    sp-absolute
                    sp-top-0
                    sp-left-0
                    sp-right-0
                    sp-bottom-0
                    sp-m-1
                  "
                ></div>
                <button
                  class="
                    sp-mr-1
                    sp-bg-primary
                    sp-w-10
                    sp-h-10
                    sp-rounded-full
                    sp-z-10
                    sp-text-white
                    sp-flex
                    sp-items-center
                    sp-justify-center
                  "
                  @click="save_template(theme.id)"
                  :disabled="shared.doing_ajax ? true : false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5 sp-h-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                    />
                  </svg>
                </button>
                <button
                  @click="preview_template(theme.id, theme.name)"
                  class="
                    sp-ml-1
                    sp-bg-neutral
                    sp-w-10
                    sp-h-10
                    sp-rounded-full
                    sp-z-10
                    sp-text-white
                    sp-flex
                    sp-items-center
                    sp-justify-center
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5 sp-h-5"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm.5-7H9v2H7v1h2v2h1v-2h2V9h-2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              class="
                sp-mt-2
                sp-text-neutral-80
                sp-text-xs
                sp-font-bold
                sp-flex
                sp-items-center
                sp-justify-between
              "
            >
              {{ theme.name }}
              <span
                v-if="theme.favorited"
                class="sp-text-red sp-cursor-pointer"
                @click="updateFavs(theme.id, 'detach')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-4 sp-h-4"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </span>
              <span
                v-else
                class="sp-text-neutral-40 sp-cursor-pointer"
                @click="updateFavs(theme.id, 'attach')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-4 sp-h-4"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div v-else class="sp-text-center sp-m-20 sp-text-neutral">
          {{ txt_10 }}
        </div>
      </div>
      <!-- pagination -->
      <div
        v-if="themes.last_page != 1"
        class="
          sp-flex
          sp-items-center
          sp-justify-center
          sp-text-xs
          sp-text-neutral-40
        "
      >
        <a
          href="#"
          @click.prevent="pagination('first')"
          :disabled="!themes.first_page_url"
          class="sp-mx-2 sp-flex sp-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-5 sp-h-5"
          >
            <path
              d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
            />
            <path d="M24 24H0V0h24v24z" fill="none" /></svg
          >{{ txt_18 }}
        </a>
        <a
          href="#"
          @click.prevent="pagination('prev')"
          :disabled="!themes.prev_page_url"
          class="sp-mx-2 sp-flex sp-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-5 sp-h-5"
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            <path d="M0 0h24v24H0z" fill="none" /></svg
          >{{ txt_19 }}
        </a>
        <a
          href="#"
          @click.prevent="pagination('next')"
          :disabled="!themes.next_page_url"
          class="sp-mx-2 sp-flex sp-items-center"
        >
          {{ txt_20 }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-5 sp-h-5"
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </a>
        <a
          href="#"
          @click.prevent="pagination('last')"
          :disabled="!themes.last_page_url"
          class="sp-mx-2 sp-flex sp-items-center"
        >
          {{ txt_21 }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-5 sp-h-5"
          >
            <path
              d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
            />
            <path d="M0 0h24v24H0V0z" fill="none" />
          </svg>
        </a>
      </div>
    </div>
    <!-- Preview -->
    <div
      v-if="showPreview"
      class="sp-fixed sp-top-0 sp-left-0 sp-bottom-0 sp-right-0"
      style="z-index: 99999"
    >
      <div
        class="
          sp-absolute
          sp-bg-neutral-60
          sp-top-0
          sp-left-0
          sp-bottom-0
          sp-right-0
          sp-opacity-75
        "
      ></div>
      <div
        class="
          sp-relative
          sp-z-40
          sp-bg-neutral
          sp-text-white
          sp-h-72px
          sp-flex
          sp-items-center
          sp-px-5
          sp-justify-between
        "
      >
        <div class="sp-flex sp-items-center sp-w-1/3">
          <svg
            width="32"
            height="34"
            viewBox="0 0 32 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0C0 0 0.74666 0.0506396 16.0822 2.054C31.4178 4.05737 36.7255 19.603 27.3358 33.1707C28.7883 21.0478 26.13 8.47161 15.4523 7.00138C4.77453 5.53114 5.70455 5.75641 5.70455 5.75641C5.70455 5.75641 5.88147 8.42652 6.8834 15.6043C7.88534 22.7821 13.4921 26.3022 18.3988 28.1143C18.3988 28.1143 18.6866 19.714 15.949 16.0165C13.2114 12.3191 9.80548 9.86362 9.80548 9.86362C9.80548 9.86362 17.8094 10.8232 20.8313 16.4032C23.8532 21.9832 23.5588 33.7778 23.5588 33.7778L20.2989 33.6092C11.5273 32.556 3.33239 27.2759 1.939 16.198C0.545613 5.1201 0 0 0 0Z"
              fill="#7B6B7A"
            />
          </svg>

          <span
            class="sp-pl-8 sp-text-base sp-text-neutral-40 sp-text-semibold"
            >{{ preview_page_name }}</span
          >
        </div>
        <div class="sp-flex sp-items-center sp-w-1/3 sp-justify-center">
          <button
            @click="set_preview_mode('desktop')"
            class="
              sp-w-8
              sp-h-8
              sp-rounded-full
              sp-flex
              sp-items-center
              sp-justify-center
              sp-mr-1
              sp-cursor-pointer
            "
            :class="{
              'sp-bg-white sp-text-neutral-80': preview_mode == 'desktop',
              'sp-bg-neutral-40': preview_mode == 'mobile',
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-4 sp-h-4"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"
              />
            </svg>
          </button>
          <button
            @click="set_preview_mode('mobile')"
            class="
              sp-w-8
              sp-h-8
              sp-rounded-full
              sp-flex
              sp-items-center
              sp-justify-center
              sp-ml-2
              sp-cursor-pointer
            "
            :class="{
              'sp-bg-white sp-text-neutral-80': preview_mode == 'mobile',
              'sp-bg-neutral-40': preview_mode == 'desktop',
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-4 sp-h-4"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"
              />
            </svg>
          </button>
        </div>
        <div class="sp-flex sp-items-center sp-w-1/3 sp-justify-end">
          <button
            @click="save_template(previewId)"
            class="
              sp-inline-block
              sp-bg-primary
              sp-px-4
              sp-py-3
              sp-rounded
              sp-leading-none
              sp-text-white
              sp-no-underline
              sp-text-sm
              hover:sp-bg-primary-lighter
              sp-cursor-pointer sp-font-semibold sp-mr-5
            "
          >
            {{ txt_12 }}
          </button>
          <button class="sp-text-neutral-40" @click="close_preview_template">
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
        </div>
      </div>
      <div class="sp-overflow-y-scroll sp-h-full">
        <iframe
          :src="shared.template_preview_path + previewId + '.html'"
          class
          :class="{
            'sp-transition-width sp-duration-500 sp-ease-out sp-h-full sp-h-600px sp-relative sp-w-350px  sp-mx-auto sp-my-10 sp-rounded-lg sp-p-3 sp-bg-white':
              preview_mode == 'mobile',
            'sp-h-full sp-relative sp-w-full ': preview_mode == 'desktop',
          }"
        ></iframe>
      </div>
    </div>

    <!-- Modal -->
    <modal v-if="showModal" @close="showModal = false" class="sp-w-720px">
      <div slot="body" class="sp-px-10 sp-py-12 sp-text-neutral sp-relative">
        <button
          class="
            sp-text-neutral-40
            hover:sp-text-neutral-60
            sp-absolute sp-top-0 sp-right-0 sp-m-2
          "
          @click="showModal = false"
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
        <h1 class="sp-leading-none sp-text-2xl sp-font-bold sp-mb-3">
          {{ txt_13 }}
        </h1>
        <p class="sp-text-base sp-mb-10">{{ txt_14 }}</p>
        <div>
          <div>
            <label class="sp-text-lg sp-font-bold sp-mb-3 sp-inline-block">{{
              txt_15
            }}</label>
          </div>
          <input
            type="text"
            v-model="page_name"
            v-validate="'required'"
            data-vv-as="Page Name"
            name="page_name"
            class="
              sp-form-input
              sp-w-full
              sp-px-5
              sp-rounded
              sp-border
              sp-border-neutral-20
              sp-p-4
              sp-rounded-sm
            "
            style="padding: 7px 18px; color: #230820"
            :placeholder="txt_23"
          />
          <div v-show="errors.has('page_name')" class="sp-text-red sp-mt-1">
            {{ errors.first("page_name") }}
          </div>
        </div>
        <div class="sp-mt-8">
          <div>
            <label class="sp-text-lg sp-font-bold sp-mb-3 sp-inline-block">{{
              txt_16
            }}</label>
          </div>
          <div
            class="
              sp-flex sp-items-center sp-border sp-border-neutral-20 sp-rounded
            "
          >
            <span
              class="
                sp-rounded-tl
                sp-rounded-bl
                sp-h-42px
                sp-flex
                sp-items-center
                sp-justify-center
                sp-px-5
                sp-bg-neutral-5
                sp-text-neutral-60
                sp-text-lg
              "
              style="padding: 23px 18px"
              >{{ shared.home_url }}/</span
            >
            <input
              type="text"
              v-model="page_slug"
              v-validate="'alpha_dash|required'"
              name="slug"
              class="sp-form-input sp-border-none sp-flex-1"
              data-vv-as="Page URL"
              style="
                display: inline-block;
                width: 300px;
                border: none;
                color: #230820;
              "
            />
          </div>
          <div v-show="errors.has('slug')" class="sp-text-red sp-mt-1">
            {{ errors.first("slug") }}
          </div>
        </div>
        <button
          @click="close_modal"
          class="
            sp-mt-8
            sp-inline-block
            sp-bg-primary
            sp-px-6
            sp-py-4
            sp-rounded
            sp-leading-none
            sp-text-white
            sp-no-underline
            sp-text-lg
            hover:sp-bg-primary-lighter
            sp-cursor-pointer sp-font-semibold
          "
          :disabled="going_to_next_step"
        >
          {{ txt_17 }}
          <span v-if="!going_to_next_step" class="sp-ml-2">&rarr;</span>
          <span v-else class="sp-ml-2">
            <i class="fas fa-spinner fa-spin"></i>
          </span>
        </button>
      </div>
      <h3 slot="header"></h3>
    </modal>

    <!-- Lite CTA -->
    <modal
      v-if="showUpsellModal"
      @close="showUpsellModal = false"
      class="sp-w-550px"
    >
      <div slot="body" class="sp-px-10 sp-py-12 sp-text-neutral sp-relative">
        <button
          class="
            sp-text-neutral-40
            hover:sp-text-neutral-60
            sp-absolute sp-top-0 sp-right-0 sp-m-2
          "
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
        <LiteCTATemplates />
      </div>
      <h3 slot="header"></h3>
    </modal>
  </div>
</template>

<script>
import { __ } from "@wordpress/i18n";
import qs from "qs";
import NProgress from "nprogress";
import modal from "@/components/Modal.vue";
import { helpers } from "../mixins/helpers.js";
import LiteCTATemplates from "@/components/LiteCTATemplates.vue";

export default {
  name: "templatechooser",
  mixins: [helpers],
  data() {
    return {
      componentKey: 0,
      txt_1: __("&larr; Go Back", process.env.VUE_APP_TEXTDOMAIN),
      txt_111: __("&larr; Go to Dashboard", process.env.VUE_APP_TEXTDOMAIN),
      txt_2: __("Choose a New Page Template", process.env.VUE_APP_TEXTDOMAIN),
      txt_3: __("All Templates", process.env.VUE_APP_TEXTDOMAIN),
      txt_4: __("Favorite Templates", process.env.VUE_APP_TEXTDOMAIN),
      txt_5: __("Saved Templates", process.env.VUE_APP_TEXTDOMAIN),
      txt_6: __("No Favorited Templates Found", process.env.VUE_APP_TEXTDOMAIN),
      txt_7: __("No Saved Templates Found", process.env.VUE_APP_TEXTDOMAIN),
      txt_8: __("Filter:", process.env.VUE_APP_TEXTDOMAIN),
      txt_9: __("All", process.env.VUE_APP_TEXTDOMAIN),
      txt_10: __("No Templates Found", process.env.VUE_APP_TEXTDOMAIN),
      txt_11: __("Choose This Template", process.env.VUE_APP_TEXTDOMAIN),
      txt_12: __("Choose This Template", process.env.VUE_APP_TEXTDOMAIN),
      txt_13: __("Enter your new page details", process.env.VUE_APP_TEXTDOMAIN),
      txt_14: __(
        "You can always change it later in Page Settings.",
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_15: __("Page Name:", process.env.VUE_APP_TEXTDOMAIN),
      txt_16: __("Page URL:", process.env.VUE_APP_TEXTDOMAIN),
      txt_17: __(
        "Save and Start Editing the Page",
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_18: __("First Page", process.env.VUE_APP_TEXTDOMAIN),
      txt_19: __("Prev", process.env.VUE_APP_TEXTDOMAIN),
      txt_20: __("Next", process.env.VUE_APP_TEXTDOMAIN),
      txt_21: __("Last Page", process.env.VUE_APP_TEXTDOMAIN),
      txt_22: __("Search templates...", process.env.VUE_APP_TEXTDOMAIN),
      txt_23: __(
        "My Landing Page name goes here",
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_24: __(
        "You can favorite any template by clicking the heart icon under the page template.",
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_25: __(
        "You can save pages as templates in the builder. Any saved pages will be shown here.",
        process.env.VUE_APP_TEXTDOMAIN
      ),
      preview_mode: "desktop",
      preview_page_name: false,
      previewId: false,
      showPreview: false,
      going_to_next_step: false,
      selected_template_id: false,
      page_name: "",
      page_slug: "",
      templatesearch: "",
      templatecat: "",
      tab: 1,
      showModal: false,
      showUpsellModal: false,
      themes: false,
      saved: false,
      favs: false,
      cats: false,
      template_hover: false,
      shared: seedprod_store,
      subscribe_to_free_templates_url:
        seedprod_remote_api + "templates-subscribe",
      template_api_url: seedprod_remote_api + "templates?page=1",
      template_api_url_preview:
        seedprod_remote_api + "templates-preview?page=1",
      template_update_api_url: seedprod_remote_api + "template-update",
    };
  },
  computed: {
    go_back_txt: function () {
      var txt = this.txt_1;
      if ("sidebar" == seedprod_from) {
        var txt = this.txt_111;
      }

      return txt;
    },
  },
  created: function () {
    if ("cs" == this.shared.settings.page_type) {
      this.templatecat = 1;
    }
    if ("mm" == this.shared.settings.page_type) {
      this.templatecat = 2;
    }
    if ("p404" == this.shared.settings.page_type) {
      this.templatecat = 3;
    }
    if ("loginp" == this.shared.settings.page_type) {
      this.templatecat = 4;
    }
    this.loadCats();
    this.loadThemes();

    //this.recordPage();

    // Highlight Subscribers admin sub-menu link when it is current page
    const pagesMenuLink = document.querySelector(
      '[id^="toplevel_page_seedprod_"] > .wp-submenu > li:nth-of-type(2)'
    );
    const subscribersMenuLink = document.querySelector(
      '[id^="toplevel_page_seedprod_"] > .wp-submenu > li:nth-of-type(3)'
    );
    pagesMenuLink.classList.remove("current");
    subscribersMenuLink.classList.add("current");
  },

  watch: {
    page_name: {
      handler: function (val, oldVal) {
        this.page_slug = this.slugify(val);
      },
    },
  },
  methods: {
    subscribe_to_free_templates: function () {
      let self = this;
      let data = qs.stringify({
        email: this.shared.current_user_email,
        site_token: this.shared.site_token,
      });
      this.axios
        .post(this.subscribe_to_free_templates_url, data, {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        })
        .then(function (response) {
          NProgress.done();
          self.shared.free_templates_subscribed = "1";
          self.loadThemes();
          self.$swal({
            imageUrl:
              self.shared.plugin_path + "public/svg/success-24px-white.svg",
            text: "You now have access to 10 FREE templates.",
            toast: true,
            type: null,
            customClass: "sp-toast-success",
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
          });

          // mark as subscribed
          self.axios.get(seedprod_template_subscribe_url);

          // open landong page
          window.open("https://www.seedprod.com/free-templates");
        })
        .catch(function (error) {
          console.log(error.response);
          self.shared.doing_ajax = false;
          self.$swal({
            imageUrl:
              self.shared.plugin_path + "public/svg/error-24px-white.svg",
            text: error.response.data.message,
            toast: true,
            type: null,
            customClass: "sp-toast-error",
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
          });
        });
    },
    slugify: function (text) {
      return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
    },
    set_preview_mode(mode) {
      this.preview_mode = mode;
    },
    preview_template(id, name) {
      this.previewId = id;
      this.showPreview = true;
      this.preview_page_name = name;
      this.set_template_hover(false);
    },
    close_preview_template() {
      this.previewId = false;
      this.showPreview = false;
      this.preview_page_name = false;
    },
    remove_saved(id) {
      let theme_id = id;
      let self = this;

      NProgress.start();

      this.$swal({
        imageUrl: "",
        title: __(
          "Are you sure you want to delete?",
          process.env.VUE_APP_TEXTDOMAIN
        ),
        type: null,
        showCancelButton: true,
        confirmButtonColor: "#d33",

        //cancelButtonColor: '',
        confirmButtonText: __(
          "Yes, delete it!",
          process.env.VUE_APP_TEXTDOMAIN
        ),
      }).then((result) => {
        if (result.value) {
          // remove saved call
          //this.$delete(this.shared.settings.block_options, index);
          let data = qs.stringify({
            template_id: theme_id,
            method: "remove-saved",
            api_token: this.shared.api_token,
            site_token: this.shared.site_token,
          });

          this.axios
            .post(this.template_update_api_url, data, {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            })
            .then(function (response) {
              NProgress.done();

              // remove from local list
              for (let key in self.saved.data) {
                if (self.saved.data[key].id == theme_id) {
                  self.saved.data.splice(key, 1);
                }
              }
            })
            .catch(function (error) {
              console.log(error);
              NProgress.done();
              self.$swal({
                imageUrl:
                  self.shared.plugin_path + "public/svg/error-24px-white.svg",
                text: error.response.data.message,
                toast: true,
                type: null,
                customClass: "sp-toast-error",
                position: "top-end",
                showConfirmButton: false,
                timer: 5000,
              });
            });

          // show confirmations
          this.$swal({
            imageUrl:
              self.shared.plugin_path + "public/svg/error-24px-white.svg",
            text: __("Deleted!", process.env.VUE_APP_TEXTDOMAIN),
            toast: true,
            type: null,
            customClass: "sp-toast-error",
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
          });
        } else {
          NProgress.done();
        }
      });
    },
    set_tab(t) {
      this.tab = t;
      if (1 == t) {
        this.loadThemes();
      }
      if (2 == t) {
        this.loadFavs();
      }
      if (3 == t) {
        this.loadSaved();
      }
    },
    pagination(page) {
      if ("first" == page && this.themes.first_page_url) {
        this.template_api_url = this.themes.first_page_url;
        this.loadThemes();
      }
      if ("prev" == page && this.themes.prev_page_url) {
        this.template_api_url = this.themes.prev_page_url;
        this.loadThemes();
      }
      if ("next" == page && this.themes.next_page_url) {
        this.template_api_url = this.themes.next_page_url;
        this.loadThemes();
      }
      if ("last" == page && this.themes.last_page_url) {
        this.template_api_url = this.themes.last_page_url;
        this.loadThemes();
      }
    },
    search() {
      this.templatecat = "";
      this.loadThemes();
    },
    clear_search() {
      this.templatesearch = "";
      this.loadThemes();
    },
    filter_cat(cat) {
      this.templatesearch = "";
      this.templatecat = cat;
      this.loadThemes();
    },
    updateFavs(id, method) {
      let data = qs.stringify({
        template_id: id,
        method: method,
        api_token: this.shared.api_token,
        site_token: this.shared.site_token,
      });

      var t = this.themes.data;
      t.forEach(function (v) {
        if (v.id == id) {
          v.favorited = !v.favorited;
        }
      });

      // remove from favs
      var t = this.favs.data;

      for (let key in this.favs.data) {
        if (this.favs.data[key].id == id) {
          this.favs.data.splice(key, 1);
        }
      }

      this.axios
        .post(this.template_update_api_url, data, {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        })
        .then(function (response) {
          NProgress.done();
        })
        .catch(function (error) {
          console.log(error.response);
          self.shared.doing_ajax = false;
          self.$swal({
            imageUrl:
              self.shared.plugin_path + "public/svg/error-24px-white.svg",
            text: error.response.data.message,
            toast: true,
            type: null,
            customClass: "sp-toast-error",
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
          });
        });
    },
    recordPage() {
      let self = this;

      self.loading = true;
      NProgress.start();

      let data = qs.stringify({
        page_uuid: this.shared.page_uuid,
        site_token: this.shared.site_token,
        api_token: this.shared.api_token,
        page_type: this.shared.page_type,
      });

      self.axios.post(seedprod_remote_api + "record-page", data, {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      });
    },
    loadCats() {
      let self = this;

      self.loading = true;
      NProgress.start();

      let url = this.template_api_url;
      if (false == this.shared.api_token) {
        url = this.template_api_url_preview;
      }

      this.axios
        .get(
          url +
            "&filter=cats" +
            "&api_token=" +
            self.shared.api_token +
            "&site_token=" +
            self.shared.site_token
        )
        .then(function (response) {
          self.cats = response.data;
        })
        .catch(function (error) {
          console.log(error.response);
          self.shared.doing_ajax = false;
          self.$swal({
            imageUrl:
              self.shared.plugin_path + "public/svg/error-24px-white.svg",
            text: error.response.data.message,
            toast: true,
            type: null,
            customClass: "sp-toast-error",
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
          });
        });
    },
    blankTemplate() {
      let bt = {
        id: 99999,
        favorited: false,
        name: "Blank Template",
      };
      return bt;
    },
    loadThemes() {
      let self = this;

      self.loading = true;
      NProgress.start();

      let url = this.template_api_url;
      if (false == this.shared.api_token) {
        url = this.template_api_url_preview;
      }

      this.axios
        .get(
          url +
            "&filter=templates" +
            "&s=" +
            this.templatesearch +
            "&cat=" +
            this.templatecat +
            "&api_token=" +
            self.shared.api_token +
            "&site_token=" +
            self.shared.site_token +
            "&free_subscribed=" +
            self.shared.free_templates_subscribed
        )
        .then(function (response) {
          self.loading = false;
          NProgress.done();

          let t = response.data.templates.data;
          if (false != self.shared.api_token) {
            t.forEach(function (v) {
              v.favorited = response.data.favs.includes(v.id);
            });
          }

          self.themes = response.data.templates;

          // get blank template
          //console.log(self.blankTemplate());
          //self.themes.data.unshift(self.blankTemplate());
        })
        .catch(function (error) {
          NProgress.done();
          console.log(error);
          self.shared.doing_ajax = false;
          self.$swal({
            imageUrl:
              self.shared.plugin_path + "public/svg/error-24px-white.svg",
            text: error.response.data.message,
            toast: true,
            type: null,
            customClass: "sp-toast-error",
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
          });
        });
    },
    loadFavs() {
      let self = this;

      self.loading = true;
      NProgress.start();

      this.axios
        .get(
          this.template_api_url +
            "&filter=favorites" +
            "&api_token=" +
            self.shared.api_token +
            "&site_token=" +
            self.shared.site_token
        )
        .then(function (response) {
          self.loading = false;
          NProgress.done();

          let t = response.data.data;
          t.forEach(function (v) {
            v.favorited = true;
          });

          self.favs = response.data;
        })
        .catch(function (error) {
          NProgress.done();
          console.log(error.response);
          self.shared.doing_ajax = false;
          self.$swal({
            imageUrl:
              self.shared.plugin_path + "public/svg/error-24px-white.svg",
            text: error.response.data.message,
            toast: true,
            type: null,
            customClass: "sp-toast-error",
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
          });
        });
    },
    loadSaved() {
      let self = this;

      self.loading = true;
      NProgress.start();

      this.axios
        .get(
          this.template_api_url +
            "&filter=saved" +
            "&api_token=" +
            self.shared.api_token +
            "&site_token=" +
            self.shared.site_token
        )
        .then(function (response) {
          self.loading = false;
          NProgress.done();
          self.saved = response.data;
        })
        .catch(function (error) {
          NProgress.done();
          console.log(error.response);
          self.shared.doing_ajax = false;
          self.$swal({
            imageUrl:
              self.shared.plugin_path + "public/svg/error-24px-white.svg",
            text: error.response.data.message,
            toast: true,
            type: null,
            customClass: "sp-toast-error",
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
          });
        });
    },
    set_template_hover: function (id) {
      this.template_hover = id;
    },
    close_modal: function () {
      let _self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          _self.going_to_next_step = true;

          // Check slug
          let data = qs.stringify({
            post_name: _self.page_slug,
          });

          _self.axios
            .post(seedprod_slug_exists_url, data, {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            })
            .then(function (response) {
              if (response.data.success) {
                _self.going_to_next_step = true;
                _self.save_template(_self.selected_template_id);
              } else {
                _self.going_to_next_step = false;
                _self.page_slug = "";
                alert(
                  "This page url already exisits. Please choose a unique page url."
                );
              }
            });
        } else {
          let errors = "";
          _self.errors.all().forEach(function (value) {
            errors = errors + value + "\n";
          });
          errors = errors + "";

          _self.$swal({
            imageUrl:
              _self.shared.plugin_path + "public/svg/error-24px-white.svg",
            text: errors,
            toast: true,
            type: null,
            position: "top-end",
            customClass: "sp-toast-error",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
    },
    save_template: function (id) {
      // see if the theme is free
      for (let i = 0; i < this.themes.data.length; i++) {
        if (id == this.themes.data[i].id) {
          if (1 == this.themes.data[i].free_w_email) {
            //alert("Enter Your Email");
            window.scrollTo(0, 0);
            return;
          }
          if (0 == this.themes.data[i].free) {
            this.showUpsellModal = true;
            return;
          }
        }
      }

      let _self = this;
      this.selected_template_id = id;

      if (true === this.shared.settings.from_edit_with_seedprod) {
        this.page_name = this.shared.lpage.post_title;
        this.page_slug = this.shared.lpage.post_name;
      }

      if (
        "lp" == this.shared.settings.page_type &&
        "" == this.page_name &&
        "" == this.page_slug
      ) {
        this.showModal = true;
        return false;
      }

      this.shared.lpage.post_title = this.page_name;
      this.shared.lpage.post_name = this.page_slug;
      this.shared.settings.template_id = id;
      this.shared.settings.is_new = false;

      let data = qs.stringify({
        lpage_id: this.shared.lpage.id,
        lpage_template_id: id,
        lpage_name: this.page_name,
        lpage_slug: this.page_slug,
        lpage_type: this.shared.settings.page_type,
      });

      NProgress.start();

      // Submit data
      this.axios
        .post(
          "admin-ajax.php?action=" +
            this.shared.page_path +
            "_save_template&_wpnonce=" +
            seedprod_nonce,
          data,
          {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          }
        )
        .then(function (response) {
          NProgress.done();
          _self.going_to_next_step = false;

          if ("updated" == response.data.status) {
            let template_code = JSON.parse(response.data.code);

            //_self.shared.settings.document = template_code.document;
          }

          // redirect to builder

          // _self.$router.push({
          //   name: "setup_block_options",
          //   params: { id: _self.shared.lpage.id }
          // });
          let url =
            "admin.php?page=" +
            _self.shared.page_path +
            "_builder&id=" +
            _self.shared.lpage.id +
            "#/setup/" +
            _self.shared.lpage.id +
            "/block-options";
          location.replace(url);
        })
        .catch(function (error) {
          NProgress.done();
          _self.going_to_next_step = false;
          _self.$swal({
            imageUrl:
              _self.shared.plugin_path + "public/svg/error-24px-white.svg",
            text: __(
              "Could not be saved. Please contact Support if you continue to experience this issue.",
              process.env.VUE_APP_TEXTDOMAIN
            ),
            toast: true,
            type: null,
            customClass: "sp-toast-error",
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
          });
        });

      return false;
    },
  },
  components: {
    modal,
    LiteCTATemplates,
  },
};
</script>
