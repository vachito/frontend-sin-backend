<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'
import { projects } from '@/lib/projects'
import GeneralEmpty from '@/components/GeneralEmpty.vue'
import GeneralDrawer from '@/components/GeneralDrawer.vue'
import GeneralCard from '@/components/GeneralCard.vue'
import GeneralCardList from '@/components/GeneralCardList.vue'
import CreateProjectForm from '@/components/CreateProjectForm.vue'
import Button from '@/components/ui/button/Button.vue'
import { LayoutGrid, List } from 'lucide-vue-next'

//Object for an empty projects
const emp = {
    title: '¡ Aún no hay proyectos !',
    description: 'Aún no has creado un proyecto. Podemos iniciar creando tu primer proyecto.'
}

const btnText = ref('Crear Proyecto');
const title = ref('Crear Nuevo Proyecto');
const description = ref('Llena todos los datos solicitados');
interface IProject {
    code: string
    name: string
    description: string
    star_date_planned: string
    end_date_planned: string
    start_date_actual: string
    end_date_actual: string
    status_id: number
}
const projectsCard: Ref<Array<IProject>> = ref([])

onMounted(() => {
    projectsCard.value = projects
})
</script>

<template>
    <div class="flex justify-between items-center bg-sidebar p-2 rounded-lg border shadow-xs">
        <div class="flex gap-3">
            <div>
                <p class=" font-semibold">6</p>
                <p class=" font-semibold text-xs">En progreso</p>
            </div>
            <div>
                <p class=" font-semibold">2</p>
                <p class=" font-semibold text-xs">Finalizados</p>
            </div>
            <div>
                <p class=" font-semibold">8</p>
                <p class=" font-semibold text-xs">Total</p>
            </div>
        </div>

        <div class="flex gap-2">
            <GeneralDrawer :btn-text="btnText" :title="title" :description="description">
                <CreateProjectForm />
            </GeneralDrawer>

            <Button variant="outline"> <LayoutGrid/></Button>
            <Button variant="outline"> <List/></Button>
        </div>
    </div>

    <GeneralEmpty :emp="emp" v-if="projectsCard.values.length > 0" />

    <div v-else>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-5 justify-center items-center ">
            <GeneralCard v-for="project in projects" :ContentCard="project"
                class="hover:border-indigo-300 hover:shadow-xl hover:traslatey justify-self-center " />
        </div>

        <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-7 mt-5 justify-center items-center ">
            <GeneralCardList v-for="project in projects" :ContentCard="project"
                class="hover:border-indigo-300 hover:shadow-xl hover:traslatey justify-self-center " />
        </div>
    </div>
</template>
