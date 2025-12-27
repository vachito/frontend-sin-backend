import * as projectsService from '@/services/projectService'
import { ref, reactive, watch, computed } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import { uid } from 'uid'
import { toast } from 'vue-sonner'

interface ITask {
  id: number | string | null
  phase_id: number
  name: string
  description: string | null
  responsible_id: number
  is_complete: boolean
  star_date_planned: string | null
  end_date_planned: string | null
  start_date_actual: string | null
  end_date_actual: string | null
  priority: string
}

interface IPhase {
  id: number | string | null
  project_id: number | string | null
  name: string | null
  description: string | null
  weight: number | null
  responsible_id: number | null
  star_date_planned: string | null
  end_date_planned: string | null
  start_date_actual: string | null
  end_date_actual: string | null
  tasks: Array<ITask> | []
}

interface IProject {
  code: string
  name: string
  description: string
  start_date_planned: string
  end_date_planned: string
  start_date_actual: string | null
  end_date_actual: string | null
  status_id: number
  role: string
}

export const useProjectStore = defineStore('project', () => {
  //variables
  const errors = ref([])
  const dataProjects: Ref<Array<IProject>> = ref([])
  const dataProject = ref<IProject | null>(null)
  const dataform = reactive<IProject>({
    code: `prj-${uid()}`,
    name: '',
    description: '',
    start_date_planned: '',
    end_date_planned: '',
    start_date_actual: '',
    end_date_actual: '',
    status_id: 9,
    role: 'aprobador',
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

  async function getProjects() {
    try {
      const { data } = await projectsService.getProjects()
      dataProjects.value = data
    } catch (error) {
      console.log(error)
    }
  }

  async function getProjectDetails(id: number) {
    try {
      const response = await projectsService.getProjectDetails(id)
      dataProject.value = response.data
    } catch (error) {
      console.log(error)
    }
  }

  async function saveProject() {
    try {
      const { status } = await projectsService.saveProject({ ...dataform })
      if (status === 200) {
        toast.success('Proyecto creado', {
          description: 'El proyecto se a creado correctamente',
          duration: 3000,
          position: 'top-center',
        })
        resetDataForm()
        getProjects()
      }
      return status
    } catch (error) {
      errors.value=Object.values(error.response.data.errors)
      setTimeout(() => {
        errors.value=[]
      }, 3000);
    }
  }

  async function deleteProject(id: number) {
    try {
      const {status} = await projectsService.deleteProject(id)
      if(status === 200){
        toast.success('Proyecto eliminado', {
          description: 'El proyecto ha sido eliminado',
          duration: 3000,
          position: 'top-center',
        })
        getProjects()
      }
    } catch (error) {
      console.log(error)
    }
  }

  function savePhase() {
    const i = dataProjects.value.findIndex((p) => p.id === dataformPhase.project_id)
    dataProjects.value[i]?.phases.push({ ...dataformPhase, tasks: [...dataformPhase.tasks] })
    resetDataFormPhase()
  }

  function saveTask(dataTask: object) {
    const project = dataProjects.value.find((pro) =>
      pro.phases.some((phase) => phase.id === dataTask.phase_id),
    )
    const projectIndex = dataProjects.value.findIndex((pro) =>
      pro.phases.some((phase) => phase.id === dataTask.phase_id),
    )
    const phaseIndex = project.phases.findIndex((phase) => phase.id === dataTask.phase_id)

    dataProjects.value[projectIndex]?.phases[phaseIndex]?.tasks.push({ ...dataTask })
  }

  function resetDataForm() {
    ;((dataform.code = `prj-${uid()}`),
      (dataform.name = ''),
      (dataform.description = ''),
      (dataform.start_date_planned = ''),
      (dataform.end_date_planned = ''),
      (dataform.start_date_actual = ''),
      (dataform.end_date_actual = ''),
      (dataform.status_id = 9))
  }

  function resetDataFormPhase() {
    ;((dataformPhase.id = uid()),
      (dataformPhase.name = ''),
      (dataformPhase.description = ''),
      (dataformPhase.weight = 0.1),
      (dataformPhase.responsible_id = 0),
      (dataformPhase.star_date_planned = ''),
      (dataformPhase.end_date_planned = ''),
      (dataformPhase.start_date_actual = ''),
      (dataformPhase.end_date_actual = ''),
      (dataformPhase.tasks = []))
  }

  const hasErrors = computed(()=> errors.value)
  return {
    dataform,
    dataProjects,
    dataProject,
    errors,
    hasErrors,
    getProjects,
    getProjectDetails,
    saveProject,
    deleteProject,
    dataformPhase,
    savePhase,
    saveTask,
  }
})
