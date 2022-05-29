<template>
  <div class="list">
    <div class="article_item"
    v-for="item in allData"
    :key="item.art_id">
      <h3>{{item.title}}</h3>
      <div class="img_box" v-if="item.cover.type === 1">
        <img :src="item.cover.images[0]" class="w100" alt="" />
      </div>
      <div class="info_box">
        <span>{{item.aut_name}}</span>
        <span>{{item.comm_count}}</span>
        <span>{{item.pubdate}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("catasM", {
      currentCatagory: (state) => state.currentCatagory,
    }),
    ...mapState('listM',{
      allData:state => state.allData
    })
  },
  methods: {
    ...mapActions(["listM/getNewList"]),
  },
  watch: {
    currentCatagory(newValue) {
      this["listM/getNewList"](newValue);
    },
  },
};
</script>

<style scoped>
</style>