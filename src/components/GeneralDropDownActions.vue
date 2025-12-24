<script setup lang="ts">
import { useProjectStore } from '@/stores/Project';
defineProps({
    objectActions: {
        type: Object,
        required: true
    }
})

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
} from '@/components/ui/dropdown-menu'

const store=useProjectStore()
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button class="w-8 h-8 font-black p-0 hover:cursor-pointer">
                <span>...</span>
                <MoreHorizontal class="w-4 h-4" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
            <DropdownMenuLabel>Cambiar estado</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="store.changeState(item.id)" v-for="item in objectActions" :key="item.id">{{item.name}}</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
