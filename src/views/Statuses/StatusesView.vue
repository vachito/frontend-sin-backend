<script setup lang="ts">
import { onMounted } from 'vue'
import { useStatusesStore } from '@/stores/Statuses'
import CreateStatusFormView from './CreateStatusFormView.vue'
import GeneralEmpty from '@/components/GeneralEmpty.vue'
import DataTable from '@/components/payments/data-table.vue'
import { columns } from '@/components/payments/columns'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircleIcon} from 'lucide-vue-next'
const store = useStatusesStore()

onMounted(() => {
  store.getStatuses()
})

const emp = {
  title: '¡ Aún no tienes estados registrados!',
  description: 'Aún no has creado estados. Podemos iniciar creando tu primer estado.',
}
</script>

<template>
  <div>
    <CreateStatusFormView />
    <GeneralEmpty v-if="store.Statuses.length === 0" class="mt-20" :emp="emp" />

    <div v-else class="gap-7 mt-10 w-3/6 mx-auto">
      <div v-if="store.hasErrors">
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>¡Error!</AlertTitle>
          <AlertDescription>
            {{ store.errors['name'][0] }}
          </AlertDescription>
        </Alert>
      </div>
      <DataTable :key="store.Statuses.length" :data="store.Statuses" :columns="columns" />
    </div>
  </div>
</template>
