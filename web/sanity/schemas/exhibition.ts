import { defineField, defineType } from 'sanity'

export const exhibitionSchema = defineType({
  name: 'exhibition',
  title: 'Información de la Exposición',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título de la Exposición',
      type: 'string',
      initialValue: 'Mariano Maresca - Memoria Viva',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      initialValue: 'Memoria Viva de la Cultura Granadina',
    }),
    defineField({
      name: 'type',
      title: 'Tipo de Exposición',
      type: 'string',
      options: { list: [
        { title: 'Exposición Conmemorativa', value: 'commemorative' },
        { title: 'Exposición Itinerante', value: 'touring' },
        { title: 'Exposición Temporal', value: 'temporary' },
        { title: 'Exposición Permanente', value: 'permanent' },
      ], },
      initialValue: 'commemorative',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'content',
      title: 'Contenido Detallado',
      type: 'array',
      of: [{ type: 'block' }], },
    }),
    defineField({
      name: 'year',
      title: 'Año',
      type: 'number',
      initialValue: 2026,
    }),
    defineField({
      name: 'startDate',
      title: 'Fecha de Inicio',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'Fecha de Fin',
      type: 'date',
    }),
    defineField({
      name: 'displayDate',
      title: 'Fechas para Mostrar',
      type: 'string',
      description: 'Ej: "Abril 2026" o "Abril - Junio 2026"',
    }),
    defineField({
      name: 'status',
      title: 'Estado',
      type: 'string',
      options: { list: [
        { title: '📋 Planificación', value: 'planning' },
        { title: '🚧 En Preparación', value: 'preparation' },
        { title: '✅ Abierta', value: 'open' },
        { title: '🔒 Cerrada', value: 'closed' },
      ], },
      initialValue: 'planning',
    }),
    defineField({
      name: 'promoter',
      title: 'Promotor/Organizador',
      type: 'string',
      initialValue: 'Asociación Cultural Olvidos de Granada',
    }),
    defineField({
      name: 'curators',
      title: 'Comisarios',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Nombre', type: 'string' },
            { name: 'role', title: 'Rol', type: 'string' },
          ], },
        },
      ], },
    }),
    defineField({
      name: 'organizers',
      title: 'Organizadores y Colaboradores',
      type: 'array',
      of: [{ type: 'string' }], },
    }),
    defineField({
      name: 'venue',
      title: 'Lugar/Sede',
      type: 'string',
      description: 'Dejar vacío si es itinerante o TBD',
    }),
    defineField({
      name: 'address',
      title: 'Dirección',
      type: 'string',
    }),
    defineField({
      name: 'schedule',
      title: 'Horario',
      type: 'text',
    }),
    defineField({
      name: 'admission',
      title: 'Entrada',
      type: 'string',
      description: 'Ej: "Gratuita" o "5€"',
    }),
    defineField({
      name: 'contact',
      title: 'Contacto',
      type: 'string',
      description: 'Email o teléfono',
    }),
    defineField({
      name: 'sections',
      title: 'Secciones de la Exposición',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Título', type: 'string' },
            { name: 'description', title: 'Descripción', type: 'text' },
            { name: 'order', title: 'Orden', type: 'number' },
          ], },
        },
      ], },
    }),
    defineField({
      name: 'images',
      title: 'Imágenes',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            { name: 'caption', title: 'Pie de foto', type: 'string' },
            { name: 'alt', title: 'Texto alternativo', type: 'string' },
          ], },
        },
      ], },
    }),
    defineField({
      name: 'links',
      title: 'Enlaces Útiles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Título', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ], },
        },
      ], },
    }),
  ], },
  preview: {
    select: {
      title: 'title',
      subtitle: 'displayDate',
    },
  },
})
