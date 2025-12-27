import * as statusService from '@/services/statusService'
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { toast } from 'vue-sonner'

interface Istatus {
  id: string
  name: string
}
export const useStatusesStore = defineStore('statuses', () => {
  const Statuses = ref<Istatus[]>([])

  //create a new status
  const status_name = ref('')
  //edit an estatus existing
  const editingId = ref(0)
  const editingName = ref('')
  //errores
  const errors = ref('')
  
  async function getStatuses() {
    try {
      const { data } = await statusService.getStatuses()
      Statuses.value = data
    } catch (error) {
      console.log(error)
    }
  }
  getStatuses()

  async function saveStatus() {
    try {
      const { status } = await statusService.saveStatuses(status_name.value)
      if (status === 201) {
        toast.success('Estado creado', {
          description: 'Se ha creado el estado correctamente',
          duration: 3000,
          position: 'top-center',
        })
        getStatuses()
      }
    } catch (error) {
      errors.value=error.response.data.errors

      setTimeout(() => {
        errors.value=''
      }, 3000);
    }
  }

  function startEditing(id: number, name: string) {
    editingId.value = id
    editingName.value = name
  }

  async function updateStatus() {
    try {
      const { status } = await statusService.updateStatuses(editingId.value, editingName.value)
      if (status === 200) {
        toast.success('Estado actualizado', {
          description: 'Se ha actualizado el estado correctamente',
          duration: 3000,
          position: 'top-center',
        })
        getStatuses()
      }
    } catch (error) {
      errors.value=error.response.data.errors

      setTimeout(() => {
        errors.value=''
      }, 3000);
    }
    cancelEditing()
  }

  function cancelEditing() {
    editingId.value = 0
    editingName.value = ''
  }

  async function deleteStatus(id: number) {
    try {
      const {status} = await statusService.deleteStatuses(id)
      if (status === 200) {
        toast.success('Estado eliminado', {
          description: 'El estado ha sido eliminado',
          duration: 3000,
          position: 'top-center',
        })
        getStatuses()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const hasErrors = computed(()=> errors.value)

  return {
    status_name,
    Statuses,
    editingId,
    editingName,
    errors,
    hasErrors,
    getStatuses,
    saveStatus,
    deleteStatus,
    startEditing,
    updateStatus,
    cancelEditing,
  }
})
