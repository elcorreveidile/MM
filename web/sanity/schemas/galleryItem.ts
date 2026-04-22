import { defineField, defineType } from 'sanity'

export const galleryItemSchema = defineType({
  name: 'galleryItem',
  title: 'Elemento de Galería',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Tipo de Media',
      type: 'string',
      options: { list: [
        { title: '📷 Fotografía', value: 'photo' },
        { title: '🎬 Video', value: 'video' },
        { title: '🎵 Audio', value: 'audio' },
        { title: '📄 Documento Escaneado', value: 'scanned' },
      ], },
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'date',
      title: 'Fecha',
      type: 'date',
    }),
    defineField({
      name: 'displayDate',
      title: 'Fecha para Mostrar',
      type: 'string',
    }),
    defineField({
      name: 'media',
      title: 'Archivo Multimedia',
      type: 'file',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Miniatura',
      type: 'image',
    }),
    defineField({
      name: 'discipline',
      title: 'Disciplina Artística',
      type: 'string',
      options: { list: [
        { title: 'Literatura', value: 'literature' },
        { title: 'Música', value: 'music' },
        { title: 'Cine', value: 'cinema' },
        { title: 'Fotografía', value: 'photography' },
        { title: 'Arquitectura', value: 'architecture' },
        { title: 'Diseño', value: 'design' },
        { title: 'Cómic', value: 'comics' },
        { title: 'Filosofía', value: 'philosophy' },
        { title: 'General', value: 'general' },
      ], },
    }),
    defineField({
      name: 'relatedProjects',
      title: 'Proyectos Relacionados',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }], },
    }),
    defineField({
      name: 'relatedEvents',
      title: 'Eventos Relacionados',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'event' }] }], },
    }),
    defineField({
      name: 'tags',
      title: 'Etiquetas',
      type: 'array',
      of: [{ type: 'string' }], },
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
    }),
  ], },
})
