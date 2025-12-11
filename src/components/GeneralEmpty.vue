<script setup lang="ts">
    defineProps({
        emp: {
            type: Object, 
            required: true 
        },
    });

import { FolderCode } from 'lucide-vue-next'

import {
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from '@/components/ui/empty'

</script>

<template>
    <Empty>
        <EmptyHeader>
            <EmptyMedia variant="icon">
                <FolderCode />
            </EmptyMedia>
            <EmptyTitle>{{ emp.title }}</EmptyTitle>
            <EmptyDescription>
                {{ emp.description }}
            </EmptyDescription>
        </EmptyHeader>
    </Empty>
</template>
