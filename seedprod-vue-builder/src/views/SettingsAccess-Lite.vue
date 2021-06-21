<template>
  <div class="seedprod-settings-page">
    <div class="seedprod-settings-page-wrapper"  >
      <h1 class="sp-flex sp-items-center">{{txt_1}} <div class="sp-inline-block sp-bg-green sp-rounded sp-text-white sp-z-20 sp-py-1 sp-px-2 sp-text-12px sp-font-semibold  sp-ml-2">PRO</div></h1>

      <div style="opacity:0.5" @click="showUpsellModal = true">
      <div class="sp-flex sp-items-start sp-mb-8">

        <label class="sp-w-48 sp-flex-shrink-0">{{txt_2}}</label>
        <div>
          <div class="sp-flex-1">
            <toggle-button
              :width="36"

              class="sp-mr-2"
            />
            <span
              v-if="shared.settings.disable_default_excluded_urls"
              class="sp-text-11px sp-uppercase sp-pl-1 sp-font-bold"
            >{{txt_3}}</span>
            <span
              v-else
              class="sp-text-11px sp-uppercase sp-text-neutral-40 sp-pl-1 sp-font-bold"
            >{{txt_4}}</span>
          </div>

          <div
            class="sp-mt-2 sp-text-neutral-60"
          >{{txt_5}}</div>
        </div>
      </div>

      <div class="sp-flex sp-items-start sp-mb-8">
        <label class="sp-w-48 sp-flex-shrink-0">{{txt_6}}</label>
        <div>
          <div class="sp-flex-1">
            <toggle-button :width="36"  class="sp-mr-2" />
            <span
              v-if="shared.settings.bypass_cookie"
              class="sp-text-11px sp-uppercase sp-pl-1 sp-font-bold"
            >{{txt_3}}</span>
            <span
              v-else
              class="sp-text-11px sp-uppercase sp-text-neutral-40 sp-pl-1 sp-font-bold"
            >{{txt_4}}</span>
          </div>
          <div
            class="sp-mt-2 sp-text-neutral-60"
          >{{txt_7}}</div>
        </div>
      </div>

      <div class="sp-flex sp-items-start sp-mb-8">
        <label class="sp-w-48 sp-flex-shrink-0">{{txt_8}}</label>
        <div>
          <div class="sp-flex sp-items-center">
            <span
              class="sp-bg-neutral-10 sp-border sp-border-neutral-20 sp-inline-block sp-border-r-0 sp-rounded-tl-6px sp-rounded-bl-6px sp-h-42px sp-flex sp-items-center sp-justify-center sp-px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="sp-inline-block sp-fill-current sp-w-6 sp-h-6"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"
                />
              </svg>
            </span>
            <span
              class="sp-border-t sp-border-b sp-border-neutral-20 sp-h-42px sp-flex sp-items-center sp-justify-center sp-px-4"
            >{{ shared.home_url }}/</span>
            <input
              type="text"

              v-validate="'alpha_dash'"
              class="sp-form-input sp-rounded-none sp-border-l-0 sp-rounded-tr-6px sp-rounded-br-6px"
              name="slug"
              style="display:inline-block;width: 300px;"
            />

            <span v-show="errors.has('slug')" class="help-block error">
              {{
              errors.first("slug")
              }}
            </span>
          </div>
          <div class="sp-mt-2 sp-text-neutral-60">
            {{txt_20}}
            {{txt_21}}
          </div>
        </div>
      </div>

      <div class="sp-flex sp-items-center sp-mb-8">
        <label class="sp-w-48">{{txt_9}}</label>

        <div class>
          <select  class="sp-form-select sp-w-auto">
            <option
              v-for="(t,i) in shared.setup_page_meta.expire_times"
              :key="i"
              v-bind:value="i"
            >{{t}}</option>
          </select>
        </div>
      </div>

      <div class="sp-flex sp-items-start sp-mb-8">
        <label class="sp-w-48">{{txt_10}}</label>

        <div class="sp-flex sp-flex-col sp-flex-1 sp-h-48">
          <textarea

            :placeholder="txt_22"
            class="sp-form-textarea sp-w-full sp-flex-1"
          ></textarea>
          <div class="sp-mt-2 sp-text-neutral-60">
            {{txt_23}}
            <br />
            {{txt_24}} {{shared.my_ip}}
          </div>
        </div>
      </div>

      <div class="sp-flex sp-items-start sp-mb-8">
        <label class="sp-w-48">{{txt_11}}</label>
        <div class="sp-flex-1">
          <div class="sp-bg-neutral-10 sp-rounded sp-pl-2 sp-pt-2 sp-flex sp-flex-wrap">
            <span
              v-for="(r,i) in shared.settings.access_by_role"
              :key="i"
              class="sp-bg-neutral-60 hover:sp-bg-neutral-70 sp-text-white sp-font-semibold sp-py-3 sp-px-4 sp-rounded sp-leading-none sp-inline-block sp-flex sp-items-align sp-mr-2 sp-mb-2"
            >
              {{r}}
              <span
                class="sp-text-neutral-20 sp-ml-2 sp-cursor-pointer"
                @click="remove_role(i)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-w-4 sp-h-4 sp-fill-current"
                >
                  <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </span>
            </span>
            <span class="sp-relative">
              <button
                @click="show_roles = !show_roles"
                class="sp-bg-white hover:sp-bg-neutral-5 sp-neutral-40 sp-font-semibold sp-py-3 sp-px-4 sp-rounded sp-leading-none sp-inline-block sp-flex sp-items-align sp-mr-2 sp-mb-2"
              >
                <span class="sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-4 sp-h-4"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    />
                  </svg>
                </span> {{txt_25}}
              </button>
              <div
                v-if="show_roles === true"
                class="sp-absolute sp-left-0 sp-rounded sp-bg-white sp-border sp-border-neutral-20 sp-p-1 sp--mt-2 sp-h-40 sp-overflow-y-scroll"
              >
                <div
                  v-for="(r,i) in this.shared.setup_page_meta.roles"
                  :key="i"
                  class="hover:sp-bg-neutral-10 sp-rounded sp-p-1"
                  @click="add_role(r)"
                  :class="{'sp-hidden': shared.settings.access_by_role.includes(r)}"
                >{{r}}</div>
              </div>
            </span>
          </div>
          <div
            class="sp-mt-2 sp-text-neutral-60"
          >{{txt_12}}</div>
        </div>
      </div>

      <div class="sp-flex sp-items-start sp-mb-8">
        <label class="sp-w-48">{{txt_13}}</label>

        <div class="sp-flex sp-flex-col sp-flex-1">
          <div class="sp-mr-8">
            <label class="sp-inline-flex sp-items-center">
              <input

                type="radio"
                class="sp-form-radio sp-text-primary"
                name="radio"
                value="0"
                checked
              />
              <span class="sp-ml-2">{{txt_14}}</span>
            </label>
          </div>
          <!-- <div class="sp-mr-8">
            <label class="sp-inline-flex sp-items-center">
              <input type="radio" class="sp-form-radio sp-text-primary" name="radio" value="4"  />
              <span class="sp-ml-2">{{txt_15}}</span>
            </label>
          </div>-->
          <div>
            <label class="sp-inline-flex sp-items-center">
              <input

                type="radio"
                class="sp-form-radio sp-text-primary"
                name="radio"
                value="1"
              />
              <span class="sp-ml-2">{{txt_16}}</span>
            </label>
          </div>
          <div>
            <label class="sp-inline-flex sp-items-center">
              <input

                type="radio"
                class="sp-form-radio sp-text-primary"
                name="radio"
                value="2"
              />
              <span class="sp-ml-2">{{txt_17}}</span>
            </label>
            <div
              class="sp-bg-neutral-10 sp-rounded-6px sp-my-4 sp-p-5"
              v-if="shared.settings.include_exclude_type == 2"
            >
              <textarea

                class="sp-form-textarea sp-w-full sp-flex-1"
              ></textarea>
              <div class="sp-text-sm">
                {{txt_26}}
                <br />{{txt_27}}
              </div>
            </div>
          </div>
          <div>
            <label class="sp-inline-flex sp-items-center">
              <input

                type="radio"
                class="sp-form-radio sp-text-primary"
                name="radio"
                value="3"
              />
              <span class="sp-ml-2">{{txt_18}}</span>
            </label>
            <div
              class="sp-bg-neutral-10 sp-rounded-6px sp-my-4 sp-p-5"
              v-if="shared.settings.include_exclude_type == 3"
            >
              <textarea

                :placeholder="txt_29"
                class="sp-form-textarea sp-w-full sp-flex-1"
              ></textarea>
              <div class="sp-text-sm">
                {{txt_28}}
                <br />{{txt_27}}
              </div>
            </div>
          </div>
          <div
            class="sp-mt-2 sp-text-neutral-60"
          >{{txt_19}}</div>
        </div>
      </div>
      </div>
    </div>
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
        <LiteCTABuilder feature_source="access-control" feature="Access Controls" />
           </div>
      <h3 slot="header"></h3>
    </modal>

  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';
import modal from '@/components/Modal.vue';
import LiteCTABuilder from '@/components/LiteCTABuilder.vue';

export default {
  name: 'settingsaccess',
  mixins: [ helpers ],
  data() {
    return {
      txt_1: __( 'Access Control', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Exclude Default:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Yes', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'No', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'By default we exclude urls with the terms: login, admin, dashboard and account to prevent lockouts.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Bypass Cookie:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Use cookies instead of creating a WordPress user for the bypass. Note: this may not work on sites that are cached. Learn More', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Bypass URL:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Bypass URL Expires:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Access by IP:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'Access by Role:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'By default anyone logged in will see the regular website and not the coming soon page. To override this select Roles that will be given access to see the regular website.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Include/Exclude URLs:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Show on the Entire Website', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Show on the Entire Website except for the Blog', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Show on the Home Page Only', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Include URLs', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Exclude URLs', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'By default the Coming Soon/Maintenance page is shown on every page. Use the \'Show on the Home Page Only\' option to only show on the home page. Alternatively Include or Exclude URLs.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'Enter a phrase above and give your visitors a secret url that will allow them to bypass the Coming Soon page.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'After the bypass url expires the user will need to revisit the bypass url to regain access.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( 'One IP Address per line', process.env.VUE_APP_TEXTDOMAIN ),
      txt_23: __( 'All visitors from certain IP\'s to bypass the Coming Soon page.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'Put each IP on it\'s own line. Your current IP is:', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __( 'Add Role', process.env.VUE_APP_TEXTDOMAIN ),
      txt_26: __( 'Include certain urls to display the Coming Soon or Maintenance Page.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( 'One per line. You may also enter a page or post id.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( 'Exclude certain urls to display the Coming Soon or Maintenance Page.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( 'Example: /about-us/', process.env.VUE_APP_TEXTDOMAIN ),

      show_roles: false,
      shared: seedprod_store,
      unused_roles: {},
      showUpsellModal: false,

    };
  },
  components: {
    LiteCTABuilder,
    modal,
  },
  mounted() {

    // let self = this;
    // lodash.forEach(self.shared.setup_page_meta.roles, function(value, key) {
    //   if(_.includes(self.shared.settings.access_by_role, value)){
    //     this.$delete(self.shared.setup_page_meta.roles, key);
    //   }
    // });
  },
  methods: {
    add_role( val ) {
    },
    remove_role( index ) {
    },
  },
};
</script>
