<template>
  <div class="error-root">
    <h2 class="err-msg">Please enter a valid URL</h2>
  </div>
</template>

<script>
import { mymixin } from "@/mymixin";


export default {
  mixins:[mymixin]
}
</script>

<style scoped>
.error-root{
  width: 500px;
  height: 60px;
  background: #d96464;
  margin: 20px auto;
  color: #bf0000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
</style>