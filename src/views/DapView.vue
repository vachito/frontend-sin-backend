    <script setup lang="ts">
    import { Label } from '@/components/ui/label'
    import { Switch } from '@/components/ui/switch'
    import GeneralDropDownActions from '@/components/GeneralDropDownActions.vue';

    const obj=[
        {
            id:1,
            name:'Pendiente'
        },
        {
            id:2,
            name:'En progreso'
        },
    ]
</script>

<template>
    <div class="flex justify-around mt-16 w-11/12 mx-auto">
        <img src="../assets/img/DAP.png" alt="Logo dap" class=" w-96 h-40">
        <img src="../assets/img/Muni azul.png" alt="Logo Muni" class="w-48 h-48">
    </div>

    <div class="flex items-center space-x-2">
        <Switch :default-value="true" id="airplane-mode" />
        <Label for="airplane-mode">Airplane Mode</Label>
    </div>

    <GeneralDropDownActions :object-actions="obj"/>
</template>