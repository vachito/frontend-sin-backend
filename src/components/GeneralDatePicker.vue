<script setup lang="ts">
import { computed} from 'vue'
import type { DateValue } from '@internationalized/date'
import { DateFormatter, getLocalTimeZone, today } from '@internationalized/date'

import { CalendarIcon } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const props = defineProps<{
  modelValue?: DateValue
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value?: DateValue): void
}>()

const date = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const defaultPlaceholder = today(getLocalTimeZone())


const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})
</script>

<template>
  <Popover v-slot="{ close }">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="cn('min-w-60 justify-start text-left font-normal', !date && 'text-muted-foreground')"
      >
        <CalendarIcon />
        {{ date ? df.format(date.toDate(getLocalTimeZone())) : "Selecciona una fecha" }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0" align="start">
      <Calendar
        v-model="date"
        :default-placeholder="defaultPlaceholder"
        layout="month-and-year"
        initial-focus
        @update:model-value="close"
      />
    </PopoverContent>
  </Popover>
</template>
