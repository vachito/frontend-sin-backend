<script setup lang="ts">
import { ref } from 'vue'
import CreatePhaseForm from './CreatePhaseForm.vue'

import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
const props = defineProps({
  btnText: {
    type: String,
    required: true,
  },
})

const open=ref(false)
const closeDrawer = () =>{
  open.value=false
}
</script>

<template>
  <Drawer v-model:open="open">
    <DrawerTrigger as-child>
      <Button variant="outline">
        {{ btnText }}
      </Button>
    </DrawerTrigger>
    <DrawerContent class="mt-3 h-[500px]">
      <CreatePhaseForm :closeDrawer="closeDrawer" class="w-5/12 mx-auto" />

      <DrawerClose as-child>
        <div class="flex md:w-5/12 md:mx-auto gap-2">
          <Button variant="outline" class="w-11/12 md:w-20  md:-mt-9">
            Cancelar
          </Button>
        </div>
      </DrawerClose>
    </DrawerContent>
  </Drawer>
</template>
