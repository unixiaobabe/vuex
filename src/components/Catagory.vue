<template>
  <ul class="catagtory">
    <li 
    @click="$store.commit('catasM/updateCurrentCatagory',item.id)"
    :class="{select:item.id == currentCatagory}"
    v-for="item in catagorys" 
    :key="item.id">
      {{ item.name }}</li>
  </ul>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this["catasM/getCatagory"]();
  },
  computed: {
    ...mapState("catasM", {
      catagorys: state => state.catagorys,
      currentCatagory:state => state.currentCatagory
    }),
  },
  methods: {
    ...mapActions(["catasM/getCatagory"]),
  },
};
</script>

<style scoped>
</style>