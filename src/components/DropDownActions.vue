<script setup lang="ts">
  import { useProjectStore } from '@/stores/Project';
  defineProps({
    id:{
      type:Number,
      required:true
    }
  })  

  const store=useProjectStore();
  
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import router from '@/router';
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
      <DropdownMenuItem @click="store.getProjectDetails(id),router.push({name:'project-details'})"> Ver detalle</DropdownMenuItem>
      <DropdownMenuItem @click="store.deleteProject(id)">Eliminar</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
