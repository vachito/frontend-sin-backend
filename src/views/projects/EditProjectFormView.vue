<script setup lang="ts">
import { ref,watch, watchEffect } from 'vue'
import { parseDate } from '@internationalized/date'
import { useProjectStore } from '@/stores/Project'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import { Label } from '@/components/ui/label'
import Textarea from '@/components/ui/textarea/Textarea.vue'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

//Calendar
import type { DateValue } from '@internationalized/date'
import GeneralDatePicker from '@/components/GeneralDatePicker.vue'

const store = useProjectStore()
const startDate = ref<DateValue>()
const endDate = ref<DateValue>()

watch(() => store.editOpen,(open) => {
    if (!open) return

    if (store.dataform.start_date_planned) {
      startDate.value = parseDate(store.dataform.start_date_planned)
    }

    if (store.dataform.end_date_planned) {
      endDate.value = parseDate(store.dataform.end_date_planned)
    }
  },
  { immediate: true },
)

watchEffect(() => {
  store.dataform.start_date_planned = startDate.value ? startDate.value.toString() : ''
  store.dataform.end_date_planned = endDate.value ? endDate.value.toString() : ''
})
</script>

<template>
  <Dialog v-model:open="store.editOpen">
    <form>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar proyecto</DialogTitle>
          <DialogDescription>
            Puedes realizar los cambios de tu proyecto aquí. Presiona guardar cambios cuando hayas
            finalizado.
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4">
          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="nombre">Nombre</Label>
            <Input
              id="nombre"
              class="col-span-2 h-8"
              placeholder="Nombre de estado"
              v-model="store.dataform.name"
            />
          </div>

          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="nombre">descripcion</Label>
            <Textarea
              id="nombre"
              class="col-span-2 h-8"
              placeholder="Nombre de estado"
              v-model="store.dataform.description"
            />
          </div>

          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="nombre">Fecha de inicio</Label>
            <GeneralDatePicker v-model="startDate" />
          </div>

          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="nombre">Fecha estimada para finalizar</Label>
            <GeneralDatePicker v-model="endDate" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose as-child>
            <Button variant="outline"> Cancelar </Button>
          </DialogClose>
          <Button type="submit" @click="store.updateProject"> Guardar Cambios </Button>
        </DialogFooter>
      </DialogContent>
    </form>
  </Dialog>
</template>
