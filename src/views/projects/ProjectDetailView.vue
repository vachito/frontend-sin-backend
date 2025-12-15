<script lang="ts" setup>
import { ref } from 'vue'
import FhaseDetailView from './FhaseDetailView.vue'
import PhaseDrawer from '@/components/PhaseDrawer.vue'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarDays, ChevronsRight, ChevronsUpDown } from 'lucide-vue-next'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'

import { useProjectStore } from '@/stores/Project'
const store = useProjectStore()
const isOpen = ref(false)

//boton para agreagar una
const emp = {
  title: '¡ Aún no tienes fases registradas!',
  description: 'Aún no has creado fases. Podemos iniciar creando tu primer fase.',
}

const btnText = ref('Agregar Fase')
const title = ref('Agregar Nueva Fase')
const description = ref('Llena todos los datos solicitados')
</script>

<template>
  <div class="space-y-5">
    <Card
      class="max-w-100% flex flex-col sm:flex-row sm:justify-between items-center gap-3 hover:border-indigo-200 hover:-translate-y-0.5 transition-all"
    >
      <CardHeader class="flex flex-col gap-5 w-30">
        <CardTitle>{{ store.dataProject.name }}</CardTitle>

        <CardDescription>
          <Badge class="bg-chart-4">
            {{ store.dataProject.status_id === 1 ? 'Activo' : ' ' }}
          </Badge>
        </CardDescription>
      </CardHeader>

      <CardContent class="flex-1 flex flex-col sm:flex-row sm:justify-evenly gap-4">
        <div class="w-auto flex-1 flex flex-col justify-between gap-4 sm:gap-0">
          <CardDescription class="text-left md:text-center">
            {{ store.dataProject.description }}
          </CardDescription>

          <div class="w-50 self-center">
            <Progress :model-value="30" class="self-center" />
            <div class="flex justify-between">
              <CardDescription class="mb-2 font-semibold"> Progreso </CardDescription>
              <CardDescription> 30% </CardDescription>
            </div>
          </div>
        </div>

        <CardDescription class="text-center flex items-center gap-2">
          <CalendarDays />
          <p>
            {{ store.dataProject.star_date_planned }}
          </p>
          <ChevronsRight />

          <p>
            {{ store.dataProject.end_date_planned }}
          </p>
        </CardDescription>
      </CardContent>
    </Card>

    <Card class="max-w-100% bg-sidebar">
      <Collapsible v-model:open="isOpen" class="flex w-full flex-col gap-2">
        <div class="flex justify-between mr-6">
          <div class="flex gap-2">
            <CardHeader>
              <CollapsibleTrigger as-child>
                <Button variant="ghost" size="icon" class="size-8 font-bold">
                  <ChevronsUpDown />
                  <span class="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </CardHeader>
            <CardTitle class="text-2xl">Fases del proyecto</CardTitle>
          </div>
          <PhaseDrawer :btn-text="btnText" :title="title" :description="description" class="w-50" />
        </div>
        <CollapsibleContent>
          <GeneralEmpty :emp="emp" />
          <CardContent class="flex flex-col gap-2">
            <div class="rounded-md px-4 py-2 text-sm space-y-3">
              <FhaseDetailView v-for="phase in store.dataProject.phases" :phase="phase" />
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  </div>
</template>
