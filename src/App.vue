<template>
  <div id="app">
    <!-- if popup in store is true it will show up  -->
    <popup-ur v-if='showAbout'/>

    <!-- Navbar -->
    <navbar-ur/>
    <!-- if there is any new routes it will show up here -->
    <router-view/>
  </div>
</template>

<script>
export default {
  computed:{
    showAbout(){ //get popUp current value from store 
      return this.$store.state.popUp
    }
  }
}
</script>

<style lang="scss">
//import main styles file 
@import './assets/scss/main.scss'
</style>
