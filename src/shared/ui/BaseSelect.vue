<script setup lang="ts">


const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  options: {
    type: Array as () => Array<{ id: number, name?: string, first_name?: string, last_name?: string }>,
    default: () => []
  }
})

const emit = defineEmits(['update:modelValue'])

</script>

<template>
  <div id="base_select_container">
    <label id="base_select_label">{{ label }}</label>
    <select
      :name="label"
      @change="emit('update:modelValue', options.find(opt => opt.id === +$event.target.value))"
      id="base_select"
    >
      <option value="">--Выбор--</option>
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.id"
        >
          {{ option.name || `${option.last_name} ${option.first_name}` }}
        </option>
    </select>
  </div>
</template>

<style scoped>
#base_select_container {
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 40px;
}

#base_select_label {
  font-size: 15px;
  font-weight: 600;
}

#base_select {
  flex: 1;
  font-size: 15px;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid #7895f4;
  cursor: pointer;
  background: #FFFFFF;
  min-width: 200px;
  max-width: 100%;
}
</style>