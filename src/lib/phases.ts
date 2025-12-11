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

export const phases: IPhase[] = [
  {
    project_id: 1,
    name: "fase 1 Projecto benchark",
    description: "Administracion digital de datos de la direccion dap",
    weight: 0.1,
    responsible_id: 1,
    star_date_planned: "2025-12-08",
    end_date_planned: "2025-12-08",
    start_date_actual: "2025-12-08",
    end_date_actual: "2025-12-08",
  },
  {
    project_id: 1,
    name: "fase 2 Projecto benchark",
    description: "Administracion digital de datos de la direccion dap",
    weight: 0.2,
    responsible_id: 1,
    star_date_planned: "2025-12-08",
    end_date_planned: "2025-12-08",
    start_date_actual: "2025-12-08",
    end_date_actual: "2025-12-08",
  },
  {
    project_id: 1,
    name: "fase 3 Projecto benchark",
    description: "Administracion digital de datos de la direccion dap",
    weight: 0.3,
    responsible_id: 1,
    star_date_planned: "2025-12-08",
    end_date_planned: "2025-12-08",
    start_date_actual: "2025-12-08",
    end_date_actual: "2025-12-08",
  },
  {
    project_id: 2,
    name: "fase 1 Projecto nuevo",
    description: "Administracion digital de datos de la direccion dap",
    weight: 0.3,
    responsible_id: 1,
    star_date_planned: "2025-12-08",
    end_date_planned: "2025-12-08",
    start_date_actual: "2025-12-08",
    end_date_actual: "2025-12-08",
  },
  {
    project_id: 2,
    name: "fase 2 Projecto nuevo",
    description: "Administracion digital de datos de la direccion dap",
    weight: 0.3,
    responsible_id: 1,
    star_date_planned: "2025-12-08",
    end_date_planned: "2025-12-08",
    start_date_actual: "2025-12-08",
    end_date_actual: "2025-12-08",
  },
  {
    project_id: 3,
    name: "fase 1 Projecto inventado",
    description: "Administracion digital de datos de la direccion dap",
    weight: 0.1,
    responsible_id: 1,
    star_date_planned: "2025-12-08",
    end_date_planned: "2025-12-08",
    start_date_actual: "2025-12-08",
    end_date_actual: "2025-12-08",
  },
  {
    project_id: 3,
    name: "fase 2 Projecto inventado",
    description: "Administracion digital de datos de la direccion dap",
    weight: 0.2,
    responsible_id: 1,
    star_date_planned: "2025-12-08",
    end_date_planned: "2025-12-08",
    start_date_actual: "2025-12-08",
    end_date_actual: "2025-12-08",
  },
  {
    project_id: 3,
    name: "fase 3 Projecto inventado",
    description: "Administracion digital de datos de la direccion dap",
    weight: 0.3,
    responsible_id: 1,
    star_date_planned: "2025-12-08",
    end_date_planned: "2025-12-08",
    start_date_actual: "2025-12-08",
    end_date_actual: "2025-12-08",
  },
  {
    project_id: 3,
    name: "fase 4 Projecto inventado",
    description: "Administracion digital de datos de la direccion dap",
    weight: 0.4,
    responsible_id: 1,
    star_date_planned: "2025-12-08",
    end_date_planned: "2025-12-08",
    start_date_actual: "2025-12-08",
    end_date_actual: "2025-12-08",
  },
  {
    project_id: 3,
    name: "fase 5 Projecto inventado",
    description: "Administracion digital de datos de la direccion dap",
    weight: 0.5,
    responsible_id: 1,
    star_date_planned: "2025-12-08",
    end_date_planned: "2025-12-08",
    start_date_actual: "2025-12-08",
    end_date_actual: "2025-12-08",
  },
]
