<script setup lang="ts">
import { useRecordStore } from '@/app/stores/useRecordStore';
import BaseButton from '@/shared/ui/BaseButton.vue';
import { ref } from 'vue';

let records = ref(useRecordStore().getRecords())

const deleteRecord = (id: number) => {
  records.value = useRecordStore().removeRecord(id)
}

</script>

<template>
  <div id="staff_list_container" v-if="records.length">
    <span>Список сотрудников</span>
    <div
      v-for="record in records"
      :key="record.id"
      id="staff_list_item"
    >
      <div>{{record.city.name}}</div>
      <div>{{record.departament.name}}</div>
      <div>{{record.employee.last_name + ' ' + record.employee.first_name}}</div>
      <div>{{record.team.name}}</div>
      <div>{{record.shift.name}}</div>
      <base-button
        :btn_id="'staff_delete_button'"
        :text="'Х'"
        @click="deleteRecord(record.id)"
      />
    </div>
  </div>
  <div v-else>Список сотрудников пуст</div>
</template>

<style scoped>
#staff_list_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 20px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
  border-radius: 10px;
  gap: 20px;
  width: 60%;
}

#staff_list_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
  border-radius: 10px;
  gap: 50px;
  width: 95%;
}
</style>