<template>
  <b-navbar class='navbar-ur pt-4'>
      
    <b-container>
        <b-navbar-brand href="#">
            <img src="../assets/images/icons/github-logo.svg" alt="">
        </b-navbar-brand>

        <b-navbar-nav class="ml-auto">
            <button @click="showAbout()" class='button button--main-bold'>About the project</button>
        </b-navbar-nav>
    </b-container>

  </b-navbar>
</template>

<script>
export default {
  methods:{
    showAbout(){
      this.$store.commit('showPopUp')
    }
  }
}
</script>

<style>

</style>