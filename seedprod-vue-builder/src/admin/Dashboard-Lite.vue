<template>
  <div>
    <div id="poststuff">
      <div id="post-body" class="metabox-holder columns-1">
        <div id="post-body-content" class="clearfix">
          <div class="sp-flex sp-mt-8 sp-overflow-x-scroll sp-pb-2">
            <div
              class="sp-border sp-border-neutral-15 sp-border-solid sp-bg-white sp-w-275 sp-text-center sp-flex-shrink-0"
            >
              <img
                class="sp-mx-auto sp-block sp-mt-8 sp-mb-5"
                :src="shared.plugin_path + 'public/svg/cs-page.svg'"
                :alt="txt_29"
              />

              <div
                class="sp-text-xl sp-text-center sp-font-bold sp-mb-6 sp-text-neutral"
              >
                {{ txt_1 }}
              </div>

              <p
                class="sp-px-5 sp-text-15px sp-text-center sp-my-4 sp-text-neutral"
              >
                {{ txt_3 }}
              </p>

              <div v-if="shared.csp_id == ''">
                <a
                  href="#"
                  @click.prevent="create_edit_page('cs')"
                  class="sp-font-semibold sp-mb-4 sp-inline-block sp-text-sm sp-bg-primary sp-px-3 sp-py-3 sp-rounded sp-leading-none sp-text-white sp-no-underline hover:sp-bg-primary-lighter"
                  >{{ txt_4 }}</a
                >
              </div>
              <div v-else>
                <a
                  href="#"
                  @click.prevent="create_edit_page('cs')"
                  class="sp-font-semibold sp-mr-1 sp-mb-4 sp-inline-block sp-text-sm sp-bg-primary sp-px-3 sp-py-3 sp-rounded-md sp-leading-none sp-text-white sp-no-underline hover:sp-bg-primary-lighter"
                  >{{ txt_5 }}</a
                >

                <a
                  v-if="shared.seedprod_csp4_imported != 1"
                  :href="shared.csp_preview_url"
                  target="_blank"
                  class="sp-font-semibold sp-ml-1 sp-mb-4 sp-inline-block sp-text-sm sp-bg-neutral-10 sp-px-3 sp-py-3 sp-rounded-md sp-leading-none sp-text-neutral-80 sp-no-underline hover:sp-bg-neutral-15"
                  >{{ txt_6 }}</a
                >
              </div>
              <div
                class="sp-bg-neutral-5 sp-h-8 sp-flex sp-items-center sp-justify-center"
              >
                <toggle-button
                  :width="40"
                  :sync="true"
                  @change="enable_mode(1)"
                  v-model="shared.settings.enable_coming_soon_mode"
                />&nbsp;
                <span
                  v-if="shared.settings.enable_coming_soon_mode"
                  class="sp-text-11px sp-uppercase sp-text-green sp-pl-1 sp-font-bold"
                  >{{ txt_7 }}</span
                >
                <span
                  v-else
                  class="sp-text-11px sp-uppercase sp-text-neutral-40 sp-pl-1 sp-font-bold"
                  >{{ txt_8 }}</span
                >
              </div>
            </div>

            <div
              class="sp-ml-4 sp-border sp-border-neutral-15 sp-border-solid sp-bg-white sp-w-275 sp-text-center sp-flex-shrink-0"
            >
              <img
                class="sp-mx-auto sp-block sp-mt-8 sp-mb-5"
                :src="shared.plugin_path + 'public/svg/mm-page.svg'"
                :alt="txt_30"
              />

              <div
                class="sp-text-xl sp-text-center sp-font-bold sp-mb-6 sp-text-neutral"
              >
                {{ txt_9 }}
              </div>

              <p
                class="sp-px-5 sp-text-15px sp-text-center sp-my-4 sp-text-neutral"
              >
                {{ txt_10 }}
              </p>
              <div v-if="shared.mmp_id == ''">
                <a
                  href="#"
                  @click.prevent="create_edit_page('mm')"
                  class="sp-font-semibold sp-mb-4 sp-inline-block sp-text-sm sp-bg-primary sp-px-3 sp-py-3 sp-rounded sp-leading-none sp-text-white sp-no-underline hover:sp-bg-primary-lighter"
                  >{{ txt_11 }}</a
                >
              </div>
              <div v-else>
                <a
                  href="#"
                  @click.prevent="create_edit_page('mm')"
                  class="sp-font-semibold sp-mr-1 sp-mb-4 sp-inline-block sp-text-sm sp-bg-primary sp-px-3 sp-py-3 sp-rounded-md sp-leading-none sp-text-white sp-no-underline hover:sp-bg-primary-lighter"
                  >{{ txt_5 }}</a
                >

                <a
                  v-if="shared.seedprod_csp4_imported != 1"
                  :href="shared.mmp_preview_url"
                  target="_blank"
                  class="sp-font-semibold sp-ml-1 sp-mb-4 sp-inline-block sp-text-sm sp-bg-neutral-10 sp-px-3 sp-py-3 sp-rounded-md sp-leading-none sp-text-neutral-80 sp-no-underline hover:sp-bg-neutral-15"
                  >{{ txt_6 }}</a
                >
              </div>
              <div
                class="sp-bg-neutral-5 sp-h-8 sp-flex sp-items-center sp-justify-center"
              >
                <toggle-button
                  :width="40"
                  :sync="true"
                  @change="enable_mode(2)"
                  v-model="shared.settings.enable_maintenance_mode"
                />&nbsp;
                <span
                  v-if="shared.settings.enable_maintenance_mode"
                  class="sp-text-11px sp-uppercase sp-text-green sp-pl-1 sp-font-bold"
                  >{{ txt_7 }}</span
                >
                <span
                  v-else
                  class="sp-text-11px sp-uppercase sp-text-neutral-40 sp-pl-1 sp-font-bold"
                  >{{ txt_8 }}</span
                >
              </div>
            </div>

            <div
              class="sp-ml-4 sp-border sp-border-neutral-15 sp-border-solid sp-bg-white sp-w-275 sp-text-center sp-flex-shrink-0 sp-relative"
              @mouseenter="show_loginp_upgrade = true"
              @mouseleave="show_loginp_upgrade = false"
            >
              <div
                class="sp-absolute sp-top-0 sp-right-0 sp-text-green sp-rounded sp-z-20 sp-px-1 sp-text-10px sp-font-semibold sp-mt-2 sp-mr-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-3"
                >
                  <g fill="none">
                    <path d="M0 0h24v24H0V0z"></path>
                    <path d="M0 0h24v24H0V0z" opacity=".87"></path>
                  </g>
                  <path
                    d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                  ></path>
                </svg>
              </div>
              <div
                :class="{'sp-hidden':!show_loginp_upgrade}"
                class="sp-absolute sp-top-0 sp-left-0 sp-right-0 sp-bottom-0 sp-flex sp-items-center sp-justify-center sp-z-20 " >
              <a
                href="https://seedprod.com/lite-upgrade/?utm_source=WordPress&amp;utm_campaign=liteplugin&amp;utm_medium=pluginloginpage"
                target="_blank"
                class="mt-20 sp-bg-green sp-px-8 sp-py-4 sp-rounded sp-leading-none sp-text-white sp-no-underline sp-text-17px hover:sp-bg-green-lighter sp-cursor-pointer sp-font-semibold sp-inline-flex sp-items-center sp-justify-center"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-mr-2 sp-w-5 sp-h-5"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  ></path>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                Upgrade to PRO
              </a>
              </div>
              <div class="sp-pro-only">
                <img
                  class="sp-mx-auto sp-block sp-mt-8 sp-mb-5"
                  :src="shared.plugin_path + 'public/svg/login-page.svg'"
                  :alt="txt_31"
                />

                <div
                  class="sp-text-xl sp-text-center sp-font-bold sp-mb-6 sp-text-neutral"
                >
                  {{ txt_33 }}
                </div>

                <p
                  class="sp-px-5 sp-text-15px sp-text-center sp-my-4 sp-text-neutral"
                >
                  {{ txt_34 }}
                </p>
                <div v-if="shared.loginp_id == ''">
                  <a
                    href="javascript:void(0);"
                    class="sp-font-semibold sp-mb-4 sp-inline-block sp-text-sm sp-bg-primary sp-px-3 sp-py-3 sp-rounded sp-leading-none sp-text-white sp-no-underline hover:sp-bg-primary-lighter"
                    >{{ txt_35 }}</a
                  >
                </div>
                <div v-else>
                  <a
                    href="javascript:void(0);"
                    class="sp-font-semibold sp-mr-1 sp-mb-4 sp-inline-block sp-text-sm sp-bg-primary sp-px-3 sp-py-3 sp-rounded-md sp-leading-none sp-text-white sp-no-underline hover:sp-bg-primary-lighter"
                    >{{ txt_5 }}</a
                  >

                  <a
                    href="javascript:void(0);"
                    class="sp-font-semibold sp-ml-1 sp-mb-4 sp-inline-block sp-text-sm sp-bg-neutral-10 sp-px-3 sp-py-3 sp-rounded-md sp-leading-none sp-text-neutral-80 sp-no-underline hover:sp-bg-neutral-15"
                    >{{ txt_6 }}</a
                  >
                </div>
                <div
                  class="sp-bg-neutral-5 sp-h-8 sp-flex sp-items-center sp-justify-center"
                >
                  <toggle-button :width="40" :sync="true" />&nbsp;

                  <span
                    class="sp-text-11px sp-uppercase sp-text-neutral-40 sp-pl-1 sp-font-bold"
                    >{{ txt_8 }}</span
                  >
                </div>
              </div>
            </div>

            <div
              class="sp-ml-4 sp-border sp-border-neutral-15 sp-border-solid sp-bg-white sp-w-275 sp-text-center sp-flex-shrink-0 sp-relative"
              @mouseenter="show_404_upgrade = true"
              @mouseleave="show_404_upgrade = false"
            >
              <div
                class="sp-absolute sp-top-0 sp-right-0 sp-text-green sp-rounded sp-z-20 sp-px-1 sp-text-10px sp-font-semibold sp-mt-2 sp-mr-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-3"
                >
                  <g fill="none">
                    <path d="M0 0h24v24H0V0z"></path>
                    <path d="M0 0h24v24H0V0z" opacity=".87"></path>
                  </g>
                  <path
                    d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                  ></path>
                </svg>
              </div>
              <div
                :class="{'sp-hidden':!show_404_upgrade}"
                class="sp-absolute sp-top-0 sp-left-0 sp-right-0 sp-bottom-0 sp-flex sp-items-center sp-justify-center sp-z-20 " >
              <a
                href="https://seedprod.com/lite-upgrade/?utm_source=WordPress&amp;utm_campaign=liteplugin&amp;utm_medium=plugin404page"
                target="_blank"
                class="mt-20 sp-bg-green sp-px-8 sp-py-4 sp-rounded sp-leading-none sp-text-white sp-no-underline sp-text-17px hover:sp-bg-green-lighter sp-cursor-pointer sp-font-semibold sp-inline-flex sp-items-center sp-justify-center"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-mr-2 sp-w-5 sp-h-5"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  ></path>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                Upgrade to PRO
              </a>
              </div>
              <div class="sp-pro-only">
                <img
                  class="sp-mx-auto sp-block sp-mt-8 sp-mb-5"
                  :src="shared.plugin_path + 'public/svg/404-page.svg'"
                  :alt="txt_31"
                />

                <div
                  class="sp-text-xl sp-text-center sp-font-bold sp-mb-6 sp-text-neutral"
                >
                  {{ txt_14 }}
                </div>

                <p
                  class="sp-px-5 sp-text-15px sp-text-center sp-my-4 sp-text-neutral"
                >
                  {{ txt_15 }}
                </p>
                <div v-if="shared.p404_id == ''">
                  <a
                    href="javascript:void(0);"
                    class="sp-font-semibold sp-mb-4 sp-inline-block sp-text-sm sp-bg-primary sp-px-3 sp-py-3 sp-rounded sp-leading-none sp-text-white sp-no-underline hover:sp-bg-primary-lighter"
                    >{{ txt_16 }}</a
                  >
                </div>
                <div v-else>
                  <a
                    href="javascript:void(0);"
                    class="sp-font-semibold sp-mr-1 sp-mb-4 sp-inline-block sp-text-sm sp-bg-primary sp-px-3 sp-py-3 sp-rounded-md sp-leading-none sp-text-white sp-no-underline hover:sp-bg-primary-lighter"
                    >{{ txt_5 }}</a
                  >

                  <a
                    href="javascript:void(0);"
                    class="sp-font-semibold sp-ml-1 sp-mb-4 sp-inline-block sp-text-sm sp-bg-neutral-10 sp-px-3 sp-py-3 sp-rounded-md sp-leading-none sp-text-neutral-80 sp-no-underline hover:sp-bg-neutral-15"
                    >{{ txt_6 }}</a
                  >
                </div>
                <div
                  class="sp-bg-neutral-5 sp-h-8 sp-flex sp-items-center sp-justify-center"
                >
                  <toggle-button :width="40" :sync="true" />&nbsp;

                  <span
                    class="sp-text-11px sp-uppercase sp-text-neutral-40 sp-pl-1 sp-font-bold"
                    >{{ txt_8 }}</span
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="sp-mt-8 sp-font-semibold">
            <hr class="sp-border-b-0 sp-border-neutral-15 sp-mb-10" />
            <div class="sp-flex sp-items-center sp-mb-6">
              <h3 class="sp-text-2xl sp-text-neutral sp-m-0 sp-font-bold">
                {{ txt_17 }}
              </h3>
              <i
                class="fas fa-question-circle sp-ml-2 sp-mr-6 sp-text-xs"
                v-tooltip.top-left="{
                  content: txt_32
                }"
              ></i>
              <a
                v-if="shared.page_count != 0"
                :href="
                  'admin.php?page=' +
                  shared.page_path +
                  '_template&id=0#/template'
                "
                class="sp-font-semibold sp-text-xs sp-flex sp-items-center sp-inline-block sp-bg-primary sp-px-3 sp-py-2 sp-rounded sp-leading-none sp-text-white sp-no-underline hover:sp-bg-primary-lighter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-4 sp-h-4 sp-mr-1"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  />
                </svg>
                {{ txt_18 }}
              </a>
            </div>
            <div v-if="shared.page_count != 0">
              <ul class="subsubsub">
                <li v-for="(value, key) in filters" :key="key">
                  <a
                    href="#"
                    :class="{ current: filter == key }"
                    @click.prevent="filter_table(key)"
                    >{{ value.label }}</a
                  >
                  ({{ value.count }})
                  <span v-if="key != 'archived'">|</span>
                </li>
              </ul>
              <p class="search-box">
                <label class="screen-reader-text" for="order-search-input">{{
                  txt_2
                }}</label>
                <span class="sp-relative sp-inline-flex sp-items-center">
                  <input
                    style="padding: 6px 10px"
                    class="sp-rounded sp-border-solid sp-border sp-border-neutral-15 sp-outline-none"
                    id="order-search-input"
                    v-model="search"
                    v-on:keyup.enter="loadItems('search')"
                  />&nbsp;
                  <i
                    id="seedprod-search-close"
                    class="fas fa-times-circle sp-absolute sp-text-neutral-20 sp-right-0 sp-mr-2"
                    v-if="search.length > 0"
                    @click.prevent="clear_search"
                  ></i>
                </span>
                <input
                  type="submit"
                  id="search-submit"
                  class="button"
                  :value="txt_2"
                  @click.prevent="loadItems('search')"
                />
              </p>

              <list-table
                ref="lpagedt"
                :columns="columns"
                :loading="loading"
                :rows="rows"
                :actions="actions"
                :show-cb="showcb"
                :total-items="totalitems"
                :bulk-actions="filter_bulk(bulkactions)"
                :total-pages="totalpages"
                :per-page="perpage"
                :current-page="currentpage"
                :action-column="actioncol"
                :sort-by="orderby"
                :sort-order="order"
                :filter="filter"
                @pagination="goToPage"
                @rowOver="rowOver"
                @rowOut="rowOut"
                @action:click="onActionClick"
                @bulk:click="onBulkAction"
                @sort="sortCallback"
              >
                <template slot="subscribers" slot-scope="data" sortable="true">
                  <a href="#" @click.prevent="goto_subscribers(data.row.id)">{{
                    data.row.subscribers
                  }}</a>
                </template>

                <template slot="url" slot-scope="data" sortable="true">
                  <a
                    v-if="data.row.post_status != 'trash'"
                    :href="data.row.url"
                    target="_blank"
                    >{{ data.row.url }}</a
                  >
                  <span v-else></span>
                </template>

                <template slot="name" slot-scope="data" sortable="true">
                  <span class="sp-text-sm">
                    <a
                      class="sp-font-bold"
                      :href="
                        '?page=' +
                        shared.page_path +
                        '_builder&id=' +
                        data.row.id +
                        '#/setup/' +
                        data.row.id +
                        '/block-options'
                      "
                      >{{ data.row.name }}</a
                    >
                    <span
                      class="post-state sp-font-bold"
                      v-if="data.row.post_status != 'publish'"
                      >&nbsp;&ndash;&nbsp;{{ data.row.status }}</span
                    >
                  </span>
                  <div
                    v-if="data.row.post_status != 'trash'"
                    class="row-actions"
                    :class="{ 'sp-invisible': show_row != data.row.id }"
                  >
                    <span class="setup">
                      <a
                        :href="
                          '?page=' +
                          shared.page_path +
                          '_builder&id=' +
                          data.row.id +
                          '#/setup/' +
                          data.row.id +
                          '/block-options'
                        "
                        >{{ txt_19 }}</a
                      >
                      |
                    </span>
                    <span class="subscribers">
                      <a
                        :href="
                          '?page=' +
                          shared.page_path +
                          '#/subscribers/' +
                          data.row.id
                        "
                        >{{ txt_20 }}</a
                      >
                      |
                    </span>
                    <span class="publish2">
                      <a
                        :href="
                          shared.home_url +
                          '?page_id=' +
                          data.row.id
                        "
                        target="_blank"
                        >{{ txt_6 }}</a
                      >
                      |
                    </span>
                    <span class="duplicate">
                      <a href="#" @click.prevent="duplicate(data.row)">{{
                        txt_21
                      }}</a>
                      |
                    </span>
                    <span class="delete">
                      <a href="#" @click.prevent="archive(data.row.id)">{{
                        txt_22
                      }}</a>
                      <!---->
                    </span>
                  </div>
                  <div
                    v-else
                    class="row-actions"
                    :class="{ 'sp-invisible': show_row != data.row.id }"
                  >
                    <span class="">
                      <a href="#" @click.prevent="unarchive(data.row.id)">{{
                        txt_27
                      }}</a>
                      |
                      <!---->
                    </span>
                    <span class="delete">
                      <a href="#" @click.prevent="trash(data.row.id)">{{
                        txt_28
                      }}</a>
                      <!---->
                    </span>
                  </div>
                </template>

                <template slot="date" slot-scope="data" sortable="true">
                  <div
                    class="sp-font-semibold date column-date sp-w-full"
                    v-if="data.row.post_status == 'publish'"
                  >
                    {{ txt_23 }}
                    <br />
                    <span :title="data.row.posted_at">{{
                      data.row.posted_at
                    }}</span>
                  </div>
                  <div
                    class="sp-font-semibold column-date sp-w-full"
                    v-if="
                      data.row.post_status == 'draft' ||
                      data.row.post_status == 'trash'
                    "
                  >
                    {{ txt_24 }}
                    <br />
                    <span :title="data.row.modified_at">{{
                      data.row.modified_at
                    }}</span>
                  </div>
                </template>
              </list-table>
            </div>
            <div
              v-else
              class="sp-bg-neutral-10 sp-flex sp-justify-center sp-flex-col sp-items-center sp-h-64"
            >
              <div class="sp-font-bold sp-text-xl sp-mb-4">{{ txt_25 }}</div>
              <a
                :href="
                  'admin.php?page=' +
                  shared.page_path +
                  '_template&id=0#/template'
                "
                class="sp-font-semibold sp-text-sm sp-inline-flex sp-items-center sp-inline-block sp-bg-primary sp-px-5 sp-py-3 sp-rounded sp-leading-none sp-text-white sp-no-underline hover:sp-bg-primary-lighter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-4 sp-h-4 sp-mr-3"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  />
                </svg>
                {{ txt_26 }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NProgress from 'nprogress';
import qs from 'qs';
import ListTable from '@/components/ListTable.vue';
import { __ } from '@wordpress/i18n';

export default {
  name: 'Dashboard',

  components: {
    ListTable,
  },

  data() {
    return {
      txt_1: __( 'Coming Soon Mode', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Search Landing Pages', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __(
        'The Coming Soon Page will be available to search engines if your site is not private.',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_4: __( 'Set up a Coming Soon Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Edit Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Preview', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Active', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Inactive', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Maintenance Mode', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __(
        'The Maintenance Mode Page will notify search engines that the site is unavailable.',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_11: __(
        'Set up a Maintenance Mode Page',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_14: __( '404 Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __(
        'Replace your default theme 404 page with a custom high converting 404 page.',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_16: __( 'Set up a 404 Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Landing Pages', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Add New Landing Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Edit', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'Subscribers', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'Duplicate', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( 'Trash', process.env.VUE_APP_TEXTDOMAIN ),
      txt_23: __( 'Published', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'Last Modified', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __(
        'You do not have any landing pages yet.',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_26: __( 'Create New Landing Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( 'Restore', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( 'Delete Permanently', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( 'SeedProd Coming Soon Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( 'SeedProd Maintenance Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_31: __( 'SeedProd 404 Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_32: __(
        'Create Optin, Sales, Webinar, Thank You or any type of Landing Page you need.',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_33: __( 'Login Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_34: __( 'Create a Custom Login Page for your website. Optionally replace the default login page.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_35: __( 'Set up a Login Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_36: __( 'SeedProd Login Page', process.env.VUE_APP_TEXTDOMAIN ),
      shared: seedprod_store_admin,
      show_404_upgrade: false,
      show_loginp_upgrade: false,
      show_row: false,
      show_action: false,
      loading: true,
      search: '',
      showcb: true,
      totalitems: 0,
      totalpages: 0,
      perpage: 10,
      actioncol: 'name',
      currentpage: 1,
      orderby: '',
      order: '',
      filter: 'all',
      filters: {
        all: {
          label: __( 'All', process.env.VUE_APP_TEXTDOMAIN ),
          count: 0,
        },
        published: {
          label: __( 'Published', process.env.VUE_APP_TEXTDOMAIN ),
          count: 0,
        },
        drafts: {
          label: __( 'Drafts', process.env.VUE_APP_TEXTDOMAIN ),
          count: 0,
        },

        // scheduled: {
        //   label:  __( "Scheduled", process.env.VUE_APP_TEXTDOMAIN ),
        //   count: 0
        // },
        archived: {
          label: __( 'Trash', process.env.VUE_APP_TEXTDOMAIN ),
          count: 0,
        },
      },
      bulkactions: [
        {
          key: 'archive_selected_lpages',
          label: __( 'Move To Trash', process.env.VUE_APP_TEXTDOMAIN ),
        },
        {
          key: 'unarchive_selected_lpages',
          label: __( 'Restore', process.env.VUE_APP_TEXTDOMAIN ),
        },
        {
          key: 'delete_all_archived_lpages',
          label: __( 'Delete Permanently', process.env.VUE_APP_TEXTDOMAIN ),
        },
      ],
      columns: {
        name: {
          label: __( 'Name', process.env.VUE_APP_TEXTDOMAIN ),
          sortable: true,
        },

        url: {
          label: __( 'URL', process.env.VUE_APP_TEXTDOMAIN ),
          sortable: false,
        },

        date: {
          label: __( 'Date', process.env.VUE_APP_TEXTDOMAIN ),
          sortable: true,
        },

        // active: {
        // 	label: "Enabled",
        // 	sortable: false
        // }
      },
      actions: [],
      rows: [
        {
          name: __( 'Loading', process.env.VUE_APP_TEXTDOMAIN ) + ' ...',
          status: '',
          type: '',
          subscribers: '',
          entries: '',
          active: '',
        },
      ],
    };
  },
  methods: {
    show_actions( id ) {
      this.show_action = id;
    },
    create_edit_page( type ) {
      let id = false;
      if ( 'cs' == type ) {
        id = this.shared.csp_id;
      }
      if ( 'mm' == type ) {
        id = this.shared.mmp_id;
      }
      if ( 'p404' == type ) {
        id = this.shared.p404_id;
      }
      if ( 'loginp' == type ) {
        id = this.shared.loginp_id;
      }
      if ( id ) {
        location.href =
          '?page=' +
          this.shared.page_path +
          '_builder&id=' +
          id +
          '#/setup/' +
          id +
          '/block-options';
      } else {
        if ( 'cs' == type ) {
          location.href =
            '?page=' +
            this.shared.page_path +
            '_template&id=0&type=cs#/template';
        }
        if ( 'mm' == type ) {
          location.href =
            '?page=' +
            this.shared.page_path +
            '_template&id=0&type=mm#/template';
        }
        if ( 'p404' == type ) {
          location.href =
            '?page=' +
            this.shared.page_path +
            '_template&id=0&type=p404#/template';
        }
        if ( 'loginp' == type ) {
          location.href =
            '?page=' +
            this.shared.page_path +
            '_template&id=0&type=loginp#/template';
        }
      }
    },
    enable_mode( status_id ) {
      let self = this;
      let self_status_id = status_id;

      NProgress.start();

      // toggle csp and mm so they can not both be on at the same time
      if (
        1 == status_id &&
        true === this.shared.settings.enable_maintenance_mode
      ) {
        this.shared.settings.enable_maintenance_mode = false;
      }
      if (
        2 == status_id &&
        true === this.shared.settings.enable_coming_soon_mode
      ) {
        this.shared.settings.enable_coming_soon_mode = false;
      }

      let data = qs.stringify({
        settings: JSON.stringify( this.shared.settings ),
      });

      let url =
        'admin-ajax.php?action=' +
        this.shared.page_path +
        '_save_settings&_wpnonce=' +
        seedprod_nonce;

      this.axios
        .post( url, data, {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        })

        .then( function( response ) {
          NProgress.done();
          if ( 1 == self_status_id || 2 == self_status_id ) {
            location.reload();
          }
        });
    },

    filter_bulk( bulkactions ) {
      let actions = [];
      if ( 'archived' == this.filter ) {
        actions = bulkactions.slice( 1 );
      } else {
        actions = bulkactions.slice( 0, 1 );
      }
      return actions;
    },
    hideActionSeparator( action ) {
      return action === this.actions[this.actions.length - 1].key;
    },
    rowOver( row ) {
      this.show_row = row.id;
    },
    rowOut( row ) {
      this.show_row = false;
    },
    enable_disable( row ) {
      let self = this;
      self.loading = true;
      this.axios
        .get(
          seedprod_enable_disable_lpage_ajax_url +
            '&id=' +
            row.id +
            '&current_state=' +
            row.active
        )
        .then( function( response ) {
          self.loading = false;
          if ( 'enabled' == response.data.status ) {
            row.active = true;
            self.$swal({
              imageUrl:
                self.shared.plugin_path + 'public/svg/success-24px-white.svg',
              text: 'Page Enabled',
              toast: true,
              type: null,
              customClass: 'sp-toast-success',
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
            });

            //self.loadItems();
          }
          if ( 'disabled' == response.data.status ) {
            row.active = false;
            self.$swal({
              imageUrl:
                self.shared.plugin_path + 'public/svg/success-24px-white.svg',
              text: 'Page Disabled',
              toast: true,
              type: null,
              customClass: 'sp-toast-success',
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
            });

            //self.loadItems();
          }
        });
    },
    status_action( id, type ) {
      let self = this;
      if ( 'needs_setup' == type ) {
        location.href =
          '?page=' +
          this.shared.page_path +
          '_builder&id=' +
          id +
          '#/setup/' +
          id;
      }
    },
    goto_dashboard() {
      this.$router.push({ name: 'dashboard' });
    },
    clear_search() {
      '' == this.search;
      this.loadItems();
    },
    archive( rows ) {

      //console.log(rows);
      let self = this;

      self.loading = true;

      this.axios
        .get(
          seedprod_archive_selected_lpages +
            '&ids=' +
            encodeURIComponent( rows.toString() )
        )
        .then( function( response ) {
          self.loading = false;

          //console.log(response.data);
          self.$refs.lpagedt.clear_checked();
          if ( response.data.status ) {
            self.$swal({
              imageUrl:
                self.shared.plugin_path + 'public/svg/success-24px-white.svg',
              text: __( 'Pages Moved to Trash.', process.env.VUE_APP_TEXTDOMAIN ),
              toast: true,
              type: null,
              position: 'top-end',
              customClass: 'sp-toast-success',
              showConfirmButton: false,
              timer: 3000,
            });

            self.loadItems();
          }
        });
    },
    unarchive( rows ) {
      let self = this;

      self.loading = true;

      this.axios
        .get(
          seedprod_unarchive_selected_lpages +
            '&ids=' +
            encodeURIComponent( rows.toString() )
        )
        .then( function( response ) {
          self.loading = false;
          self.$refs.lpagedt.clear_checked();

          //console.log(response.data);
          if ( response.data.status ) {
            self.$swal({
              imageUrl:
                self.shared.plugin_path + 'public/svg/success-24px-white.svg',
              text: __( 'Pages Restored.', process.env.VUE_APP_TEXTDOMAIN ),
              customClass: 'sp-toast-success',
              toast: true,
              type: null,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
            });

            self.loadItems();
          }
        });
    },
    trash( rows ) {
      let self = this;

      this.$swal({

        //imageUrl: self.shared.plugin_path + "public/img/delete.png",
        title: __( 'Are you sure?', process.env.VUE_APP_TEXTDOMAIN ),
        type: null,
        showCancelButton: true,
        confirmButtonColor: '#d33',

        //cancelButtonColor: '',
        confirmButtonText: __(
          'Yes, empty trash!',
          process.env.VUE_APP_TEXTDOMAIN
        ),
      }).then( ( result ) => {
        if ( result.value ) {
          self.loading = true;

          this.axios
            .get(
              seedprod_delete_archived_lpages +
                '&ids=' +
                encodeURIComponent( rows.toString() )
            )
            .then( function( response ) {
              self.loading = false;
              self.$refs.lpagedt.clear_checked();

              //console.log(response.data);
              if ( response.data.status ) {
                self.$swal({
                  imageUrl:
                    self.shared.plugin_path +
                    'public/svg/success-24px-white.svg',
                  text: __( 'Pages Deleted!', process.env.VUE_APP_TEXTDOMAIN ),
                  toast: true,
                  type: null,
                  customClass: 'sp-toast-success',
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                });

                self.loadItems();
              }
            });
        }
      });
    },
    duplicate( row ) {
      let self = this;

      self.loading = true;

      this.axios
        .get( seedprod_duplicate_lpage_url + '&id=' + row.id )
        .then( function( response ) {
          self.loading = false;

          //console.log(response.data);
          if ( response.data.status ) {
            self.$swal({
              imageUrl:
                self.shared.plugin_path + 'public/svg/success-24px-white.svg',
              text: __( 'Page Duplicated', process.env.VUE_APP_TEXTDOMAIN ),
              toast: true,
              type: null,
              customClass: 'sp-toast-success',
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
            });
            self.orderby = '';
            self.loadItems();
          }
        });
    },
    loadItems( from ) {
      if ( 'search' == from ) {
        this.currentpage = 1;
        this.orderby = '';
        this.order = '';
        this.filter = '';
      } else {
        this.search = '';
      }
      let self = this;

      self.loading = true;
      NProgress.start();

      this.axios
        .get(
          'admin-ajax.php?action=' +
            this.shared.page_path +
            '_lpage_datatable' +
            '&_wpnonce=' +
            seedprod_nonce +
            '&current_page=' +
            this.currentpage +
            '&orderby=' +
            this.orderby +
            '&order=' +
            this.order +
            '&filter=' +
            this.filter +
            '&s=' +
            this.search
        )
        .then( function( response ) {
          self.loading = false;
          NProgress.done();

          //console.log(response.data);
          self.rows = response.data.rows;
          self.totalitems = parseInt( response.data.totalitems );
          self.totalpages = parseInt( response.data.totalpages );
          self.currentpage = parseInt( response.data.currentpage );
          if ( null != response.data.views ) {
            self.filters.all.count = parseInt( response.data.views.all );
            self.filters.archived.count = parseInt(
              response.data.views.archived
            );

            // self.filters.scheduled.count = parseInt(
            //   response.data.views.scheduled
            // );
            self.filters.published.count = parseInt(
              response.data.views.published
            );
            self.filters.drafts.count = parseInt( response.data.views.drafts );
          }
        });
    },
    filter_table( key ) {
      this.filter = key;

      if ( 0 == this.filters[key].count ) {
        this.rows = [];
      } else {
        this.loadItems();
      }
    },
    show_actions( id ) {
      this.show_action = id;
    },
    goto_subscribers( id ) {
      this.$router.push({ name: 'subscribers', params: { id: id } });
    },
    goToPage( page ) {

      //console.log("Going to page: " + page);
      this.currentpage = page;
      this.loadItems();
    },
    actionClicked( action, row ) {
      this.onActionClick( action, row );
    },
    onActionClick( action, row ) {
      if ( 'duplicate' == action ) {
        this.duplicate( row );
      }
      if ( 'delete' == action ) {
        this.archive( row.id );

        //this.delete(row);
      }
      if ( 'setup' == action ) {
        location.href =
          '?page=' +
          this.shared.page_path +
          '_builder&id=' +
          row.id +
          '#/setup/' +
          row.id +
          '/block-options';
      }

      if ( 'publish2' == action ) {
        window.open(
          this.shared.home_url + '?p=' + row.id + '&preview=true',
          '_blank'
        );
      }
      if ( 'subscribers' == action ) {
        this.$router.push({
          name: 'subscribers',
          params: { id: row.id },
        });
      }
    },
    onBulkAction( action, items ) {
      if ( 'archive_selected_lpages' == action ) {
        this.archive( items );
      }
      if ( 'unarchive_selected_lpages' == action ) {
        this.unarchive( items );
      }
      if ( 'delete_all_archived_lpages' == action ) {
        this.trash( items );
      }
    },
    sortCallback( column, order ) {

      // console.log(column);
      // console.log(order);
      this.orderby = column;
      this.order = order;

      this.loadItems();
    },
    setWithExpiry( key, value, ttl ) {
      const now = new Date();

      // `item` is an object which contains the original value
      // as well as the time when it's supposed to expire
      const item = {
        value: value,
        expiry: now.getTime() + ttl,
      };
      localStorage.setItem( key, JSON.stringify( item ) );
    },
    getWithExpiry( key ) {
      const itemStr = localStorage.getItem( key );

      // if the item doesn't exist, return null
      if ( ! itemStr ) {
        return null;
      }
      const item = JSON.parse( itemStr );
      const now = new Date();

      // compare the expiry time of the item with the current time
      if ( now.getTime() > item.expiry ) {

        // If the item is expired, delete the item from storage
        // and return null
        localStorage.removeItem( key );
        return null;
      }
      return item.value;
    },
  },
  created() {
    this.loadItems();

    // load notifications
    // let self = this;
    // var n = this.getWithExpiry("seedprod-notifications");
    // console.log(n);
    // if (n === null) {
    //   console.log("miss");
    //   this.axios
    //     .get("https://seedprod-notifications.s3.amazonaws.com/example_1.json")
    //     .then(function(response) {
    //       console.log(response);
    //       self.setWithExpiry("seedprod-notifications", response.data, 86400000);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // } else {
    //   console.log("hit");
    // }
  },
};
</script>
