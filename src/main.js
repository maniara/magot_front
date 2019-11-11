import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { VModal } from 'vue-js-modal'

Vue.config.productionTip = false

extend('required', {
  ...required,
  message: 'The {_field_} field is required'
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('foo-modal', VModal);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
