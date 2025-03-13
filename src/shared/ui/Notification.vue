<script setup lang="ts">
import { watch, ref } from 'vue';


const props = defineProps({
  message: {
    type: String,
    default: ''
  }
});

</script>

<template>
  <div class="notification">
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
.notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #323232;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}
</style>