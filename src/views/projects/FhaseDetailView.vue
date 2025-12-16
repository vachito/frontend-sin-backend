<script lang="ts" setup>
import { ref } from 'vue'
import TaskDetailView from './TaskDetailView.vue'
import GeneralEmpty from '@/components/GeneralEmpty.vue'
import CreateTaskForm from '@/components/CreateTaskForm.vue'
defineProps({
  phase: {
    type: Array,
    required: true,
  },
})

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarDays, ChevronsRight,ChevronsUpDown } from 'lucide-vue-next'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
const isOpen = ref(false)
const emp = {
  title: '¡ Aún no tienes tareas registradas!',
  description: 'Aún no has creado tareas. Podemos iniciar creando tu primer tarea.',
}

import { Button } from '@/components/ui/button'
</script>

<template>
  <Card class="max-w-100% bg-background">
    <CardHeader class="flex gap-3 items-center">
      <CardTitle class="text-xl">{{ phase.name }}</CardTitle>
    </CardHeader>

    <CardContent>
      <CardDescription>{{ phase.description }}</CardDescription>

      <div class="flex justify-between my-5">
        <p>Responsable: {{ phase.responsible_id === 1 || phase.responsible_id === 2 ? 'Juan' : '' }}</p>
        <p>Prioridad: <span class=" bg-chart-4 rounded-xl p-1">{{ phase.weight }} </span></p>

        <div class="text-center flex items-center gap-2">
          <CalendarDays class="text-chart-2"/>
          <p>{{ phase.star_date_planned }}</p>
          <ChevronsRight class="text-chart-2"/>
          <p>{{ phase.end_date_planned }}</p>
        </div>
      </div>

      <Card class="max-w-100% bg-background">
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
            <CardTitle class="text-xl">Tareas de la fase</CardTitle>
          </div>
          <CreateTaskForm :phase_id="phase.id" class="w-50" /> <!--Colocar aca el drawer para la tarea-->
        </div>
        <CollapsibleContent>
          <GeneralEmpty v-if="phase.tasks.length === 0" :emp="emp" />
          <CardContent class="flex flex-col gap-2">
            <div class="rounded-md px-4 py-2 text-sm space-y-3">
              <TaskDetailView v-for="task in phase.tasks" :task="task" />
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
    </CardContent>
  </Card>
</template>
