import { defineConfig } from 'sanity'

export default defineConfig({
  projectId: 'demo',
  dataset: 'production',
  title: 'Mariano Maresca - CMS',
  basePath: '/studio',
  schema: {
    types: [
      {
        name: 'biography',
        title: 'Biografía',
        type: 'document',
        fields: [
          { name: 'name', title: 'Nombre', type: 'string' },
          { name: 'birthYear', title: 'Año de nacimiento', type: 'number' },
          { name: 'deathYear', title: 'Año de fallecimiento', type: 'number' },
          { name: 'profession', title: 'Profesión', type: 'string' },
          { name: 'bio', title: 'Biografía completa', type: 'text', rows: 10 },
          { name: 'summary', title: 'Resumen', type: 'text' },
          { name: 'image', title: 'Foto principal', type: 'image' },
        ],
      },
      {
        name: 'event',
        title: 'Evento cronológico',
        type: 'document',
        fields: [
          { name: 'title', title: 'Título', type: 'string' },
          { name: 'date', title: 'Fecha', type: 'date' },
          { name: 'description', title: 'Descripción', type: 'text' },
          { name: 'category', title: 'Categoría',
            type: 'string',
            options: [
              { title: 'Vida personal', value: 'personal' },
              { title: 'Académico', value: 'academic' },
              { title: 'Olvidosdegranada', value: 'olvidos' },
              { title: 'Proyectos artísticos', value: 'artistic' },
              { title: 'Reconocimientos', value: 'recognition' },
            ]
          },
          { name: 'images', title: 'Imágenes', type: 'array', of: [{ type: 'image' }] },
        ],
      },
      {
        name: 'document',
        title: 'Documento de archivo',
        type: 'document',
        fields: [
          { name: 'title', title: 'Título', type: 'string' },
          { name: 'date', title: 'Fecha', type: 'date' },
          { name: 'type', title: 'Tipo de documento',
            type: 'string',
            options: [
              { title: 'Artículo', value: 'article' },
              { title: 'Carta', value: 'letter' },
              { title: 'Fotografía', value: 'photo' },
              { title: 'Manuscrito', value: 'manuscript' },
              { title: 'Revista Olvidos', value: 'magazine' },
              { title: 'Entrevista', value: 'interview' },
            ]
          },
          { name: 'description', title: 'Descripción', type: 'text' },
          { name: 'file', title: 'Archivo', type: 'file' },
          { name: 'images', title: 'Imágenes', type: 'array', of: [{ type: 'image' }] },
          { name: 'tags', title: 'Etiquetas', type: 'array', of: [{ type: 'string' }] },
        ],
      },
      {
        name: 'galleryItem',
        title: 'Elemento de galería',
        type: 'document',
        fields: [
          { name: 'title', title: 'Título', type: 'string' },
          { name: 'description', title: 'Descripción', type: 'text' },
          { name: 'category', title: 'Categoría',
            type: 'string',
            options: [
              { title: 'Fotografía', value: 'photo' },
              { title: 'Video', value: 'video' },
              { title: 'Audio', value: 'audio' },
              { title: 'Documento', value: 'document' },
            ]
          },
          { name: 'media', title: 'Archivo multimedia', type: 'file' },
          { name: 'thumbnail', title: 'Miniatura', type: 'image' },
          { name: 'order', title: 'Orden', type: 'number' },
          { name: 'discipline', title: 'Disciplina artística',
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
            ]
          },
        ],
      },
      {
        name: 'discipline',
        title: 'Disciplina artística',
        type: 'document',
        fields: [
          { name: 'title', title: 'Título', type: 'string' },
          { name: 'slug', title: 'Slug', type: 'slug' },
          { name: 'description', title: 'Descripción', type: 'text' },
          { name: 'content', title: 'Contenido detallado', type: 'array',
            of: [
              { type: 'block' },
              { type: 'image', fields: [{ name: 'caption', title: 'Pie de foto', type: 'string' }] }
            ]
          },
          { name: 'projects', title: 'Proyectos destacados', type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'name', title: 'Nombre', type: 'string' },
                  { name: 'year', title: 'Año', type: 'number' },
                  { name: 'description', title: 'Descripción', type: 'text' },
                ],
              },
            ],
          },
          { name: 'images', title: 'Imágenes', type: 'array', of: [{ type: 'image' }] },
        ],
      },
      {
        name: 'exhibition',
        title: 'Información de la exposición',
        type: 'document',
        fields: [
          { name: 'title', title: 'Título', type: 'string' },
          { name: 'subtitle', title: 'Subtítulo', type: 'string' },
          { name: 'venue', title: 'Lugar', type: 'string' },
          { name: 'address', title: 'Dirección', type: 'string' },
          { name: 'startDate', title: 'Fecha de inicio', type: 'date' },
          { name: 'endDate', title: 'Fecha de fin', type: 'date' },
          { name: 'description', title: 'Descripción', type: 'text' },
          { name: 'curators', title: 'Comisarios', type: 'array', of: [{ type: 'string' }] },
          { name: 'organizers', title: 'Organizadores', type: 'array', of: [{ type: 'string' }] },
          { name: 'schedule', title: 'Horario', type: 'string' },
          { name: 'admission', title: 'Entrada', type: 'string' },
        ],
      },
    ],
  },
})
