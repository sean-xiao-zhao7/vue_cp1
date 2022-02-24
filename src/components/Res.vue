<template>
  <li>
    <card>
      <header>
        <h3>{{ title }}</h3>
      </header>
      <the-button @click="deleteResFunc">Delete</the-button>

      <p>{{ des }}</p>
      <nav>
        <a :href="link">{{ link }}</a>
      </nav>
    </card>
  </li>
</template>

<script>
import Card from './UI/Card.vue';
import TheButton from './UI/Button.vue';

export default {
  components: { Card, TheButton },
  props: ['title', 'des', 'link', 'id'],
  inject: ['deleteRes'],
  methods: {
    deleteResFunc() {
      this.deleteRes(this.id);
    },
  },
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
