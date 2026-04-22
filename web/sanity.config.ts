import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import biography from './sanity/schemas/biography'
import event from './sanity/schemas/event'
import project from './sanity/schemas/project'
import document from './sanity/schemas/document'
import galleryItem from './sanity/schemas/galleryItem'
import discipline from './sanity/schemas/discipline'
import exhibition from './sanity/schemas/exhibition'

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
      biography,
      event,
      project,
      document,
      galleryItem,
      discipline,
      exhibition,
    ],
  },
})
