<script setup lang="ts">

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
        name: 'imprescindible'
    },
    {
        id: 2,
        name: 'debería tener'
    },
    {
        id: 3,
        name: 'podría tener'
    },
    {
        id: 4,
        name: 'no tendrá'
    },
]
</script>

<template>
    <form novalidate>
        <FieldGroup>
            <FieldSet>
                <FieldLegend class="text-center">Crear tarea de fase</FieldLegend>
                <FieldDescription class="text-center">
                    Llena el formulario para crear la tarea
                </FieldDescription>
                <FieldGroup>
                    <div class="md:grid md:grid-cols-2 gap-2.5">
                        <Field>
                            <FieldLabel for="checkout-7j9-card-name-43j">
                                Responsable
                            </FieldLabel>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Seleccione al usuario responsable de la tarea" />
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
                            <Input id="checkout-7j9-card-number-uw1" placeholder="Ingresa aquí el nombre de la tarea"
                                required />
                        </Field>

                        <Field class=" col-start-1 col-end-3">
                            <FieldLabel for="checkout-7j9-card-number-uw1">
                                Descripción
                            </FieldLabel>
                            <Textarea placeholder="Ingresa aquí la descripción de la tarea" />
                        </Field>

                        <Field>
                            <FieldLabel for="checkout-7j9-card-name-43j">
                                Prioridad
                            </FieldLabel>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Seleccione una prioridad para la tarea" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem v-for="item in objPriority" :value="item.id">
                                        {{ item.name }}
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </Field>

                        <Field>
                            <FieldLabel for="checkout-7j9-card-name-43j">
                                Fecha de inicio
                            </FieldLabel>
                            <GeneralDatePicker />
                        </Field>

                        <Field>
                            <FieldLabel for="checkout-7j9-card-number-uw1">
                                Fecha estimada para finalizar
                            </FieldLabel>
                            <GeneralDatePicker />
                        </Field>
                    </div>
                </FieldGroup>
            </FieldSet>
        </FieldGroup>
    </form>
</template>