<script lang="ts" setup>
import { ref} from 'vue'
import { useProjectStore } from '@/stores/Project'
import { useStatusesStore } from '@/stores/Statuses';

import FhaseDetailView from './FhaseDetailView.vue'
import PhaseDrawer from '@/components/PhaseDrawer.vue'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { CalendarDays, ChevronsRight, ChevronsUpDown } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import GeneralEmpty from '@/components/GeneralEmpty.vue'
import GeneralDropDownActions from '@/components/GeneralDropDownActions.vue';
import GeneralAvatarTooltip from '@/components/GeneralAvatarTooltip.vue';

const store = useProjectStore()
const status=useStatusesStore()
const isOpen = ref(true)

const emp = {
  title: '¡ Aún no tienes fases registradas!',
  description: 'Aún no has creado fases. Podemos iniciar creando tu primera fase.',
}

const btnText = ref('Agregar Fase')
const title = ref('Agregar Nueva Fase')
const description = ref('Llena todos los datos solicitados')
</script>

<template>
  <div class="space-y-5">
    <Card
      class="max-w-100% mr-3 flex flex-col sm:flex-row sm:justify-between items-center gap-3 hover:border-indigo-200 hover:-translate-y-0.5 transition-all border-sidebar-border"
    >
      <CardHeader class="flex flex-col gap-5 w-30">
        <CardTitle>{{ store.dataProject?.name }}</CardTitle>

        <CardDescription class="flex gap-1 align-bottom">
          <Badge class="bg-chart-4">
            {{ store.dataProject?.status.name}}
          </Badge>
          <GeneralDropDownActions :object-actions="status.Statuses"/>
        </CardDescription>
      </CardHeader>

      <CardContent class="flex-1 flex flex-col sm:flex-row sm:justify-evenly gap-4">
        <div class="w-auto flex-1 flex flex-col justify-between gap-4 sm:gap-0 space-y-4">
          <CardDescription class="text-left md:text-center">
            {{ store.dataProject?.description }}
          </CardDescription>

          <div class="w-50 self-center">
            <Progress :model-value="30" class="self-center" />
            <div class="flex justify-between">
              <CardDescription class="mb-2 font-semibold"> Progreso </CardDescription>
              <CardDescription> 30% </CardDescription>
            </div>
          </div>
        </div>

        <CardDescription class="flex flex-col gap-3">
          <div class="text-center flex items-center gap-2">
            <CalendarDays class=" text-chart-2" />
            <p>{{ store.dataProject?.start_date_planned }}</p>
            <ChevronsRight class=" text-chart-2"/>
            <p>{{ store.dataProject?.end_date_planned }}</p>
          </div>

          <div>
            <p class="font-semibold">Participantes</p>
            <div class="-space-x-2">
              <GeneralAvatarTooltip 
                v-for="user in store.dataProject?.users"  
                :key="user.id"
                :avatarTool="user"
              />
            </div>
          </div>
        </CardDescription>
      </CardContent>
    </Card>

    <Card class="max-w-100% mr-3 bg-sidebar border-sidebar-border">
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
          <GeneralEmpty v-if="store.dataProject?.phases?.length === 0" :emp="emp" />
          <CardContent v-else class="flex flex-col gap-2">
            <div class="rounded-md px-4 py-2 text-sm space-y-3">
              <FhaseDetailView v-for="phase in store.dataProject?.phases" :phase="phase" />
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  </div>
</template>
