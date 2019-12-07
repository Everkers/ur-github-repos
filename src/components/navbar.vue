<template>
 <!-- Navbar Start -->
  <b-navbar class='navbar-ur pt-4'>
      
    <!-- Center navbar content with the containter -->
    <b-container>
       <!-- navbar logo  -->
        <b-navbar-brand href="#">
            <img src="../assets/images/icons/github-logo.svg" alt="">
        </b-navbar-brand>
       <!-- End Navbar Logo -->

       <!-- About Project button -->
        <b-navbar-nav class="ml-auto">
            <button @click="showAbout()" class='button button--main-bold'>About the project</button> <!-- onclick call showabout method -->
        </b-navbar-nav>
        <!-- end about project button container -->

    </b-container>
    <!-- End Container -->

  </b-navbar>
 <!-- Navbar End -->

</template>

<script>
export default {
  methods:{
    showAbout(){ // this method will hide or show the about project pop up
      this.$store.commit('showPopUp')
    }
  }
}
</script>

<style>

</style>