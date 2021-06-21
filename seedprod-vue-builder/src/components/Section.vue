<template>
  <section
    :ref="'sp-'+section.id"
    :id="'sp-'+section.id"
    class="sp-el-section sp-relative"
    :style="sectionStyleObject"
    :class="sectionClasses"
    @mouseover.stop="highlight_option_target(section.id)"
    @click.capture="edit_block(section.id)"
  >
    <span class="sp-hidden">START-REMOVE</span>
    <!-- New Section -->
    <div v-if="section.rows.length === 0" class="sp-el-col sp-p-3 sp-w-full">
      <!-- Drag Zone -->

      <div id="sp-sp-bottom-section-dropzone" class="sp-bg-white sp-px-1 sp-py-3">
        <div v-if="show_cols === false">
          <draggable
            class="sp-bottom-section-dropzone"
            :list="section_dropzone"
            :group="{name:'blocks',put:true, pull: false}"
            @add="add_new_section_block"
            draggable=".none"
            ghost-class="sp-exclude-ghost"
            chosen-class="sp-exclude-chosen"
          >
            <div
              class="sp-flex sp-justify-center sp-py-2 sp-items-center sp-bg-secondary-10 sp-border-secondary sp-border-dotted sp-border-2 sp-relative"
              v-for="(b,i) in section_dropzone"
              :key="i"
            >
              <div class="sp-flex sp-justify-center sp-items-center">
                <button
                  @click="set_show_cols(true)"
                  class="sp-bg-secondary-50 hover:sp-bg-primary sp-flex sp-justify-center sp-items-center sp-w-8 sp-h-8 sp-rounded-full sp-text-white sp-mr-2"
                  v-tooltip="{content:'Add Columns',delay:{ show: 500, hide: 0 }}"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="sp-w-4 sp-h-4 sp-fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M21 4H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z"
                    />
                  </svg>
                </button>
                <button
                  @click="set_sindex_stub(sindex)"
                  class="sp-bg-secondary-50 hover:sp-bg-primary sp-flex sp-justify-center sp-items-center sp-w-8 sp-h-8 sp-rounded-full sp-text-white"
                  v-tooltip="{content:'Add Section',delay:{ show: 500, hide: 0 }}"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="sp-w-4 sp-h-4 sp-fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M21 18H2v2h19v-2zm-2-8v4H4v-4h15m1-2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm1-4H2v2h19V4z"
                    />
                  </svg>
                </button>
              </div>
              <div class="sp-px-2 sp-italic sp-text-xs sp-text-secondary">{{txt_2}}</div>
              <div
                class="sp-font-bold sp-text-xs sp-text-secondary sp-cursor-pointer"
                @click="add_block"
              >{{txt_3}}</div>
              <button
                @click="delete_blank_element(sindex)"
                class="sp-absolute sp-right-0 sp-text-secondary sp-mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-4 sp-h-4"
                >
                  <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </button>
            </div>
          </draggable>
        </div>
        <div v-else>
          <div
            class="sp-flex sp-justify-center sp-py-2 sp-items-center sp-bg-secondary-10 sp-border-secondary sp-border-dotted sp-border-2 sp-relative sp-flex-col"
          >
            <div
              class="sp-font-bold sp-text-xs sp-text-secondary sp-pb-6 sp-pt-2 sp-font-sans"
            >{{txt_8}}</div>
            <div class="sp-flex sp-text-secondary-50 sp-pb-5">
              <button
                @click="insert_section_row_layout('1-col',sindex)"
                class="sp-px-3 hover:sp-text-secondary"
              >
                <svg
                  class="sp-fill-current"
                  width="81"
                  height="32"
                  viewBox="0 0 81 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="80" height="32" rx="1" />
                </svg>
              </button>
              <button
                @click="insert_section_row_layout('right-sidebar',sindex)"
                class="sp-px-3 hover:sp-text-secondary"
              >
                <svg
                  class="sp-fill-current"
                  width="81"
                  height="32"
                  viewBox="0 0 81 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0C0.447715 0 0 0.447715 0 1V31C0 31.5523 0.447715 32 0.999999 32H52C52.5523 32 53 31.5523 53 31V1C53 0.447715 52.5523 0 52 0H1Z"
                  />
                  <path
                    d="M57 0C56.4477 0 56 0.447715 56 1V31C56 31.5523 56.4477 32 57 32H80C80.5523 32 81 31.5523 81 31V1C81 0.447715 80.5523 0 80 0H57Z"
                  />
                </svg>
              </button>
              <button
                @click="insert_section_row_layout('left-sidebar',sindex)"
                class="sp-px-3 hover:sp-text-secondary"
              >
                <svg
                  class="sp-fill-current"
                  width="81"
                  height="32"
                  viewBox="0 0 81 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 0C24.5523 0 25 0.447715 25 1V31C25 31.5523 24.5523 32 24 32H1C0.447716 32 0 31.5523 0 31V1C0 0.447715 0.447716 0 1 0H24Z"
                  />
                  <path
                    d="M80 0C80.5523 0 81 0.447715 81 1V31C81 31.5523 80.5523 32 80 32H29C28.4477 32 28 31.5523 28 31V1C28 0.447715 28.4477 0 29 0H80Z"
                  />
                </svg>
              </button>
              <button
                @click="insert_section_row_layout('2-col',sindex)"
                class="sp-px-3 hover:sp-text-secondary"
              >
                <svg
                  class="sp-fill-current"
                  width="81"
                  height="32"
                  viewBox="0 0 81 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0C0.447715 0 0 0.447715 0 1V31C0 31.5523 0.447715 32 1 32H38C38.5523 32 39 31.5523 39 31V1C39 0.447715 38.5523 0 38 0H1Z"
                  />
                  <path
                    d="M43 0C42.4477 0 42 0.447715 42 1V31C42 31.5523 42.4477 32 43 32H80C80.5523 32 81 31.5523 81 31V1C81 0.447715 80.5523 0 80 0H43Z"
                  />
                </svg>
              </button>
            </div>
            <div class="sp-flex sp-text-secondary-50 sp-pb-4">
              <button
                @click="insert_section_row_layout('3-col',sindex)"
                class="sp-px-3 hover:sp-text-secondary"
              >
                <svg
                  class="sp-fill-current"
                  width="81"
                  height="32"
                  viewBox="0 0 81 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1C0 0.447715 0.447715 0 1 0H24C24.5523 0 25 0.447715 25 1V31C25 31.5523 24.5523 32 24 32H1C0.447716 32 0 31.5523 0 31V1Z"
                  />
                  <path
                    d="M28 1C28 0.447715 28.4477 0 29 0H52C52.5523 0 53 0.447715 53 1V31C53 31.5523 52.5523 32 52 32H29C28.4477 32 28 31.5523 28 31V1Z"
                  />
                  <path
                    d="M57 0C56.4477 0 56 0.447715 56 1V31C56 31.5523 56.4477 32 57 32H80C80.5523 32 81 31.5523 81 31V1C81 0.447715 80.5523 0 80 0H57Z"
                  />
                </svg>
              </button>
              <button
                @click="insert_section_row_layout('4-col',sindex)"
                class="sp-px-3 hover:sp-text-secondary"
              >
                <svg
                  class="sp-fill-current"
                  width="81"
                  height="32"
                  viewBox="0 0 81 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0C0.447715 0 0 0.447715 0 1V31C0 31.5523 0.447716 32 1 32H17C17.5523 32 18 31.5523 18 31V1C18 0.447715 17.5523 0 17 0H1Z"
                  />
                  <path
                    d="M22 0C21.4477 0 21 0.447715 21 1V31C21 31.5523 21.4477 32 22 32H38C38.5523 32 39 31.5523 39 31V1C39 0.447715 38.5523 0 38 0H22Z"
                  />
                  <path
                    d="M42 1C42 0.447715 42.4477 0 43 0H59C59.5523 0 60 0.447715 60 1V31C60 31.5523 59.5523 32 59 32H43C42.4477 32 42 31.5523 42 31V1Z"
                  />
                  <path
                    d="M64 0C63.4477 0 63 0.447715 63 1V31C63 31.5523 63.4477 32 64 32H80C80.5523 32 81 31.5523 81 31V1C81 0.447715 80.5523 0 80 0H64Z"
                  />
                </svg>
              </button>
              <button
                @click="insert_section_row_layout('5-col',sindex)"
                class="sp-px-3 hover:sp-text-secondary"
              >
                <svg
                  class="sp-fill-current"
                  width="81"
                  height="32"
                  viewBox="0 0 81 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1C0 0.447715 0.447715 0 1 0H13C13.5523 0 14 0.447715 14 1V31C14 31.5523 13.5523 32 13 32H1C0.447716 32 0 31.5523 0 31V1Z"
                  />
                  <path
                    d="M17 1C17 0.447715 17.4477 0 18 0H30C30.5523 0 31 0.447715 31 1V31C31 31.5523 30.5523 32 30 32H18C17.4477 32 17 31.5523 17 31V1Z"
                  />
                  <path
                    d="M35 0C34.4477 0 34 0.447715 34 1V31C34 31.5523 34.4477 32 35 32H47C47.5523 32 48 31.5523 48 31V1C48 0.447715 47.5523 0 47 0H35Z"
                  />
                  <path
                    d="M51 1C51 0.447715 51.4477 0 52 0H64C64.5523 0 65 0.447715 65 1V31C65 31.5523 64.5523 32 64 32H52C51.4477 32 51 31.5523 51 31V1Z"
                  />
                  <path
                    d="M69 0C68.4477 0 68 0.447715 68 1V31C68 31.5523 68.4477 32 69 32H81C81.5523 32 82 31.5523 82 31V1C82 0.447715 81.5523 0 81 0H69Z"
                  />
                </svg>
              </button>
              <button
                @click="insert_section_row_layout('6-col',sindex)"
                class="sp-px-3 hover:sp-text-secondary"
              >
                <svg
                  class="sp-fill-current"
                  width="81"
                  height="32"
                  viewBox="0 0 81 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0C0.447715 0 0 0.447715 0 1V31C0 31.5523 0.447715 32 1 32H10C10.5523 32 11 31.5523 11 31V1C11 0.447715 10.5523 0 10 0H1Z"
                  />
                  <path
                    d="M15 0C14.4477 0 14 0.447715 14 1V31C14 31.5523 14.4477 32 15 32H24C24.5523 32 25 31.5523 25 31V1C25 0.447715 24.5523 0 24 0H15Z"
                  />
                  <path
                    d="M28 1C28 0.447715 28.4477 0 29 0H38C38.5523 0 39 0.447715 39 1V31C39 31.5523 38.5523 32 38 32H29C28.4477 32 28 31.5523 28 31V1Z"
                  />
                  <path
                    d="M43 0C42.4477 0 42 0.447715 42 1V31C42 31.5523 42.4477 32 43 32H52C52.5523 32 53 31.5523 53 31V1C53 0.447715 52.5523 0 52 0H43Z"
                  />
                  <path
                    d="M56 1C56 0.447715 56.4477 0 57 0H66C66.5523 0 67 0.447715 67 1V31C67 31.5523 66.5523 32 66 32H57C56.4477 32 56 31.5523 56 31V1Z"
                  />
                  <path
                    d="M71 0C70.4477 0 70 0.447715 70 1V31C70 31.5523 70.4477 32 71 32H80C80.5523 32 81 31.5523 81 31V1C81 0.447715 80.5523 0 80 0H71Z"
                  />
                </svg>
              </button>
            </div>
            <button
              @click="set_show_cols(false)"
              class="sp-absolute sp-top-0 sp-right-0 sp-text-secondary sp-mt-2 sp-mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-fill-current sp-w-4 sp-h-4"
              >
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- / New Section -->
    <span class="sp-hidden">END-REMOVE</span>
    <!-- Toolbar -->
    <span class="sp-hidden">START-REMOVE</span>
    <div
      :class="{
          'sp-highlight-section':
            section.rows.length !== 0 && shared.highlight_option_target == section.id && shared.is_moving == false || (section.rows.length !== 0 && this.shared.setup_page_meta.current_block.id == section.id && this.$route.params.blockid )
        }"
    ></div>
    <div
      class="sp-flex sp-absolute sp-top-0 sp-left-0 sp-w-full sp-z-50 sp-justify-center"
      v-show="section.rows.length !== 0 &&  shared.highlight_option_target == section.id && shared.is_moving == false"
    >
      <div
        class="sp-section-toolbar sp-flex sp-text-white sp-tb-top"
        :class="{'sp-tb-bottom':this.shared.builder_top  < 25 && sindex === 0}"
      >
        <span
          class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-rounded-full sp-drag-section sp-cursor-move sp-p-1 hover:sp-bg-secondary-darker"
          v-tooltip="{content:'Move Section',delay:{ show: 500, hide: 0 }}"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="sp-w-4 sp-fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M5.54 8.46L2 12l3.54 3.54 1.76-1.77L5.54 12l1.76-1.77zm6.46 10l-1.77-1.76-1.77 1.76L12 22l3.54-3.54-1.77-1.76zm6.46-10l-1.76 1.77L18.46 12l-1.76 1.77 1.76 1.77L22 12zm-10-2.92l1.77 1.76L12 5.54l1.77 1.76 1.77-1.76L12 2z"
            />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </span>
        <span
          class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-rounded-full sp-cursor-pointer sp-p-1 hover:sp-bg-secondary-darker"
          v-tooltip="{content:'Section Settings',delay:{ show: 500, hide: 0 }}"
          @click="edit_block(section.id)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="sp-w-4 sp-fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
            />
          </svg>
        </span>
        <span
          v-if="shared.template_dev_mode === true"
          class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-rounded-full sp-cursor-pointer sp-p-1 hover:sp-bg-secondary-darker"
          v-tooltip="{content:'Save Global Section',delay:{ show: 500, hide: 0 }}"
          @click="save_as_global_template(section,'section')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="sp-w-4 sp-fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"
            />
          </svg>
        </span>
        <span
          v-else
          class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-rounded-full sp-cursor-pointer sp-p-1 hover:sp-bg-secondary-darker"
          v-tooltip="{content:'Save Section',delay:{ show: 500, hide: 0 }}"
          @click="save_element(section,'section')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="sp-w-4 sp-fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"
            />
          </svg>
        </span>

        <span
          class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-rounded-full sp-cursor-pointer sp-p-1 hover:sp-bg-secondary-darker"
          v-tooltip="{content:'Duplicate Section',delay:{ show: 500, hide: 0 }}"
          @click="duplicate_element(section,sindex)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="sp-w-4 sp-fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"
            />
          </svg>
        </span>
        <span
          class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-rounded-full sp-cursor-pointer sp-p-1 hover:sp-bg-secondary-darker"
          v-tooltip="{content:'Delete Section',delay:{ show: 500, hide: 0 }}"
          @click="delete_element(sindex)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="sp-w-4 sp-fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
            />
          </svg>
        </span>
      </div>
    </div>
    <span class="sp-hidden">END-REMOVE</span>
    <!-- End Toolbar -->
    <draggable
      tag="main"
      class="sp-el-row-wrapper"
      :list="section.rows"
      group="rows"
      handle=".sp-drag-row"
      @start="start_move"
      @end="end_move"
    >
      <Row
        :row="row"
        :sindex="sindex"
        :rindex="rindex"
        v-for="(row,rindex) in section.rows"
        :key="row.id"
      ></Row>
    </draggable>
    <!-- Add Toolbar -->
    <span class="sp-hidden">START-REMOVE</span>
    <div
      class="sp-flex sp-absolute sp-el-toolbar-add"
      v-show="section.rows.length !== 0 && shared.highlight_option_target == section.id && shared.is_moving == false "
    >
      <span
        class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-cursor-pointer sp-bg-secondary hover:sp-bg-secondary-darker sp-text-white sp-rounded-full"
        v-tooltip="{content:'Add Section',delay:{ show: 500, hide: 0 }}"
        @click="add_section(section,sindex)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="sp-w-4 sp-fill-current" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          />
        </svg>
      </span>
    </div>
    <span class="sp-hidden">END-REMOVE</span>
    <!-- End Add Toolbar -->
    <!-- Modal -->
    <modal v-if="showTemplateModal" @close="showTemplateModal = false" class="sp-w-720px">
      <div slot="body" class="sp-p-10 sp-text-neutral sp-font-sans">
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
            >{{txt_5}}</label>
          </div>
          <input
            type="text"
            v-model="template_section_name"
            v-validate="'required'"
            data-vv-as="Section Template Name"
            name="template_section_name"
            class="sp-form-input sp-w-full"
            style="border-width: 1px"
            placeholder
          />
          <div v-show="errors.has('template_section_name')" class="help-block error">
            {{
            errors.first("template_section_name")
            }}
          </div>
        </div>

        <button
          @click="save_template_step1('page')"
          class="sp-mt-4 sp-inline-block sp-bg-primary sp-px-4 sp-py-3 sp-rounded sp-leading-none sp-text-white sp-no-underline sp-text-base hover:sp-bg-primary-lighter sp-cursor-pointer sp-font-semibold"
          :disabled="saving_template"
        >
          {{txt_7}}
          <span v-if="saving_template">
            <i class="fas fa-spinner fa-spin"></i>
          </span>
        </button>
        <button
          @click="showTemplateModal = false"
          class="sp-ml-3 sp-mt-8 sp-inline-block sp-bg-neutral-15 sp-px-4 sp-py-3 sp-rounded sp-leading-none sp-text-neutral-80 sp-no-underline sp-text-base hover:sp-bg-neutral-20 sp-cursor-pointer sp-font-semibold"
        >{{txt_6}}</button>
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
        <LiteCTABuilder feature_source="saved-templates" feature="Saved Templates" />
           </div>
      <h3 slot="header"></h3>
    </modal>
  </section>

</template>

<script>
import qs from 'qs';
import { __ } from '@wordpress/i18n';
import draggable from 'vuedraggable';
import Row from '@/components/Row.vue';
import { helpers } from '../mixins/helpers.js';
import modal from '@/components/Modal.vue';
import NProgress from 'nprogress';
import LiteCTABuilder from '@/components/LiteCTABuilder.vue';

export default {
  name: 'Section',
  mixins: [ helpers ],
  props: {
    section: Object,
    sindex: Number,
  },
  data() {
    return {
      txt_2: __( 'or', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Drag a new block here', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Enter a new section template name:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Cancel', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Save Template', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Choose your layout:', process.env.VUE_APP_TEXTDOMAIN ),
      show_cols: false,
      section_dropzone: [ { id: 0 } ],
      root: false,
      saving_template: false,
      template_section_name: '',
      shared: seedprod_store,
      showTemplateModal: false,
      showUpsellModal: false,
      code: false,
    };
  },
  watch: {

    // whenever question changes, this function will run
    'section.rows': function( n, o ) {
      if ( 0 == n.length ) {
        let newObj = {
          id: this.uid(),
          type: 'row',
          colType: '1-col',
          cols: [],
          settings: JSON.parse( JSON.stringify( this.shared.block_templates.row ) ),
        };

        this.section.rows = [ newObj ];
      }
    },
  },
  methods: {
    set_sindex_stub( sindex ) {
      this.shared.section_template_id_stub_index = sindex;
      this.goto_template_section();
    },
    insert_section_row_layout( type, sindex ) {
      let cols = this.generate_cols( type );

      let r;
      r = {
        id: this.uid(),
        type: 'row',
        colType: type,
        cols: cols,
        settings: JSON.parse( JSON.stringify( this.shared.block_templates.row ) ),
      };

      this.section.rows = [ r ];
      this.show_cols = false;
    },
    set_show_cols( v ) {
      this.show_cols = v;
      this.focus_block( 'sp-bottom-section-dropzone', 'bottom' );
    },
    add_new_section_block( evt ) {
      if ( 0 == this.section_dropzone[0].id ) {
        var new_block = JSON.parse( JSON.stringify( this.section_dropzone[1]) );
        this.section_dropzone.splice( 1, 1 );
      } else {
        var new_block = JSON.parse( JSON.stringify( this.section_dropzone[0]) );
        this.section_dropzone.splice( 0, 1 );
      }
      if ( 'row' == new_block.type ) {
        this.show_cols = true;
        return;
      }

      // add new 1 col section with block
      let newObj = {
        id: this.uid(),
        type: 'row',
        colType: '1-col',
        cols: [
          {
            id: this.uid(),
            type: 'col',
            blocks: [ new_block ],
            settings: JSON.parse(
              JSON.stringify( this.shared.block_templates.col )
            ),
          },
        ],
        settings: JSON.parse( JSON.stringify( this.shared.block_templates.row ) ),
      };

      this.section.rows = [ newObj ];

      //this.shared.settings.document.sections.push(newObj);
      this.edit_block( new_block.id );
      this.focus_block( new_block.id );
    },
    goto_template_section() {
      this.$router.push({ name: 'sectiontemplates' });
    },
    show_tooltip( id ) {
      let self = this;
      setTimeout( function() {
        self.shared.mousedown_el = id;

        //console.log(self.shared.mousedown_el);
      }, 1500 );
    },
    save_as_global_template: function( obj, type = null ) {
      let cloneObj = JSON.parse( JSON.stringify( obj ) );
      this.code = JSON.stringify( obj );
      this.showTemplateModal = true;

    },
    save_element: function( obj, type = null ) {
      if ( 'seedprod_lite' == this.shared.page_path ) {
        this.showUpsellModal = true;
        return false;
      }
      this.showTemplateModal = true;
      let cloneObj = JSON.parse( JSON.stringify( obj ) );
      this.code = JSON.stringify( obj );
    },
    save_template_step1() {
      let _self = this;

      this.$validator.validateAll().then( function( result ) {
        if ( result ) {
          _self.saving_template = true;
          if ( true === _self.shared.template_dev_mode ) {
            _self.save_template_step2_global( _self.selected_template_id );
          } else {
            _self.save_template_step2( _self.selected_template_id );
          }

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
    save_template_step2_global( type, id = null ) {
      let _self = this;

      if ( ! confirm( 'Please make sure to perform a Save before saving as a global section. Click OK to proceed.' ) ) {
        return false;
      }

      NProgress.start();

      let data = qs.stringify({
        post_id: this.$route.params.id,
        type: 'section',
        code: this.code,
        name: this.template_section_name,
      });

      this.axios
        .post( 'admin-ajax.php?action=seedprod_pro_save_global_template_utility_section&post_id=' + this.$route.params.id, data, {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        })
        .then( function( response ) {
          NProgress.done();
          console.log( response.data.error );
          if ( null != response.data.error ) {
            alert( response.data.error );
          } else {
            alert( 'The global section has been save with the id:' + response.data.template_id + ' You will now be redirected back to the main templates page.' );
            _self.showTemplateModal = false;

          //window.location.href = "?page=seedprod_pro_templates";
          }

        })
        .catch( function( error ) {
          console.log( error );
        });

    },
    save_template_step2( type, id = null ) {
      let _self = this;
      NProgress.start();

      let data = {
        api_token: this.shared.api_token,
        site_token: this.shared.site_token,
        type: 'section',
        code: this.code,
        name: this.template_section_name,
      };

      // send request
      this.axios
        .post( seedprod_remote_api + 'template-save', data )
        .then( function( response ) {
          NProgress.done();
          _self.showTemplateModal = false;
          _self.saving_template = false;

          _self.$swal({
            imageUrl:
              _self.shared.plugin_path + 'public/svg/success-24px-white.svg',
            text: 'Template has been saved!',
            toast: true,
            type: null,
            customClass: 'sp-toast-success',
            position: 'top-end',
            showConfirmButton: false,
            timer: 30000,
          });
        })
        .catch( function( error ) {
          console.log( error );
          NProgress.done();
          _self.saving_template = false;

          _self.$swal({
            imageUrl:
              _self.shared.plugin_path + 'public/svg/success-24px-white.svg',
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
  },
  computed: {
    sectionClasses: function() {
      let key = '';
      let obj = {};
      if ( '' != this.section.settings.bgPosition ) {
        obj['spBg' + this.section.settings.bgPosition] = true;
      }
      return obj;
    },
    sectionStyleObject: function() {
      let width = '100%';
      let maxwidth = '100%';
      if ( 2 == this.section.settings.contentWidth ) {
        width = this.section.settings.width + 'px';
      }

      let p = '';
      if ( this.section.settings.paddingSync ) {
        p = this.padding_render(
          this.section.settings.paddingTop,
          this.section.settings.paddingTop,
          this.section.settings.paddingTop,
          this.section.settings.paddingTop
        );
      } else {
        p = this.padding_render(
          this.section.settings.paddingTop,
          this.section.settings.paddingRight,
          this.section.settings.paddingBottom,
          this.section.settings.paddingLeft
        );
      }

      let mt = '';
      if ( '' != this.section.settings.marginTop ) {
        mt = this.section.settings.marginTop + 'px';
      }

      let bdr = '';
      if ( '' != this.section.settings.borderRadius ) {
        bdr = this.section.settings.borderRadius + 'px';
      }

      if ( false === this.section.settings.borderRadiusSync ) {
        bdr = this.border_radius_render(
          this.section.settings.borderRadiusTL,
          this.section.settings.borderRadiusTR,
          this.section.settings.borderRadiusBR,
          this.section.settings.borderRadiusBL
        );
      } else {
        bdr = this.section.settings.borderRadiusTL + 'px';
      }

      let bt = this.section.settings.borderTop;
      let br = this.section.settings.borderRight;
      let bb = this.section.settings.borderBottom;
      let bl = this.section.settings.borderLeft;
      if ( this.section.settings.borderSync ) {
        br = bt;
        bb = bt;
        bl = bt;
      }

      let bgImage = '';
      if ( '' != this.section.settings.bgImage ) {
        bgImage = 'url(\'' + this.section.settings.bgImage + '\')';
      }
      if ( '' == bgImage ) {
        if ( 'g' == this.section.settings.bgStyle ) {
          if (
            'linear' == this.section.settings.bgGradient.type
          ) {
            bgImage =
              'linear-gradient(' +
              this.section.settings.bgGradient.angle +
              'deg, ' +
              this.section.settings.bgGradient.color1 +
              ' ' +
              this.section.settings.bgGradient.color1location +
              '%, ' +
              this.section.settings.bgGradient.color2 +
              ' ' +
              this.section.settings.bgGradient.color2location +
              '%)';
          } else {
            bgImage =
              'radial-gradient(circle at ' +
              this.section.settings.bgGradient.position +
              ', ' +
              this.section.settings.bgGradient.color1 +
              ' ' +
              this.section.settings.bgGradient.color1location +
              '%, ' +
              this.section.settings.bgGradient.color2 +
              ' ' +
              this.section.settings.bgGradient.color2location +
              '%)';
          }
        }
      }

      return {
        'background-image': bgImage,
        'border-top': this.border_render(
          bt,
          this.section.settings.borderStyle,
          this.section.settings.borderColor
        ),
        'border-right': this.border_render(
          br,
          this.section.settings.borderStyle,
          this.section.settings.borderColor
        ),
        'border-bottom': this.border_render(
          bb,
          this.section.settings.borderStyle,
          this.section.settings.borderColor
        ),
        'border-left': this.border_render(
          bl,
          this.section.settings.borderStyle,
          this.section.settings.borderColor
        ),
        'background-color': this.section.settings.bgColor,
        width: width,
        'max-width': maxwidth,
        padding: p,
        'margin-top': mt,
        'box-shadow': this.box_shadow( this.section.settings.shadow ),
        'border-radius': bdr,
      };
    },
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.section, function( value, key ) {
      self.set_default_val( self.section.settings, key, value );
    });
  },
  components: {
    draggable,
    Row,
    modal,
    LiteCTABuilder,
  },
};
</script>
