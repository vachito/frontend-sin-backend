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
  <Card class="max-w-100% bg-background">
    <CardHeader class="flex gap-3 items-center">
      <CardTitle class="">{{ task.name }}</CardTitle>
    </CardHeader>

    <CardContent>
      <CardDescription>{{ task.description }}</CardDescription>

      <div class="flex justify-between mt-5">
        <p>Responsable: {{ task.responsible_id === 1 ? 'Juan' : '' }}</p>
        <p>Estado: {{ task.is_complete === false ? 'Incompleta' : 'Completa' }}</p>
        <p>Prioridad: {{ task.priority }}</p>

        <div class="text-center flex items-center gap-2">
          <CalendarDays />
          <p>{{ task.star_date_planned }}</p>
          <ChevronsRight />
          <p>{{ task.end_date_planned }}</p>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
