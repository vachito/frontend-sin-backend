<script setup lang="ts">
const props = defineProps({
    btnText: {
        type: String,
        required: true
    },
});

//Shadcn Components
import { Button } from '@/components/ui/button'

//Drawer
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from '@/components/ui/drawer'

</script>

<template>
    <div class="flex justify-center">
        <Drawer>
            <DrawerTrigger as-child>
                <Button variant="outline" class="w-full">
                    {{ btnText }}
                </Button>
            </DrawerTrigger>
            <DrawerContent class="mt-3 md:h-[500px]">
                <slot name="steperdraw"></slot>
                <div
                    class="w-full p-1 space-y-3 text-center lg:mx-auto lg:w-5/12 lg:flex :lgjustify-between lg:gap-6 lg:items-center lg:space-y-0 lg:text-left">
                    <div class="flex-1">
                         <slot></slot>
                    </div>
                </div>

                <DrawerClose as-child>
                    <div class="flex flex-col md:flex-row md:justify-center md:w-5/12 md:mx-auto gap-2">
                        <Button variant="outline" class="w-11/12 md:w-20 mt-7 mx-auto">
                            Cancelar
                        </Button>

                        <Button class="w-11/12 md:w-20 my-7 mx-auto">
                            Guardar
                        </Button>
                    </div>
                </DrawerClose>
            </DrawerContent>
        </Drawer>
    </div>
</template>