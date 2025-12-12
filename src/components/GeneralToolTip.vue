<script setup lang="ts">
defineProps({
  texto: {
    type: String,
  },
})

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger class="inline-block w-full">
        <slot></slot>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        :sideOffset="6"
        class="text-md p-2 bg-gray-500 text-white rounded-md max-w-3xs"
      >
        <p>{{ texto }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
