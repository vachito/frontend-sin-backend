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

    const dataStatus = ref({
        id:'',
        name: ''
    })

    const findState = ref<Istatus>({id:'',name:''})

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

    const isEdit=computed(()=> dataStatus.value.id ? true : false)
    
    function editStatus(id:string) {
        findState.value = Statuses.value.find(s => s.id === id)
        Object.assign(dataStatus.value,findState.value)
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
        isEdit,
        saveStatus,
        editStatus,
        deleteStatus,
    }
})