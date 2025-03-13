import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IRecord } from '@/entities/record/recordModel'

export const useRecordStore = defineStore('record',() => {
  const records = ref<IRecord[]>([])

  const getRecords = () => {
    return records.value
  }

  const addRecord = (record: IRecord) => {
    records.value.push(record)
  }

  const removeRecord = (id: number) => {
    return records.value = records.value.filter((record) => record.id !== id)
  }

  return {
    records,
    getRecords,
    addRecord,
    removeRecord
  }
})
