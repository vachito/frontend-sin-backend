<script setup lang="ts">
import { computed, ref} from 'vue'
import { useProjectStore } from '@/stores/Project'

import GeneralEmpty from '@/components/GeneralEmpty.vue'
import GeneralDrawer from '@/components/GeneralDrawer.vue'
import GeneralCard from '@/components/GeneralCard.vue'
import GeneralCardList from '@/components/GeneralCardList.vue'
import CreateProjectForm from '@/components/CreateProjectForm.vue'
import Button from '@/components/ui/button/Button.vue'
import Label from '@/components/ui/label/Label.vue'
import Input from '@/components/ui/input/Input.vue'
import { LayoutGrid, List, Search } from 'lucide-vue-next'

const store=useProjectStore()
store.initProjects()
const searchProject = ref('')

const CardsGrid = ref(true)
const CardsList = ref(false)
//Object for an empty projects
const emp = {
  title: '¡ Aún no hay proyectos !',
  description: 'Aún no has creado un proyecto. Podemos iniciar creando tu primer proyecto.',
}

const btnText = ref('Crear Proyecto')
const title = ref('Crear Nuevo Proyecto')
const description = ref('Llena todos los datos solicitados')

const filteredProject = computed(()=>{
  if(!searchProject.value){
    return store.dataProjects
  }

  const lowerCaseSearch = searchProject.value.toLocaleLowerCase()
  return store.dataProjects.filter(item => item.name.toLocaleLowerCase().includes(lowerCaseSearch))
})
</script>

<template>
  <div
    class="flex flex-col sm:flex-row justify-between items-center bg-sidebar p-2 rounded-lg border shadow-xs"
  >
    <div class="flex flex-col sm:flex-row gap-3">
      <div class="flex sm:flex-col sm:justify-start sm:items-center items-center gap-1">
        <p class=" text-xs">En progreso</p>
        <p class=" text-xs">06</p>
      </div>
      <div class="flex sm:flex-col sm:justify-start sm:items-center items-center gap-1">
          <p class=" text-xs">Finalizados</p>
        <p class=" text-xs">02</p>
      </div>
      <div class="flex sm:flex-col sm:justify-start sm:items-center center-center gap-1 mb-3 sm:mb-0">
        <p class=" text-xs">Total</p>
        <p class=" text-xs">08</p>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
      <GeneralDrawer :btn-text="btnText" :title="title" :description="description">
        <CreateProjectForm />
      </GeneralDrawer>

      <Button variant="outline" @click="((CardsGrid = true), (CardsList = false))">
        <LayoutGrid
      /></Button>
      <Button variant="outline" @click="((CardsGrid = false), (CardsList = true))">
        <List
      /></Button>
    </div>
  </div>

  <div class="mt-5 flex items-center gap-1">
    <Input id="bucarp" class="max-w-sm" placeholder="Buscar proyecto..." v-model="searchProject"/>
    <Label for="bucarp"><Search /></Label>
  </div>

  <GeneralEmpty :emp="emp" v-if="filteredProject.length === 0" />

  <div v-else>
    <div
      v-if="CardsGrid"
      class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-5 justify-center items-center"
    >
      <GeneralCard
        v-for="project in filteredProject"
        :ContentCard="project"
        class="hover:border-indigo-300 hover:shadow-xl hover:-translate-y-0.5 transition-all justify-self-center"
      />
    </div>

    <div v-if="CardsList" class="grid grid-cols-1 gap-5 mt-5">
      <GeneralCardList
        v-for="project in filteredProject"
        :ContentCard="project"
        class="hover:border-indigo-300 hover:shadow-xl hover:-translate-y-0.5 transition-all sm:justify-self-left"
      />
    </div>
  </div>
</template>
