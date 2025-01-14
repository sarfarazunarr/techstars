import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './blog'
import { Category } from './category'
import { Comment } from './comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, Category, Comment],
}
