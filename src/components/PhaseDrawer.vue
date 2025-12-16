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
    <DrawerContent class="mt-3 h-[500px]">
      <CreatePhaseForm class="w-5/12 mx-auto" />

      <DrawerClose as-child>
        <div class="flex md:w-5/12 md:mx-auto gap-2">
          <Button variant="outline" class="w-11/12 md:w-20 mt-7">
            Cancelar
          </Button>
        </div>
      </DrawerClose>
    </DrawerContent>
  </Drawer>
</template>
