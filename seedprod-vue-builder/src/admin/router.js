import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './Dashboard-SP_VERSION.vue';
import GrowthTools from './GrowthTools.vue';
import Subscribers from './Subscribers-SP_VERSION.vue';
import Settings from './Settings.vue';
import SettingsGeneral from './SettingsGeneral.vue';
import Welcome from './Welcome.vue';
import Aboutus from './Aboutus.vue';
import AboutusAbout from './AboutusAbout.vue';

Vue.use( Router );

const router = new Router({
  routes: [
    {
      name: 'dashboard',
      path: '/',
      component: Dashboard,
    },

    {
      name: 'growthtools',
      path: '/growth-tools',
      component: GrowthTools,
    },
    {
      name: 'subscribers',
      path: '/subscribers/:id',
      component: Subscribers,
    },
    {
      path: '/settings',
      component: Settings,
      children: [
        {
          name: 'settings_general',
          path: '',
          components: {
            main: SettingsGeneral,
          },
        },
      ],
    },
    {
      path: '/aboutus',
      component: Aboutus,
      children: [
        {
          name: 'aboutus_aboutus',
          path: '',
          components: {
            main: AboutusAbout,
          },
        },
      ],
    },
    {
      name: 'welcome',
      path: '/welcome',
      component: Welcome,
    },

  ],
  linkActiveClass: 'active',
});

export default router;

