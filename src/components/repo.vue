<template>
<!-- Start repo component -->
  <div class='repo-ur'>
      <!-- Repo Owner Profile Picture -->
      <a :href="repoOwnerUrl" target="_blank"> 
      <div class="left_avatar">
          <img :title="repoOwner" :src="repoAvatar" alt="avatar">
      </div>
      </a>
      <!-- End Repo Profile Picture container -->

      <!-- right side content container -->
      <div class="right_info">
          <!-- head div  contain repo name and submited date and by who? -->
          <div class="head">
              <a :href="repoUrl" style="color:inherit" target="_blank"><h3>{{repoName}}</h3></a>
              <span>Submitted {{createdDateFromat}} By {{repoOwner}}</span>
          </div>
          <!-- end head div  -->

          <!-- description div for description about about the project  -->
          <div class="description">
              <!-- pass the repo description as a parameter to the description formater method -->
              <p>{{descriptionFormater(repoDescription)}}</p>
              <!-- if show more is true show read less otherwise show readmore and onclick call (more) method -->
              <a @click.prevent = 'more()' href="#" v-if="readMore">{{showMore ? 'Read Less' : 'Read More'}}</a> 
          </div>
          <!-- end description dev -->

          <!-- how much stars and issues this repo have div -->
          <div class="stats">
              <!-- convert stars number to thousands -->
              <button :title='repoStars' class='button button--main'>Stars : {{toThousands(repoStars)}}</button>
            <!-- convert issues number to thousands -->
              <button :title='repoIssues'class='button button--main'>Issues : {{toThousands(repoIssues)}}</button>
          </div>
          <!-- end stats div -->


      </div>
      <!-- end right side container -->

  </div>
<!-- End repo component -->
</template>

<script>
import moment from 'moment' //moment module to easly interact with dates 
export default {
    props:[ //the params we got from the parent component (mostStarredRepos)
     'repoName' ,
     'repoDescription' ,
     'repoStars',
     'repoIssues' ,
     'repoAvatar' ,
     'repoCreatedAt' ,
     'repoOwner',
     'repoUrl',
     'repoOwnerUrl'
     ],

    data(){
        return{
            readMore:false, // show readmore button if true
            showMore:false, //
            sliceLength:110 //slice method value 
        }
    },
    computed:{
        createdDateFromat(){ // calculate days between dates  
            return moment(this.$props.repoCreatedAt).fromNow()
        }
    },
    methods:{
        toThousands(num) { //convert numbers to thousands
            return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
        },

        more(){ // this method works if the description has more than 26 words so the button will show up and onclick he will call this method
            if(this.showMore){ // if showmore is true which mean the user already clicked on readmore
                this.sliceLength = 110 // reset slice length value 
                this.showMore = false // set it to fale
            }
            else{ // if user click and the value is false than we should show more content 
                this.sliceLength = this.$props.repoDescription.length //set slice length to the real description length
                this.showMore = true // set show more to true 
            }
        },

        descriptionFormater(description){
            if(description != null){ // if the repo has a description 
                const words = description.split(' '); //split it into an array to get words
                if(words.length >= 26){ // if the description has more than 26 words 
                    this.readMore = true // show read more button 
                    return description.slice(0 , this.sliceLength) + ' ' //and slice it 
                }
                return description //otherwise just return the description 
            }
        }
    }


}
</script>

<style>

</style>