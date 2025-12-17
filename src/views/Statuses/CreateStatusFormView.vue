<script setup lang="ts">
import { ref } from 'vue';
import { useStatusesStore } from '@/stores/Statuses';
import Button from '@/components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';

const store = useStatusesStore()
const crearEstado = ref(true)

</script>

<template>
    <div class=" space-y-4">
        <Button v-if="crearEstado" variant="outline" @click="crearEstado=false">Crear estado</Button>
        
        <div v-else class="m-y-3 flex w-4/12 gap-4">
            <Input placeholder="Ingresa aquí el nombre del estado" v-model="store.dataStatus.name" />
            <Button variant="default" @click="crearEstado=true,store.saveStatus()">Guardar</Button>
        </div>
    </div>
    
</template>