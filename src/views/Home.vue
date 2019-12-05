<template>
  <div class="home-ur">
      <b-container class='pl-md-0'>
          <h1 class='text-center text-sm-left' style="max-width:600px">Most startted GitHub repos  in the last 30 days</h1> 
          <div class="repos">
              <div v-if='loading' class="fakes" v-for="fake in 12">
              <content-loader :height="190" :width="800" :speed="2"  primaryColor="#f3f3f3" secondaryColor="#ecebeb">
                    <rect x="12.98" y="17.67" rx="0" ry="0" width="170.8" height="159" /> 
                    <rect x="206.39" y="17.67" rx="0" ry="0" width="264.86" height="27" /> 
                    <rect x="208.27" y="51.67" rx="0" ry="0" width="119.88" height="14" /> 
                    <rect x="211.27" y="69.67" rx="0" ry="0" width="343" height="64" /> 
                    <rect x="211.27" y="139.67" rx="0" ry="0" width="60" height="28" /> 
                    <rect x="286.27" y="139.67" rx="0" ry="0" width="60" height="28" />
              </content-loader>
              </div>
              <div v-if='!loading' class="real">
                <repo-ur></repo-ur>
                <repo-ur></repo-ur>
                <repo-ur></repo-ur>
                <repo-ur></repo-ur>
              </div>
          </div>
      </b-container>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'
export default {
    data(){
        return{
            loading:true
        }
    },
    components: {
        ContentLoader
    },
    mounted(){
        setTimeout(()=>{ //just for testing 
            this.loading = false
        } , 2000)
    }

}
</script>

<style>

</style>