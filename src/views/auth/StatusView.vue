<script setup lang="ts">
import { BookUser, ListChecks, CheckCircle } from "lucide-vue-next"
import { ref } from "vue"

import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// CONTROL DEL STEPPER
const currentStep = ref(1)

// DATOS
const phase = ref({
  name: "",
  description: "",
})

const task = ref({
  name: "",
  description: "",
})

const createdPhaseId = ref<number | null>(null)

// PASOS ACTUALIZADOS
const steps = [
  {
    step: 1,
    title: "Fase",
    description: "Crea una nueva fase",
    icon: BookUser,
  },
  {
    step: 2,
    title: "Tarea",
    description: "Crea una tarea para la fase",
    icon: ListChecks,
  },
  {
    step: 3,
    title: "Confirmación",
    description: "Proceso finalizado",
    icon: CheckCircle,
  },
]

// SIMULAR GUARDADO
async function savePhase() {
  console.log("Guardando fase:", phase.value)
  return { id: 99 }
}

async function goToTasks() {
  if (!phase.value.name) return alert("El nombre de la fase es obligatorio.")

  const res = await savePhase()
  createdPhaseId.value = res.id

  currentStep.value = 2
}

async function saveTask() {
  if (!task.value.name) return alert("El nombre de la tarea es obligatorio.")

  console.log("Creando tarea para fase:", createdPhaseId.value, task.value)
  currentStep.value = 3
}
</script>

<template>
  <div class="flex flex-col gap-10 w-full mx-auto">

    <!-- 🟦 STEPPER -->
    <Stepper v-model="currentStep" class="flex w-10/12 items-start gap-2 mx-auto">
      <StepperItem
        v-for="item in steps"
        :key="item.step"
        :step="item.step"
        class="relative flex w-full flex-col items-center justify-center"
      >
        <StepperTrigger>
          <StepperIndicator v-slot="{ step }" class="bg-muted">
            <template v-if="item.icon">
              <component :is="item.icon" class="w-4 h-4" />
            </template>
            <span v-else>{{ step }}</span>
          </StepperIndicator>
        </StepperTrigger>

        <StepperSeparator
          v-if="item.step !== steps[steps.length - 1]?.step"
          class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 
          block h-0.5 shrink-0 rounded-full bg-muted 
          group-data-[state=completed]:bg-primary"
        />

        <div class="flex flex-col items-center">
          <StepperTitle>{{ item.title }}</StepperTitle>
          <StepperDescription>{{ item.description }}</StepperDescription>
        </div>
      </StepperItem>
    </Stepper>

    <!-- 🟩 CONTENIDO SEGÚN PASO -->
    <div class="w-full max-w-lg mx-auto">
      
      <!-- PASO 1: Crear Fase -->
      <div v-if="currentStep === 1" class="flex flex-col gap-4">
        <Input v-model="phase.name" placeholder="Nombre de la fase" />
        <Input v-model="phase.description" placeholder="Descripción" />

        <Button @click="goToTasks">Guardar Fase</Button>
      </div>

      <!-- PASO 2: Crear Tarea -->
      <div v-if="currentStep === 2" class="flex flex-col gap-4">
        <Input v-model="task.name" placeholder="Nombre de la tarea" />
        <Input v-model="task.description" placeholder="Descripción" />

        <Button @click="saveTask">Guardar Tarea</Button>
      </div>

      <!-- PASO 3: Confirmación -->
      <div v-if="currentStep === 3" class="text-center py-10">
        <CheckCircle class="w-12 h-12 text-green-600 mx-auto" />
        <p class="mt-4 text-lg font-medium">Proceso completado con éxito</p>
      </div>
    </div>

  </div>
</template>
