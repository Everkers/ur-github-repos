<template>
  <div class='popup-ur'>
      <div class="box">
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
export default {
    methods:{
        hidePopUp(){
            this.$store.commit('showPopUp')
        }
    }

}
</script>

<style>

</style>