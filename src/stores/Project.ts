import { ref, onMounted} from 'vue'
import type{Ref} from 'vue'
import { defineStore } from 'pinia'
import { projects } from '@/lib/projects'

interface IPhase {
  project_id: number
  name: string
  description: string
  weight: number
  responsible_id: number
  star_date_planned: string
  end_date_planned: string
  start_date_actual: string
  end_date_actual: string
}

interface IProject {
  id:number
  code: string
  name: string
  description: string
  star_date_planned: string
  end_date_planned: string
  start_date_actual: string
  end_date_actual: string
  status_id: number
  phases: Array<IPhase>
}

export const useProjectStore = defineStore('project', () => {
  const dataProjects:Ref<Array<IProject>> = ref([])
  const dataProject=ref({})

  onMounted(() => {
    dataProjects.value = projects
  })

  function getProjectDetails(id:number){
    dataProject.value= dataProjects.value.filter(p => p.id === id )
  }
  return {
    dataProjects,
    dataProject,
    getProjectDetails
  }
})
