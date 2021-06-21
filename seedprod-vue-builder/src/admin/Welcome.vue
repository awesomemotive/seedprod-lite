<template>
  <div>
    <div>
      <div id="sp-welcome-top" class="sp-bg-white sp--ml-5 sp-flex sp-flex-col sp-items-center">
        <div class="robbie">
          <img
            id="seedprod-welcome-logo"
            class="sp-mt-16"
            :src="
								shared.plugin_path +
									'public/svg/seedprod-logo.svg'
							"
            :alt="txt_14"
          />
        </div>

        <div
          class="sp-mx-auto sp-text-center sp-text-15px sp-w-460 sp-font-semibold sp-text-neutral-80 sp-mb-6 sp-mt-5 sp-leading-relaxed"
        >{{txt_1}}</div>
        <div
          class="sp-mb-32 sp-border-neutral-15 sp-border sp-rounded sp-border-solid sp-p-10 sp-w-580 sp-z-20 sp-bg-white sp-shadow-2xl"
        >

          <div
            v-if="shared.page_path == 'seedprod_lite'"
            class="sp-font-bold sp-text-base sp-text-neutral"

          >
           <span v-html="txt_2"></span>
            <img
              draggable="false"
              class="emoji"
              alt="🙂"
              src="https://s.w.org/images/core/emoji/11.2.0/svg/1f642.svg"
            />
          </div>
          <div
            id="license-sub"
            v-if="shared.page_path == 'seedprod_pro'"
            class="sp-font-bold sp-text-base sp-text-neutral sp-text-center "
          >
           {{txt_3}}
          </div>
          <!-- <p id="license-sub" v-else v-html="txt_4">
          </p> -->
          <form v-if="shared.page_path == 'seedprod_pro'" class="sp-flex sp-mt-6">
            <div class="sp-flex sp-mx-auto">
              <input
                type="password"
                name="name"
                v-model="
											shared.settings_page_meta.api_key
										"
                class="sp-form-input sp-h-48px"
                style="min-width:300px"
                :placeholder="txt_5"
                autocomplete="off"
              />

              <button
                class="sp-mb-4 sp-inline-block sp-text-sm sp-bg-primary sp-px-4 sp-py-4 sp-rounded-sm sp-leading-none sp-text-white sp-no-underline sp-rounded-md sp-text-base sp-ml-1 hover:sp-bg-primary-lighter sp-cursor-pointer sp-border-none"
                v-on:click.prevent="save_api_key"
                :disabled="shared.doing_ajax ? true : false"
              >
                <i class="fas fa-spinner fa-spin" v-if="shared.doing_ajax"></i>
                &nbsp;{{txt_6}}
              </button>
            </div>
          </form>
          <div class="sp-text-15px sp-text-neutral-80 sp-text-center sp-mt-2" v-html="txt_7">

          </div>
        </div>
      </div>
      <!-- /.intro -->

      <div>
        <a
          href="#"
          class="play-video sp-mx-auto sp-block sp-text-center sp--mt-40"
          :title="txt_15"
          @click.prevent="watch_video"
        >
          <img
            :src="
								shared.plugin_path +
									'public/img/welcome-video.png'
							"
            :alt="txt_13"
            class="video-thumbnail"
          />
        </a>
        <div>
          <div class="sp-text-lg sp-text-neutral-80 sp-w-full sp-leading-relaxed sp-mt-8 sp-mx-auto sp-text-center" v-html="txt_8">

          </div>

          <div class="sp-flex sp-justify-center sp-pb-3 sp-pt-6">
            <div class="sp-mr-1">
              <a
                id="first-step"
                :href="
										'admin.php?page=' +
											shared.page_path
									"
                class="sp-mb-4 sp-inline-block sp-bg-primary sp-px-5 sp-py-4 sp-rounded sp-leading-none sp-text-white sp-no-underline sp-text-17px sp-ml-1 hover:sp-bg-primary-lighter sp-cursor-pointer sp-font-semibold"
              >{{txt_9}}</a>
            </div>
            <div class="sp-ml-1">
              <a
                href="https://seedprod.com/docs/creating-your-first-lpage/?utm_source=WordPress&amp;utm_medium=link&amp;utm_campaign=liteplugin"
                class="sp-mb-4 sp-inline-block sp-bg-neutral-10 hover:sp-bg-neutral-20 sp-px-5 sp-py-4 sp-rounded sp-leading-none sp-text-neutral-80 sp-no-underline sp-text-17px sp-ml-1 sp-cursor-pointer sp-font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >{{txt_10}}</a>
            </div>
          </div>
        </div>
        <div>
          <hr class="sp-border sp-border-neutral-20 sp-border-b-0 sp-w-24 sp-mb-8" />
          <h1
            class="sp-text-center sp-font-bold sp-text-34px sp-text-neutral sp-mt-2 sp-leading-normal sp-tracking-tight"
          v-html="txt_11"></h1>
          <div
            class="sp-text-17px sp-text-neutral-80 sp-mx-auto sp-w-580 sp-leading-relaxed sp-mt-8 sp-text-center sp-w-full sp-mb-12"
          v-html="txt_12">
          </div>

          <div class="sm:sp-flex sp-w-690 sp-mx-auto sp-text-neutral-80 sp-mb-6">
            <div class="sp-flex sp-items-start sm:sp-mr-8 sp-w-1/2">
              <img
                class="sp-mr-4"
                :src="
										shared.plugin_path +
											'public/svg/green-check.svg'
									"
              />
              <div>
                <h5 class="sp-m-0 sp-text-15px sp-font-bold" v-html="txt_16"></h5>
                <p class="sp-text-15px">
                  {{txt_22}}
                </p>
              </div>
            </div>
            <div class="sp-flex sp-items-start sm:sp-ml-8 sp-w-1/2">
              <img
                class="sp-mr-4"
                :src="
										shared.plugin_path +
											'public/svg/green-check.svg'
									"
              />
              <div>
                <h5 class="sp-m-0 sp-text-15px sp-font-bold">{{txt_27}}</h5>
                <p class="sp-text-15px">
				  {{txt_28}}
                </p>
              </div>
            </div>
          </div>

          <div class="sm:sp-flex sp-w-690 sp-mx-auto sp-text-neutral-80 sp-mb-6">
            <div class="sp-flex sp-items-start sm:sp-mr-8 sp-w-1/2">
              <img
                class="sp-mr-4"
                :src="
										shared.plugin_path +
											'public/svg/green-check.svg'
									"
              />
              <div>
                <h5 class="sp-m-0 sp-text-15px sp-font-bold">{{txt_29}}</h5>
                <p class="sp-text-15px">
                  {{txt_30}}
                </p>
              </div>
            </div>
            <div class="sp-flex sp-items-start sm:sp-ml-8 sp-w-1/2">
              <img
                class="sp-mr-4"
                :src="
										shared.plugin_path +
											'public/svg/green-check.svg'
									"
              />
              <div>
                <h5 class="sp-m-0 sp-text-15px sp-font-bold">{{txt_31}}</h5>
                <p class="sp-text-15px">
                  {{txt_32}}
                </p>
              </div>
            </div>
          </div>

          <div class="sm:sp-flex sp-w-690 sp-mx-auto sp-text-neutral-80 sp-mb-6">
            <div class="sp-flex sp-items-start sm:sp-mr-8 sp-w-1/2">
              <img
                class="sp-mr-4"
                :src="
										shared.plugin_path +
											'public/svg/green-check.svg'
									"
              />
              <div>
                <h5 class="sp-m-0 sp-text-15px sp-font-bold">{{txt_33}}</h5>
                <p class="sp-text-15px">
                  {{txt_34}}
                </p>
              </div>
            </div>
            <div class="sp-flex sp-items-start sm:sp-ml-8 sp-w-1/2">
              <img
                class="sp-mr-4"
                :src="
										shared.plugin_path +
											'public/svg/green-check.svg'
									"
              />
              <div>
                <h5 class="sp-m-0 sp-text-15px sp-font-bold">{{txt_35}}</h5>
                <p class="sp-text-15px">
                  {{txt_36}}
                </p>
              </div>
            </div>
          </div>

          <div
           v-if="shared.page_path == 'seedprod_lite'"
            class="sp-mt-6 sp-bg-white sp-border-neutral-15 sp-border sp-rounded sp-border-solid sp-w-720 sp-mx-auto sp-px-10 sp-py-10 sp-text-center"
          >

            <div >
              <span class="sp-text-primary sp-text-lg sp-font-bold">{{txt_17}}</span>
              <h1 class="sp-mt-4 sp-mb-8 sp-leading-tight sp-text-34px sp-font-bold sp-text-neutral" v-html="txt_23">
                <span class="sp-text-primary">{{txt_18}}</span>
              </h1>
                <div class="sp-text-center sp-mb-4 sp-text-base">
          <div class="sp-inline-flex sp-text-left">
            <ul class="sp-px-4">
              <li class="sp-font-bold">
                <span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>
                {{txt_995}}
              </li>
              <li class="sp-font-bold"><span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{{txt_996}}</li>
              <li class="sp-font-bold"><span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{{txt_997}}</li>
              <li class="sp-font-bold"><span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{{txt_998}}</li>
              <li class="sp-font-bold"><span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{{txt_999}}</li>
            </ul>
            <ul class="sp-px-4">
              <li class="sp-font-bold"><span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{{txt_9910}}</li>
              <li class="sp-font-bold"><span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{{txt_9911}}</li>
              <li class="sp-font-bold"><span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{{txt_9912}}</li>
              <li class="sp-font-bold"><span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{{txt_9913}}</li>
              <li class="sp-font-bold"><span class="sp-text-green sp-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="sp-fill-current sp-w-5"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{{txt_9914}}</li>
            </ul>
          </div>
        </div>
              <a
                :href="this.shared.upgrade_link + 'pluginwelcomepage'"
                target="_blank"
                class="sp-inline-block sp-bg-green sp-px-6 sp-py-4 sp-rounded sp-leading-none sp-text-white sp-no-underline sp-text-17px hover:sp-bg-green-lighter sp-cursor-pointer sp-font-semibold sp-flex sp-items-center sp-justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="sp-fill-current sp-mr-2 sp-w-5 sp-h-5"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg> {{txt_24}}
              </a>

            </div>
          </div>

          <div class="sm:sp-flex sp-w-720 sp-mx-auto sp-mt-2 sp-mb-20">
            <div class="sp-testimonial sm:sp-mr-3 sp-w-1/2">
              <p
                class="sp-bg-white sp-rounded-md sp-py-5 sp-px-6 sp-text-neutral-80 sp-text-15px sp-mb-0 sp-relative sp-leading-relaxed "
              >{{txt_21}}</p>

              <div class="sp-flex sp-items-center sp-mt-6 sp-pl-5">
                <img
                  class="sp-w-10 sp-rounded-full sp-mr-5"
                  :src="
									shared.plugin_path + 'public/img/chris-ducker.jpg'
								"
                />
                <div class="sp-text-neutral-80 sp-text-xs">
                  <strong class="sp-font-bold">Chris Ducker</strong>
                  <p class="sp-m-0 sp-text-neutral-60 sp-mt-1">Author of #1 Bestselling Book 'Virtual Freedom'</p>
                </div>
              </div>
            </div>
            <div class="sp-testimonial sm:sp-ml-3 sp-w-1/2">
              <p
                class="sp-bg-white sp-rounded-md sp-py-5 sp-px-6 sp-text-neutral-80 sp-text-15px sp-mb-0 sp-relative sp-leading-relaxed "
              >{{txt_26}}</p>

              <div class="sp-flex sp-items-center sp-mt-6 sp-pl-5">
                <img
                  class="sp-w-10 sp-rounded-full sp-mr-5"
                  :src="
									shared.plugin_path + 'public/img/ruthie-unaegbu.jpg'
								"
                />
                <div class="sp-text-neutral-80 sp-text-xs">
                  <strong class="sp-font-bold">Ruthie Unaegbu</strong>
                  <p class="sp-m-0 sp-text-neutral-60 sp-mt-1">WordPress Freelancer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
import qs from 'qs';
import NProgress from 'nprogress';
import { helpers } from '../mixins/helpers.js';
import { __, sprintf  } from '@wordpress/i18n';

export default {
  name: 'Welcome',
  mixins: [ helpers ],
  data() {
    return {
      txt_1: __( 'Thank you for choosing SeedProd - The #1 Coming Soon Page and Maintenance Mode Plugin for WordPress.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'You\'re using <strong>SeedProd Lite</strong> - No License needed. Enjoy!', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Enter your license key to enable all the features of the plugin.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: sprintf( __( 'If you already have a license key for <a href=\'%s\' target=\'_blank\'>SeedProd Pro</a>, please enter it to Upgrade to the Pro Features.', process.env.VUE_APP_TEXTDOMAIN ), seedprod_store_admin.upgrade_link + 'welcome' ),
      txt_5: __( 'Enter Your License Key Here', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'Verify key', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: sprintf( __( 'Don\'t have a license key or need to renew? Visit <a href=\'%s\' target=\'_blank\'  class=\'sp-text-primary\'>seedprod.com</a>', process.env.VUE_APP_TEXTDOMAIN ), 'https://www.seedprod.com?utm_source=WordPress&utm_campaign=liteplugin&utm_medium=pluginwelcomelicense' ),
      txt_8: __( 'SeedProd makes it easy to create landing pages in WordPress.<br>You can watch the video tutorial or read our guide on how create your first page.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9: __( 'Create Your First Page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_10: __( 'Read the Full Guide', process.env.VUE_APP_TEXTDOMAIN ),
      txt_11: __( 'SeedProd Features &amp; Solutions', process.env.VUE_APP_TEXTDOMAIN ),
      txt_12: __( 'SeedProd is both easy to use and extremely powerful. We have tons of<br />helpful features to help you create a successful landing page.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_13: __( 'Watch how to create your first landing page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_14: __( 'Robbie the Rabbit the SeedProd mascot', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Watch how to create your first page', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Drag &amp; Drop Page Builder', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Special Upgrade Offer - Save 50% Off', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Save 20%', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Pro', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'per year', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( '"Want to create a great looking \'coming soon\' landing page and grab emails easily? Check out SeedProd"', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( 'Our Drag & Drop Page Builder lets you create great looking pages and layouts fast so you can get your landing page up in minutes. No coding required!', process.env.VUE_APP_TEXTDOMAIN ),
      txt_23: __( 'Upgrade to SeedProd Pro<br />Today and Save', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'Upgrade to PRO Now', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __( 'List', process.env.VUE_APP_TEXTDOMAIN ),
      txt_26: __( '"Just gotta say how awesome SeedProd really is! WordPress freelancers really need this in their repertoire!"', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( 'Landing Page Templates', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( 'Create a variety of landing pages including sales, optin, coming soon, maintenance mode, webinar, and thank you pages. New templates added regularly.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( 'Smart Sections', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( 'We created professionally designed pre-built sections like headers, calls to action, so you don\'t need to be a designer to create beautiful layouts.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_31: __( 'Premium Integrations', process.env.VUE_APP_TEXTDOMAIN ),
      txt_32: __( 'Collect emails with your favorite 3rd party email marketing service providers including MailChimp, ActiveCampaign, ConvertKit, Constant Contact and more...', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( 'No Coding Skills Needed', process.env.VUE_APP_TEXTDOMAIN ),
      txt_34: __( 'We\'ve eliminated all the technical barries that keep you from building the perfect landing page.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_35: __( 'Super Fast Loading Pages', process.env.VUE_APP_TEXTDOMAIN ),
      txt_36: __( 'Bloat free code results in faster loading pages which means your page converts higher.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_995: __( 'Drag & Drop Page Builder', process.env.VUE_APP_TEXTDOMAIN ),
      txt_996: __( '20+ PRO Page Blocks', process.env.VUE_APP_TEXTDOMAIN ),
      txt_997: __(
        'Email Marketing Integrations',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_998: __( 'Custom 404 Pages', process.env.VUE_APP_TEXTDOMAIN ),
      txt_999: __( 'Page Access Controls', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9910: __( '100+ PRO Page Templates', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9911: __(
        'PRO Smart Sections',
        process.env.VUE_APP_TEXTDOMAIN
      ),
      txt_9912: __( 'Subscriber Management', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9913: __( 'Saved Templates', process.env.VUE_APP_TEXTDOMAIN ),
      txt_9914: __( 'Plus much more...', process.env.VUE_APP_TEXTDOMAIN ),
      shared: seedprod_store_admin,
    };
  },
  methods: {
    watch_video: function() {
      this.$swal({
        width: 600,
        html:
          '<iframe width="100%" height="315" src="https://www.youtube.com/embed/MUXoqm3VpRo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        toast: false,
        customContainerClass: 'seedprod-welcome-video',
      });
    },
    save_api_key: function() {
      let _self = this;

      let data = qs.stringify({
        api_key: _self.shared.settings_page_meta.api_key,
      });

      _self.shared.doing_ajax = true;
      NProgress.start();
      _self.shared.settings_page_meta.button = 'api_key';

      let url =
        'admin-ajax.php?action=' + this.shared.page_path + '_save_api_key&_wpnonce=' +
        seedprod_nonce;

      _self.axios
        .post( url, data, {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        })
        .then( function( response ) {
          NProgress.done();
          _self.shared.doing_ajax = false;
          _self.shared.settings_page_meta.button = false;

          if ( 'true' == response.data.status ) {
            var type = 'success';
          } else {
            var type = 'error';
          }

          _self.$swal({
            imageUrl:
              _self.shared.plugin_path +
              'public/svg/' +
              type +
              '-24px-white.svg',
            text: response.data.msg,
            toast: true,
            type: null,
            customClass: 'sp-toast-' + type,
            position: 'top-end',
            showConfirmButton: false,
            timer: 30000,
          });

          // focus create page button
          let elmnt = document.getElementById( 'first-step' );
          elmnt.scrollIntoView( false );

        })
        .catch( function( error ) {

          //console.log(error);
          _self.shared.doing_ajax = false;
          _self.shared.settings_page_meta.button = false;
          _self.$swal({
            imageUrl:
              _self.shared.plugin_path + 'public/svg/error-24px-white.svg',
            text: error.response.data.message,
            toast: true,
            type: null,
            customClass: 'sp-toast-error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
          });
        });
      return;
    },
  },
};
</script>

