<script setup lang="ts">

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  btn_class: {
    type: String,
    default: undefined
  },
  btn_id: {
    type: String,
    default: undefined
  },
  select: {
    type: Boolean,
    default: false
  }
})

</script>

<template>
  <button
    :class="btn_class"
    :id="select?'header_link_buttons_select':btn_id"
  >
    {{ text}}
  </button>
</template>

<style scoped>
.header_link_buttons {
  font-size: 20px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  background: #FFFFFF;
}

#header_link_buttons_select {
  color: #7895f4;
  border: 1px solid #7895f4;
}

.form_widget_button {
  font-size: 15px;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 15px;
  cursor: pointer;
  background: #FFFFFF;
  color: #7895f4;
  border: 1px solid #7895f4;
}

#staff_delete_button {
  font-size: 20px;
  font-weight: 500;
  border-radius: 20px;
  cursor: pointer;
  background: #FFFFFF;
  color: #7895f4;
  border: 1px solid #7895f4;
}
</style>