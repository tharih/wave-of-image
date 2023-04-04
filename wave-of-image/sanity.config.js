import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from '../src/schemas'

export default defineConfig({
  name: 'wave-of-image',
  title: 'wave-of-image',

  projectId: 'xg3ihi80',
  dataset: 'production',

  plugins: [deskTool()],
  // , visionTool()

  schema: {
    types: schemaTypes,
  },
})
