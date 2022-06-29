import Vue from 'vue'
import App from './App.vue'
import '@/mobile/flexible.js'
import '@/styles/reset.css'
import router from '@/router'

import { Tabbar, TabbarItem,Col, Row,Image as VanImage,Cell ,Icon,Search,Toast,List } from 'vant';
import { NavBar } from 'vant';
import {recommendMusicAPI} from "@/api/index"

Vue.use(List);
Vue.use(Toast);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(VanImage);
Vue.use(Col);
Vue.use(Row);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);

// async function fn(){
//   const re =await recommendMusicAPI()
//   console.log(re);

// }
// fn()





Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
