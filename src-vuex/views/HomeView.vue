<template>
  <div class="home">
    <!-- store里的数据{{ $store.state.countM.count }} -->
    store里的数据{{ getCount }}
    <!-- <button @click="addOne">+1</button>
    <button @click="addNum">+N</button> -->
    <button @click="addCount">+1</button>
    <button @click="addCountNum(5)">+N</button>
    <!-- js里store的数据{{con}}
    <p>计算属性store的数据{{cou}}</p>
    <p>辅助函数store的数据{{count}}</p> -->
    <!-- <button @click="addOne">异步+1</button>
    <button @click="addNum">异步+N</button> -->
    <button @click="addAsyncCount">异步+1</button>
    <button @click="addAsyncCountNum(9)">异步+N</button>
    <hr />
    <!-- <ul>
      <li
      v-for="(item,ind) in $store.getters.filterList"
      :key="ind">
      {{item}}
      </li>
    </ul> -->
    <ul>
      <li v-for="(item, ind) in $store.getters['listM/filterList']" :key="ind">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers, mapActions, mapMutations, mapState } from "vuex";
const {mapGetters} = createNamespacedHelpers('countM')
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      con: this.$store.state.count,
    };
  },
  computed: {
    // ...mapState(["countM/count"]),
    ...mapGetters(['getCount']),
    // ...mapGetters(["listM/filterList","countM/getCount"]),
    // cou() {
    //   return this['getCount'];
    // },
  },
  methods: {
    ...mapMutations(["countM/addCount", "countM/addCountNum"]),
    ...mapActions(["countM/addAsyncCount", "countM/addAsyncCountNum"]),
    addCount(){
      this['countM/addCount']()
    },
    addCountNum(n){
      this['countM/addCountNum'](n)
    },
    addAsyncCount(){
      this['countM/addAsyncCount']()
    },
    addAsyncCountNum(n){
      this['countM/addAsyncCountNum'](n)
    },
    addOne() {
      // this.$store.commit("countM/addCount");

      this.$store.dispatch("countM/addAsyncCount");
    },
    addNum() {
      this.$store.commit("countM/addCountNum", 5);

      // this.$store.dispatch("countM/addAsyncCountNum", 5);
    },

    // addCount(){
    //   this['countM/addCount']()
    // },
  },
};
</script>
