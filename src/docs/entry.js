import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './templates/design-doc';
import routes from './routes';

Vue.use( VueRouter );

const router = new VueRouter({ routes })

const ExtendedVue = Vue.extend({
  props: [ 'routes' ],
})

new ExtendedVue({
  render( createElement ){
    const context = {
      props: { routes }
    };
    return createElement(
      App,
      context
    )
  },
  router
}).$mount( '#design-doc' );