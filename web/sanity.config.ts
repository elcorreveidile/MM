import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

export default defineConfig({
  projectId: 'demo',
  dataset: 'production',
  title: 'Mariano Maresca - CMS',
  basePath: '/studio',

  plugins: [
    structureTool(),
  ],

  schema: {
    types: [
      // Schemas will be auto-imported from sanity/schemas
      'biography',
      'event',
      'project',
      'document',
      'galleryItem',
      'discipline',
      'exhibition',
    ],
  },
})
