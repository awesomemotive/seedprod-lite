<template>
  <div
    :id="'sp-'+row.id"
    class="sp-el-row sm:sp-flex sp-justify-between sp-w-full sp-relative sp-m-auto"
    :style="rowStyleObject"
    :class="rowClasses"
    @mouseover.stop="highlight_option_target(row.id)"
    @click.capture="edit_block(row.id,row.cols.length)"
  >
    <span class="sp-hidden">START-REMOVE</span>
    <!-- New Row -->
    <div v-if="row.cols.length === 0" class="sp-el-col sp-p-4 sp-w-full">
      <div id="sp-sp-bottom-row-dropzone" class="sp-bg-white">
        <div v-if="show_cols === false">
          <draggable
            class="sp-bottom-row-dropzone"
            :list="section_dropzone"
            :group="{name:'blocks',put:true, pull: false}"
            @add="add_new_row_block($event,row,sindex,rindex)"
            ghost-class="sp-exclude-ghost"
            chosen-class="sp-exclude-chosen"
            draggable=".none"
          >
            <div
              class="sp-flex sp-justify-center sp-py-2 sp-items-center sp-bg-blue-10 sp-border-blue sp-border-dotted sp-border-2 sp-relative"
              v-for="(b,i) in section_dropzone"
              :key="i"
            >
              <div class="sp-flex sp-justify-center sp-items-center">
                <button
                  @click="set_show_cols(true)"
                  class="sp-bg-blue hover:sp-bg-primary sp-flex sp-justify-center sp-items-center sp-w-8 sp-h-8 sp-rounded-full sp-text-white sp-mr-2"
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
              </div>
              <div class="sp-px-2 sp-italic sp-text-xs sp-text-blue sp-font-sans">{{txt_2}}</div>
              <div
                class="sp-font-bold sp-text-xs sp-text-blue sp-cursor-pointer sp-font-sans"
                @click="add_block"
              >{{txt_3}}</div>

              <button
                v-if="shared.settings.document.sections[sindex].rows.length > 1"
                @click="delete_blank_element(sindex,rindex)"
                class="sp-absolute sp-right-0 sp-text-blue sp-mr-2"
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
            class="sp-flex sp-justify-center sp-py-2 sp-items-center sp-bg-blue-10 sp-border-blue sp-border-dotted sp-border-2 sp-relative sp-flex-col"
          >
            <div class="sp-font-bold sp-text-xs sp-text-blue sp-pb-6 sp-pt-2 sp-font-sans">{{txt_4}}</div>
            <div class="sp-flex sp-text-blue-50 sp-pb-5">
              <button
                @click="add_cols_action('1-col',row,sindex,rindex)"
                class="sp-px-3 hover:sp-text-blue"
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
                @click="add_cols_action('right-sidebar',row,sindex,rindex)"
                class="sp-px-3 hover:sp-text-blue"
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
                @click="add_cols_action('left-sidebar',row,sindex,rindex)"
                class="sp-px-3 hover:sp-text-blue"
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
                @click="add_cols_action('2-col',row,sindex,rindex)"
                class="sp-px-3 hover:sp-text-blue"
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
            <div class="sp-flex sp-text-blue-50 sp-pb-4">
              <button
                @click="add_cols_action('3-col',row,sindex,rindex)"
                class="sp-px-3 hover:sp-text-blue"
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
                @click="add_cols_action('4-col',row,sindex,rindex)"
                class="sp-px-3 hover:sp-text-blue"
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
                @click="add_cols_action('5-col',row,sindex,rindex)"
                class="sp-px-3 hover:sp-text-blue"
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
                @click="add_cols_action('6-col',row,sindex,rindex)"
                class="sp-px-3 hover:sp-text-blue"
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
              v-if="rindex != 0"
              @click="delete_blank_element(sindex,rindex)"
              class="sp-absolute sp-top-0 sp-right-0 sp-text-blue sp-mt-2 sp-mr-2"
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
    <!-- / New Row -->
    <span class="sp-hidden">END-REMOVE</span>
    <span class="sp-hidden">START-REMOVE</span>
    <div
      class="sp-flex sp-absolute sp-block-toolbar sp-justify-center sp-top-0 sp-left-0"
      :class="{'sp-tb-row-bottom':shared.builder_top  < 25 && (rindex === 0 && sindex === 0)}"
    >
      <div
        v-show="shared.highlight_option_target == row.id && shared.is_moving == false  && row.cols.length !== 0 "
        class="sp-flex sp-border-none sp-text-white sp-z-60"
      >
        <span class="sp-text-blue" style="margin-right: -2px; ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30.2 27.7"
            style="width:31.2px;"
            class="sp-fill-current sp-w-5"
          >
            <path
              d="M29.9,27.5V0.1c-5.6,0-10.7,3.1-13.3,8L9.1,22.2c-1.7,3.3-5.1,5.3-8.8,5.3L29.9,27.5z"
            />
          </svg>
        </span>
        <span class="sp-bg-blue sp-flex sp-items-center">
          <span
            class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-rounded-full sp-drag-row sp-cursor-move sp-p-1 hover:sp-bg-blue-darker"
            v-tooltip="{content:'Move Row',delay:{ show: 500, hide: 0 }}"
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
            class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-rounded-full sp-cursor-pointer sp-p-1 hover:sp-bg-blue-darker"
            v-tooltip="{content:'Row Settings',delay:{ show: 500, hide: 0 }}"
            @click="edit_block(row.id)"
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
            v-if="row.cols && row.cols.length > 1"
            class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-rounded-full sp-cursor-pointer sp-p-1 hover:sp-bg-blue-darker"
            v-tooltip="{content:'Resize Columns',delay:{ show: 500, hide: 0 }}"
            @click="resize_cols(row)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-w-4 sp-h-4 sp-fill-current"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M21 4H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z"
              />
            </svg>
          </span>

          <span
            class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-rounded-full sp-cursor-pointer sp-p-1 hover:sp-bg-blue-darker"
            v-tooltip="{content:'Duplicate Row',delay:{ show: 500, hide: 0 }}"
            @click="duplicate_element(row,sindex,rindex)"
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
            class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-rounded-full sp-cursor-pointer sp-p-1 hover:sp-bg-blue-darker"
            v-tooltip="{content:'Delete Row',delay:{ show: 500, hide: 0 }}"
            @click="delete_element(sindex,rindex)"
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
        </span>
        <span class="sp-text-blue" style="margin-left: -1px; ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30.2 27.7"
            style="width:31.2px;"
            class="sp-fill-current sp-w-5"
          >
            <path
              d="M29.9,27.6c-3.7,0-7.1-2.1-8.8-5.3L13.6,8.1c-2.6-4.9-7.7-8-13.3-8v27.4L29.9,27.6z"
            />
          </svg>
        </span>
      </div>
    </div>
    <span class="sp-hidden">END-REMOVE</span>

    <div
      :id="'sp-'+col.id"
      class="sp-el-col sp-p-4 sp-relative"
      :class="colClass(row,cindex,col)"
      :style="col_style(row.settings,col.settings, row)"
      v-for="(col,cindex) in row.cols"
      :key="col.id"
      @click="maybe_add_block(col.blocks.length)"
    >
       <span class="sp-hidden">START-REMOVE</span>
       <span
       v-show="shared.highlight_option_target == row.id && shared.is_moving == false && row.cols.length !== 0"
            class="sp-absolute sp-top-0 sp-right-0 sp-z-40 hover:sp-bg-blue-darker sp-bg-blue sp-text-white sp-p-1 sp-rounded-bl sp-cursor-pointer"
            v-tooltip="{content:'Column Settings',delay:{ show: 500, hide: 0 }}"
            @click="edit_block(col.id,null,true)"
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
        <span class="sp-hidden">END-REMOVE</span>
      <!-- {{col.rows}} <Row
        :row="row"
        :sindex="sindex"
        :rindex="rindex"
        :r2index="r2index"
        v-for="(row,r2index) in col.rows"
        :key="row.id"
      ></Row>-->

      <draggable
        tag="main"
        class="sp-el-block-wrapper"
        :class="colClassTemp(row,cindex,col)"
        :list="col.blocks"
        group="blocks"
        handle=".sp-drag-block"
        @start="start_move"
        @end="end_move"
        :move="moving"
      >
        <main
          :id="'sp-'+block.id"
          class="sp-el-block"
          :class="'sp-'+block.type"
          v-for="(block,bindex) in col.blocks"
          :key="block.id"
        >
          <main
            class="sp-relative sp-w-full"
            @mouseover.stop="highlight_option_target(block.id)"
            :class="{
                    'sp-highlight-block':
                       block.type != 'image' && block.type != 'video' && block.type != 'button2' && (shared.highlight_option_target == block.id && shared.is_moving == false || shared.setup_page_meta.current_block.id == block.id && $route.params.blockid)
                  }"
            @click="edit_block(block.id)"
          >
            <!-- Toolbar -->
            <span class="sp-hidden">START-REMOVE</span>
            <div
              v-if="block.type == 'image' || block.type == 'video' || block.type == '2button'"
              class="sp-absolute sp-top-0 sp-left-0 sp-right-0 sp-bottom-0"
              :class="{
                    'sp-highlight-block':
                      shared.highlight_option_target == block.id && shared.is_moving == false || shared.setup_page_meta.current_block.id == block.id && $route.params.blockid
                  }"
              @click="edit_block(block.id)"
            ></div>
            <div
              class="sp-flex sp-absolute sp-block-toolbar sp-justify-center"
              :class="{'sp-tb-block-bottom':shared.builder_top  < 25 && (bindex === 0 && rindex === 0 &&  sindex === 0)}"
            >
              <div
                v-show=" shared.highlight_option_target == block.id && shared.is_moving == false"
                class="sp-flex sp-border-none sp-border sp-text-white sp-z-70"
              >
                <span class="sp-text-primary" style="margin-right: -2px; ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30.2 27.7"
                    style="width:31.2px;"
                    class="sp-fill-current sp-w-5"
                  >
                    <path
                      d="M29.9,27.5V0.1c-5.6,0-10.7,3.1-13.3,8L9.1,22.2c-1.7,3.3-5.1,5.3-8.8,5.3L29.9,27.5z"
                    />
                  </svg>
                </span>
                <span class="sp-bg-primary sp-flex sp-items-center">
                  <span
                    class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-rounded-full sp-drag-block sp-cursor-move sp-p-1 hover:sp-bg-primary-darker"
                    v-tooltip="{content:'Move Block',delay:{ show: 500, hide: 0 }}"
                    @mousedown="remove_editor(block.id)"
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
                    class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-rounded-full sp-cursor-pointer sp-p-1 hover:sp-bg-primary-darker"
                    v-tooltip="{content:'Block Settings',delay:{ show: 500, hide: 0 }}"
                    @click="edit_block(block.id)"
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
                    class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-rounded-full sp-cursor-pointer sp-p-1 hover:sp-bg-primary-darker"
                    v-tooltip="{content:'Save Block',delay:{ show: 500, hide: 0 }}"
                    @click="save_element(block,'block')"
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
                    class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-rounded-full sp-cursor-pointer sp-p-1 hover:sp-bg-primary-darker"
                    v-tooltip="{content:'Duplicate Block',delay:{ show: 500, hide: 0 }}"
                    @click="duplicate_element(block,sindex,rindex,cindex,bindex)"
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
                    class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-rounded-full sp-cursor-pointer sp-p-1 hover:sp-bg-primary-darker"
                    v-tooltip="{content:'Delete Block',delay:{ show: 500, hide: 0 }}"
                    @click="delete_element(sindex,rindex,cindex,bindex)"
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
                </span>
                <span class="sp-text-primary" style="margin-left: -1px; ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30.2 27.7"
                    style="width:31.2px;"
                    class="sp-fill-current sp-w-5"
                  >
                    <path
                      d="M29.9,27.6c-3.7,0-7.1-2.1-8.8-5.3L13.6,8.1c-2.6-4.9-7.7-8-13.3-8v27.4L29.9,27.6z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <span class="sp-hidden">END-REMOVE</span>
            <MyButton v-if="block.type == 'button'" :block="block"></MyButton>
            <Header v-if="block.type == 'header'" :block="block"></Header>
            <Icon v-if="block.type == 'icon'" :block="block"></Icon>
            <Feature v-if="block.type == 'feature'" :block="block"></Feature>
            <Testimonial v-if="block.type == 'testimonial'" :block="block"></Testimonial>
            <ImageCarousel v-if="block.type == 'imagecarousel'" :block="block"></ImageCarousel>
            <IconFeature v-if="block.type == 'iconfeature'" :block="block"></IconFeature>
            <MyText v-if="block.type == 'text'" :block="block"></MyText>
            <BulletList v-if="block.type == 'bullet-list'" :block="block"></BulletList>
            <MyImage v-if="block.type == 'image'" :block="block"></MyImage>
            <MyVideo v-if="block.type == 'video'" :block="block"></MyVideo>
            <Countdown v-if="block.type == 'countdown'" :block="block"></Countdown>
            <Divider v-if="block.type == 'divider'" :block="block"></Divider>
            <Spacer v-if="block.type == 'spacer'" :block="block"></Spacer>
            <SocialProfiles v-if="block.type == 'social-profiles'" :block="block"></SocialProfiles>
            <SocialSharing v-if="block.type == 'social-sharing'" :block="block"></SocialSharing>
            <CustomHTML v-if="block.type == 'custom-html'" :block="block"></CustomHTML>
            <Shortcode v-if="block.type == 'shortcode'" :block="block"></Shortcode>
            <Login v-if="block.type == 'login'" :block="block"></Login>
            <OptinForm v-if="block.type == 'optin-form'" :block="block"></OptinForm>
            <ContactForm v-if="block.type == 'contact-form'" :block="block"></ContactForm>
            <Giveaway v-if="block.type == 'giveaway'" :block="block"></Giveaway>
            <MyForm v-if="block.type == 'form'" :block="block"></MyForm>
            <Nav v-if="block.type == 'nav'" :block="block"></Nav>
            <StarRating v-if="block.type == 'starrating'" :block="block"></StarRating>
            <Anchor v-if="block.type == 'anchor'" :block="block"></Anchor>
            <Accordion v-if="block.type == 'accordion'" :block="block"></Accordion>
            <ProgressBar v-if="block.type == 'progress-bar'" :block="block"></ProgressBar>
            <GoogleMaps v-if="block.type == 'googlemaps'" :block="block"></GoogleMaps>
            <AnimatedHeadline v-if="block.type == 'animatedheadline'" :block="block"></AnimatedHeadline>
            <FacebookLike v-if="block.type == 'facebooklike'" :block="block"></FacebookLike>
            <FacebookComments v-if="block.type == 'facebookcomments'" :block="block"></FacebookComments>
            <FacebookPage v-if="block.type == 'facebookpage'" :block="block"></FacebookPage>
            <FacebookEmbed v-if="block.type == 'facebookembed'" :block="block"></FacebookEmbed>
            <TwitterEmbedTweet v-if="block.type == 'twitterembedtweet'" :block="block"></TwitterEmbedTweet>
            <TwitterEmbedTimeline v-if="block.type == 'twitterembedtimeline'" :block="block"></TwitterEmbedTimeline>
            <TwitterTweetButton v-if="block.type == 'twittertweetbutton'" :block="block"></TwitterTweetButton>
            <TwitterFollowButton v-if="block.type == 'twitterfollowbutton'" :block="block"></TwitterFollowButton>
            <WCAddToCart v-if="block.type == 'wcaddtocart'" :block="block"></WCAddToCart>
            <WCCheckout v-if="block.type == 'wccheckout'" :block="block"></WCCheckout>
            <WCCart v-if="block.type == 'wccart'" :block="block"></WCCart>
            <WCCustomProductsGrid v-if="block.type == 'wccustomproductsgrid'" :block="block" :type="'wccustomproductsgrid'"></WCCustomProductsGrid>
            <WCFeaturedProductsGrid v-if="block.type == 'wcfeaturedproductsgrid'" :block="block"></WCFeaturedProductsGrid>
            <WCSaleProductsGrid v-if="block.type == 'wcsaleproductsgrid'" :block="block"></WCSaleProductsGrid>
            <WCBestSellingProductsGrid v-if="block.type == 'wcbestsellingproductsgrid'" :block="block"></WCBestSellingProductsGrid>
            <WCRecentProductsGrid v-if="block.type == 'wcrecentproductsgrid'" :block="block"></WCRecentProductsGrid>
            <WCTopRatedProductsGrid v-if="block.type == 'wctopratedproductsgrid'" :block="block"></WCTopRatedProductsGrid>
            <PricingTable v-if="block.type == 'pricingtable'" :block="block"></PricingTable>

            <!-- Add Toolbar -->
            <span class="sp-hidden">START-REMOVE</span>
            <div
              class="sp-flex sp-absolute sp-el-toolbar-add sp-w-full sp-z-70"
              v-show="shared.highlight_option_target == block.id && shared.is_moving == false "
            >
              <span
                class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-cursor-pointer sp-bg-primary hover:sp-bg-primary-darker sp-text-white sp-rounded-full"
                v-tooltip="{content:'Add Block',delay:{ show: 500, hide: 0 }}"
                @click.stop="add_block()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sp-w-4 sp-fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  />
                </svg>
              </span>
            </div>
            <span class="sp-hidden">END-REMOVE</span>
            <!-- End Add Toolbar -->
          </main>
        </main>
      </draggable>
    </div>

    <!-- Add Toolbar -->
    <span class="sp-hidden">START-REMOVE</span>
    <div
      class="sp-flex sp-absolute sp-el-toolbar-add sp-w-full"
      v-show="shared.highlight_option_target == row.id && shared.is_moving == false && row.cols.length !== 0"
    >
      <span
        class="sp-flex sp-items-center sp-justify-center sp-w-26px sp-h-26px sp-cursor-pointer sp-bg-blue hover:sp-bg-blue-darker sp-text-white sp-rounded-full"
        v-tooltip="{content:'Add Row',delay:{ show: 500, hide: 0 }}"
        @click="add_row(row,sindex,rindex)"
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
            >{{txt_6}}</label>
          </div>
          <input
            type="text"
            v-model="template_block_name"
            v-validate="'required'"
            data-vv-as="Block Template Name"
            name="template_block_name"
            class="sp-form-input sp-w-full"
            style="border-width: 1px"
            placeholder
          />
          <div v-show="errors.has('template_block_name')" class="help-block error">
            {{
            errors.first("template_block_name")
            }}
          </div>
        </div>

        <button
          @click.stop="save_template_step1('page')"
          class="sp-mt-4 sp-inline-block sp-bg-primary sp-px-4 sp-py-3 sp-rounded sp-leading-none sp-text-white sp-no-underline sp-text-base hover:sp-bg-primary-lighter sp-cursor-pointer sp-font-semibold"
          :disabled="saving_template"
        >
          {{txt_8}}
          <span v-if="saving_template">
            <i class="fas fa-spinner fa-spin"></i>
          </span>
        </button>
        <button
          @click="showTemplateModal = false"
          class="sp-ml-3 sp-mt-8 sp-inline-block sp-bg-neutral-15 sp-px-4 sp-py-3 sp-rounded sp-leading-none sp-text-neutral-80 sp-no-underline sp-text-base hover:sp-bg-neutral-20 sp-cursor-pointer sp-font-semibold"
        >{{txt_7}}</button>
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
        <LiteCTABuilder feature_source="saved-templates" feature="Saved Templates"/>
           </div>
      <h3 slot="header"></h3>
    </modal>
  </div>
</template>

<script>
import { __ } from "@wordpress/i18n";
import draggable from "vuedraggable";
import MyButton from "@/components/Button.vue";
import Header from "@/components/Header.vue";
import Icon from "@/components/Icon-SP_VERSION.vue";
import Feature from "@/components/Feature-SP_VERSION.vue";
import Testimonial from "@/components/Testimonial-SP_VERSION.vue";
import ImageCarousel from "@/components/ImageCarousel-SP_VERSION.vue";
import IconFeature from "@/components/IconFeature-SP_VERSION.vue";
import MyText from "@/components/Text.vue";
import BulletList from "@/components/BulletList.vue";
import MyImage from "@/components/Image.vue";
import MyVideo from "@/components/Video.vue";
import Countdown from "@/components/Countdown-SP_VERSION.vue";
import Divider from "@/components/Divider.vue";
import Spacer from "@/components/Spacer.vue";
import SocialProfiles from "@/components/SocialProfiles-SP_VERSION.vue";
import SocialSharing from "@/components/SocialSharing-SP_VERSION.vue";
import CustomHTML from "@/components/CustomHTML.vue";
import Shortcode from "@/components/Shortcode-SP_VERSION.vue";
import Login from "@/components/Login-SP_VERSION.vue";
import OptinForm from "@/components/OptinForm-SP_VERSION.vue";
import MyForm from "@/components/Form-SP_VERSION.vue";
import Nav from "@/components/Nav-SP_VERSION.vue";
import StarRating from "@/components/StarRating-SP_VERSION.vue";
import Anchor from "@/components/Anchor-SP_VERSION.vue";
import AnimatedHeadline from "@/components/AnimatedHeadline-SP_VERSION.vue";
import FacebookLike from "@/components/FacebookLike-SP_VERSION.vue";
import FacebookComments from "@/components/FacebookComments-SP_VERSION.vue";
import FacebookPage from "@/components/FacebookPage-SP_VERSION.vue";
import FacebookEmbed from "@/components/FacebookEmbed-SP_VERSION.vue";
import TwitterEmbedTweet from "@/components/TwitterEmbedTweet-SP_VERSION.vue";
import TwitterEmbedTimeline from "@/components/TwitterEmbedTimeline-SP_VERSION.vue";
import TwitterTweetButton from "@/components/TwitterTweetButton-SP_VERSION.vue";
import TwitterFollowButton from "@/components/TwitterFollowButton-SP_VERSION.vue";
import Accordion from "@/components/Accordion-SP_VERSION.vue";
import GoogleMaps from "@/components/GoogleMaps-SP_VERSION.vue";
import ContactForm from "@/components/ContactForm.vue";
import Giveaway from "@/components/Giveaway.vue";
import ProgressBar from "@/components/ProgressBar-SP_VERSION.vue";
import { helpers } from "../mixins/helpers.js";
import Split from "split.js";
import modal from "@/components/Modal.vue";
import LiteCTABuilder from "@/components/LiteCTABuilder.vue";
import NProgress from "nprogress";
import WCAddToCart from "@/components/WCAddToCart-SP_VERSION.vue";
import WCCheckout from "@/components/WCCheckout-SP_VERSION.vue";
import WCCart from "@/components/WCCart-SP_VERSION.vue";
import WCCustomProductsGrid from "@/components/WCCustomProductsGrid-SP_VERSION.vue";
import WCFeaturedProductsGrid from "@/components/WCFeaturedProductsGrid-SP_VERSION.vue";
import WCSaleProductsGrid from "@/components/WCSaleProductsGrid-SP_VERSION.vue";
import WCBestSellingProductsGrid from "@/components/WCBestSellingProductsGrid-SP_VERSION.vue";
import WCRecentProductsGrid from "@/components/WCRecentProductsGrid-SP_VERSION.vue";
import WCTopRatedProductsGrid from "@/components/WCTopRatedProductsGrid-SP_VERSION.vue";
import PricingTable from "@/components/PricingTable-SP_VERSION.vue";


export default {
  name: "Row",
  mixins: [helpers],
  props: {
    row: Object,
    sindex: Number,
    rindex: Number,
  },
  data() {
    return {
      txt_2: __("or", process.env.VUE_APP_TEXTDOMAIN),
      txt_3: __("Drag a new block here", process.env.VUE_APP_TEXTDOMAIN),
      txt_4: __("Choose your layout:", process.env.VUE_APP_TEXTDOMAIN),
      txt_6: __("Enter a new block template name:", process.env.VUE_APP_TEXTDOMAIN),
      txt_7: __("Cancel", process.env.VUE_APP_TEXTDOMAIN),
      txt_8: __("Save Template", process.env.VUE_APP_TEXTDOMAIN),
      show_cols: true,
      showUpsellModal: false,
      section_dropzone: [{ id: 0 }],
      template_block_name: "",
      code: false,
      saving_template: false,
      showTemplateModal: false,
      resizeCol: {},
      shared: seedprod_store,
    };
  },
  methods: {
    add_cols_action(type, obj, sindex, rindex) {
      this.add_cols(type, obj, sindex, rindex);
      this.show_cols = false;
    },
    col_style(rowsettings, colsettings, row) {
      var p = "";
      if (colsettings.paddingSync) {
        p = this.padding_render(
          colsettings.paddingTop,
          colsettings.paddingTop,
          colsettings.paddingTop,
          colsettings.paddingTop
        );
      } else {
        p = this.padding_render(
          colsettings.paddingTop,
          colsettings.paddingRight,
          colsettings.paddingBottom,
          colsettings.paddingLeft
        );
      }
      var mt = "";
      if (colsettings.marginTop != "") {
        mt = colsettings.marginTop + "px";
      }

      var bdr = "";
      if (colsettings.borderRadius != "") {
        bdr = colsettings.borderRadius + "px";
      }

      if (colsettings.borderRadiusSync === false) {
        bdr = this.border_radius_render(
          colsettings.borderRadiusTL,
          colsettings.borderRadiusTR,
          colsettings.borderRadiusBR,
          colsettings.borderRadiusBL
        );
      } else {
        bdr = colsettings.borderRadiusTL + "px";
      }

      var bt = colsettings.borderTop;
      var br = colsettings.borderRight;
      var bb = colsettings.borderBottom;
      var bl = colsettings.borderLeft;
      if (colsettings.borderSync) {
        br = bt;
        bb = bt;
        bl = bt;
      }

      var bgImage = "";
      if (colsettings.bgImage != "") {
        bgImage = "url('" + colsettings.bgImage + "')";
      }

      if (bgImage == "") {
        if (colsettings.bgStyle == "g") {
          if (colsettings.bgGradient.type == "linear") {
            bgImage =
              "linear-gradient(" +
              colsettings.bgGradient.angle +
              "deg, " +
              colsettings.bgGradient.color1 +
              " " +
              colsettings.bgGradient.color1location +
              "%, " +
              colsettings.bgGradient.color2 +
              " " +
              colsettings.bgGradient.color2location +
              "%)";
          } else {
            bgImage =
              "radial-gradient(circle at " +
              colsettings.bgGradient.position +
              ", " +
              colsettings.bgGradient.color1 +
              " " +
              colsettings.bgGradient.color1location +
              "%, " +
              colsettings.bgGradient.color2 +
              " " +
              colsettings.bgGradient.color2location +
              "%)";
          }
        }
      }

      var colWidth = false;
      if (colsettings.colWidth != "") {
        //colWidth = colsettings.colWidth + "%";
        colWidth =
          "calc(" +
          colsettings.colWidth +
          "% - " +
          rowsettings.colGutter +
          "px)";
      } else {
        colWidth =
          "calc(100%/" +
          row.cols.length +
          " - " +
          rowsettings.colGutter +
          "px)";
      }

      return {
        "border-radius": bdr,
        "box-shadow": this.box_shadow(colsettings.shadow),
        "background-color": colsettings.bgColor,
        width: colWidth,
        padding: p,
        "margin-top": mt,
        "background-image": bgImage,
        "border-top": this.border_render(
          bt,
          colsettings.borderStyle,
          colsettings.borderColor
        ),
        "border-right": this.border_render(
          br,
          colsettings.borderStyle,
          colsettings.borderColor
        ),
        "border-bottom": this.border_render(
          bb,
          colsettings.borderStyle,
          colsettings.borderColor
        ),
        "border-left": this.border_render(
          bl,
          colsettings.borderStyle,
          colsettings.borderColor
        ),
      };
    },
    set_show_cols(v) {
      this.show_cols = v;
      this.focus_block("sp-bottom-row-dropzone", "bottom");
    },

    add_new_row_block(evt, row, sindex, rindex) {
      if (this.section_dropzone[0].id == 0) {
        var new_block = JSON.parse(JSON.stringify(this.section_dropzone[1]));
        this.section_dropzone.splice(1, 1);
      } else {
        var new_block = JSON.parse(JSON.stringify(this.section_dropzone[0]));
        this.section_dropzone.splice(0, 1);
      }
      //console.log(evt);
      if (new_block.type == "section") {
        return false;
      }

      if (new_block.type == "row") {
        this.show_cols = true;
        return false;
      }
      this.add_cols_action("1-col", row, sindex, rindex);
      this.shared.settings.document.sections[sindex].rows[
        rindex
      ].cols[0].blocks = [new_block];

      this.edit_block(new_block.id);
      this.focus_block(new_block.id);
    },
    save_element: function (obj, type = null) {
      if(this.shared.page_path == 'seedprod_lite'){
        this.showUpsellModal = true;
        return false;
      }
      this.shared.highlight_option_target = false;
      this.showTemplateModal = true;
      var cloneObj = JSON.parse(JSON.stringify(obj));
      this.code = JSON.stringify(obj);
    },
    save_template_step1() {
      let _self = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _self.saving_template = true;
          _self.save_template_step2(_self.selected_template_id);
        } else {
          var errors = "";
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
    save_template_step2(type, id = null) {
      let _self = this;
      NProgress.start();

      var data = {
        api_token: this.shared.api_token,
        site_token: this.shared.site_token,
        type: "block",
        code: this.code,
        name: this.template_block_name,
      };

      // send request

      this.axios
        .post(seedprod_remote_api + "template-save", data)
        .then(function (response) {
          NProgress.done();
          _self.showTemplateModal = false;
          _self.saving_template = false;

          _self.$swal({
            imageUrl:
              _self.shared.plugin_path + "public/svg/success-24px-white.svg",
            text: "Template has been saved!",
            toast: true,
            type: null,
            customClass: "sp-toast-success",
            position: "top-end",
            showConfirmButton: false,
            timer: 30000,
          });
        })
        .catch(function (error) {
          console.log(error);
          NProgress.done();
          _self.saving_template = false;

          _self.$swal({
            imageUrl:
              _self.shared.plugin_path + "public/svg/error-24px-white.svg",
            text: error.response.message,
            toast: true,
            type: null,
            position: "top-end",
            showConfirmButton: false,
            timer: 6000,
          });
        });
    },
    maybe_add_block(length) {
      if (length === 0) {
        this.$router.push({ name: "setup_block_options" });
      }
    },
    remove_editor(id) {
      return;
      wp.editor.remove("sp-ieditor-" + id);
      setTimeout(function () {
        wp.editor.remove("sp-ieditor-" + id);
        console.log("remove editor");
      }, 200);
    },
    colClassTemp: function (el, index, col) {
      // alignment ; flex settings
      var obj = {};
      obj["sp-flex"] = col.settings.display && col.settings.display == 'flex'
      if(col.settings.display && col.settings.display == 'flex'){
        if(col.settings.flexDirection && col.settings.flexDirection == 'column'){
          obj["sp-flex-col"] = true;
        }
        if(col.settings.flexDirection && col.settings.flexDirection == 'row'){
          obj["sp-flex-row"] = true;
        }
        obj["sp-h-full"] = true;
        if(col.settings.justifyContent){
          if(col.settings.justifyContent == 'flex-start'){
            obj["sp-justify-start"] = true;
          }
          if(col.settings.justifyContent == 'flex-end'){
            obj["sp-justify-end"] = true;
          }
          if(col.settings.justifyContent == 'center'){
            obj["sp-justify-center"] = true;
          }
          if(col.settings.justifyContent == 'space-between'){
            obj["sp-justify-between"] = true;
          }
          if(col.settings.justifyContent == 'space-around'){
            obj["sp-justify-around"] = true;
          }
          if(col.settings.justifyContent == 'space-evenly'){
            obj["sp-justify-evenly"] = true;
          }
        }
        if(col.settings.alignItems){
          if(col.settings.alignItems == 'flex-start'){
            obj["sp-items-start"] = true;
          }
          if(col.settings.alignItems == 'flex-end'){
            obj["sp-items-end"] = true;
          }
          if(col.settings.alignItems == 'center'){
            obj["sp-items-center"] = true;
          }
          if(col.settings.alignItems == 'baseline'){
            obj["sp-items-baseline"] = true;
          }
          if(col.settings.alignItems == 'stretch'){
            obj["sp-items-stretch"] = true;
          }
        }
      }

      return obj;
    },
    colClass: function (el, index, col) {
      var obj = {};
      if (col.settings.bgPosition != "") {
        obj["spBg" + col.settings.bgPosition] = true;
      }

      obj["sp-w-full"] = true;
      obj["sp-highlight-row"] =
        (this.shared.highlight_option_target == el.id &&
          this.shared.is_moving == false) ||
        (this.shared.setup_page_meta.current_block.id == el.id &&
          this.$route.params.blockid) ||
        (this.shared.highlight_option_target == col.id &&
          this.shared.is_moving == false) ||
        (this.shared.setup_page_meta.current_block.id == col.id &&
          this.$route.params.blockid);

      // alignment ; flex settings
      obj["sp-flex"] = col.settings.display && col.settings.display == 'flex'
      if(col.settings.display && col.settings.display == 'flex'){
        if(col.settings.flexDirection && col.settings.flexDirection == 'column'){
          obj["sp-flex-col"] = true;
        }
        if(col.settings.flexDirection && col.settings.flexDirection == 'row'){
          obj["sp-flex-row"] = true;
        }
        if(col.settings.justifyContent){
          if(col.settings.justifyContent == 'flex-start'){
            obj["sp-justify-start"] = true;
          }
          if(col.settings.justifyContent == 'flex-end'){
            obj["sp-justify-end"] = true;
          }
          if(col.settings.justifyContent == 'center'){
            obj["sp-justify-center"] = true;
          }
          if(col.settings.justifyContent == 'space-between'){
            obj["sp-justify-between"] = true;
          }
          if(col.settings.justifyContent == 'space-around'){
            obj["sp-justify-around"] = true;
          }
          if(col.settings.justifyContent == 'space-evenly'){
            obj["sp-justify-evenly"] = true;
          }
        }
        if(col.settings.alignItems){
          if(col.settings.alignItems == 'flex-start'){
            obj["sp-items-start"] = true;
          }
          if(col.settings.alignItems == 'flex-end'){
            obj["sp-items-end"] = true;
          }
          if(col.settings.alignItems == 'center'){
            obj["sp-items-center"] = true;
          }
          if(col.settings.alignItems == 'baseline'){
            obj["sp-items-baseline"] = true;
          }
          if(col.settings.alignItems == 'stretch'){
            obj["sp-items-stretch"] = true;
          }
        }
      }
      return obj;
    },
    resize_cols: function (row) {
      // get cols
      var cols = [];
      var sizes = [];
      var colWidth = 0;
      var parentWidth = 0;

      // get total width
      row.cols.forEach(function (col) {
        colWidth = jQuery("#sp-" + col.id).outerWidth();
        parentWidth = parentWidth + colWidth;
      });

      row.cols.forEach(function (col) {
        cols.push("#sp-" + col.id);
        colWidth = jQuery("#sp-" + col.id).outerWidth();
        sizes.push(Math.round((colWidth / parentWidth) * 100));
      });

      //console.log(sizes);

      if (this.resizeCol.hasOwnProperty(row.id) === false) {
        var resize = Split(cols, {
          sizes: sizes,
          gutterSize: 6,
          dragInterval: 1,
          onDrag: function () {},
          onDragEnd: function (sizes) {
            var i = 0;
            row.cols.forEach(function (col) {
              col.settings.colWidth = Math.round(sizes[i]);
              i++;
            });
          },
        });

        this.resizeCol[row.id] = resize;
      }
    },
  },
  mounted() {
    let self = this;
    lodash.forOwn(this.shared.block_templates.row, function (value, key) {
      self.set_default_val(self.row.settings, key, value);
    });
  },
  computed: {
    rowClasses: function () {
      var obj = {};
      if (this.row.settings.bgPosition != "") {
        obj["spBg" + this.row.settings.bgPosition] = true;
      }
      return obj;
    },
    rowStyleObject: function () {
      var width = "100%";
      var maxwidth = "100%";

      if (this.row.settings.width != "") {
        width = "auto";
        maxwidth = this.row.settings.width + "px";
      }

      var mt = "";
      if (this.row.settings.marginTop != "") {
        mt = this.row.settings.marginTop + "px";
      }

      var bdr = "";
      if (this.row.settings.borderRadius != "") {
        bdr = this.row.settings.borderRadius + "px";
      }

      if (this.row.settings.borderRadiusSync === false) {
        bdr = this.border_radius_render(
          this.row.settings.borderRadiusTL,
          this.row.settings.borderRadiusTR,
          this.row.settings.borderRadiusBR,
          this.row.settings.borderRadiusBL
        );
      } else {
        bdr = this.row.settings.borderRadiusTL + "px";
      }

      var bt = this.row.settings.borderTop;
      var br = this.row.settings.borderRight;
      var bb = this.row.settings.borderBottom;
      var bl = this.row.settings.borderLeft;
      if (this.row.settings.borderSync) {
        br = bt;
        bb = bt;
        bl = bt;
      }

      var bgImage = "";
      if (this.row.settings.bgImage != "") {
        bgImage = "url('" + this.row.settings.bgImage + "')";
      }

      var p = "";
      if (this.row.settings.paddingSync) {
        p = this.padding_render(
          this.row.settings.paddingTop,
          this.row.settings.paddingTop,
          this.row.settings.paddingTop,
          this.row.settings.paddingTop
        );
      } else {
        p = this.padding_render(
          this.row.settings.paddingTop,
          this.row.settings.paddingRight,
          this.row.settings.paddingBottom,
          this.row.settings.paddingLeft
        );
      }

      if (bgImage == "") {
        if (this.row.settings.bgStyle == "g") {
          if (this.row.settings.bgGradient.type == "linear") {
            bgImage =
              "linear-gradient(" +
              this.row.settings.bgGradient.angle +
              "deg, " +
              this.row.settings.bgGradient.color1 +
              " " +
              this.row.settings.bgGradient.color1location +
              "%, " +
              this.row.settings.bgGradient.color2 +
              " " +
              this.row.settings.bgGradient.color2location +
              "%)";
          } else {
            bgImage =
              "radial-gradient(circle at " +
              this.row.settings.bgGradient.position +
              ", " +
              this.row.settings.bgGradient.color1 +
              " " +
              this.row.settings.bgGradient.color1location +
              "%, " +
              this.row.settings.bgGradient.color2 +
              " " +
              this.row.settings.bgGradient.color2location +
              "%)";
          }
        }
      }

      return {
        padding: p,
        "background-image": bgImage,
        "border-top": this.border_render(
          bt,
          this.row.settings.borderStyle,
          this.row.settings.borderColor
        ),
        "border-right": this.border_render(
          br,
          this.row.settings.borderStyle,
          this.row.settings.borderColor
        ),
        "border-bottom": this.border_render(
          bb,
          this.row.settings.borderStyle,
          this.row.settings.borderColor
        ),
        "border-left": this.border_render(
          bl,
          this.row.settings.borderStyle,
          this.row.settings.borderColor
        ),
        "background-color": this.row.settings.bgColor,
        width: width,
        "max-width": maxwidth,
        "margin-top": mt,
        "box-shadow": this.box_shadow(this.row.settings.shadow),
        "border-radius": bdr,
      };
    },
  },
  components: {
    LiteCTABuilder,
    draggable,
    MyButton,
    Header,
    Icon,
    Feature,
    Testimonial,
    ImageCarousel,
    IconFeature,
    MyText,
    BulletList,
    MyImage,
    MyVideo,
    Countdown,
    Divider,
    Spacer,
    SocialProfiles,
    SocialSharing,
    CustomHTML,
    Shortcode,
    Login,
    OptinForm,
    ContactForm,
    Giveaway,
    ProgressBar,
    Split,
    modal,
    MyForm,
    Nav,
    Anchor,
    Accordion,
    GoogleMaps,
    AnimatedHeadline,
    FacebookLike,
    FacebookComments,
    FacebookPage,
    FacebookEmbed,
    TwitterEmbedTweet,
    TwitterEmbedTimeline,
    TwitterTweetButton,
    TwitterFollowButton,
    StarRating,
    WCAddToCart,
    WCCheckout,
    WCCart,
    WCCustomProductsGrid,
    WCFeaturedProductsGrid,
    WCSaleProductsGrid,
    WCBestSellingProductsGrid,
    WCRecentProductsGrid,
    WCTopRatedProductsGrid,
    PricingTable,
    Row: () => import("@/components/Row.vue"),
  },
};
</script>
