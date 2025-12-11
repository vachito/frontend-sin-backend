<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
    btnText: {
        type: String,
        required: true
    },
});

import CreatePhaseForm from './CreatePhaseForm.vue';

//Shadcn Components
import { Button } from '@/components/ui/button'

//Drawer
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from '@/components/ui/drawer'

//iconos 
import { ListCheck, Save } from 'lucide-vue-next'
//steps
import GeneralStepper from './GeneralStepper.vue'

//Object for a steps component header
const steps = [
    {
        step: 1,
        title: 'Fases',
        description: 'Agrega una fase',
        icon: ListCheck,
    },
    {
        step: 2,
        title: 'Guardar',
        description: 'Confirmar',
        icon: Save,
    },
]

const pasoActual = ref(1); // Estado para el paso actual

const siguientePaso = () => {
    if (pasoActual.value < 2) {
        pasoActual.value++;
    }
};

const pasoAnterior = () => {
    if (pasoActual.value > 1) {
        pasoActual.value--;
    }
};
</script>

<template>
    <div class="flex justify-center">
        <Drawer>
            <DrawerTrigger as-child>
                <Button variant="outline">
                    {{ btnText }}
                </Button>
            </DrawerTrigger>
            <DrawerContent class="mt-3 h-[630px]">
                <GeneralStepper :steps="steps" class="mx-auto space-y-5" />

                <div class="mx-auto w-5/12 flex justify-between gap-6 items-center">
                    <Button @click="pasoAnterior" class="w-20" :disabled="pasoActual === 1">
                        Anterior
                    </Button>

                    <div class="p-1 pb-0 flex-1" v-if="pasoActual === 1">
                        <CreatePhaseForm />
                    </div>

                    <Button @click="siguientePaso" v-if="pasoActual !== 2">
                        Siguiente
                    </Button>

                    <Button @click="siguientePaso" v-if="pasoActual === 2">
                        Guardar
                    </Button>
                </div>
                <DrawerClose as-child>
                    <Button variant="outline" class="w-20 mt-7 mx-auto">
                        Cancelar
                    </Button>
                </DrawerClose>
            </DrawerContent>
        </Drawer>
    </div>
</template>