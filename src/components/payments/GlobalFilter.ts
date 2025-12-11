import { ref } from "vue"
import {
  useVueTable,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/vue-table"

export function useDataTable(data, columns) {
  const globalFilter = ref("")

  const table = useVueTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    globalFilterFn: (row, columnId, filterValue) => {
      // Obtener el valor crudo
      const value = row.getValue(columnId)
      if (!value) return false

      // Convertir a texto y comparar
      return String(value).toLowerCase().includes(String(filterValue).toLowerCase())
    },
    onGlobalFilterChange: (value) => {
      globalFilter.value = value
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return { table, globalFilter }
}
