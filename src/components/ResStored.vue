<template>
  <ul>
    <res
      v-for="res of resources"
      :key="res"
      :title="res.title"
      :des="res.des"
      :link="res.link"
      :id="res.id"
    ></res>
  </ul>
</template>

<script>
import Res from './Res.vue';

export default {
  inject: ['resources'],
  components: { Res },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
