<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useProjectStore } from '@/stores/Project'
//Calendar
import type { DateValue } from '@internationalized/date'
import GeneralDatePicker from './GeneralDatePicker.vue'
import { Button } from '@/components/ui/button'
import { toast } from 'vue-sonner'
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
import router from '@/router'

const props = defineProps({
    closeDrawer: Function
})

const store = useProjectStore()
const startDate = ref<DateValue>()
const endDate = ref<DateValue>()

watchEffect(() => {
    store.dataform.star_date_planned = startDate.value?.toString()
    store.dataform.end_date_planned = endDate.value?.toString()
})

const handlesubmit = () => {
    store.saveProject()
    toast.success("Proyecto creado", {
        description: "El proyecto se a creado correctamente",
        duration: 2000,
        position: 'top-center'
    })
    props.closeDrawer?.()
    router.push({ name: 'list-project' })
}
</script>

<template>
    <form novalidate @submit.prevent="handlesubmit">
        <FieldGroup>
            <FieldSet>
                <FieldLegend class="text-center">Crear nuevo proyecto</FieldLegend>
                <FieldDescription class="text-center">
                    Llena el formulario para crear el proyecto
                </FieldDescription>
                <div class="flex gap-5">
                    <FieldGroup>
                        <div class="md:grid md:grid-cols-2 gap-2.5">
                            <Field>
                                <FieldLabel for="checkout-7j9-card-name-43j">
                                    Código
                                </FieldLabel>
                                <Input id="checkout-7j9-card-name-43j" placeholder="Ejemplo: proj-001" required
                                    v-model="store.dataform.code" />
                            </Field>
                            <Field>
                                <FieldLabel for="checkout-7j9-card-number-uw1">
                                    Nombre
                                </FieldLabel>
                                <Input id="checkout-7j9-card-number-uw1"
                                    placeholder="Ingresa aquí el nombre del proyecto" required
                                    v-model="store.dataform.name" />
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

                            <Field class=" col-start-1 col-end-3">
                                <FieldLabel for="checkout-7j9-card-number-uw1">
                                    Descripción
                                </FieldLabel>
                                <Textarea placeholder="Ingresa aquí la descripción del proyecto"
                                    v-model="store.dataform.description" />
                            </Field>
                        </div>
                    </FieldGroup>
                    <Button type="submit" class="w-11/12 md:w-20 my-7 mx-auto">
                        Guardar
                    </Button>
                </div>
            </FieldSet>
        </FieldGroup>
    </form>
</template>