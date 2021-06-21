<template>
  <div id="sp-layout-nav" class="sp-text-xs">
    <div class="sp-p-2 sp-text-sm sp-border sp-border-t-0 sp-border-neutral-20">
      <button @click="expand_all" class="hover:sp-underline">{{txt_1}}</button> /
      <button @click="collapse_all" class="hover:sp-underline">{{txt_2}}</button>
    </div>
    <draggable id="sp-ln-page" :list="shared.settings.document.sections" group="sections">
      <div v-for="(section,sindex) in shared.settings.document.sections" :key="sindex">
        <div
          class="sp-py-1 sp-px-2 sp-flex sp-items-center sp-justify-between sp-border sp-border-t-0 sp-border-neutral-20"
          :class="{'sp-bg-white': highlight == section.id}"
          @mouseover.stop="show_block(section.id)"
          @click="toggle_section_children(section.id)"
        >
          <span class="sp-flex sp-items-center sp-cursor-move">
            <svg
              v-if="in_hide_child(section.id)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-4 sp-mr-2"
            >
              <path d="M10 17l5-5-5-5v10z" />
              <path d="M0 24V0h24v24H0z" fill="none" />
            </svg>

            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-4 sp-mr-2"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10l5 5 5-5z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-5 sp-mr-2"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M21 18H2v2h19v-2zm-2-8v4H4v-4h15m1-2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm1-4H2v2h19V4z"
              />
            </svg>
            <span class="sp-font-bold sp-text-base">{{txt_3}}</span>
          </span>

          <span class="sp-flex sp-items-center sp-justify-between">
            <svg
              @click="edit_block(section.id, null, true)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-5 sp-cursor-pointer"
              :class="{'sp-hidden': highlight != section.id}"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
              />
            </svg>

            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-5"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"
              />
            </svg>-->
            <!--
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-5"
            >
              <path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"
              />
            </svg>-->
          </span>
        </div>
        <draggable class="sp-ln-row" :list="section.rows" group="rows">
          <div v-show="show_child(section.id)">
            <div v-for="(row,rindex) in section.rows" :key="rindex">
              <div
                @click="toggle_section_children(row.id)"
                class="sp-pl-6 sp-py-1 sp-px-2 sp-flex sp-items-center sp-justify-between sp-border sp-border-t-0 sp-border-neutral-20"
                :class="{'sp-bg-white': highlight == row.id}"
                @mouseover.stop="show_block(row.id)"
              >

                  <span class="sp-flex sp-items-center sp-cursor-move">
                    <svg
                      v-if="in_hide_child(section.id)"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="sp-fill-current sp-w-4 sp-mr-2"
                    >
                      <path d="M10 17l5-5-5-5v10z" />
                      <path d="M0 24V0h24v24H0z" fill="none" />
                    </svg>

                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="sp-fill-current sp-w-4 sp-mr-2"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="sp-fill-current sp-w-5 sp-mr-2"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M4 6v12h17V6H4zm15 10H6v-3h13v3zM6 11V8h13v3H6z" />
                    </svg>
                    <span class="sp-text-15px">{{txt_4}}</span>
                  </span>
                  </span>
                  <span class="sp-flex sp-items-center sp-justify-between">
                  <svg
                    @click="edit_block(row.id, null, true)"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5 sp-cursor-pointer"
                    :class="{'sp-hidden': highlight != row.id}"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                    />
                  </svg>
                </span>
              </div>
              <draggable :list="row.cols" group="cols">
                <div v-show="show_child(row.id)">
                  <div v-for="(col,cindex) in row.cols" :key="cindex">
                    <div
                      class="sp-pl-12 sp-py-1 sp-px-2 sp-flex sp-items-center sp-justify-between sp-border sp-border-t-0 sp-border-neutral-20"
                      :class="{'sp-bg-white': highlight == col.id}"
                      @mouseover.stop="show_block(col.id)"
                      @click="toggle_section_children(col.id)"
                    >
                      <span class="sp-flex sp-items-center sp-cursor-move">
                                   <svg
                          v-if="in_hide_child(col.id)"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="sp-fill-current sp-w-4 sp-mr-2"
                        >
                          <path d="M10 17l5-5-5-5v10z" />
                          <path d="M0 24V0h24v24H0z" fill="none" />
                        </svg>

                        <svg
                          v-else
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="sp-fill-current sp-w-4 sp-mr-2"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 10l5 5 5-5z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="sp-fill-current sp-w-5 sp-mr-2"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M4 5v13h17V5H4zm10 2v9h-3V7h3zM6 7h3v9H6V7zm13 9h-3V7h3v9z" />
                        </svg>
                        <span class="sp-text-14px">{{txt_5}}</span>
                      </span>

                      <span class="sp-flex sp-items-center sp-justify-between">

                        <svg
                          @click="edit_block(col.id, null, true)"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="sp-fill-current sp-w-5 sp-cursor-pointer"
                          :class="{'sp-hidden': highlight != col.id}"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path
                            d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                          />
                        </svg>

                      </span>
                    </div>
                    <draggable :list="col.blocks" group="blocks">

                        <div v-for="(block,bindex) in col.blocks" :key="block.id" v-show="show_child(col.id)">
                          <div
                            class="sp-pl-20 sp-py-1 sp-px-2 sp-flex sp-items-center sp-justify-between sp-border sp-border-t-0 sp-border-neutral-20"
                            :class="{'sp-bg-white': highlight == block.id}"
                            @mouseover.stop="show_block(block.id)"
                          >
                            <span class="sp-flex sp-items-center sp-cursor-move">
                              <span
                                class="sp-layout-icon"
                                :class="'sp-layout-'+ block.type"
                                v-html="get_icon(block)"
                              ></span>

                              <span v-text="get_display_name(block)"></span>
                            </span>

                            <span class="sp-flex sp-items-center sp-justify-between">
                              <svg
                                @click="edit_block(block.id, null, true)"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                class="sp-fill-current sp-w-5 sp-cursor-pointer"
                                :class="{'sp-hidden': highlight != block.id}"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                  d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                                />
                              </svg>

                              <!-- <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="sp-fill-current sp-w-5"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path
                            d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="sp-fill-current sp-w-5"
                        >
                          <path
                            d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                            fill="none"
                          />
                          <path
                            d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"
                          />
                              </svg>-->
                            </span>
                          </div>
                        </div>

                    </draggable>
                  </div>
                </div>
              </draggable>
            </div>
          </div>
        </draggable>
      </div>
    </draggable>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import qs from 'qs';
import { helpers } from '../mixins/helpers.js';
import draggable from 'vuedraggable';

export default {
  name: 'layoutnav',
  mixins: [ helpers ],
  data() {
    return {
      txt_1: __( 'Expand All', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Collapse All', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Section', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Row', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Column', process.env.VUE_APP_TEXTDOMAIN ),
      highlight: false,
      hide_child: [],
      shared: seedprod_store,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    in_hide_child( id ) {
      let has_id = this.hide_child.indexOf( id );
      if ( -1 === has_id ) {
        return false;
      } else {
        return true;
      }
    },
    collapse_all() {
      let self = this;
      this.shared.settings.document.sections.forEach( function( section ) {
        self.hide_child.push( section.id );
        if ( section.rows ) {
          section.rows.forEach( function( row ) {
            self.hide_child.push( row.id );
            if ( section.cols ) {
              row.cols.forEach( function( col ) {
                self.hide_child.push( col.id );
              });
            }
          });
        }
      });
    },
    expand_all() {
      this.hide_child = [];
    },
    toggle_section_children( id ) {
      let has_id = this.hide_child.indexOf( id );
      if ( -1 === has_id ) {

        // add
        this.hide_child.push( id );
      } else {

        // remove
        this.hide_child.splice( has_id, 1 );
      }
    },
    show_child( id ) {
      return ! this.hide_child.includes( id ); //!this.ca ||
    },
    show_block: function( id ) {
      this.highlight = id;
      this.shared.highlight_option_target = id;
      this.focus_block( id );
    },
    get_icon: function( block ) {
      let self = this;
      let n = '';
      this.shared.setup_page_meta.block_options.forEach( function( item ) {
        if ( item.type == block.type ) {
          n = item.icon;
        }
      });

      return n;
    },
    get_display_name: function( block ) {
      let self = this;
      let n = '';
      this.shared.setup_page_meta.block_options.forEach( function( item ) {
        if ( item.type == block.type ) {
          n = item.name;
        }
      });

      return n;
    },
  },
  components: {
    draggable,
  },
};
</script>

