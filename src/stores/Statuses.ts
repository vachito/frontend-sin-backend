import { defineStore } from "pinia";
import { ref, watch } from "vue";
import type{ Ref } from "vue";
import { uid } from "uid";

export const useStatusesStore = defineStore('statuses', () => {
    const Statuses:Ref<Array<string>> = ref([])

    const dataStatus=ref({
        id:uid(),
        name:''
    })

    function saveStatus(){
        Statuses.value.push({
            id:dataStatus.value.id,
            name:dataStatus.value.name
        })
        dataStatus.value.id=uid()
        dataStatus.value.name=''
        saveStatusLocalStorage()
    }

    function saveStatusLocalStorage (){
        localStorage.setItem('statuses',JSON.stringify(Statuses.value))
    }

    return {
        dataStatus,
        Statuses,
        saveStatus
    }
})