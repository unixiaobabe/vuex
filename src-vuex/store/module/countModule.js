export default {
    namespaced:true,
    state: {
        count: 1,
    },
    mutations: {
        addCount(state) {
            state.count += 1
        },
        addCountNum(state, payload) {
            state.count += payload
        }
    },
    actions: {
        addAsyncCount(context) {
            setTimeout(() => {
                context.commit('addCount')
            }, 1000)
        },
        addAsyncCountNum(context, payload) {
            setTimeout(() => {
                context.commit('addCountNum', payload)
            }, 1000)
        },
    },
    getters: {
        getCount:state => state.count
    }
}