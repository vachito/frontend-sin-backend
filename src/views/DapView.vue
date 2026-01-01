<script setup lang="ts">
const avat = [
  {
    imageUrl: 'https://github.com/shadcn.png',
    initials: 'AD',
    email: 'admin@dap.com',
  },
  // {
  //     imageUrl: 'https://github.com/leerob.png',
  //     initials: 'RX',
  //     email: 'rxocoxic@dap.com'
  // },
  // {
  //     imageUrl: 'https://github.com/evilrabbit.png',
  //     initials: 'SM',
  //     email: 'smartinez@dap.com'
  // },
]
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import GeneralAvatarTooltip from '@/components/GeneralAvatarTooltip.vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { PlusCircleIcon } from 'lucide-vue-next'
const showStatucsBar = ref(true)
const showActivityBar = ref(false)
const showPanel = ref(false)
const position = ref('bottom')
</script>

<template>
  <div class="flex justify-around mt-16 w-11/12 mx-auto">
    <img src="../assets/img/DAP.png" alt="Logo dap" class="w-96 h-40" />
    <img src="../assets/img/Muni azul.png" alt="Logo Muni" class="w-48 h-48" />
  </div>

  <DropdownMenu class="fixed top-0 w-full border-0">
    <DropdownMenuTrigger as-child>
      <Button variant="link">
          <GeneralAvatarTooltip v-for="item in avat" :avatar-tool="item" class="-space-x-2" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem variant="destructive">Remover participante</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
