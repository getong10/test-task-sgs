<script setup lang="ts">
import BaseButton from './ui/BaseButton.vue';
</script>

<template>
  <div id="app">
    <div id="app_header">
      <div
        class="header_link"
          v-for="link in [
            {id: 1, path: '/', name: 'Список сотрудников'},
            {id: 2, path: '/addition', name: 'Добавление сотрудника'}
            ]"
          :key="link.id"
        >
        <router-link
          :to="link.path"
          v-slot="{}"
        >
          <base-button
            :btn_class="'header_link_buttons'"
            :text="link.name"
            :select="$route.path===link.path"
          />
        </router-link>
      </div>
    </div>

    <div id="app_page_content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
#app_header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 40px;
  margin: 50px 0px 20px 0px;
}

#app_page_content {
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex: 1;
  margin: 10px;
  height: max-content;
}
</style>