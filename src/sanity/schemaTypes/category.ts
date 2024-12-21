import { defineField } from "sanity"

export const Category = defineField({
    name: "category",
    type: "document",
    title: "Category",
    fields: [
        {
            name: "name",
            title: "Name of Category",
            type: "string",
            validation: (Rule) => Rule.required(),

        }
    ]
})