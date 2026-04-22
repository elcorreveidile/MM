import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'biography',
  title: 'Biografía de Mariano Maresca',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Nombre Completo',
      type: 'string',
      description: 'Mariano Maresca García-Esteller',
      initialValue: 'Mariano Maresca García-Esteller',
    }),
    defineField({
      name: 'shortName',
      title: 'Nombre Corto',
      type: 'string',
      initialValue: 'Mariano Maresca',
    }),
    defineField({
      name: 'birth',
      title: 'Nacimiento',
      type: 'object',
      fields: [
        { name: 'year', title: 'Año', type: 'number' },
        { name: 'city', title: 'Ciudad', type: 'string' },
        { name: 'country', title: 'País', type: 'string' },
      ], },
    }),
    defineField({
      name: 'death',
      title: 'Fallecimiento',
      type: 'object',
      fields: [
        { name: 'year', title: 'Año', type: 'number' },
        { name: 'month', title: 'Mes', type: 'string' },
        { name: 'day', title: 'Día', type: 'number' },
        { name: 'city', title: 'Ciudad', type: 'string' },
      ], },
    }),
    defineField({
      name: 'profession',
      title: 'Profesión',
      type: 'string',
      initialValue: 'Profesor de Filosofía del Derecho',
    }),
    defineField({
      name: 'roles',
      title: 'Roles',
      type: 'array',
      of: [{ type: 'string' }], },
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'summary',
      title: 'Resumen Biográfico',
      type: 'text',
      rows: 3,
      description: 'Resumen corto para homepage y meta descripciones',
    }),
    defineField({
      name: 'bio',
      title: 'Biografía Completa',
      type: 'array',
      of: [
        { type: 'block' },
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
      name: 'keyPlaces',
      title: 'Lugares Clave',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Nombre', type: 'string' },
            { name: 'description', title: 'Descripción', type: 'text' },
            { name: 'type', title: 'Tipo',
              type: 'string',
              options: { list: [
                { title: 'Café', value: 'cafe' },
                { title: 'Universidad', value: 'university' },
                { title: 'Espacio cultural', value: 'cultural' },
                { title: 'Otro', value: 'other' },
              ], },
            },
          ], },
        },
      ], },
    }),
    defineField({
      name: 'photo',
      title: 'Foto Principal',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'title', title: 'Título SEO', type: 'string' },
        { name: 'description', title: 'Descripción', type: 'text' },
        { name: 'keywords', title: 'Palabras clave', type: 'array', of: [{ type: 'string' }] },
      ], },
    }),
  ], },
  preview: {
    select: {
      title: 'shortName',
      subtitle: 'profession',
    },
  },
})
