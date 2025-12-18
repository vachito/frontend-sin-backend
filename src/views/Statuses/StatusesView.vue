<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStatusesStore } from '@/stores/Statuses'
import CreateStatusFormView from './CreateStatusFormView.vue'
import GeneralEmpty from '@/components/GeneralEmpty.vue'
import DataTable from '@/components/payments/data-table.vue'
import { columns } from '@/components/payments/columns'
const store = useStatusesStore()

const data = computed(()=> store.Statuses)
const emp = {
  title: '¡ Aún no tienes estados registrados!',
  description: 'Aún no has creado estados. Podemos iniciar creando tu primer estado.',
}
</script>

<template>
  <div>
    <CreateStatusFormView />
    <GeneralEmpty v-if="store.Statuses.length === 0" class="mt-10" :emp="emp" />

    <div v-else class="gap-7 mt-10 w-3/6 mx-auto">
      <DataTable :key="store.Statuses.length" :data="store.Statuses" :columns="columns" />
    </div>
  </div>
</template>
