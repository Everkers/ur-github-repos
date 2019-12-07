<template>
  <div id="app">
    <popup-ur v-if='showAbout'/>
    <navbar-ur/>
    <home-ur/>
  </div>
</template>

<script>
export default {
  computed:{
    showAbout(){
      return this.$store.state.popUp
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss'
</style>
