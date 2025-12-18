<script setup lang="ts">
import { ref } from 'vue'
import { useStatusesStore } from '@/stores/Statuses'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'

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
</template>
