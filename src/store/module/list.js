import axios from '@/utils/request'
export default {
    namespaced:true,
    state:{
        allData:[]
    },
    mutations:{
        updateAllData(state,payload){
            state.allData = payload
        }
    },
    actions:{
        async getNewList({commit},cataId){
            let {data:{data:{results}}} = await axios.get(`/articles?channel_id=${cataId}&timestamp=${Date.now()}&with_top=1`)
            console.log(results);
            commit('updateAllData',results)
        }
    }
}