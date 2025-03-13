<script setup lang="ts">
import FormWidget from '@/widgets/FormWidget.vue';
import { cities } from '@/entities/city/cityService';
import { departaments } from '@/entities/departament/departamentService';
import { employees } from '@/entities/employee/employeeService';
import { teams } from '@/entities/team/teamService';
import { shifts } from '@/entities/shift/shiftService';

</script>

<template>
  <div id="addition_form_container">
    <form-widget
      :cities="cities"
      :departaments="departaments"
      :employees="employees"
      :teams="teams"
      :shifts="shifts"
    />
  </div>
</template>

<style scoped>
#addition_form_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>