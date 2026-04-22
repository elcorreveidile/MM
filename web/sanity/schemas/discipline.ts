import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'discipline',
  title: 'Disciplina Artística',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'icon',
      title: 'Icono Emoji',
      type: 'string',
      description: 'Emoji para representar la disciplina (ej: 📚 para Literatura)',
    }),
    defineField({
      name: 'color',
      title: 'Color de Categoría',
      type: 'string',
      description: 'Clase de Tailwind para el color (ej: bg-amber-100 text-amber-800)',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Descripción Corta',
      type: 'text',
      rows: 2,
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
      name: 'projects',
      title: 'Proyectos Destacados',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }],
        },
      ],
    }),
    defineField({
      name: 'relatedEvents',
      title: 'Eventos Relacionados',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'event' }],
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
      name: 'order',
      title: 'Orden',
      type: 'number',
      description: 'Orden de aparición en listados',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
