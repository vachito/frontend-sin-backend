<script lang="ts" setup>
defineProps({
  task: {
    type: Array,
    required: true,
  },
})

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarDays, ChevronsRight } from 'lucide-vue-next'
</script>

<template>
  <Card class="max-w-100% bg-background shadow-lg dark:border-sidebar-border">
    <CardHeader class="flex gap-3 items-center">
      <CardTitle class="">{{ task.name }}</CardTitle>
    </CardHeader>

    <CardContent>
      <CardDescription>{{ task.description }}</CardDescription>

      <div class="flex justify-between mt-5">
        <p>Responsable: <span class="text-chart-2 font-bold">{{ task.responsible_id === 1 ? 'Juan' : '' }}</span></p>
        <p>Estado: <span class="bg-chart-1 p-1 rounded-sm text-background font-semibold">{{ task.is_complete === false ? 'Incompleta' : 'Completa' }}</span></p>
        <p>Prioridad: <span class="text-chart-2 font-bold">{{ task.priority }}</span></p>

        <div class="text-center flex items-center gap-2">
          <CalendarDays class="text-chart-2"/>
          <p>{{ task.star_date_planned }}</p>
          <ChevronsRight class="text-chart-2"/>
          <p>{{ task.end_date_planned }}</p>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
