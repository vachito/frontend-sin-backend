<script setup lang="ts">
import { ref } from 'vue'
import { useProjectStore } from '@/stores/Project'

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
} from '@/components/ui/alert-dialog'
import router from '@/router'
import { List, Edit, Trash } from 'lucide-vue-next'

defineProps({
  project: {
    type:Object,
    required: true,
  },
})

const store = useProjectStore()
const alertOpen = ref(false)

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
        @click="(store.getProjectDetails(project.id), router.push({ name: 'project-details' }))"
      >
      <List/>
        Ver detalle</DropdownMenuItem
      >
      <DropdownMenuItem @click.prevent.stop="store.openEdit(project)">
        <Edit/> 
        Editar 
      </DropdownMenuItem>

      <DropdownMenuItem @click="alertOpen = true">
        <Trash/> 
        Eliminar 
      </DropdownMenuItem>
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
        <AlertDialogAction @click="store.deleteProject(project.id)">Continuar</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
