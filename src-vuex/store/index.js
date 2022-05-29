import Vue from 'vue'
import Vuex from 'vuex'
import countModule from './module/countModule'
import listModule from './module/listModule'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        countM:countModule,
        listM:listModule
    }
})

export default store