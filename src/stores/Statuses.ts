import { defineStore } from "pinia";
import { ref, watch } from "vue";
import type{ Ref } from "vue";
import { uid } from "uid";
import router from "@/router";

export const useStatusesStore = defineStore('statuses', () => {
    const Statuses:Ref<Array<string>> = ref([])

    const dataStatus=ref({
        id:uid(),
        name:''
    })

    watch(Statuses, ()=>{
        saveStatusLocalStorage()
    },{deep:true})

    function saveStatus(){
        Statuses.value.push({
            id:dataStatus.value.id,
            name:dataStatus.value.name
        })
        dataStatus.value.id=uid()
        dataStatus.value.name=''
        saveStatusLocalStorage()
        router.push({name:'statuses'})
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