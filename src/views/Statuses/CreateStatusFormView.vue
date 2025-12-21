<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStatusesStore } from '@/stores/Statuses'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import { Label } from '@/components/ui/label'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const store = useStatusesStore()
const open = ref(false)

const closePopovers = () => {
  open.value = false
}

const handleSave = () => {
  store.saveStatus()
  closePopovers()
}

const handleCancel = () => {
  closePopovers()
}

const openForm = () =>{
  if(store.isEdit){
    open.value=true
  }
}

watch(store.dataStatus, () =>{
  openForm()
})
</script>

<template>
  <div class="flex justify-center">
    <Popover v-model:open="open">
      <PopoverTrigger as-child>
        <Button variant="outline"> Crear Estado </Button>
      </PopoverTrigger>
      <PopoverContent class="w-80">
        <div class="grid gap-4">
          <div class="grid gap-2">
            <div class="grid grid-cols-3 items-center gap-4">
              <Label for="nombre">Nombre</Label>
              <Input
                id="nombre"
                class="col-span-2 h-8"
                placeholder="Nombre de estado"
                v-model="store.dataStatus.name"
              />
            </div>

            <div class="grid grid-cols-2 items-center gap-4 mt-3">
              <Button type="button" @click="handleCancel">Cancelar</Button>
              <Button type="button" @click="handleSave">Guardar</Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>
