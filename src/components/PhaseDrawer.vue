<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  btnText: {
    type: String,
    required: true,
  },
})

import CreatePhaseForm from './CreatePhaseForm.vue'

//Shadcn Components
import { Button } from '@/components/ui/button'

//Drawer
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <Button variant="outline">
        {{ btnText }}
      </Button>
    </DrawerTrigger>
    <DrawerContent class="mt-3 h-[630px]">
      <CreatePhaseForm  class="w-5/12 mx-auto"/>

      <DrawerClose as-child>
        <Button variant="outline" class="w-20 mt-7 mx-auto"> Cancelar </Button>
      </DrawerClose>
    </DrawerContent>
  </Drawer>
</template>
