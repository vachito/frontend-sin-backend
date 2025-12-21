<script setup lang="ts">
import { MoreHorizontal } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import {Edit, Trash2} from 'lucide-vue-next'
import { useStatusesStore } from '@/stores/Statuses'

const store=useStatusesStore()
defineProps<{
  id: string
}>()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-8 h-8 p-0">
        <span class="sr-only">Open menu</span>
        <MoreHorizontal class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="store.editStatus(id)"><Edit/>Editar</DropdownMenuItem>
      <DropdownMenuItem @click="store.deleteStatus(id)"><Trash2/>Eiminar</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
