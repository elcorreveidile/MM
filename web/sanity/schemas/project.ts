import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Proyecto de Mariano Maresca',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Proyecto',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of the title',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'type',
      title: 'Tipo de Proyecto',
      type: 'string',
      options: [
        { title: '📰 Revista', value: 'magazine' },
        { title: '📚 Libro', value: 'book' },
        { title: '🎵 Música', value: 'music' },
        { title: '🎬 Cine', value: 'cinema' },
        { title: '📻 Radio/TV', value: 'media' },
        { title: '🎨 Exposición', value: 'exhibition' },
        { title: '✍️ Columna', value: 'column' },
        { title: '🎭 Evento Cultural', value: 'event' },
      ],
    }),
    defineField({
      name: 'years',
      title: 'Periodo',
      type: 'object',
      fields: [
        { name: 'start', title: 'Año Inicio', type: 'number' },
        { name: 'end', title: 'Año Fin', type: 'number' },
      ],
    }),
    defineField({
      name: 'displayYear',
      title: 'Año para Mostrar',
      type: 'string',
      description: 'Formato: "1983" o "1984-87"',
    }),
    defineField({
      name: 'discipline',
      title: 'Disciplina Artística',
      type: 'string',
      options: [
        { title: 'Literatura', value: 'literature' },
        { title: 'Música', value: 'music' },
        { title: 'Cine', value: 'cinema' },
        { title: 'Fotografía', value: 'photography' },
        { title: 'Arquitectura', value: 'architecture' },
        { title: 'Diseño', value: 'design' },
        { title: 'Cómic', value: 'comics' },
        { title: 'Filosofía', value: 'philosophy' },
        { title: 'Interdisciplinar', value: 'interdisciplinary' },
      ],
    }),
    defineField({
      name: 'shortDescription',
      title: 'Descripción Corta',
      type: 'text',
      rows: 2,
      description: 'Para cards y listados (máx 150 caracteres)',
    }),
    defineField({
      name: 'description',
      title: 'Descripción Completa',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          fields: [
            { name: 'caption', title: 'Pie de foto', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'role',
      title: 'Rol de Mariano',
      type: 'string',
      options: [
        { title: 'Director', value: 'director' },
        { title: 'Editor', value: 'editor' },
        { title: 'Autor', value: 'author' },
        { title: 'Coautor', value: 'coauthor' },
        { title: 'Columnista', value: 'columnist' },
        { title: 'Colaborador', value: 'collaborator' },
        { title: 'Productor', value: 'producer' },
        { title: 'Organizador', value: 'organizer' },
      ],
    }),
    defineField({
      name: 'collaborators',
      title: 'Colaboradores',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Nombre', type: 'string' },
            { name: 'role', title: 'Rol', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'links',
      title: 'Enlaces y Recursos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Título', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
            { name: 'type', title: 'Tipo',
              options: [
                { title: 'Fuente primaria', value: 'primary' },
                { title: 'PDF/Documento', value: 'document' },
                { title: 'Video', value: 'video' },
                { title: 'Audio', value: 'audio' },
              ],
            },
          ],
        },
      ],
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
          ],
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Destacado',
      type: 'boolean',
      initialValue: false,
      description: 'Marcar para mostrar en homepage',
    }),
    defineField({
      name: 'order',
      title: 'Orden de Prioridad',
      type: 'number',
      description: 'Menor número = mayor prioridad',
    }),
    defineField({
      name: 'sources',
      title: 'Fuentes',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Fuentes donde se encontró información',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'displayYear',
    },
  },
})
