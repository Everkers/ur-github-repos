<template>
  <div class='repo-ur'>
      <a :href="repoOwnerUrl" target="_blank">
      <div class="left_avatar">
          <img :title="repoOwner" :src="repoAvatar" alt="avatar">
      </div>
      </a>
      <div class="right_info">
          <div class="head">
              <a :href="repoUrl" style="color:inherit" target="_blank"><h3>{{repoName}}</h3></a>
              <span>Submitted {{createdDateFromat}} By {{repoOwner}}</span>
          </div>
          <div class="description">
              <p>{{descriptionFormater(repoDescription)}}</p>
              <a @click.prevent = 'more()' href="#" v-if="readMore">{{showMore ? 'Read Less' : 'Read More'}}</a>
          </div>
          <div class="stats">
              <button class='button button--main'>Stars : {{toThousands(repoStars)}}</button>
              <button class='button button--main'>Issues : {{toThousands(repoIssues)}}</button>
          </div>
      </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
    props:[
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
            readMore:false,
            showMore:false,
            sliceLength:110
        }
    },
    computed:{
        createdDateFromat(){
            return moment(this.$props.repoCreatedAt).fromNow()
        }
    },
    methods:{
        toThousands(num) {
            return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
        },
        more(){
            if(this.showMore){
                this.sliceLength = 110
                this.showMore = false
            }
            else{
                this.sliceLength = this.$props.repoDescription.length
                this.showMore = true
            }
        },
        descriptionFormater(description){
            const words = description.split(' ');
            if(words.length >= 26){
                this.readMore = true
                return description.slice(0 , this.sliceLength) + ' '
            }
            return description
        }
    }


}
</script>

<style>

</style>