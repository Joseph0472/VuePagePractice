<template>
    <div :class="[ifShowMore ? 'narrow-show-more' : '', 'block']">
        <div class="block-header">
            <img class="info-icon" src="../assets/info.png" />
            <div class="box"></div>
        </div>
        <div class="block-body">
        <h2 class="block-title title">{{ blockItem.title }}</h2>
        <p :class="[ifShowMore ? 'show-detail' : '', 'block-contents narrow-padding conetent']">
            {{ blockItem.contents }}
        </p>
        <button class="block-btn" @click="onShowMore">
            <img :src="'src/assets/' + icon" class="btn"/>
        </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlockItem',
    props: {
        blockItem: Object,
    },
    data() {
        return {
            ifShowMore: false,
            icon: 'plus.png',
        }
    },
    methods: {
        onShowMore() {
            this.ifShowMore = !this.ifShowMore;
            this.ifShowMore ? this.icon = 'minus.png' : this.icon = 'plus.png';
        }
    },
}
</script>

<style scoped>
.block {
    max-width: 12em;
    max-height: 20em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
}
.block-header {
}
.block-header .info-icon{
    max-width: 4em;
    max-height: 4em;
    padding: 2em;
    transform: rotate(12deg);
    /* Make the icon white */
    -webkit-filter: brightness(0) invert(1);
    filter: brightness(0) invert(1);
}
.block-body {
    text-align: center;
}
.block-title {
    font-size: 95%;
}
.block-contents {
    height: 2em; 
    overflow: hidden;
    transition: height 300ms;
}
.show-detail {
    height: 3em;
    overflow: visible;
    transition: height 300ms;
}
.block-btn {
    cursor: pointer;
    background-color: #57665f;
    border: none;
    outline: none;
    width: auto;
    width: 2.5em;
    height: 2.5em;
    padding-top: 1em;
    border-radius: 70%;
}
.btn {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 1em;
    position: relative;
    bottom: 6px;
    -webkit-filter: brightness(0) invert(1);
    filter: brightness(0) invert(1);
}

@media (max-width: 635px) {
  .block {
        max-width: 18em;
        height: 17em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        align-content: center;
        background-color: #56655f;
        border-radius: 15px 15px 0px 0px;
        transition: height 300ms;
    }
    .box {
        background-color: #996c4f;
        position: absolute;
        width: 40px;
        height: 10px;
        margin-left: 168px;
        z-index: 0;
    }
    .narrow-padding {
        padding: 0 1em;
    }
    .narrow-show-more {
        height: 19em !important;
        transition: height 300ms;
    }
    .block-body {
        text-align: center;
        height: 12em;
        transition: background-color 300ms;
    }
    .block-body:hover {
        background-color: black;
        transition: background-color 300ms;
        z-index: 1;
    }
}
</style>