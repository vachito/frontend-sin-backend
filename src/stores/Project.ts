import { ref, reactive, watch } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import { projects } from '@/lib/projects'
import {uid} from 'uid'

interface ITask {
  id:number|string|null
  phase_id: number
  name: string
  description: string
  responsible_id: number
  is_complete: boolean
  star_date_planned: string
  end_date_planned: string
  start_date_actual: string
  end_date_actual: string
  priority: string
}

interface IPhase {
  id:number|string|null
  project_id: number |string| null
  name: string | null
  description: string | null
  weight: number | null
  responsible_id: number | null
  star_date_planned: string | null
  end_date_planned: string | null
  start_date_actual: string | null
  end_date_actual: string | null,
  tasks: Array<ITask> | []
}

interface IProject {
  id: number|string
  code: string
  name: string
  description: string
  star_date_planned: string
  end_date_planned: string
  start_date_actual: string|null
  end_date_actual: string|null
  status_id: number
  phases: Array<IPhase> | []
}

export const useProjectStore = defineStore('project', () => {
  //variables
  const dataProjects: Ref<Array<IProject>> = ref([])
  const dataProject = ref<IProject | null>(null)
  const dataform = reactive<IProject>({
    id: uid(),
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
  const dataformPhase = reactive<IPhase>({
    id: uid(),
    project_id: '',
    name: '',
    description: '',
    weight: 0.1,
    responsible_id: 0,
    star_date_planned: '',
    end_date_planned: '',
    start_date_actual: '',
    end_date_actual: '',
    tasks: [],
  })
  // function initProjects() {
  //   dataProjects.value = [...projects]
  //   const projectStorage=localStorage.getItem('projects')
  //   if(projectStorage){
  //     dataProjects.value = JSON.parse(projectStorage)
  //   }
  // }

  watch(dataProjects,()=>{
    SaveLocalStorage()
  },{deep:true})

  function SaveLocalStorage (){
    localStorage.setItem('projects',JSON.stringify(dataProjects.value))
  }

  function getProjectDetails(id: number) {
    dataProject.value = dataProjects.value.find(p => p.id === id) ?? null
  }

  function saveProject() {
    dataProjects.value.push({ ...dataform, phases: [...dataform.phases] })
    resetDataForm()
  }

  function deleteProject(id:number){
    dataProjects.value = dataProjects.value.filter(p => p.id !== id)
  }

  function savePhase() {
    const i = dataProjects.value.findIndex(p => p.id === dataformPhase.project_id)
    dataProjects.value[i]?.phases.push({...dataformPhase, tasks:[...dataformPhase.tasks]}) 
    resetDataFormPhase()
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

  function resetDataFormPhase() {
    dataformPhase.id= uid(),
    dataformPhase.project_id= '',
    dataformPhase.name= '',
    dataformPhase.description= '',
    dataformPhase.weight= 0.1,
    dataformPhase.responsible_id= 0,
    dataformPhase.star_date_planned= '',
    dataformPhase.end_date_planned= '',
    dataformPhase.start_date_actual= '',
    dataformPhase.end_date_actual= '',
    dataformPhase.tasks= []
  }

  return {
    dataform,
    dataProjects,
    dataProject,
    // initProjects,
    getProjectDetails,
    saveProject,
    deleteProject,
    dataformPhase,
    savePhase
  }
})
