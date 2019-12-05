<template>
  <div class='popup-ur'>
      <div ref='box' class="box">
        <div class="head">
            <img src="../assets/images/pablo-searching.png" alt="">
        </div>
        <div class="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aut veritatis cupiditate vero velit incidunt doloremque ea fugit beatae. Earum fugiat esse, nemo quis, eligendi laudantium tempora sequi ratione numquam molestias incidunt officiis soluta. In dolores, laudantium itaque unde illo nam voluptatibus earum iusto quidem qui, eaque accusantium veniam dolor.</p>
        </div>
        <div class="buttons">
            <button @click='hidePopUp()' class='button  button--main'>Understood</button>
            <button class='button  '>Github Repo</button>
        </div>
      </div>
  </div>
</template>

<script>
import {TimelineLite , Expo} from "gsap"
export default {
    methods:{
        hidePopUp(){
            this.$store.commit('showPopUp')
        }
    },
    mounted(){
        const {box} = this.$refs
        const tl = new TimelineLite();
        setTimeout(()=>{
            tl.to(box , 0.9 , {y:0 , opacity:1 , ease: Expo.easeOut} )
        } , 300)
    }

}
</script>

<style>

</style>