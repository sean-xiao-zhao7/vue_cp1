<template>
  <the-modal title="Invalid" v-if="showModal">
    <template #default>
      <p>Error</p>
    </template>
    <template #menu-slot>
      <the-button @click="closeModal">Ok</the-button>
    </template>
  </the-modal>
  <card>
    <h1>Add a resource</h1>
    <form @submit.prevent="submit">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" ref="title" />
      </div>
      <div class="form-control">
        <label for="des">Description</label>
        <textarea type="text" name="des" id="des" ref="des" rows="5"></textarea>
      </div>
      <div class="form-control">
        <label for="link">URL link</label>
        <input type="text" name="link" id="link" ref="link" />
      </div>
      <div>
        <the-button type="submit">Finish</the-button>
      </div>
    </form>
  </card>
</template>

<script>
export default {
  inject: ['addResFunc'],
  data() {
    return {
      showModal: true,
    };
  },
  methods: {
    submit() {
      this.addResFunc(
        this.$refs.title.value,
        this.$refs.des.value,
        this.$refs.link.value
      );
    },
    closeModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
