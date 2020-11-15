<template>
  <div class="vSection-root">

    <div class="user-inputs-div">
      <input type="text" class="user-input" placeholder="Enter a URL">
      <button class="shorten-button" @click="checkURLValidity()">Shorten</button>
    </div>
    <error v-if="error"></error>
    <output-url v-for="(item,index) in localStURL" :key="index" :index="index" :original="item.original" :shorten="item.shorten"></output-url>

  </div>
</template>

<script>
import { mymixin } from "@/mymixin";
import error from "@/components/error";
import outputUrl from "@/components/outputUrl";

export default {
  mixins:[mymixin],
  components:{
    error,
    outputUrl
  }
}
</script>

<style scoped>
.vSection-root{
  width: 100%;
  min-height: 1000px;
  height: auto;
  background: #0B1736;
}

.user-inputs-div{
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-input{
  width: 40%;
  height: 20%;
  border-radius: 7px;
  padding: 5px;
  font-size: 17px;
  font-weight: bold;
}

.shorten-button{
  width: 14%;
  height: 29%;
  border-radius: 7px;
  margin: 10px;
  font-size: 20px;
  background: #1B3987;
  color: white;
  border: 0px;
  transition: 500ms all;
}
.shorten-button:hover{
  background: #2354d0;
}
</style>
