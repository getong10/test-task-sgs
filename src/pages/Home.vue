<script setup lang="ts">
import StaffList from '@/widgets/StaffList.vue';

</script>

<template>
  <div id="home_page_container">
    <staff-list />
  </div>
</template>

<style scoped>
#home_page_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>