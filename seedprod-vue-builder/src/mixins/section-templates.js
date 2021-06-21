import _ from 'lodash';
import NProgress from 'nprogress';
export const sections = {
  methods: {
    filter_cat( cat ) {
      this.shared.sections_templates.templatesearch = '';
      this.shared.sections_templates.templatecat = cat;

      if ( true === this.shared.template_dev_mode ) {
        this.shared.sections_templates.templatesearch = this.shared.template_dev_mode_password;
      }
      this.loadSections();
    },
    loadCats() {
      let self = this;

      self.loading = true;
      NProgress.start();

      let url = this.template_api_url;
      if ( false == this.shared.api_token ) {
        url = this.template_api_url_preview;
      }

      this.axios
        .get(
          url +
                  '&filter=section_cats' +
                  '&api_token=' +
                  self.shared.api_token +
                  '&dev_mode=' +
                  self.shared.template_dev_mode_password
        )
        .then( function( response ) {
          self.shared.sections_templates.cats = response.data;
        })
        .catch( function( error ) {
          console.log( error.response );
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
    },
    loadSections() {
      let self = this;

      self.loading = true;
      NProgress.start();

      let url = this.template_api_url;
      if ( false == this.shared.api_token ) {
        url = this.template_api_url_preview;
      }

      this.axios
        .get(
          url +
                  '&filter=sections' +
                  '&s=' +
                  self.shared.sections_templates.templatesearch +
                  '&cat=' +
                  self.shared.sections_templates.templatecat +
                  '&api_token=' +
                  self.shared.api_token + '&site_token=' +
                  self.shared.site_token
        )
        .then( function( response ) {
          self.loading = false;
          NProgress.done();

          let t = response.data.sections.data;
          t.forEach( function( v ) {
            v.favorited = response.data.favs.includes( v.id );
            if ( 'saved' == self.shared.sections_templates.templatecat ) {
              v.saved = true;
            }
          });
          self.shared.sections_templates.themes = response.data.sections;
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
    },
  },
};
