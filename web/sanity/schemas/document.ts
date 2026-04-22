import { defineField, defineType } from 'sanity'

export const documentSchema = defineType({
  name: 'document',
  title: 'Documento de Archivo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Documento',
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
      name: 'type',
      title: 'Tipo de Documento',
      type: 'string',
      options: {
        list: [
          { title: '📄 Artículo', value: 'article' },
          { title: '✉️ Carta', value: 'letter' },
          { title: '📷 Fotografía', value: 'photo' },
          { title: '📝 Manuscrito', value: 'manuscript' },
          { title: '📖 Revista Olvidos', value: 'magazine' },
          { title: '🎤 Entrevista', value: 'interview' },
          { title: '🎬 Programa TV/Radio', value: 'program' },
          { title: '📊 Otro documento', value: 'other' },
        ], },
      },
    }),
    defineField({
      name: 'date',
      title: 'Fecha del Documento',
      type: 'date',
    }),
    defineField({
      name: 'displayDate',
      title: 'Fecha para Mostrar',
      type: 'string',
    }),
    defineField({
      name: 'source',
      title: 'Fuente Original',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Contenido Completo',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }], },
    }),
    defineField({
      name: 'file',
      title: 'Archivo Digital',
      type: 'file',
    }),
    defineField({
      name: 'images',
      title: 'Imágenes',
      type: 'array',
      of: [{ type: 'image' }], },
    }),
    defineField({
      name: 'tags',
      title: 'Etiquetas',
      type: 'array',
      of: [{ type: 'string' }], },
    }),
    defineField({
      name: 'discipline',
      title: 'Disciplina',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Destacado',
      type: 'boolean',
      initialValue: false,
    }),
  ], },
})
