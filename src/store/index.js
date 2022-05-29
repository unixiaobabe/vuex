import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import catagoryModule from './module/catagory'
import listModule from './module/list'
const store = new Vuex.Store({
    modules:{
        catasM:catagoryModule,
        listM:listModule
    }
})

export default store