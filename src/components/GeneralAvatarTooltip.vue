<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

defineProps({
    avatarTool:{
        type:Object,
        require:true
    }
})
</script>

<template>
  <TooltipProvider >
        <Tooltip >
          <TooltipTrigger class="*:data-[slot=avatar]:ring-sidebar-border *:data-[slot=avatar]:ring-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>{{ avatarTool.id }}</AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>
            <p>{{ avatarTool.email }}</p>
          </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>
