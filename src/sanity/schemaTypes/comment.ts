import { defineField } from "sanity";

export const Comment = defineField({
    name: "comment",
    type: "document",
    title: "Comment",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name",
            validation: (Rule) => Rule.required()
        },
        {
            name: "email",
            type: "string",
            title: "Email",
            validation: (Rule) => Rule.email()
        },
        {
            name: "comment",
            type: "string",
            title: "Comment",
            validation: (Rule) => Rule.required()
        },
        {
            name: "slug",
            type: "string",
            title: "Slug"
        },
        {
            title: 'Date',
            name: 'commentTime',
            type: 'datetime',
            options: {
              dateFormat: 'YYYY-MM-DD',
              timeFormat: 'HH:mm',
              timeStep: 15,
              calendarTodayLabel: 'Today'
            }
          }
    ]
})