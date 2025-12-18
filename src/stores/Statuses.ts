import { defineStore } from "pinia";
import { ref } from "vue";
import { uid } from "uid";

interface Istatus {
    id: string
    name: string
}
export const useStatusesStore = defineStore('statuses', () => {
    const Statuses = ref<Istatus[]>([])

    const dataStatus = ref({
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
        saveStatusLocalStorage()
        dataStatus.value.name = ''
    }

    function saveStatusLocalStorage() {
        localStorage.setItem('statuses', JSON.stringify(Statuses.value))
    }    

    return {
    dataStatus,
    Statuses,
    saveStatus
}
})