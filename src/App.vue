<template>
  <div class="container">
    <AppHeader :title="title" :subTitle="subTitle"/>
    <BlockItems :blockItems="blockItems"/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import BlockItems from './components/BlockItems.vue';
import TestData from './assets/TestData.json'

export default {
  name: "App",
  components: {
    AppHeader,
    BlockItems
  },
  data() {
    return { // Dummy staic data
      title: "Experienced & Multi-Talented",
      subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      blockItems: []
    }
  },
  created() { // Load data in hook fn
     this.blockItems = TestData;
  }
}
</script>

<style scope>
@import './assets/style/base.css';
@import './assets/style/fonts.css';
@media (max-width: 635px) {
  body {
    background-color: #1c2026;
    font-family: 'Gotham-Bold';
    color: #627278;
  }
}
</style>
