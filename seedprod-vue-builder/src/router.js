import Vue from 'vue';
import Router from 'vue-router';
import TemplateChooser from './views/TemplateChooser-SP_VERSION.vue';
import SetupBlockOptions from './views/SetupBlockOptions-SP_VERSION.vue';
import SetupDesign from './views/SetupDesign-SP_VERSION.vue';
import SetupSettings from './views/SetupSettings.vue';
import SettingsSEO from './views/SettingsSEO.vue';
import SettingsAnalytics from './views/SettingsAnalytics.vue';
import SettingsScripts from './views/SettingsScripts.vue';
import SettingsDomain from './views/SettingsDomain.vue';
import SettingsGeneral from './views/SettingsGeneral.vue';
import SettingsConnect from './views/SettingsConnect-SP_VERSION.vue';
import Revisions from './views/Revisions.vue';
import Layoutnav from './views/Layoutnav.vue';
import SectionTemplates from './views/SectionTemplates-SP_VERSION.vue';
import SectionTemplateOptions from './views/SectionTemplateOptions-SP_VERSION.vue';
import SettingsAccess from './views/SettingsAccess-SP_VERSION.vue';
import BuilderView from './views/BuilderView.vue';
import Setup from './views/Setup.vue';

Vue.use( Router );

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'setup_block_options' },
    },
    {
      name: 'template',
      path: '/template/:id?',
      component: TemplateChooser,
    },
    {

      path: '/setup/:id',
      component: Setup,
      name: 'setup',
      children: [
        {
          name: 'setup_block_options',
          path: 'block-options/:blockid?',
          components: {
            sidebar: SetupBlockOptions,
            main: BuilderView,
          },
        },
        {
          name: 'revisions',
          path: 'revisions',
          components: {
            sidebar: Revisions,
            main: BuilderView,
          },
        },
        {
          name: 'layoutnav',
          path: 'layoutnav',
          components: {
            sidebar: Layoutnav,
            main: BuilderView,
          },
        },
        {
          name: 'sectiontemplates',
          path: 'sectiontemplates',
          components: {
            sidebar: SectionTemplates,
            main: SectionTemplateOptions,
          },
        },
        {
          name: 'setup_design',
          path: 'global',
          components: {
            sidebar: SetupDesign,
            main: BuilderView,
          },
        },
        {
          name: 'setup_settings',
          path: 'settings',
          components: {
            sidebar: SetupSettings,
            main: SettingsGeneral,
          },
        },
        {
          name: 'setup_settings_general',
          path: 'settings/general',
          components: {
            sidebar: SetupSettings,
            main: SettingsGeneral,
          },
        },
        {
          name: 'setup_settings_seo',
          path: 'settings/seo',
          components: {
            sidebar: SetupSettings,
            main: SettingsSEO,
          },
        },
        {
          name: 'setup_settings_domain',
          path: 'settings/domain',
          components: {
            sidebar: SetupSettings,
            main: SettingsDomain,
          },
        },
        {
          name: 'setup_settings_analytics',
          path: 'settings/analytics',
          components: {
            sidebar: SetupSettings,
            main: SettingsAnalytics,
          },
        },
        {
          name: 'setup_settings_scripts',
          path: 'settings/scripts',
          components: {
            sidebar: SetupSettings,
            main: SettingsScripts,
          },
        },
        {
          name: 'setup_settings_connect',
          path: 'connect',
          components: {
            sidebar: null,
            main: SettingsConnect,
          },
        },

        {
          name: 'setup_settings_access',
          path: 'settings/access',
          components: {
            sidebar: SetupSettings,
            main: SettingsAccess,
          },
        },

      ],
    },
  ],
  linkActiveClass: 'active',
});

// supress duplicate nav error
const originalPush = Router.prototype.push;
Router.prototype.push = function push( location ) {
  return originalPush.call( this, location ).catch( err => err );
};

// router.beforeEach((to, from, next) => {
// 	console.log(this.$validator);
// 	next();
// })

export default router;

