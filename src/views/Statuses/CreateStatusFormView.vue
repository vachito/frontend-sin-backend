<script setup lang="ts">
import { ref } from 'vue'
import { useStatusesStore } from '@/stores/Statuses'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import { Label } from '@/components/ui/label'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const store = useStatusesStore()
const crearEstado = ref(true)
</script>

<template>
  <div v-if="crearEstado" class="flex justify-center">
    <Button variant="outline" @click="crearEstado = false">Crear estado</Button>
  </div>

  <div v-else class="flex justify-center gap-4 w-2/6 mx-auto">
    <Input placeholder="Ingresa aquí el nombre del estado" v-model="store.dataStatus.name" />
    <Button variant="default" @click="((crearEstado = true), store.saveStatus())">Guardar</Button>
  </div>

  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline">
        Crear Estado
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-80">
      <div class="grid gap-4">
        <div class="grid gap-2">
          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="width">Nombre</Label>
            <Input
              id="width"
              class="col-span-2 h-8"
              placeholder="Nombre de estado"
            />
          </div>
    
          <div class="grid grid-cols-2 items-center gap-4 mt-3">
            <Button>Guardar</Button>
            <Button>Cancelar</Button>
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</template>
