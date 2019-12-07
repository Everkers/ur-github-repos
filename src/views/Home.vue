<template>
  <div class="home-ur">
      <b-container class='pl-md-0'>
          <div v-if='!loading && !error' :class="{'header' : showHeader}">
          <h1  class='text-center text-sm-left text' style="max-width:600px">Most startted GitHub repos  in the last 30 days</h1> 
          </div>
          <b-row v-if='error' class='error' >
              <img src="../assets/images/pablo-come-back-later.png" alt="">
              <h4>An error occurred in <br> loading this content</h4>
          </b-row>
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

              <infinite-loading v-if='!loading && !error' @infinite="infiniteHandler"></infinite-loading>

          </div>
      </b-container>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'
import InfiniteLoading from 'vue-infinite-loading';
import axios from 'axios'
const api = 'https://api.github.com/search/repositories'
export default {
    data(){
        return{
            loading:true,
            repos:[],
            created:'',
            error:false,
            page:1,
            showHeader : false
            
        }
    },
    components: {
        ContentLoader,
        InfiniteLoading
    },
    methods:{
        handleScroll(){
            window.scrollY > 141 ? this.showHeader = true  : this.showHeader = false
        },
         async infiniteHandler($state){
           try{
            const data = await axios.get(api ,
                         {params:{
                         q:`created:>${this.created}`,
                         sort:'stars',
                         order:'desc',
                         per_page:27 , 
                         page:this.page }})
            const items = data.data.items;
            items.forEach(item => this.repos.push(item) )
            $state.loaded()
            this.page++
           }
           catch(err){
               this.error = true
               console.log(err)
           }
        },
        async getRepos(){
           try{
                const {data} = await axios.get(api ,
                                {params:{
                                q:`created:>${this.created}`,
                                sort:'stars',
                                order:'desc'
                                ,per_page:27 , 
                                page:this.page }})

                data.items.forEach(item=>{
                    this.repos.push(item)
                })                
                this.loading  = false 
                this.page++
           }
           catch(err){
               this.error = true
               this.loading = false
               console.error(err)
           }
        }
    },
    mounted(){
        window.addEventListener('scroll' , this.handleScroll)
    },
    created(){
        const date = 
        new Date(new Date().setDate(new Date().getDate() - 30)) //get the current date - 30 days 
        .toISOString().split('T')[0] //split to get the date on iso format only 
        this.created = date
        this.getRepos()
    },
    destroy() {
    window.removeEventListener('scroll', this.handleScroll)}

}
</script>

<style>

</style>