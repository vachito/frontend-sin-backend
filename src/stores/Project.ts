import { ref, onMounted, reactive, watch } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import { projects } from '@/lib/projects'

interface IPhase {
  project_id: number | null
  name: string | null
  description: string | null
  weight: number | null
  responsible_id: number | null
  star_date_planned: string | null
  end_date_planned: string | null
  start_date_actual: string | null
  end_date_actual: string | null
}

interface IProject {
  id: number
  code: string
  name: string
  description: string
  star_date_planned: string
  end_date_planned: string
  start_date_actual: string|null
  end_date_actual: string|null
  status_id: number
  phases: Array<IPhase>
}

export const useProjectStore = defineStore('project', () => {
  const dataProjects: Ref<Array<IProject>> = ref([])
  const dataProject = ref<IProject | null>(null)
  const dataform = reactive<IProject>({
    id: 9,
    code: 'prj-09',
    name: '',
    description: '',
    star_date_planned: '',
    end_date_planned: '',
    start_date_actual: '',
    end_date_actual: '',
    status_id: 1,
    phases: [],
  })

  function initProjects() {
    dataProjects.value = [...projects]
    const projectStorage=localStorage.getItem('projects')
    if(projectStorage){
      dataProjects.value = JSON.parse(projectStorage)
    }
  }

  function getProjectDetails(id: number) {
    dataProject.value = dataProjects.value.find(p => p.id === id) ?? null
  }

  function saveProject() {
    dataProjects.value.push({ ...dataform, phases: [...dataform.phases] })
    resetDataForm()
    localStorage.setItem('projects',JSON.stringify(dataProjects.value))

  }

  function deleteProject(id:number){
    dataProjects.value.filter(p => p.id !== id)
  }

  function resetDataForm() {
    dataform.id =9,
    dataform.code= 'prj-000',
    dataform.name= '',
    dataform.description= '',
    dataform.star_date_planned= '',
    dataform.end_date_planned= '',
    dataform.start_date_actual= '',
    dataform.end_date_actual= '',
    dataform.status_id= 1,
    dataform.phases= []
  }

  return {
    dataform,
    dataProjects,
    dataProject,
    initProjects,
    getProjectDetails,
    saveProject,
    deleteProject
  }
})
