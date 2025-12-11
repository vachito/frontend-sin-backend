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

</script>

<template>
    <form novalidate>
        <FieldGroup>
            <FieldSet>
                <FieldLegend class="text-center">Crear nuevo proyecto</FieldLegend>
                <FieldDescription class="text-center">
                    Llena el formulario para crear el proyecto
                </FieldDescription>
                <FieldGroup>
                    <div class="md:grid md:grid-cols-2 gap-2.5">
                        <Field>
                            <FieldLabel for="checkout-7j9-card-name-43j">
                                Código
                            </FieldLabel>
                            <Input id="checkout-7j9-card-name-43j" placeholder="Ejemplo: proj-001" required />
                        </Field>
                        <Field>
                            <FieldLabel for="checkout-7j9-card-number-uw1">
                                Nombre
                            </FieldLabel>
                            <Input id="checkout-7j9-card-number-uw1" placeholder="Ingresa aquí el nombre del proyecto"
                                required />
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

                        <Field class=" col-start-1 col-end-3">
                            <FieldLabel for="checkout-7j9-card-number-uw1">
                                Descripción
                            </FieldLabel>
                            <Textarea placeholder="Ingresa aquí la descripción del proyecto" />
                        </Field>
                    </div>
                </FieldGroup>
            </FieldSet>
        </FieldGroup>
    </form>
</template>