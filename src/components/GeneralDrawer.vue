<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from '@/components/ui/drawer'

const props = defineProps({
    btnText: {
        type: String,
        required: true
    },
});

const open = ref(false)
</script>

<template>
    <div class="flex justify-center">
        <Drawer v-model:open="open">
            <DrawerTrigger as-child>
                <Button variant="outline" class="w-full">
                    {{ btnText }}
                </Button>
            </DrawerTrigger>
            <DrawerContent class="mt-3 md:h-[500px]">
                <div
                    class="w-full p-1 space-y-3 text-center lg:mx-auto lg:w-5/12 lg:flex lg:justify-between lg:gap-6 lg:items-center lg:space-y-0 lg:text-left">
                    <div class="flex-1">
                         <slot :closeDrawer="()=> open=false"></slot>
                    </div>
                </div>

                <DrawerClose as-child>
                    <div class="flex md:w-5/12 md:mx-auto gap-2">
                        <Button variant="outline" class="w-11/12 md:w-20 mt-7">
                            Cancelar
                        </Button>
                    </div>
                </DrawerClose>
            </DrawerContent>
        </Drawer>
    </div>
</template>