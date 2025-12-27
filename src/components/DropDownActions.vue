<script setup lang="ts">
import { ref } from 'vue'
import { useProjectStore } from '@/stores/Project'
defineProps({
  id: {
    type: Number,
    required: true,
  },
})

const store = useProjectStore()
const alertOpen = ref(false)
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

import router from '@/router'
import { Factory } from 'lucide-vue-next'
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button class="w-8 h-8 p-0 hover:cursor-pointer">
        <span>...</span>
        <MoreHorizontal class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuItem
        @click="(store.getProjectDetails(id), router.push({ name: 'project-details' }))"
      >
        Ver detalle</DropdownMenuItem
      >
      <DropdownMenuItem @click="alertOpen = true"> Eliminar </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>

  <AlertDialog v-model:open="alertOpen">
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>¿Está seguro de eliminar el proyecto?</AlertDialogTitle>
        <AlertDialogDescription> Esta acción no se podra revertir. </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction @click="store.deleteProject(id)">Continuar</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
