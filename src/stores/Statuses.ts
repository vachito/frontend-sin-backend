import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { uid } from "uid";

interface Istatus {
    id: string
    name: string
}
export const useStatusesStore = defineStore('statuses', () => {
    const Statuses = ref<Istatus[]>([])
    watch(Statuses,()=>{
        saveStatusLocalStorage()
    },{deep:true})

    const editingId = ref<string|null>(null)
    const editingName = ref('')

    const dataStatus = ref({
        id:'',
        name: ''
    })

    const statusesStorage = localStorage.getItem('statuses')
    if (statusesStorage) {
        Statuses.value = JSON.parse(statusesStorage)
    }

    function saveStatus() {
        Statuses.value.push({
            id: uid(),
            name: dataStatus.value.name
        })
        dataStatus.value.id =''
        dataStatus.value.name = ''
    }
    
    function startEditing(id:string,name:string){
        editingId.value=id
        editingName.value=name
    }

    function cancelEditing(){
        editingId.value=null
        editingName.value=''
    }

    function updateStatus() {
        const index = Statuses.value.findIndex(s => s.id === editingId.value)
        if (index !== -1){
            Statuses.value[index].name=editingName.value
            saveStatusLocalStorage()
        }
        cancelEditing()
    }

    function deleteStatus(id:string) {
        Statuses.value = Statuses.value.filter(s => s.id !== id)
    }

    function saveStatusLocalStorage() {
        localStorage.setItem('statuses', JSON.stringify(Statuses.value))
    }

    return {
        dataStatus,
        Statuses,
        editingId,
        editingName,
        saveStatus,
        deleteStatus,
        startEditing,
        updateStatus,
        cancelEditing
    }
})