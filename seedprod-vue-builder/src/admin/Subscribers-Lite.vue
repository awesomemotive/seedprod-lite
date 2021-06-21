<template>
  <div>
    <div class="sp-absolute sp-z-10 sp-w-full sp-flex sp-justify-center">
      	<LiteCTASubscribers />
    </div>
    <div id="seedprod-users" style="filter: blur(3px);">
      <div class="md:sp-flex sp-mt-10">
        <div class="sp-w-full md:sp-w-1/2 sp-flex sp-items-center">
          <h1 class="sp-text-neutral sp-font-bold sp-text-2xl sp-m-0">{{txt_1}}</h1>
        </div>
        <div
          v-if="shared.subscriber_count != 0 "
          class="sp-w-full md:sp-w-1/2 sp-flex sp-items-center sp-justify-end"
        >
          <!-- <a
            :href="seedprod_export_subscribers_url + '&id=' + this.lpage_uuid"
            target="_blank"
            class="sp-inline-block sp-bg-neutral-15 hover:sp-bg-neutral-20 sp-h-40px sp-px-4 sp-rounded sp-leading-none sp-text-neutral-80 sp-no-underline sp-text-sm sp-cursor-pointer sp-font-semibold sp-flex sp-items-center sp-mr-2"
          >-->
          <a
            href="#"
            @click.prevent="export_subscribers"
            target="_blank"
            class="sp-inline-block sp-bg-neutral-15 hover:sp-bg-neutral-20 sp-h-40px sp-px-4 sp-rounded sp-leading-none sp-text-neutral-80 sp-no-underline sp-text-sm sp-cursor-pointer sp-font-semibold sp-flex sp-items-center sp-mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="sp-fill-current sp-w-4 sp-h-4 sp-mr-2"
            >
              <path
                d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            {{txt_2}}
          </a>
          <div class="sp-relative">
            <div
              class="sp-bg-white sp-border sp-border-neutral-20 sp-border-solid sp-rounded-sm sp-h-40px sp-w-275 sp-cursor-pointer"
            >
              <span
                @click.prevent="toggle_lpage_list"
                class="sp-flex sp-items-center sp-h-40px sp-justify-between sp-text-neutral-80 sp-px-3 sp-text-base sp-truncate"
              >
                {{ lpage_name }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-w-5 sp-h-5"
                >
                  <path d="M7 10l5 5 5-5z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </span>
            </div>
            <div
              v-if="show_lpage_list"
              class="sp-absolute sp-bg-white sp-border sp-border-neutral-20 sp-border-solid sp-rounded-sm sp-z-20 sp-w-275 sp-h-275 sp-overflow-y-auto sp-shadow-lg sp-px-1 sp-py-1"
            >
              <ul class="sp-m-0">
                <li v-if="lpage_list.length == 0 && shared.page_count != 0" class="sp-m-0 sp-py-1">
                  <span class="sp-px-2 sp-text-neutral-80 sp-text-sm sp-font-bold">
                    {{txt_3}}
                    <i class="fas fa-spinner fa-spin"></i>
                  </span>
                </li>
                <li>
                  <a
                    class="sp-rounded-sm sp-block sp-py-0 sp-text-neutral-80 sp-text-sm sp-no-underline sp-font-semibold sp-cursor-pointer hover:sp-bg-neutral-10 sp-px-2"
                    href="#"
                    @click.prevent="
												load_lpage_users(0,0, 'All Pages')
											"
                  >{{txt_4}}</a>
                </li>
                <li v-if="shared.csp_id != ''">
                  <a
                    class="sp-rounded-sm sp-block sp-py-0 sp-text-neutral-80 sp-text-sm sp-no-underline sp-font-semibold sp-cursor-pointer hover:sp-bg-neutral-10 sp-px-2"
                    href="#"
                    @click.prevent="
												load_lpage_users(shared.csp_id,shared.csp_uuid,'Coming Soon Page')
											"
                  >{{txt_5}}</a>
                </li>
                <li v-if="shared.mmp_id != ''">
                  <a
                    class="sp-rounded-sm sp-block sp-py-0 sp-text-neutral-80 sp-text-sm sp-no-underline sp-font-semibold sp-cursor-pointer hover:sp-bg-neutral-10 sp-px-2"
                    href="#"
                    @click.prevent="
												load_lpage_users(shared.mmp_id,shared.mmp_uuid,'Maintenance Mode Page')
											"
                  >{{txt_6}}</a>
                </li>
                <li v-if="shared.loginp_id != ''">
                  <a
                    class="sp-rounded-sm sp-block sp-py-0 sp-text-neutral-80 sp-text-sm sp-no-underline sp-font-semibold sp-cursor-pointer hover:sp-bg-neutral-10 sp-px-2"
                    href="#"
                    @click.prevent="
												load_lpage_users(shared.loginp_id,shared.loginp_uuid, 'Login Page')
											"
                  >{{txt_13}}</a>
                </li>
                <li v-if="shared.p404_id != ''">
                  <a
                    class="sp-rounded-sm sp-block sp-py-0 sp-text-neutral-80 sp-text-sm sp-no-underline sp-font-semibold sp-cursor-pointer hover:sp-bg-neutral-10 sp-px-2"
                    href="#"
                    @click.prevent="
												load_lpage_users(shared.p404_id,shared.p404_uuid, '404 Page')
											"
                  >{{txt_7}}</a>
                </li>
                <hr
                  class="sp-border sp-border-neutral-20 sp-border-b-0"
                  v-if="lpage_list.length != 0"
                />
                <li v-if="lpage_list.length != 0" class="sp-m-0 sp-py-1">
                  <span
                    class="sp-px-2 sp-text-neutral-40 sp-font-bold sp-uppercase sp-tracking-wide sp-text-12px"
                  >{{txt_8}}</span>
                </li>
                <li v-for="(g,i) in lpage_list" class="sp-m-0" :key="i">
                  <a
                    class="sp-rounded-sm sp-block sp-py-1 sp-text-neutral-80 sp-text-sm sp-no-underline sp-font-semibold sp-cursor-pointer hover:sp-bg-neutral-10 sp-px-2"
                    href="#"
                    @click.prevent="
												load_lpage_users(g.id,g.uuid,g.name)
											"
                  >{{ g.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <select
            v-model="chart_timeframe"
            @change="loadItems"
            class="sp-form-select sp-h-40px sp-border sp-border-neutral-20 sp-border-solid sp-ml-2"
          >
            <option value="7">7 {{txt_9}}</option>
            <option value="30">30 {{txt_9}}</option>
          </select>
        </div>
      </div>

      <div v-if="shared.subscriber_count != 0">
        <div class="sp-border sp-border-neutral-20 sp-border-solid sp-mt-5 sp-mb-3">
          <GChart type="AreaChart" :data="chartData" :options="chartOptions" />
        </div>
        <div id="poststuff">
          <div id="post-body" class="metabox-holder columns-1">
            <div id="post-body-content" class="clearfix">
              <ul class="subsubsub">
                <li v-for="(value, key) in filters" :key="key">
                  <a
                    href="#"
                    :class="{ current: filter == key }"
                    @click.prevent="filter_table(key)"
                  >{{ value.label }}</a>
                  ({{ value.count }})
                  <span v-if="key != 'invalid'">|</span>
                </li>
              </ul>
              <p class="search-box sp-hidden">
                <label class="screen-reader-text" for="order-search-input">{{txt_12}}</label>
                <span class="sp-relative sp-inline-flex sp-items-center">
                  <input
                    style="padding: 6px 10px"
                    id="order-search-input"
                    class="sp-rounded sp-border-solid sp-border sp-border-neutral-15 sp-outline-none"
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
                  :value="txt_12"
                  @click.prevent="loadItems('search')"
                />
              </p>

              <list-table
                ref="subscribersdt"
                :columns="columns"
                :loading="loading"
                :rows="rows"
                :actions="actions"
                :show-cb="showcb"
                :total-items="totalitems"
                :bulk-actions="bulkactions"
                :total-pages="totalpages"
                :per-page="perpage"
                :current-page="currentpage"
                :action-column="actioncol"
                :sort-by="orderby"
                :sort-order="order"
                @pagination="goToPage"
                @action:click="onActionClick"
                @bulk:click="onBulkAction"
                @sort="sortCallback"
              ></list-table>
            </div>
          </div>
          <br class="clear" />
        </div>
      </div>
      <div
        v-else
        class="sp-mt-6 sp-bg-neutral-10 sp-flex sp-justify-center sp-flex-col sp-items-center sp-h-64"
      >
        <div class="sp-font-bold sp-text-xl sp-mb-4">{{txt_10}}</div>
        <a
          :href="
					'admin.php?page=' +
						shared.page_path"
          class="sp-font-semibold sp-text-sm sp-inline-flex sp-items-center sp-inline-block sp-bg-primary sp-px-5 sp-py-3 sp-rounded sp-leading-none sp-text-white sp-no-underline hover:sp-bg-primary-lighter"
        >{{txt_11}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs';
import ListTable from '@/components/ListTable.vue';
import NProgress from 'nprogress';
import { helpers } from '../mixins/helpers.js';
import { GChart } from 'vue-google-charts';
import { __, sprintf } from '@wordpress/i18n';
import LiteCTASubscribers from '@/components/LiteCTASubscribers.vue';

window.lodash = _.noConflict();
export default {
  name: 'Subscribers',
  mixins: [ helpers ],
  components: {
    ListTable,
    GChart,
    LiteCTASubscribers,
  },
  data() {
    return {
      txt_1: __( 'Subscribers Overview', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Export to CSV', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Loading', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'All Pages', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'Coming Soon Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Maintenance Mode Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( '404 Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Landing Pages', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Days', process.env.VUE_APP_TEXTDOMAIN ),
      chart_timeframe: 7,
      txt_10: __(
        'You do not have any subscribers yet.',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_11: __( 'Go to Pages', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'Search Emails', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Login Page', process.env.VUE_APP_TEXTDOMAIN ),
      chart_timeframe: 7,
      chartData: [],
      chartOptions: {
        chart: {
          title: 'Subsribers Overview',
          subtitle: 'Subscribers',
        },
        colors: [ '#DD4A1F' ],
      },
      enable_confirmation_email: false,
      show_lpage_list: false,
      shared: seedprod_store_admin,
      lpage_name: 'All Pages',
      show_action: false,
      lpage_uuid: '',
      lpage_id: this.$route.params.id,
      loading: true,
      search: '',
      showcb: true,
      totalitems: 0,
      totalpages: 0,
      perpage: 100,
      actioncol: 'email',
      currentpage: 1,
      orderby: '',
      order: '',
      filter: 'all',
      seedprod_remote_api: seedprod_remote_api,
      filters: {},
      bulkactions: [
        {
          key: 'delete_subscribers',
          label: 'Delete Subscribers',
        },
      ],
      columns: {
        email: {
          label: __( 'Email', process.env.VUE_APP_TEXTDOMAIN ),
          sortable: false,
        },
        full_name: {
          label: __( 'Name', process.env.VUE_APP_TEXTDOMAIN ),
          sortable: false,
        },

        // page_id: {
        //   label: __( 'Page', process.env.VUE_APP_TEXTDOMAIN ),
        //   sortable: false
        // },

        created_at: {
          label: __( 'Created', process.env.VUE_APP_TEXTDOMAIN ),
          sortable: false,
        },
      },
      actions: [
        {
          key: 'delete',
          label: __( 'Delete', process.env.VUE_APP_TEXTDOMAIN ),
        },
      ],
      lpage_list: [],
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
    load_lpages() {

      //console.log("fired");

      let self = this;
      this.axios
        .get(
          'admin-ajax.php?action=' +
            this.shared.page_path +
            '_get_lpage_list&_wpnonce=' +
            seedprod_nonce
        )
        .then( function( response ) {
          if ( response.data ) {
            self.lpage_list = response.data;

            // set page name and uuid
            lodash.each( self.lpage_list, function( value, key ) {
              if ( value.id == self.$route.params.id && '' == self.lpage_uuid ) {
                self.lpage_uuid = value.uuid;
                self.lpage_name = value.name;
                self.load_lpage_users( value.id, value.uuid, value.name, false );
              }
            });
          }
        });
    },
    load_lpage_users( id, uuid, name, reload = true ) {
      this.show_lpage_list = false;
      this.lpage_id = id;
      this.lpage_uuid = uuid;
      this.lpage_name = name;
      if ( reload ) {
        this.$router.push({ name: 'subscribers', params: { id: id } });
      } else {
        this.loadItems();
      }
    },

    clear_search() {
      '' == this.search;
      this.loadItems();
    },
    toggle_lpage_list() {
      if ( false === this.show_lpage_list ) {
        this.load_lpages();
      }
      this.show_lpage_list = ! this.show_lpage_list;
    },
    trash( items ) {
      let self = this;

      let is_item_array = '';
      if ( Array.isArray( items ) ) {
        is_item_array = 's';
      }

      this.$swal({

        //imageUrl: self.shared.plugin_path + "public/img/delete.png",
        title: __( 'Are you sure?', process.env.VUE_APP_TEXTDOMAIN ),
        type: null,
        showCancelButton: true,
        confirmButtonColor: '#d33',

        //cancelButtonColor: '',
        confirmButtonText: 'Yes, delete user' + is_item_array + '!',
      }).then( ( result ) => {
        if ( result.value ) {
          self.loading = true;

          //var url = seedprod_remote_api + "subscribers";
          let url = seedprod_delete_subscribers_url;

          // var data = {
          //   items: items,
          //   api_token: self.shared.api_token
          // };

          let data = qs.stringify({
            items: items,
            api_token: self.shared.api_token,
          });
          this.axios

            //.post(url, { params: data })
            .post( url, data, {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            })
            .then( function( response ) {
              self.loading = false;
              self.$refs.subscribersdt.clear_checked();

              //console.log(response.data);
              if ( 0 < response.data || true == response.data.success ) {
                self.$swal({
                  imageUrl:
                    self.shared.plugin_path + 'public/svg/error-24px-white.svg',
                  text: __(
                    'Subscribers Deleted',
                    process.env.VUE_APP_TEXTDOMAIN
                  ),
                  toast: true,
                  customClass: 'sp-toast-error',
                  type: null,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                });

                self.loadItems();
              }
            })
            .catch( function( error ) {
              NProgress.done();
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
        }
      });
    },
    export_subscribers() {
      location.href =
        'admin.php?page=' +
        this.shared.page_path +
        '&action=' +
        this.shared.page_path +
        '_export_subscribers' +
        '&id=' +
        this.lpage_id +
        '&page_uuid=' +
        this.lpage_uuid +
        '&_wpnonce=' +
        seedprod_nonce;

      this.$swal({
        imageUrl: this.shared.plugin_path + 'public/svg/success-24px-white.svg',
        text: __( 'Exported Started', process.env.VUE_APP_TEXTDOMAIN ),
        toast: true,
        type: null,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
      });
    },
    loadItems( from, lpage_id ) {
      if ( 'search' == from ) {
        this.currentpage = 1;
        this.orderby = '';
        this.order = '';
        this.filter = '';
      } else {
        this.search = '';
      }
      let template_api_url = seedprod_remote_api + 'subscribers?sp=1';

      let self = this;

      self.loading = true;
      NProgress.start();
      this.axios
        .get(
          'admin-ajax.php?action=' +
            this.shared.page_path +
            '_subscribers_datatable' +
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
            this.search +
            '&id=' +
            this.lpage_uuid +
            '&interval=' +
            this.chart_timeframe
        )
        .then( function( response ) {
          self.loading = false;
          NProgress.done();

          //console.log(response.data);
          if ( response.data.lpage_name ) {
            self.lpage_name = response.data.lpage_name;
          } else {

            //self.lpage_name = 'All pages';
          }

          if ( 'all' == self.filter && 0 == self.shared.subscriber_count ) {
            self.shared.subscriber_count = response.data.subscribers.total;

            // update subscriber count
            self.axios.get( seedprod_update_subscriber_count );
          } else {
            self.shared.subscriber_count = 1;
          }

          self.rows = response.data.rows;
          self.totalitems = parseInt( response.data.totalitems );
          self.totalpages = parseInt( response.data.totalpages );
          self.currentpage = parseInt( response.data.currentpage );
          self.chartData = response.data.recent_subscribers;
        });

      // remote get
      // this.axios
      //   .get(
      //     template_api_url +
      //       "&api_token=" +
      //       self.shared.api_token +
      //       "&current_page=" +
      //       this.currentpage +
      //       "&orderby=" +
      //       this.orderby +
      //       "&order=" +
      //       this.order +
      //       "&filter=" +
      //       this.filter +
      //       "&s=" +
      //       this.search +
      //       "&id=" +
      //       this.lpage_uuid +
      //       "&interval=" +
      //       this.chart_timeframe
      //   )
      //   .then(function(response) {
      //     self.loading = false;
      //     NProgress.done();
      //     //console.log(response.data);
      //     // if (response.data.lpage_name) {
      //     //   self.lpage_name = response.data.lpage_name;
      //     // } else {
      //     //   self.lpage_name = "All pages";
      //     // }

      //     //console.log(response.data);
      //     if (self.filter == "all" && self.shared.subscriber_count == 0) {
      //       self.shared.subscriber_count = response.data.subscribers.total;
      //       // update subscriber count
      //       self.axios.get(seedprod_update_subscriber_count);
      //     } else {
      //       self.shared.subscriber_count = 1;
      //     }

      //     self.rows = response.data.subscribers.data;
      //     self.totalitems = parseInt(response.data.subscribers.total);
      //     self.totalpages = parseInt(response.data.subscribers.last_page);
      //     self.currentpage = parseInt(response.data.subscribers.current_page);
      //     self.chartData = response.data.recent_subscribers;
      //   })
      //   .catch(function(error) {
      //     NProgress.done();
      //     console.log(error);
      //     self.shared.doing_ajax = false;
      //     self.$swal({
      //       imageUrl:
      //         self.shared.plugin_path + "public/svg/error-24px-white.svg",
      //       text: error.response.data.message,
      //       toast: true,
      //       type: null,
      //       customClass: "sp-toast-error",
      //       position: "top-end",
      //       showConfirmButton: false,
      //       timer: 5000
      //     });
      //   });
    },

    goToPage( page ) {
      this.currentpage = page;
      this.loadItems();
    },
    onActionClick( action, row ) {
      if ( 'delete' == action ) {
        this.trash( row.id );
      }
    },
    onBulkAction( action, items ) {
      if ( 'delete_subscribers' == action ) {
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
  },
  created() {
    if ( 0 == this.$route.params.id ) {
      this.loadItems();
    }
    this.load_lpages();

    // Highlight Subscribers admin sub-menu link when it is current page
    const pagesMenuLink = document.querySelector( '[id^="toplevel_page_seedprod_"] > .wp-submenu > li:nth-of-type(2)' );
    const subscribersMenuLink = document.querySelector( '[id^="toplevel_page_seedprod_"] > .wp-submenu > li:nth-of-type(4)' );
    pagesMenuLink.classList.remove( 'current' );
    subscribersMenuLink.classList.add( 'current' );
  },
  watch: {
    $route( to, from ) {

      // console.log(from);
      // console.log(to);

      this.filter = 'all';
      this.loadItems( '', to.params.id );
    },
  },
};
</script>

