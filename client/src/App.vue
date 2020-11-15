<template>
  <div id="app">
    <vSection></vSection>
  </div>
</template>

<script>
import { mymixin } from "@/mymixin";
import vSection from "@/components/vSection";

export default {
  components: {
    vSection
  },
  mixins:[mymixin]
}
</script>

<style>
#app {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: auto;
  outline: none;
}
</style>
