<script setup>
import { ref } from 'vue';
import { Button } from '@/components/ui/button'; // Ajusta la ruta

const pasoActual = ref(1); // Estado para el paso actual

const siguientePaso = () => {
  if (pasoActual.value < 3) { // Asumiendo 3 pasos
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
  <div class="w-full max-w-2xl mx-auto p-6 space-y-6">
    <!-- Indicador de pasos (Opcional, usando shadcn/ui Tabs o similar) -->
    <div class="flex justify-center space-x-4 mb-8">
      <Button
        variant="outline"
        :class="{ 'bg-primary text-primary-foreground': pasoActual === 1 }"
        @click="pasoActual = 1"
      >
        Paso 1
      </Button>
      <Button
        variant="outline"
        :class="{ 'bg-primary text-primary-foreground': pasoActual === 2 }"
        @click="pasoActual = 2"
      >
        Paso 2
      </Button>
      <Button
        variant="outline"
        :class="{ 'bg-primary text-primary-foreground': pasoActual === 3 }"
        @click="pasoActual = 3"
      >
        Paso 3
      </Button>
    </div>

    <!-- Renderizado condicional de formularios -->
     <div v-if="pasoActual === 1">
        <p >hola pas0 1</p>
     </div>
     <div v-if="pasoActual === 2">
        <p >hola pas0 2</p>
     </div>
     <div v-if="pasoActual === 3">
        <p >hola pas0 3</p>
     </div>
    
    <!-- Navegación -->
    <div class="flex justify-between mt-8">
      <Button @click="pasoAnterior" :disabled="pasoActual === 1">
        Anterior
      </Button>
      <Button @click="siguientePaso" v-if="pasoActual !== 3">
        Siguiente
      </Button>

      <Button @click="siguientePaso" :disabled="pasoActual === 3">
        Guardar
      </Button>
    </div>
  </div>
</template>