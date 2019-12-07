<template>
<!-- Start Pop Up Container -->
  <div class='popup-ur'>
      <!-- start box -->
      <div ref='box' class="box">
        <!-- alert image  -->
        <div class="head">
            <img src="../assets/images/pablo-searching.png" alt="">
        </div>
        <!-- end alert image -->

        <!-- alert content -->
        <div class="text">
            <p>A simple website to get the most starred repositories in the last 30 days, you can get all the essential pieces of information about the repository without any effort and on a clean way </p>
        </div>
        <!-- end alert content -->

        <!-- alert buttons container -->
        <div class="buttons">

            <!-- onclick on undertood button the pop up will dispear  -->
            <button @click='hidePopUp()' class='button  button--main'>Understood</button>
            <!-- onclick on GitHub link to original repo -->
            <a href="https://github.com/Everkers/ur-github-repos" target="_blank"><button class='button  '>Github Repo</button></a>

        </div>
        <!-- end alert buttons container -->


      </div>
      <!-- end box  -->
  </div>
<!-- End Pop Up Container -->
</template>

<script>
import {TimelineLite , Expo} from "gsap" //import timelinelite and expo ease from gsap module for animation
export default {
    methods:{ //this method will head the popUp
        hidePopUp(){
            this.$store.commit('showPopUp')
        }
    },
    created(){ // if the user click on (esc) button the popUp should dispear
        document.onkeydown = e =>{
            if(e.keyCode == 27){
                this.$store.state.popUp = false //hide popUp
            }
        }
    },
    mounted(){ 
        const {box} = this.$refs //get alert box from refs
        const tl = new TimelineLite(); //create new instance from the timelinelite
        setTimeout(()=>{ //after 300ms 
            tl.to(box , 0.9 , {y:0 , opacity:1 , ease: Expo.easeOut} ) //slideUp the box and adjust the opacity 
        } , 300)
    }

}
</script>

<style>

</style>