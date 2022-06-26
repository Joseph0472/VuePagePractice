<template>
    <div class="block-items responsive-items">
        <div class="block-item responsive-item" :key="blockItem.id" v-for="blockItem in blockItems">
            <BlockItem :blockItem="blockItem"/> 
        </div>
    </div>
</template>

<script>
import BlockItem from './BlockItem.vue';

export default {
    name: 'BlockItems',
    components: {
        BlockItem
    },
    props: {
        blockItems: Array
    },
}
</script>

<style scoped>
.block-items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    align-content: center;
}
.block-item {
    display: flex;
    justify-content: space-evenly;
    height: 15em;
    flex: 1 0 21%;
    padding: 1em 0 5em 0;
}
@media (max-width: 1100px) {
  .responsive-item {
    flex: 1 0 33.3% !important;
  }
}
@media (max-width: 880px) {
  .responsive-item {
    flex: 1 0 50% !important;
  }
}
@media (max-width: 635px) {
  .responsive-item {
    flex: 1 0 100% !important;
  }
  .responsive-items {
    padding-top: 3em;
  }
}
</style>