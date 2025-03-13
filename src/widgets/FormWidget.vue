<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import BaseSelect from '@/shared/ui/BaseSelect.vue';
import BaseButton from '@/shared/ui/BaseButton.vue';
import type { ICity } from '@/entities/city/cityModel';
import type { IEmployee } from '@/entities/employee/employeeModel';
import type { IDepartament } from '@/entities/departament/departamentModel';
import type { IShift } from '@/entities/shift/shiftModel';
import type { ITeam } from '@/entities/team/teamModel';
import { useRecordStore } from '@/app/stores/useRecordStore';
import Notification from '@/shared/ui/Notification.vue';

const props = defineProps({
  cities: {
    type: Array as () => Array<ICity>,
    default: () => []
  },
  departaments: {
    type: Array as () => Array<IDepartament>,
    default: () => []
  },
  employees: {
    type: Array as () => Array<IEmployee>,
    default: () => []
  },
  teams: {
    type: Array as () => Array<ITeam>,
    default: () => []
  },
  shifts: {
    type: Array as () => Array<IShift>,
    default: () => []
  }
})

const selectedCity = ref<ICity | null>(null);
const selectedDepartament = ref<IDepartament | null>(null);
const selectedEmployee = ref<IEmployee | null>(null);
const selectedTeam = ref<ITeam | null>(null);
const selectedShift = ref<IShift | null>(null);

const recordStore = useRecordStore();

const showNotification = ref(false);
const notificationMessage = ref('');

const filteredDepartaments = computed(() => {
  return props.departaments.filter(departament => departament.city_id === selectedCity.value?.id);
})

const filteredEmployees = computed(() => {
  return props.employees.filter(employee => employee.departament_id === selectedDepartament.value?.id);
})

const saveRecord = () => {
  if (selectedCity.value&&selectedDepartament.value&&selectedEmployee.value&&selectedTeam.value&&selectedShift.value) {
    recordStore.addRecord({
      id: Math.random(),
      city: selectedCity.value,
      departament: selectedDepartament.value,
      employee: selectedEmployee.value,
      team: selectedTeam.value,
      shift: selectedShift.value
    })

    notificationMessage.value = 'Запись успешно добавлена!';
    showNotification.value = true;

    setTimeout(() => {
      showNotification.value = false;
    }, 5000);
  }
}

watch(selectedCity, () => {
  selectedDepartament.value = null;
  selectedEmployee.value = null;
});

watch(selectedDepartament, () => {
  selectedEmployee.value = null;
});
</script>

<template>
  <div id="form_widget_container">
    <span>Создание записи</span>
    <div id="select_fields">
      <base-select v-model="selectedCity" :label="'Город'" :options="cities"></base-select>
      <base-select v-model="selectedDepartament" :label="'Цех'" :options="filteredDepartaments"></base-select>
      <base-select v-model="selectedEmployee" :label="'Сотрудник'" :options="filteredEmployees"></base-select>
      <base-select v-model="selectedTeam" :label="'Бригада'" :options="teams"></base-select>
      <base-select v-model="selectedShift" :label="'Смена'" :options="shifts"></base-select>
    </div>
    <base-button :class="'form_widget_button'" :text="'Создать'" @click="saveRecord" />
  </div>
  <notification v-if="showNotification" :message="notificationMessage" />
</template>

<style scoped>
#form_widget_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
  border-radius: 10px;
  gap: 50px;
}

#select_fields {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>