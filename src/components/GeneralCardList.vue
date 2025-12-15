<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
import { Briefcase } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import DropDownActions from '@/components/DropDownActions.vue'
import GeneralToolTip from './GeneralToolTip.vue'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

defineProps({
  ContentCard: {
    type: Object,
    required: true,
  },
})

</script>
<template>
  <Card class="max-w-100% flex flex-col sm:flex-row sm:justify-between items-center gap-5">
    <CardHeader class="flex flex-col sm:flex-row gap-5 items-left items-center sm:justify-between order-2 sm:order-0 w-72" >
      <CardTitle>{{ ContentCard.name }}</CardTitle>
      <div class="flex items-center gap-3">
        <CardDescription class="font-semibold">
          <Badge class="bg-chart-4">
            {{ ContentCard.status_id === 1 ? 'Activo' : ' ' }}
          </Badge>
        </CardDescription>
      </div>
    </CardHeader>
    
    <CardContent class="flex flex-col sm:flex-row justify-end sm:justify-end gap-4 order-3 sm:order-0 flex-1">
      <GeneralToolTip :texto="ContentCard.description">
        <CardDescription class="line-clamp-3 max-w-72 text-left md:text-center">
          {{ ContentCard.description }}
        </CardDescription>
      </GeneralToolTip>

      <CardDescription>
        <div class="flex justify-between space-y-2">
          <CardDescription class="mb-2 font-semibold">
            Progreso
          </CardDescription>
          <CardDescription>
            30%
          </CardDescription>
        </div>
        <Progress :model-value="30"/>
      </CardDescription>
    </CardContent>

    <div class=" flex justify-center order-1 sm:order-0 w-20">
      <Briefcase class="w-10 h-10 text-chart-2" />
    </div>

    <CardAction class="flex justify-center font-bold text-xl pr-4 order-0 sm:order-4 w-20">
      <DropDownActions :id="ContentCard.id"/>
    </CardAction>
  </Card>
</template>
