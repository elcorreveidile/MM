import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Evento Cronológico',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Evento',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Fecha',
      type: 'object',
      fields: [
        { name: 'year', title: 'Año', type: 'number' },
        { name: 'month', title: 'Mes', type: 'number' },
        { name: 'day', title: 'Día', type: 'number' },
      ], },
    }),
    defineField({
      name: 'displayDate',
      title: 'Fecha para Mostrar',
      type: 'string',
      description: 'Formato legible: "Enero 2023" o "10 de Enero, 2023"',
    }),
    defineField({
      name: 'description',
      title: 'Descripción del Evento',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Contenido Detallado',
      type: 'array',
      of: [{ type: 'block' }], },
      description: 'Información adicional opcional',
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: { list: [
        { title: '🎒 Vida Personal', value: 'personal' },
        { title: '📚 Académico', value: 'academic' },
        { title: '📖 Olvidosdegranada', value: 'olvidos' },
        { title: '🎨 Proyectos Artísticos', value: 'artistic' },
        { title: '🏆 Reconocimientos', value: 'recognition' },
        { title: '📰 Prensa y Media', value: 'media' },
        { title: '🎬 Publicaciones', value: 'publications' },
        { title: '🎭 Eventos Culturales', value: 'cultural' },
      ], },
    }),
    defineField({
      name: 'importance',
      title: 'Importancia',
      type: 'string',
      options: { list: [
        { title: '⭐ Normal', value: 'normal' },
        { title: '⭐⭐ Importante', value: 'important' },
        { title: '⭐⭐⭐ Fundamental', value: 'fundamental' },
      ], },
      initialValue: 'normal',
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
      title: 'Enlaces Relacionados',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Título', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
            { name: 'type', title: 'Tipo',
              type: 'string',
              options: { list: [
                { title: 'Fuente primaria', value: 'primary' },
                { title: 'Artículo', value: 'article' },
                { title: 'Video', value: 'video' },
                { title: 'Documento', value: 'document' },
              ], },
            },
          ], },
        },
      ], },
    }),
    defineField({
      name: 'tags',
      title: 'Etiquetas',
      type: 'array',
      of: [{ type: 'string' }], },
      options: {
        layout: 'tags',
      },
    }),
  ], },
  orderings: [
    {
      title: 'Cronológico',
      name: 'chronological',
      by: [
        { field: 'date.year', direction: 'asc' },
        { field: 'date.month', direction: 'asc' },
        { field: 'date.day', direction: 'asc' },
      ], },
    },
  ], },
  preview: {
    select: {
      title: 'title',
      subtitle: 'displayDate',
    },
  },
})
