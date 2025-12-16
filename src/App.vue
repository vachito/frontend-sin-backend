<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useProjectStore } from '@/stores/Project'

const store=useProjectStore()
onMounted(()=>{
  const projectStorage=localStorage.getItem('projects')
  if(projectStorage){
       store.dataProjects = JSON.parse(projectStorage)
  }
})
</script>

<template>
  <RouterView />
</template>