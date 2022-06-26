<template>
  <div class="header">
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <hr class="hr narrow-hr">
    <div class="sub-title conetent">
        {{ subTitle }}
    </div>
  </div>
</template>

<script>
export default {
    name: 'AppHeader',
    props: {
        title: {
            type: String,
            default: "Title"
        },
        subTitle: {
            type: String,
            default: "Sub Title"
        },
    }
}
</script>

<style scoped>
@import '../assets/style/base.css';
@import '../assets/style/fonts.css';

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}
.title {
  text-align: center;
  margin-top: 2.5em;
}
.hr {
  width: 3%;
  position: relative;
}
.sub-title {
  text-align: center;
  padding-top: 1em;
  max-width: 40%;
  font-size: 120%;
}
@media (max-width: 635px) {
  .narrow-hr {
    color: #94b2d8;
  }
}
</style>