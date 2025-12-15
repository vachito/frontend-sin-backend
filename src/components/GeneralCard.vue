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
  <Card class="w-full max-w-sm">
    <CardAction class="w-full flex justify-end font-bold text-xl pr-4">
      <DropDownActions :id="ContentCard.id" />
    </CardAction>

    <div class="w-full flex justify-center">
      <Briefcase class="w-10 h-10 text-chart-2" />
    </div>

    <CardHeader class="flex gap-3 items-center justify-around">
      <CardTitle>{{ ContentCard.name }}</CardTitle>
      <div class="flex items-center gap-3">
        <CardDescription class="font-semibold">
          <Badge class="bg-chart-4">
            {{ ContentCard.status_id === 1 ? 'Activo' : ' ' }}
          </Badge>
        </CardDescription>
      </div>
    </CardHeader>
    
    <CardContent>
      <GeneralToolTip :texto="ContentCard.description">
        <CardDescription class="line-clamp-2 max-w-72">
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
  </Card>
</template>
