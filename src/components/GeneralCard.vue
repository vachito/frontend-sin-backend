<script setup lang="ts">
import { ref } from 'vue'
import GeneralDrawer from './GeneralDrawer.vue'
import { useProjectStore } from '@/stores/Project'
defineProps({
  ContentCard: {
    type: Object,
    required: true,
  },
})

import { Briefcase } from 'lucide-vue-next'

import { Badge } from '@/components/ui/badge'
import DropDownActions from '@/components/DropDownActions.vue'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const proj = useProjectStore()

const btnText = ref('Agregar fases')
const title = ref('Agregar una fase al proyecto')
const description = ref('Llena todos los datos solicitados')

import StatusView from '@/views/projects/StatusView.vue'
import GeneralToolTip from './GeneralToolTip.vue'
</script>

<template>
  <Card class="w-full max-w-sm">
    <CardAction class="w-full flex justify-end font-bold text-xl pr-4">
      <DropDownActions />
    </CardAction>

    <div class="w-full flex justify-center">
      <Briefcase class="w-10 h-10 text-chart-2" />
    </div>
    <CardHeader class="text-center space-y-1">
      <CardTitle>{{ ContentCard.name }}</CardTitle>
      <GeneralToolTip :texto="ContentCard.description">
        <CardDescription class="line-clamp-1 max-w-72">
            {{ ContentCard.description }}
        </CardDescription>
      </GeneralToolTip>
    </CardHeader>

    <CardContent>
      <div class="flex justify-around items-center mt-6">
        <div class="flex items-center gap-2">
          <CardDescription>Código:</CardDescription>
          <CardDescription class="font-bold">
            {{ ContentCard.code }}
          </CardDescription>
        </div>
        <div class="flex items-center gap-3">
          <CardDescription class="font-semibold">Estado</CardDescription>
          <Badge class="bg-chart-2">
            {{ ContentCard.status_id === 1 ? 'Activo' : ' ' }}
          </Badge>
        </div>
      </div>

      <div class="flex justify-around items-center mt-6">
        <CardDescription>
          Fecha de inicio:
          <p class="font-bold text-chart-2">{{ ContentCard.star_date_planned }}</p>
        </CardDescription>

        <CardDescription>
          fecha de finalización
          <p class="font-bold text-chart-2">{{ ContentCard.star_date_planned }}</p>
        </CardDescription>
      </div>

      <CardDescription class="flex justify-center gap-2 mt-4">
        Cantidad de fases del proyecto
        <p class="font-bold text-chart-2">{{ ContentCard.phases.length }}</p>
      </CardDescription>
    </CardContent>

    <CardFooter class="flex flex-col gap-2 mt-5">
      <GeneralDrawer :btn-text="btnText" :title="title" :description="description">
        <template #steperdraw>
          <StatusView />
        </template>
      </GeneralDrawer>
    </CardFooter>
  </Card>
</template>
