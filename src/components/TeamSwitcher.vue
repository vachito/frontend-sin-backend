<script setup lang="ts">
import type { Component } from "vue"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  
} from '@/components/ui/sidebar'

const props = defineProps<{
  teams: {
    name: string
    logo: Component
    plan: string
  }[]
}>()

</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <router-link :to="{name:'home'}">
            <SidebarMenuButton
              size="lg"
              class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div class="bg-[#97D700] flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                <img src="@/assets/img/Muni azul.png" alt="">
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-medium">DAP MANAGER</span>
                <span class="truncate text-xs">Muni Guate</span>
              </div>
            </SidebarMenuButton>
          </router-link>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
