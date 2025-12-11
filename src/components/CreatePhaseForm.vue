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

</script>

<template>
    <form novalidate>
        <FieldGroup>
            <FieldSet>
                <FieldLegend class="text-center">Crear fase de proyecto</FieldLegend>
                <FieldDescription class="text-center">
                    Llena el formulario para crear la fase
                </FieldDescription>
                <FieldGroup>
                    <div class="md:grid md:grid-cols-2 gap-2.5">
                        <Field>
                            <FieldLabel for="checkout-7j9-card-name-43j">
                                Responsable
                            </FieldLabel>
                            <Select>
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
                                required />
                        </Field>

                        <Field class=" col-start-1 col-end-3">
                            <FieldLabel for="checkout-7j9-card-number-uw1">
                                Descripción
                            </FieldLabel>
                            <Textarea placeholder="Ingresa aquí la descripción de la fase"/>
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