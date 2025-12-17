<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue'
import { useProjectStore } from '@/stores/Project'
import { uid } from 'uid'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import type { DateValue } from '@internationalized/date'
//Calendar
import GeneralDatePicker from './GeneralDatePicker.vue'

//selecct
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

//objeto sheet
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'

const store=useProjectStore()
const props = defineProps({
    phase_id: {
        type: [Number, String],
        required: true
    }
})
//objeto de prueba para el select
const objSelect = [
    {
        id: 1,
        name: 'Susana Horia'
    },
    {
        id: 2,
        name: 'Elsa Pio'
    },
    {
        id: 3,
        name: 'Benito Carlos De Leon'
    },
]

//objeto de prueba para el select
const objPriority = [
    {
        id: 1,
        name: 'Baja'
    },
    {
        id: 2,
        name: 'Normal'
    },
    {
        id: 3,
        name: 'Media'
    },
    {
        id: 4,
        name: 'Alta'
    },
]

const startDate = ref<DateValue>()
const endDate = ref<DateValue>()

const task = reactive({
    id: uid(),
    phase_id: props.phase_id,
    name: '',
    description: '',
    responsible_id: null,
    is_complete: false,
    star_date_planned:startDate.value?.toString(),
    end_date_planned:endDate.value?.toString(),
    start_date_actual: '',
    end_date_actual: '',
    priority: ''
})

watchEffect(() => {
  task.star_date_planned = startDate.value
    ? startDate.value.toString()
    : ''

  task.end_date_planned = endDate.value
    ? endDate.value.toString()
    : ''
})

const handleSubmit = ()=>{
    store.saveTask(task)
}
</script>

<template>
    <Sheet>
        <SheetTrigger as-child>
            <Button variant="secondary">
                Agregar Tarea
            </Button>
        </SheetTrigger>

        <SheetContent>
            <SheetHeader>
                <SheetTitle>Agregar una tarea a la fase</SheetTitle>
                <SheetDescription>
                    Llena todos los datos solicitados en el formulario.
                </SheetDescription>
            </SheetHeader>
            <div class="grid flex-1 auto-rows-min gap-6 px-4">
                <div class="grid gap-3">
                    <Label for="sheet-demo-responsible">Responsable</Label>
                    <Select id="sheet-demo-responsible" v-model="task.responsible_id">
                        <SelectTrigger>
                            <SelectValue placeholder="Seleccione un usuario responsable de la tarea" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem v-for="item in objSelect" :value="item.id">
                                {{ item.name }}
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div class="grid gap-3">
                    <Label for="sheet-demo-name">Nombre</Label>
                    <Input id="sheet-demo-name" placeholder="Ingresa aquí el nombre de la tarea" v-model="task.name"
                        required />
                </div>
                <div class="grid gap-3">
                    <Label for="sheet-demo-username">Descripción</Label>
                    <Textarea placeholder="Ingresa aquí la descripción de la tarea" v-model="task.description" />
                </div>
                <div class="grid gap-3">
                    <Label for="sheet-demo-username">Prioridad</Label>
                    <Select v-model="task.priority">
                        <SelectTrigger>
                            <SelectValue placeholder="Seleccione una prioridad para la tarea" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem v-for="item in objPriority" :value="item.id">
                                {{ item.name }}
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div class="grid gap-3">
                    <Label for="sheet-demo-username">Fecha de inicio</Label>
                    <GeneralDatePicker v-model="startDate" />
                </div>
                <div class="grid gap-3">
                    <Label for="sheet-demo-username">Fecha estimada para finalizar</Label>
                    <GeneralDatePicker v-model="endDate" />
                </div>
            </div>

            <SheetFooter>
                <Button type="submit" @click="handleSubmit">
                    Guardar
                </Button>
                <SheetClose as-child>
                    <Button variant="outline">
                        Close
                    </Button>
                </SheetClose>
            </SheetFooter>
        </SheetContent>
    </Sheet>
</template>