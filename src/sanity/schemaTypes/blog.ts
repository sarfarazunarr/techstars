import { defineField } from "sanity";

export const blog = defineField({
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
              options: {
                isHighlighted: true
              }
            }
          ]
        }
      ]
    },
    {
      name: "category",
      type: "reference",
      title: "Category",
      to: [{ type: "category" }]
    },
    {
      name: "meta_description",
      type: "string",
      title: "Meta Description",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }]
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96
      }
    }
  ]
})