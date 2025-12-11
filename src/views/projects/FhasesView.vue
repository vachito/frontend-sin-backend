<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'

import GeneralEmpty from '@/components/GeneralEmpty.vue'
import PhaseDrawer from '@/components/PhaseDrawer.vue';
import { phases } from '@/lib/phases';

//Object for an empty projects
const emp = {
  title: '¡ Aún no tienes fases registradas!',
  description: 'Aún no has creado fases. Podemos iniciar creando tu primer fase.'
}

const btnText = ref('Agregar Fase');
const title = ref('Agregar Nueva Fase');
const description = ref('Llena todos los datos solicitados');
interface IPhase {
  project_id: number
  name: string
  description: string
  weight: number
  responsible_id: number
  star_date_planned: string
  end_date_planned: string
  start_date_actual: string
  end_date_actual: string
}

//table
import type{ IPhase } from './components/columns'
import DataTable from "@/components/payments/data-table.vue"
import { columns } from "@/components/payments/columns"

const phasesCard: Ref<Array<IPhase>> = ref([])

onMounted(() => {
  phasesCard.value=phases
})
</script>

<template>
  <div class="flex justify-center">
    <PhaseDrawer :btn-text="btnText" :title="title" :description="description" />
  </div>

  <GeneralEmpty :emp="emp" />

  <div class="gap-7 mt-5 justify-center items-center p-4">
    <h2 class="text-center uppercase text-2xl font-semibold text-muted-foreground">Lista de fases de todos los proyectos</h2>
    <DataTable :data="phasesCard" :columns="columns"/>
  </div>
</template>
