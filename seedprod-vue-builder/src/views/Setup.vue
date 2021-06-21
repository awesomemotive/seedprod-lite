<template>
  <div id="seedprod-customizer-wrapper">
    <div id="sp-builder-top" class="sp-w-full">
      <div class="sp-flex sp-justify-between sp-items-center">
        <div class="sp-flex sp-justify-between sp-items-center sp-h-full">
          <svg
            width="32"
            height="34"
            viewBox="0 0 32 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="sp-mx-6"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0C0 0 0.74666 0.0506396 16.0822 2.054C31.4178 4.05737 36.7255 19.603 27.3358 33.1707C28.7883 21.0478 26.13 8.47161 15.4523 7.00138C4.77453 5.53114 5.70455 5.75641 5.70455 5.75641C5.70455 5.75641 5.88147 8.42652 6.8834 15.6043C7.88534 22.7821 13.4921 26.3022 18.3988 28.1143C18.3988 28.1143 18.6866 19.714 15.949 16.0165C13.2114 12.3191 9.80548 9.86362 9.80548 9.86362C9.80548 9.86362 17.8094 10.8232 20.8313 16.4032C23.8532 21.9832 23.5588 33.7778 23.5588 33.7778L20.2989 33.6092C11.5273 32.556 3.33239 27.2759 1.939 16.198C0.545613 5.1201 0 0 0 0Z"
              fill="#7B6B7A"
            />
          </svg>

          <div id="sp-builder-top-main-nav" class="sp-flex sp-justify-center sp-items-center">
            <div class="sp-w-1/3">
              <router-link
                tag="a"
                :to="{
					name: 'setup_block_options',
					params: { id: shared.lpage.id }
				}"
              >
                <div>{{txt_1}}</div>
              </router-link>
            </div>
            <div class="sp-w-1/3">
              <router-link
                tag="a"
                :to="{
					name: 'setup_settings_connect',
					params: { id: shared.lpage.id }
				}"
                exact
              >
                <div>{{txt_2}}</div>
              </router-link>
            </div>
            <div class="sp-w-1/3">
              <router-link
                tag="a"
                :to="{
					name: 'setup_settings',
					params: { id: shared.lpage.id }
				}"
              >
                <div class="sp-whitespace-no-wrap">{{txt_3}}</div>
              </router-link>
            </div>
          </div>
        </div>

        <div id="sp-builder-top-main-nav-utlity">
          <a id="seedprod-builder-help" href="https://seedprod.com/docs/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="sp-w-4 sp-fill-current sp-inline-block"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
              />
            </svg>
            {{ txt_20 }}
          </a>
          <div class="sp-relative">
            <span class="sp-flex sp-items-center">
              <button
                id="seedprod-builder-save"
                class="sp-btn sp-btn-primary sp-leading-none"
                @click.prevent="save_lpage(false)"
                :disabled="shared.doing_ajax == true"
              >
                <span class="sp-flex sp-items-center">
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="sp-w-4 sp-fill-current sp-mr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"
                    />
                  </svg> -->
                  {{ txt_21 }}
                </span>
              </button>

              <button
                id="seedprod-builder-save-dropdown"
                class="sp-btn sp-btn-primary"
                @click="show_adv_save_menu = !show_adv_save_menu"
                :class="{ active: show_adv_save_menu }"
              >
                <i class="fas fa-caret-down"></i>
              </button>
            </span>
            <transition name="seedprod">
              <div
                v-if="show_adv_save_menu === true"
                id="seedprod-builder-save-dropdown-menu"
                class="sp-absolute"
              >
                <button class="sp-btn sp-btn-publish sp-font-semibold" @click="update_post_status">
                  <span v-if="this.shared.lpage.post_status == 'draft'">
                    <svg
                      class="sp-w-4 sp-fill-current sp-inline sp-mr-2"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 17C6 17 3 14 3 13C3 12.667 3.333 12 4 11L0 10L2 7L6 8C10 2 16 0 20 0C20 4 18 10 12 14L13 18L10 20L9 16C8 16.667 7.333 17 7 17ZM6.04 13.96C6.394 14.315 6.759 14.632 7.063 14.85C7.286 14.726 7.564 14.554 7.891 14.336L10.891 12.336C14.789 9.736 17.13 5.92 17.799 2.201C14.08 2.871 10.263 5.211 7.664 9.109L5.664 12.109C5.446 12.436 5.274 12.714 5.149 12.937C5.369 13.241 5.685 13.607 6.039 13.961L6.04 13.96Z"
                      />
                      <path
                        d="M13.5 8C14.3284 8 15 7.32843 15 6.5C15 5.67157 14.3284 5 13.5 5C12.6716 5 12 5.67157 12 6.5C12 7.32843 12.6716 8 13.5 8Z"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 14L3 15.5C2.333 16.167 2 17 2 18C3 18 3.833 17.667 4.5 17L6 18C4.667 19.333 2.667 20 0 20C0 17.333 0.667 15.333 2 14Z"
                      />
                    </svg>{{txt_12}}
                  </span>
                  <span v-else>
                    <svg
                      class="sp-w-4 sp-fill-current sp-inline sp-mr-2"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 17C6 17 3 14 3 13C3 12.667 3.333 12 4 11L0 10L2 7L6 8C10 2 16 0 20 0C20 4 18 10 12 14L13 18L10 20L9 16C8 16.667 7.333 17 7 17ZM6.04 13.96C6.394 14.315 6.759 14.632 7.063 14.85C7.286 14.726 7.564 14.554 7.891 14.336L10.891 12.336C14.789 9.736 17.13 5.92 17.799 2.201C14.08 2.871 10.263 5.211 7.664 9.109L5.664 12.109C5.446 12.436 5.274 12.714 5.149 12.937C5.369 13.241 5.685 13.607 6.039 13.961L6.04 13.96Z"
                      />
                      <path
                        d="M13.5 8C14.3284 8 15 7.32843 15 6.5C15 5.67157 14.3284 5 13.5 5C12.6716 5 12 5.67157 12 6.5C12 7.32843 12.6716 8 13.5 8Z"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 14L3 15.5C2.333 16.167 2 17 2 18C3 18 3.833 17.667 4.5 17L6 18C4.667 19.333 2.667 20 0 20C0 17.333 0.667 15.333 2 14Z"
                      />
                    </svg>{{txt_13}}
                  </span>
                 </button>
                 <!--<button class="sp-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="sp-w-4 sp-fill-current sp-inline sp-mr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                    />
                  </svg>{{txt_14}}
                </button> -->
                <button
                v-if="shared.template_dev_mode === false"
                class="sp-btn sp-font-semibold" @click="save_as_template" :class="{'sp-pro-only':this.shared.page_path == 'seedprod_lite'}">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-w-4 sp-fill-current sp-inline sp-mr-2"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z"
                    />
                  </svg>{{txt_15}}
                </button>
                <button
                v-if="shared.template_dev_mode === true"
                class="sp-btn sp-font-semibold" @click="save_as_global_template" :class="{'sp-pro-only':this.shared.page_path == 'seedprod_lite'}">
                  <span v-if="shared.settings.template_id == 71">
                  Save Global Template
                  </span>
                  <span v-else>
                  Update Global Template
                  </span>

                </button>

              </div>
            </transition>
          </div>
          <button @click="preview" id="seedprod-builder-preview" class="sp-btn sp-btn-primary sp-leading-none">
             {{txt_30}}
          </button>

          <button id="seedprod-builder-close" @click="close_builder">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="sp-w-6 sp-fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="sp-flex sp-h-full">
      <!-- / #seedprod-sidebar-nav-wrapper -->
      <div
        id="seedprod-sidebar-wrapper"
        class="sp-relative sp-transition-width sp-duration-700 sp-ease-out"
        :class="{'sp-sidebar-drawer-closed': !sidebar,'sp-settings-page':$route.name.includes('settings')}"
        v-if="$route.name !== 'setup_settings_connect' "
      >
        <div id="sp-bottom-nav-actions" v-if="!$route.name.includes('settings')">
          <div class="sp-flex sp-justify-around sp-items-center sp-h-full">
            <router-link
              v-tooltip="{content:'Global Settings',offset:10,delay:{ show: 500, hide: 0 }}"
              tag="button"
              :to="{
					name: 'setup_design',
					params: { id: shared.lpage.id }
				}"
              exact
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="sp-w-5 sp-fill-current sp-inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                />
              </svg>
            </router-link>

            <button
              :class="{active: $router.currentRoute.name == 'layoutnav'}"
              @click="goto_layoutnav"
              v-tooltip="{content:'Layout Navigation',offset:10,delay:{ show: 500, hide: 0 }}"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="sp-w-5 sp-fill-current sp-inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z"
                />
              </svg>
            </button>

            <button
              :class="{active: $router.currentRoute.name == 'revisions'}"
              @click="goto_revisions"
              v-tooltip="{content:'Revision History',offset:10,delay:{ show: 500, hide: 0 }}"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="sp-w-5 sp-fill-current sp-inline-block"

                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z"
                />
              </svg>
            </button>

            <button
              :class="{active: $router.currentRoute.name == 'undo'}"
              v-on:click="$emit('undo')"
              v-tooltip="{content:'Undo',offset:10,delay:{ show: 500, hide: 0 }}"
            >
                <svg
                    viewBox="0 0 24 24"
                    class="sp-w-5 sp-fill-current sp-inline-block"
                     style="transform: scale(-1,1)"
                    xmlns="http://www.w3.org/2000/svg"
                >
                          <path d="M0 0h24v24H0z" fill="none"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                </svg>

            </button>

            <button
              :class="{active: $router.currentRoute.name == 'redo'}"
              v-on:click="$emit('redo')"
              v-tooltip="{content:'Redo',offset:10,delay:{ show: 500, hide: 0 }}"
            >
              <svg
                viewBox="0 0 24 24"
                class="sp-w-5 sp-fill-current sp-inline-block"
                xmlns="http://www.w3.org/2000/svg"
              >
                  <path  d="M0 0h24v24H0z" fill="none"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
              </svg>
            </button>

            <button
              class
              @click="update_preview_mode"
              v-tooltip="{content:devicettmsg,offset:10,delay:{ show: 500, hide: 0 }}"
            >
              <svg
                v-if="shared.preview_mode == 'mobile'"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-w-5 sp-fill-current sp-inline-block"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"
                />
              </svg>

              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-w-5 sp-fill-current sp-inline-block"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"
                />
              </svg>
            </button>

            <!-- <button
              class
              @click="preview"
              v-tooltip="{content:'Live Preview',offset:10,delay:{ show: 500, hide: 0 }}"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-w-5 sp-fill-current sp-inline-block"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"
                />
              </svg>
            </button> -->
          </div>
        </div>
        <div class="sp-flex sp-h-full" style="width:inherit">
          <div
            class="seedprod-sidebar-form sp-flex-grow sp-h-full sp-overflow-y-auto"
            style="width:inherit"
          >
            <transition name="seedprod">
              <router-view name="sidebar"></router-view>
            </transition>
          </div>
          <div class="sp-flex sp-items-center">
            <span
              id="sp-sidebar-drawer"
              class="sp-flex sp-items-center sp-fixed sp-z-20 sp-text-neutral-40 hover:sp-text-primary"
              @click="sidebar = !sidebar"
            >
              <svg
                class="sp-w-6 sp-h-6 sp-fill-current"
                :class="{'sp-hidden': !sidebar}"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
                width="32"
              >
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                <path d="M0 0h24v24H0V0z" fill="none" />
              </svg>

              <svg
                :class="{'sp-hidden': sidebar}"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-w-6 sp-h-6 sp-fill-current"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                <path d="M0 0h24v24H0V0z" fill="none" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <!-- / #seedprod-sidebar-wrapper -->
      <div
        id="seedprod-preview-wrapper"
        class="sp-flex-1"
        :class="['sp-'+$route.name,{ 'sp-mobile-view-wrapper': shared.preview_mode == 'mobile' }]"
      >
        <router-view name="main"></router-view>
      </div>
      <!-- /#seedprod-preview-wrapper -->
    </div>

    <!-- Close Modal -->
    <modal v-if="showCloseModal" @close="showCloseModal = false" class="sp-w-720px">
      <div slot="body" class="sp-p-10 sp-text-neutral sp-relative">
        <span
          class="sp-absolute sp-top-0 sp-right-0 hover:sp-text-neutral-60 sp-text-neutral-40 sp-cursor-pointer sp-mt-3 sp-mr-3"
          @click="showCloseModal = false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="sp-fill-current sp-w-5"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </span>
        <div>
          <div class="sp-text-neutral-20 sp-flex sp-justify-center sp-mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
              />
            </svg>
          </div>
          <div>{{txt_4}}</div>
        </div>

        <button
          @click="save_exit()"
          class="sp-mt-4 sp-inline-block sp-bg-primary sp-px-4 sp-py-3 sp-rounded sp-leading-none sp-text-white sp-no-underline sp-text-base hover:sp-bg-primary-lighter sp-cursor-pointer sp-font-semibold"
          :disabled="saving_template"
        >
          {{txt_19}}
          <span v-if="saving_template">
            <i class="fas fa-spinner fa-spin"></i>
          </span>
        </button>
        <a
          :href="'?page=' + shared.page_path"
          class="sp-ml-3 sp-mt-8 sp-inline-block sp-bg-neutral-15 sp-px-4 sp-py-3 sp-rounded sp-leading-none sp-text-neutral-80 sp-no-underline sp-text-base hover:sp-bg-neutral-20 sp-cursor-pointer sp-font-semibold"
        >{{txt_5}}</a>
      </div>
      <h3 slot="header"></h3>
    </modal>

    <!-- Modal -->
    <modal
      v-if="showTemplateConfirmModal"
      @close="showTemplateConfirmModal = false"
      class="sp-w-720px"
    >
      <div slot="body" class="sp-p-10 sp-text-neutral sp-relative">
        <button
          class="sp-text-neutral-40 hover:sp-text-neutral-60 sp-absolute sp-top-0 sp-right-0 sp-m-2"
          @click="showTemplateConfirmModal = false"
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
        <div class="sp-text-neutral-20 sp-flex sp-justify-center sp-mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z"
            />
          </svg>
        </div>
        <div class="sp-font-bold sp-text-lg">"{{template_page_name}}" {{txt_6}}</div>
        <div
          class="sp-text-lg sp-mt-2"
        >{{txt_7}}</div>

        <button
          @click="showTemplateConfirmModal = false"
          class="sp-mt-5 sp-inline-block sp-bg-primary sp-px-4 sp-py-3 sp-rounded sp-leading-none sp-text-white sp-no-underline sp-text-base hover:sp-bg-primary-lighter sp-cursor-pointer sp-font-semibold"
          :disabled="saving_template"
        >
          {{txt_16}}
          <span v-if="saving_template">
            <i class="fas fa-spinner fa-spin"></i>
          </span>
        </button>
      </div>
      <h3 slot="header"></h3>
    </modal>
    <modal v-if="showTemplateModal" @close="showTemplateModal = false" class="sp-w-720px">
      <div slot="body" class="sp-p-10 sp-text-neutral sp-relative sp-font-sans">
        <div>
          <div class="sp-text-neutral-20 sp-flex sp-justify-center sp-mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z"
              />
            </svg>
          </div>
          <div>
            <label
              class="sp-text-lg sp-font-bold sp-mb-2 sp-inline-block"
            >{{txt_8}}</label>
          </div>
          <input
            type="text"
            v-model="template_page_name"
            v-validate="'required'"
            data-vv-as="Template Name"
            name="template_page_name"
            class="sp-form-input sp-w-full"
            placeholder
          />
          <div v-show="errors.has('template_page_name')" class="help-block error">
            {{
            errors.first("template_page_name")
            }}
          </div>
        </div>

        <button
          @click="save_template_step1('page')"
          class="sp-mt-4 sp-inline-block sp-bg-primary sp-px-4 sp-py-3 sp-rounded sp-leading-none sp-text-white sp-no-underline sp-text-base hover:sp-bg-primary-lighter sp-cursor-pointer sp-font-semibold"
          :disabled="saving_template"
        >
          {{txt_17}}
          <span v-if="saving_template">
            <i class="fas fa-spinner fa-spin"></i>
          </span>
        </button>
        <button
          @click="showTemplateModal = false"
          class="sp-ml-3 sp-mt-8 sp-inline-block sp-bg-neutral-15 sp-px-4 sp-py-3 sp-rounded sp-leading-none sp-text-neutral-80 sp-no-underline sp-text-base hover:sp-bg-neutral-20 sp-cursor-pointer sp-font-semibold"
        >{{txt_9}}</button>
      </div>
      <h3 slot="header"></h3>
    </modal>
    <!-- Modal -->
    <modal v-if="showPublishModal" @close="showPublishModal = false" class="sp-w-720px">
      <div slot="body" class="sp-p-10 sp-text-neutral sp-flex sp-flex-col sp-items-center">
        <div class="sp-text-neutral-20 sp-flex sp-justify-center sp-mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="sp-fill-current sp-w-24"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 17C6 17 3 14 3 13C3 12.667 3.333 12 4 11L0 10L2 7L6 8C10 2 16 0 20 0C20 4 18 10 12 14L13 18L10 20L9 16C8 16.667 7.333 17 7 17ZM6.04 13.96C6.394 14.315 6.759 14.632 7.063 14.85C7.286 14.726 7.564 14.554 7.891 14.336L10.891 12.336C14.789 9.736 17.13 5.92 17.799 2.201C14.08 2.871 10.263 5.211 7.664 9.109L5.664 12.109C5.446 12.436 5.274 12.714 5.149 12.937C5.369 13.241 5.685 13.607 6.039 13.961L6.04 13.96Z"
            />
            <path
              d="M13.5 8C14.3284 8 15 7.32843 15 6.5C15 5.67157 14.3284 5 13.5 5C12.6716 5 12 5.67157 12 6.5C12 7.32843 12.6716 8 13.5 8Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 14L3 15.5C2.333 16.167 2 17 2 18C3 18 3.833 17.667 4.5 17L6 18C4.667 19.333 2.667 20 0 20C0 17.333 0.667 15.333 2 14Z"
            />
          </svg>
        </div>

        <div class="sp-text-2xl sp-font-bold sp-text-neutral sp-my-4">{{txt_10}}</div>
        <div class="sp-flex sp-items-center sp-mt-4">
          <button
            @click="preview()"
            class="sp-inline-block sp-bg-green sp-px-4 sp-py-3 sp-rounded sp-leading-none sp-text-white sp-no-underline sp-text-base hover:sp-bg-primary-lighter sp-cursor-pointer sp-font-semibold"
            :disabled="saving_template"
          >
            {{txt_18}}
            <span v-if="saving_template">
              <i class="fas fa-spinner fa-spin"></i>
            </span>
          </button>
          <button
            @click="showPublishModal = false"
            class="sp-ml-3 sp-inline-block sp-bg-neutral-15 sp-px-4 sp-py-3 sp-rounded sp-leading-none sp-text-neutral-80 sp-no-underline sp-text-base hover:sp-bg-neutral-20 sp-cursor-pointer sp-font-semibold"
          >{{txt_11}}</button>
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
        <LiteCTABuilder feature_source="saved-template" feature="Saved Templates"/>
           </div>
      <h3 slot="header"></h3>
    </modal>
  </div>
  <!-- / #seedprod-customizer-wrapper -->
</template>

<script>
import qs from 'qs';
import NProgress from 'nprogress';
import modal from '@/components/Modal.vue';
import { helpers } from '../mixins/helpers.js';
import { __ } from '@wordpress/i18n';
import LiteCTABuilder from '@/components/LiteCTABuilder.vue';

export default {
  name: 'setup',
  mixins: [ helpers ],
  data() {
    return {
      txt_1: __( 'Design', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Connect', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Page Settings', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'You have unsaved changes. Are you sure you want to lose these changes?', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Exit Without Saving', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'template has been saved!', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'You can find it in your template library when you create a new landing page.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Enter a new template name:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Cancel', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Your page has been published!', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Close', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Publish', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Unpublish', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Schedule', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Save as Template', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Return to Page Editor', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Save Template', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'See Live Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Save and Exit', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'Help', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'Save', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( 'Saved!', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( 'Preview', process.env.VUE_APP_TEXTDOMAIN ),
      showCloseModal: false,
      showPublishModal: false,
      saving_template: false,
      template_page_name: '',
      showTemplateModal: false,
      showTemplateConfirmModal: false,
      sidebar: true,
      show_adv_save_menu: false,
      shared: seedprod_store,
      showUpsellModal: false,
    };
  },
  components: {
    LiteCTABuilder,
    modal,
  },
  inject: {
    $validator: '$validator',
  },
  computed: {
    sidebar_close_text: function() {
      let text = 'Hide Sidebar';
      if ( ! this.sidebar ) {
        text = 'Show Sidebar';
      }
      return text;
    },
    sidebarStyleObject: function() {
      let ml = '0';
      if ( ! this.sidebar ) {
        ml = '-320px';
      }
      return {
        'margin-left': ml,
      };
    },
    devicettmsg: function() {
      let msg = 'Desktop Preview';
      if ( 'desktop' == this.shared.preview_mode ) {
        msg = 'Mobile Preview';
      }
      return msg;
    },
  },
  methods: {
    keycode() {
      console.log( this );
      console.log( 'key' );
    },
    save_as_global_template() {

      let _self = this;

      if ( 71 != this.shared.settings.template_id ) {
        if ( ! confirm( 'Please make sure to perform a Save before saving as a global template. Click OK to proceed. NOTE: You are about to update a live template, updating this template will deactivate it until it is reviewed and made live again.' ) ) {
          return false;
        }
      } else {
        if ( ! confirm( 'Please make sure to perform a Save before saving as a global template. Click OK to proceed.' ) ) {
          return false;
        }
      }

      NProgress.start();
      let data = {
        post_id: this.$route.params.id,
        template_id: this.shared.settings.template_id,
        password: this.shared.template_dev_mode_password,
        type: 'page',
        code: JSON.stringify({ document: this.shared.settings.document }),
        name: this.shared.settings.post_name,
      };

      // send request
      // this.axios
      //   .post(this.shared.template_dev_mode_url, data)
      //   .then(function (response) {
      //     NProgress.done();
      //     alert('The global template has been save with the id:'+ response.data.id +' You will now be redirected back to the main templates page.');
      //     window.location.href = "?page=seedprod_pro_templates";

      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });

      this.axios
        .post( 'admin-ajax.php?action=seedprod_pro_save_global_template_utility&post_id=' + this.$route.params.id + '&template_id=' + this.shared.settings.template_id, data )
        .then( function( response ) {
          NProgress.done();
          console.log( response.data.error );
          if ( null != response.data.error ) {
            alert( response.data.error );
          } else {
            alert( 'The global template has been save with the id:' + response.data.template_id + ' You will now be redirected back to the main templates page.' );
            window.location.href = '?page=seedprod_pro_templates';
          }

        })
        .catch( function( error ) {
          console.log( error );
        });
    },
    save_as_template() {
      if ( 'seedprod_lite' == this.shared.page_path ) {
        this.showUpsellModal = true;
        return;
      }
      this.showTemplateModal = true;
      this.show_adv_save_menu = false;
    },
    save_template_step1() {
      if ( 'seedprod_lite' == this.shared.page_path ) {
        this.showUpsellModal = true;
        return false;
      }

      let _self = this;

      this.$validator.validateAll().then( function( result ) {
        if ( result ) {
          _self.saving_template = true;
          _self.save_template_step2( _self.selected_template_id );
        } else {
          let errors = '';
          _self.errors.all().forEach( function( value ) {
            errors = errors + value + '\n';
          });
          errors = errors + '';

          _self.$swal({
            imageUrl:
              _self.shared.plugin_path + 'public/svg/error-24px-white.svg',
            text: errors,
            toast: true,
            type: null,
            position: 'top-end',
            customClass: 'sp-toast-error',
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
    },
    save_template_step2( type, id = null ) {
      let _self = this;
      NProgress.start();

      let data = {
        api_token: this.shared.api_token,
        site_token: this.shared.site_token,
        type: 'page',
        code: JSON.stringify({ document: this.shared.settings.document }),
        name: this.template_page_name,
      };

      // send request
      this.axios
        .post( seedprod_remote_api + 'template-save', data )
        .then( function( response ) {
          NProgress.done();
          _self.showTemplateModal = false;
          _self.saving_template = false;

          //  show second confirm modal
          _self.showTemplateConfirmModal = true;

          // _self.$swal({
          //   imageUrl:
          //     _self.shared.plugin_path + "public/svg/success-24px-white.svg",
          //   text: "Template has been saved!",
          //   toast: true,
          //   type: null,
          //   customClass: "sp-toast-success",
          //   position: "top-end",
          //   showConfirmButton: false,
          //   timer: 30000
          // });
        })
        .catch( function( error ) {
          NProgress.done();
          _self.saving_template = false;
          console.log( error );
          _self.shared.doing_ajax = false;
          _self.$swal({
            imageUrl:
              _self.shared.plugin_path + 'public/svg/error-24px-white.svg',
            text: error.response.message,
            toast: true,
            type: null,
            customClass: 'sp-toast-error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 6000,
          });
        });
    },
    goto_layoutnav() {

      // show tab
      if ( 'layoutnav' != this.$router.currentRoute.name ) {
        this.$router.push({ name: 'layoutnav' });
      }
    },
    goto_revisions() {

      // show tab
      if ( 'revisions' != this.$router.currentRoute.name ) {
        this.$router.push({ name: 'revisions' });
      }
    },
    update_preview_mode() {
      if ( 'desktop' == this.shared.preview_mode ) {
        this.shared.preview_mode = 'mobile';
        this.update_mobile_css();
      } else {
        this.shared.preview_mode = 'desktop';
      }
    },
    update_post_status() {
      let post_status = 'draft';
      if ( 'draft' == this.shared.lpage.post_status ) {
        post_status = 'publish';
        this.showPublishModal = true;
        this.shared.lpage.post_status = post_status;
        this.save_lpage( true );
      } else {
        this.shared.lpage.post_status = post_status;
        this.save_lpage();
      }
    },
    preview: function() {
      this.save_lpage( false, false, 'autosave' );
    },
    save_exit() {
      this.save_lpage( false, true );
    },
    close_builder: function() {
      if (
        JSON.stringify( seedprod_store.settings ) !== seedprod_store.settings_org
      ) {
        this.showCloseModal = true;
      } else {
        window.location.href = '?page=' + this.shared.page_path;
      }
    },
    save_lpage: function( silent = false, exit = false, save_type = 'save' ) {
      this.shared.is_moving = true;

      // build mobile css
      this.update_head_css();
      this.update_placeholder_css();
      this.update_mobile_css();

      this.shared.lpage.html = jQuery(
        '#seedprod-builder-view #sp-html-code'
      ).html();
      this.show_adv_save_menu = false;
      this.shared.active_inline_editor_id = false;
      let _self = this;

      this.$validator.validateAll().then( ( result ) => {
        if ( result ) {
          var html = '';
          if ( false === lodash.isEmpty( this.shared.lpage.html ) ) {
            var html = this.shared.lpage.html;
            html = html.replace(
              /<span class=\"sp-hidden\">START-REMOVE<\/span>[\s\S]+?<span class=\"sp-hidden\">END-REMOVE<\/span>/g,
              ''
            );
            html = html.replace(
              /<span class=\"sp-hidden\">START-COUNTDOWN-REMOVE<\/span>[\s\S]+?<span class=\"sp-hidden\">END-COUNTDOWN-REMOVE<\/span>/g,
              '00'
            );
            html = html.replace( /<\s*main[^>]*>/g, '' );
            html = html.replace( /<\/main>/g, '' );
            html = html.replace( /sp-relative/g, '' );
            html = html.replace( /<!---->/g, '' );
            html = html.replace( /&quot;/g, '\'' );
            html = html.replace( /open="">/g, '>' );
            html = html.replace( /sp-preview-hidden/g, '' );
          }
          let data = qs.stringify({
            save_type: save_type,
            lpage_id: this.shared.lpage.id,
            lpage_name: this.shared.lpage.post_title,
            lpage_slug: this.shared.lpage.post_name,
            lpage_html: html,
            lpage_post_status: this.shared.lpage.post_status,
            settings: JSON.stringify( this.shared.settings ),
          });

          if ( false === silent ) {
            _self.shared.doing_ajax = true;
            NProgress.configure({ showSpinner: false });
            NProgress.start();
          }

          this.axios
            .post(
              'admin-ajax.php?action=' + this.shared.page_path + '_save_lpage&_wpnonce=' +
                seedprod_nonce,
              data,
              {
                'Content-Type':
                  'application/x-www-form-urlencoded;charset=UTF-8',
              }
            )
            .then( function( response ) {
              if ( 'autosave' === save_type ) {
                window.open( _self.shared.preview_link, 'wp-preview-' + _self.shared.lpage.id );
              }
              if ( false === silent ) {
                NProgress.done();
                _self.shared.doing_ajax = false;
                _self.shared.is_moving = false;

                _self.$swal({
                  imageUrl:
                    _self.shared.plugin_path +
                    'public/svg/success-24px-white.svg',
                  text: __( 'Saved!', process.env.VUE_APP_TEXTDOMAIN ),
                  toast: true,
                  type: null,
                  customClass: 'sp-toast-success',
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                });
              }

              _self.shared.settings_org = JSON.stringify( _self.shared.settings );

              //_self.shared.revisions = response.data.revisions;
              _self.shared.current_revision_active_index = -1;
              if ( exit ) {
                window.location.href = '?page=' + _self.shared.page_path;
              }
            })
            .catch( function( error ) {
              console.log( error );
              NProgress.done();
              _self.shared.is_moving = false;

              //console.log(error);
              let msg = __( 'Something has prevented the page from being saved. The host you are using may have a security setting preventing it from being saved. Refresh the page and try again.', process.env.VUE_APP_TEXTDOMAIN );
              if ( error.response.data.msg ) {
                msg = error.response.data.msg;
              }

              _self.shared.doing_ajax = false;
              _self.$swal({
                imageUrl:
                  _self.shared.plugin_path + 'public/svg/error-24px-white.svg',
                text: msg,
                toast: true,
                type: null,
                customClass: 'sp-toast-error',
                position: 'top-end',
                showConfirmButton: false,
                timer: 6000,
              });
            });

          return;
        } else {
          let errors = '';
          this.errors.all().forEach( function( value ) {
            errors = errors + value + '\n';
          });
          errors = errors + '';

          this.$swal({
            imageUrl:
              _self.shared.plugin_path + 'public/svg/error-24px-white.svg',
            text: errors,
            toast: true,
            type: null,
            customClass: 'sp-toast-error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
    },
  },
  created: function() {
    if ( true === this.shared.settings.is_new ) {
      this.shared.settings.is_new = false;
    }

    // redirect to chooser if no template selected
    if ( '' === this.shared.settings.template_id ) {
      location.replace( 'admin.php?page=' +
						this.shared.page_path +
						'_template&id=' + this.shared.lpage.id + '#/template/' + this.shared.lpage.id );
    }
  },
  mounted: function() {

    if ( 'setup' == this.$route.name ) {
      this.$router.push({
        name: 'setup_block_options',
        params: { id: this.shared.lpage.id },
      });
    }
  },
  beforeRouteLeave( to, from, next ) {
    let answer = true;
    if (
      JSON.stringify( seedprod_store.settings ) !== seedprod_store.settings_org
    ) {
      answer = window.confirm( __( 'Changes not saved, are you sure you want to leave?', process.env.VUE_APP_TEXTDOMAIN ) );
    }
    if ( answer ) {

      // reset settings

      seedprod_store.settings = JSON.parse( seedprod_store.settings_org );

      next();
    } else {
      next( false );
    }
  },
};
</script>
