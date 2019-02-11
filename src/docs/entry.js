import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './templates/design-doc';
import routes from './routes';

Vue.use( VueRouter );

const router = new VueRouter({ 
  routes,
  scrollBehavior(
    to,
    from,
    savedPosition
  ){
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    else {
       return { x: 0, y: 0 }
    }
  } 
});

const ExtendedVue = Vue.extend({
  props: [ 'routes' ],
});

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