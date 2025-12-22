<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useProjectStore } from '@/stores/Project'
//Field form
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldSet,
    FieldLegend,
    FieldDescription
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { toast } from 'vue-sonner'
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
//tipo de dato para fecha
import type { DateValue } from '@internationalized/date'
//objeto de prueba para el select

const props=defineProps({
    closeDrawer:Function
})
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
        name: 'Benito Carlos Augusto'
    },
    {
        id: 4,
        name: 'Elsa Pato'
    },
    {
        id: 5,
        name: 'Juan Perez'
    },
]

const store = useProjectStore()
const startDate = ref<DateValue>()
const endDate = ref<DateValue>()

watchEffect(() => {
    store.dataformPhase.star_date_planned = startDate.value?.toString()
    store.dataformPhase.end_date_planned = endDate.value?.toString()
})

const handleSubmit = () => {
    store.savePhase()
    toast.success("Fase creada",{
        description:"La fase fue agregada correctamente al proyecto",
        duration:3000,
        position:'top-center'
    })
props.closeDrawer?.()
}
</script>

<template>
    <form novalidate @submit.prevent="handleSubmit">
        <FieldGroup>
            <FieldSet>
                <FieldLegend class="text-center">Agregar fase al proyecto</FieldLegend>
                <FieldDescription class="text-center">
                    Llena el formulario para crear la fase
                </FieldDescription>
                <div class="flex flex-col">
                    <FieldGroup>
                        <div class="md:grid md:grid-cols-2 gap-2.5">
                            <Field>
                                <FieldLabel for="checkout-7j9-card-name-43j">
                                    Responsable
                                </FieldLabel>
                                <Select v-model="store.dataformPhase.responsible_id">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccione un usuario" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem v-for="item in objSelect" :value="item.id">
                                            {{ item.name }}
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </Field>

                            <Field>
                                <FieldLabel for="checkout-7j9-card-number-uw1">
                                    Nombre
                                </FieldLabel>
                                <Input id="checkout-7j9-card-number-uw1" placeholder="Ingresa aquí el nombre de la fase"
                                    required v-model="store.dataformPhase.name" />
                            </Field>

                            <Field class=" col-start-1 col-end-3">
                                <FieldLabel for="checkout-7j9-card-number-uw1">
                                    Descripción
                                </FieldLabel>
                                <Textarea placeholder="Ingresa aquí la descripción de la fase"
                                    v-model="store.dataformPhase.description" />
                            </Field>

                            <Field>
                                <FieldLabel for="checkout-7j9-card-name-43j">
                                    Fecha de inicio
                                </FieldLabel>
                                <GeneralDatePicker v-model="startDate" />
                            </Field>

                            <Field>
                                <FieldLabel for="checkout-7j9-card-number-uw1">
                                    Fecha estimada para finalizar
                                </FieldLabel>
                                <GeneralDatePicker v-model="endDate" />
                            </Field>
                        </div>
                    </FieldGroup>
                    <div class="flex justify-end">
                        <Button type="submit" class="mt-3">
                            Guardar
                        </Button>
                    </div>
                </div>
            </FieldSet>
        </FieldGroup>
    </form>
</template>