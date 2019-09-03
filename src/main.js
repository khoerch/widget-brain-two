import Vue from "vue";
import App from "./App.vue";

// Adding support for Font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPowerOff, faMapMarkerAlt, faArrowRight, faArrowLeft, faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPowerOff, faMapMarkerAlt, faArrowRight, faArrowLeft, faChevronDown, faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
