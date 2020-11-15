<template>
  <div class="outputUrl-root">
    <input type="text" :value="shorten" class="input-for-copy">
    <h3 class="original">{{ original }}</h3>
    <div class="right">
      <h3 class="shorten">{{ shorten }}</h3>
      <button class="copy" @click="copyText(index)">Copy</button>
    </div>
  </div>
</template>

<script>


export default {
  props:["original","shorten","index"],
  methods:{
    copyText(index){
      var copyText = document.querySelectorAll(".input-for-copy")[index]
      copyText.select()
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy")
      alert("Copied the text: " + copyText.value)
    }
  }
}
</script>

<style scoped>
.outputUrl-root{
  min-width: 700px;
  min-height: 60px;
  width: auto;
  height: auto;
  background: white;
  margin: 10px auto;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
}

.right{
  display: flex;
  align-items: center;
  justify-content: center;
}

.copy{
  margin-left: 10px;
  width: 80px;
  height: 30px;
  background: rgba(123, 142, 215, 0.5);
  color: #3f3fff;
  border: 0px;
  border-radius: 6px;
  transition: 500ms all;
}

.copy:hover{
  background: rgba(103, 122, 195, 0.5);
}

.input-for-copy{
  position: absolute;
  opacity: 0;
}




/* rgba(103, 122, 195, 0.5) */
</style>