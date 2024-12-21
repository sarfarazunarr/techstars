import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './blog'
import { Category } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, Category],
}
