<template>
  <!-- Start template-->
  <div class="home-ur">
      <!-- bootstrao container start -->
      <b-container class='pl-md-0'>
          <!-- Page heading if there is no errors and no loading it will show up -->
          <div v-if='!loading && !error' :class="{'header' : showHeader}">
          <h1  class='text-center text-sm-left text' style="max-width:600px">Most starred GitHub repos  in the last 30 days</h1> 
          </div>
          <!-- Page Loading End -->

          <!-- if error is true it will show up-->
          <b-row v-if='error' class='error' >
              <img src="../assets/images/pablo-come-back-later.png" alt="">
              <h4>An error occurred in <br> loading this content</h4>
          </b-row>
          <!-- End error  --> 

          <!-- Start repositories container  -->
          <div class="repos">
              <!-- Start Skeleton loading -->
              <div v-if='loading ' class="fakes" v-for="fake in 12">
              <content-loader :height="190" :width="800" :speed="2"  primaryColor="#f3f3f3" secondaryColor="#ecebeb">
                    <rect x="12.98" y="17.67" rx="0" ry="0" width="170.8" height="159" /> 
                    <rect x="206.39" y="17.67" rx="0" ry="0" width="264.86" height="27" /> 
                    <rect x="208.27" y="51.67" rx="0" ry="0" width="119.88" height="14" /> 
                    <rect x="211.27" y="69.67" rx="0" ry="0" width="343" height="64" /> 
                    <rect x="211.27" y="139.67" rx="0" ry="0" width="60" height="28" /> 
                    <rect x="286.27" y="139.67" rx="0" ry="0" width="60" height="28" />
              </content-loader>
              </div>
              <!-- End Skeleton Loading -->

              <!-- loop through github repos and pass the data to the repository component -->
              <div v-if='!loading && !error' v-for='repo in repos' class="real">
                <repo-ur :repo-name='repo.name' 
                :repo-description='repo.description' 
                :repo-stars='repo.stargazers_count'
                :repo-issues='repo.open_issues'
                :repo-avatar='repo.owner.avatar_url'
                :repo-created-at='repo.created_at'
                :repo-owner='repo.owner.login'
                :repo-url='repo.html_url'
                :repo-owner-url='repo.owner.html_url'
                ></repo-ur>
              </div>
              <!-- End repository component -->

              <!-- infinite loading component -->
              <infinite-loading v-if='!loading && !error' @infinite="infiniteHandler"></infinite-loading>
               <!-- end infinite loading component -->

          </div>
        <!-- End repositories container -->
      </b-container>
     <!-- bootstrao container end -->
  </div>
    <!-- end template-->
</template>

<script>
import { ContentLoader } from 'vue-content-loader' // import skeleton loading module
import InfiniteLoading from 'vue-infinite-loading'; // import infinite loading module
import axios from 'axios' // import axios to fetch data from github 
const api = 'https://api.github.com/search/repositories' // github api end point 
export default {
    data(){
        return{
            loading:true, //skeleton loading 
            repos:[], // repos array to store the data from github api on it
            created:'', // this one is to get most starred repos in the last 30 days, date which is current date - 30 days 
            error:false, 
            page:1, // current api page 
            showHeader : false // header when we scroll down 
            
        }
    },
    components: {
        ContentLoader, // delcare component skeleton
        InfiniteLoading // delcare infinity loading component
    },
    methods:{
        
        handleScroll(){ // check if scroll is bigger than 141px then we will show the header by set it to true
            window.scrollY > 141 ? this.showHeader = true  : this.showHeader = false
        },

         async infiniteHandler($state){ //infinite loading method handler 
           try{
            const data = await axios.get(api , //fetch data from github api
                         {params:{
                         q:`created:>${this.created}`, //created is current date - 30 days 
                         sort:'stars', // sort by most starred repos 
                         order:'desc',
                         per_page:27 , //get only 27 item per page 
                         page:this.page }})// fetch the current page 

            const items = data.data.items; //assign the fetched data to items constant 
            items.forEach(item => this.repos.push(item) ) //loop through  our items array and set the value to the repos array 
            $state.loaded() //tell the infiniteHandler that we got some data  
            this.page++ // increment page for the next fetch process
           }
           catch(err){
               this.error = true //if there is some errors during the fetch process, set the error to true 
               console.log(err) // console error
           }
        },

        async getRepos(){ //initial fetch method  
           try{
                const {data} = await axios.get(api , //fetch data from github api
                                {params:{
                                q:`created:>${this.created}`, //created is current date - 30 days 
                                sort:'stars', // sort by most starred repos 
                                order:'desc'
                                ,per_page:27 , //get only 27 item per page  
                                page:this.page }}) // fetch the current page 

                data.items.forEach( item=> this.repos.push(item)) //loop through our items array and set the value to the repos array                 
                this.loading  = false //hide the skeleton  
                this.page++  // increment page for the infinitehandler method to fetch the next page which is 2
           }
           catch(err){
               this.error = true // if there is an error during the fetch process, show the error
               this.loading = false // hide skeleton 
               console.error(err) // console the error
           }
        }
    },
    mounted(){
        window.addEventListener('scroll' , this.handleScroll) // attach scroll listener to the window in the mounted hook and we give it our handlscroll method
    },
    created(){ 
        const date = 
        new Date(new Date().setDate(new Date().getDate() - 30)) //get the current date - 30 days 
        .toISOString().split('T')[0] //split to get the date on iso format only 
        this.created = date // set date
        this.getRepos() //call the getrepos method to fetch github repos 
    },
    destroy() { // remove scroll listener in the destroy hook 
    window.removeEventListener('scroll', this.handleScroll)}

}
</script>

<style>

</style>