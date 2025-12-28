export const formatearFecha = (fecha:Date) => {
  const fechaNueva = new Date(fecha)
  const dia = (fechaNueva.getDate()+1).toString().padStart(2, '0')
  const mes = (fechaNueva.getMonth() + 1).toString().padStart(2, '0')
  const anio = fechaNueva.getFullYear()

  return `${dia}-${mes}-${anio}`
}