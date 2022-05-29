import axios from '@/utils/request'
export default {
    namespaced:true,
    state:{
        //存储分类数据
        catagorys:[],
        currentCatagory:'', //当前激活的分类
    },
    mutations:{
        updateCatagorys(state,payload){
            state.catagorys = payload
        },
        updateCurrentCatagory(state,payload){
            state.currentCatagory = payload
        }
    },
    actions:{
        async getCatagory(context){
            let {data:{data:{channels}}} = await axios.get('/channels')
            console.log(channels);
            context.commit('updateCatagorys',channels)
            context.commit('updateCurrentCatagory',channels[0].id)
        }
    }
}