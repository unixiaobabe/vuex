export default {
    namespaced:true,
    state: {
        list: [1, 2, 3, 4, 4, 5, 6, 6, 6, 4]
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        filterList: state => state.list.filter(item => item > 5)
    }
}