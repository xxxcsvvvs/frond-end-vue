<template>
  <div class="card">
    <div class="card-header">헬로 월드</div>
    <div class="card-body">
      <h4>{{msg}}</h4>
      <hr/>
      UI component입니다.
      <span>UI component입니다.</span>
    </div>
  </div>
</template>

<script setup>
//import {defineProps} from "vue";
  const props = defineProps(['msg']);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span{
    color: darkgoldenrod;
  }
</style>
