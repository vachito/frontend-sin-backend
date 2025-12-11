//mostrar la fila
import { h } from 'vue'
import type { ColumnDef } from '@tanstack/vue-table'

//acciones de la fila
import DropdownAction from '@/components/payments/data-table-dropdown.vue'

//para reordenamiento
import { ArrowUpDown, ChevronDown } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

interface IPhase {
  project_id: number
  name: string
  description: string
  weight: number
  responsible_id: number
  star_date_planned: string
  end_date_planned: string
  start_date_actual: string
  end_date_actual: string
}

export const columns: ColumnDef<IPhase>[] = [
  {
    accessorKey: 'project_id',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Project_id', h(ArrowUpDown, { class: 'ml-2 h-3 w-3 hover:cursor-pointer' })])
    },
    cell: ({ row }) => h('div', { class: 'text-center font-medium' }, row.getValue('project_id')),
  },
  {
    accessorKey: 'responsible_id',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Responsable', h(ArrowUpDown, { class: 'ml-2 h-3 w-3 hover:cursor-pointer' })])
    },
    cell: ({ row }) => h('div', { class: 'text-center font-medium' }, row.getValue('responsible_id')),
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Nombre', h(ArrowUpDown, { class: 'ml-2 h-3 w-3' })])
    },
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('name')),
  },
  {
    accessorKey: 'description',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Descripcion', h(ArrowUpDown, { class: 'ml-2 h-3 w-3' })])
    },
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('description')),
  },
  {
    accessorKey: 'weight',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Prioridad', h(ArrowUpDown, { class: 'ml-2 h-3 w-3' })])
    },
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('weight')),
  },
  {
    accessorKey: 'star_date_planned',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Fecha inicio', h(ArrowUpDown, { class: 'ml-2 h-3 w-3' })])
    },
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('star_date_planned')),
  },
  {
    accessorKey: 'end_date_planned',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Fecha inicio', h(ArrowUpDown, { class: 'ml-2 h-3 w-3' })])
    },
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('end_date_planned')),
  },
  {
    id: 'actions',
    enableHiding: true,
    cell: ({ row }) => {
      const phase = row.original

      return h('div', { class: 'relative' }, h(DropdownAction, {
        phase,
      }))
    },
  },
  
  // {
  //   accessorKey: 'amount',
  //   header: ({column}) =>{
  //     return h(Button,{
  //       variant: 'ghost',
  //       onClick: ()=> column.toggleSorting(column.getIsSorted() === 'asc'),
  //     }, () => ['Amount', h(ArrowUpDown, { class: 'ml-2 h-3 w-3' })])
  //   }, 
  //   cell: ({ row }) => {
  //     const amount = Number.parseFloat(row.getValue('amount'))
  //     const formatted = new Intl.NumberFormat('es-GT', {
  //       style: 'currency',
  //       currency: 'GTQ',
  //     }).format(amount);
  //     return h('div', { class: 'text-left' }, formatted)
  //   },
  // },
  // {
  //   accessorKey: 'status',
  //   header: ({ column }) => {
  //     return h(Button, {
  //       variant: 'ghost',
  //       onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
  //     }, () => ['Status', h(ArrowUpDown, { class: 'ml-2 h-3 w-3' })])
  //   },
  //   cell: ({ row }) => h('div', { class: 'text-left font-medium' }, row.getValue('status')),
  // },
  // {
  //   accessorKey: 'email',
  //   header: ({ column }) => {
  //     return h(Button, {
  //       variant: 'ghost',
  //       onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
  //     }, () => ['Email', h(ArrowUpDown, { class: 'ml-2 h-3 w-3' })])
  //   },
  //   cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('email')),
  // },
]
