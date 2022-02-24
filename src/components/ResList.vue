<template>
  <card>
    <the-button @click="changeTab('res-stored')" :mode="buttonHighlight1">
      Stored resources
    </the-button>
    <the-button @click="changeTab('add-res')" :mode="buttonHighlight2">
      Add a new resource
    </the-button>
  </card>
  <keep-alive>
    <component :is="tab"></component>
  </keep-alive>
</template>

<script>
import ResStored from '../components/ResStored.vue';
import AddRes from '../components/AddRes.vue';
import TheButton from '../components/UI/Button.vue';

export default {
  components: {
    AddRes,
    ResStored,
    TheButton,
  },
  data() {
    return {
      tab: 'res-stored',
      resources: [
        {
          id: 'tesatetat',
          title: 'Res 1',
          des: 'Test description',
          link: 'http://asdfasdfsadf.com',
        },
        {
          id: 'asdfasdfasdf',
          title: 'Google',
          des: 'Google content',
          link: 'google.com',
        },
      ],
    };
  },
  computed: {
    buttonHighlight1() {
      return this.tab === 'res-stored' ? null : 'flat';
    },
    buttonHighlight2() {
      return this.tab === 'add-res' ? null : 'flat';
    },
  },
  provide() {
    return {
      resources: this.resources,
      addResFunc: this.addResFunc,
      deleteRes: this.deleteRes,
    };
  },
  methods: {
    changeTab(v) {
      this.tab = v;
    },
    addResFunc(title, des, link) {
      this.resources.unshift({
        title: title,
        des: des,
        link: link,
        id: new Date().toISOString(),
      });
      this.tab = 'res-stored';
    },
    deleteRes(id) {
      const i = this.resources.findIndex((res) => res.id === id);
      this.resources.splice(i, 1);
    },
  },
};
</script>
