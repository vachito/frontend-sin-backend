<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useProjectStore } from '@/stores/Project'
import { useStatusesStore } from './stores/Statuses'
import { Toaster } from './components/ui/sonner'
const store=useProjectStore()
const status=useStatusesStore()

onMounted(()=>{
  const projectStorage=localStorage.getItem('projects')
  const statusesStorage = localStorage.getItem('statuses')

  if(projectStorage){
       store.dataProjects = JSON.parse(projectStorage)
  }

  if (statusesStorage) {
    status.Statuses = JSON.parse(statusesStorage)
  }
})
</script>

<template>
  <Toaster />
  <RouterView />
</template>