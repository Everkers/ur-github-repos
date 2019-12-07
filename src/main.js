import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from '@/components/navbar'
import Repo from '@/components/repo'
import PopUp from '@/components/popUp'
Vue.use(BootstrapVue)

Vue.config.productionTip = false

//components declaration

Vue.component('navbar-ur' ,  Navbar)
Vue.component('repo-ur' ,  Repo)
Vue.component('popup-ur' ,  PopUp)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
