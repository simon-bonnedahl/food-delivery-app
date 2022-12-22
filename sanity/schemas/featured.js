import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of the featured category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Description of the featured category',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of: [{ type: "reference", to:[{type: "restaurant"}]}] 
    }),
    
  ],
  
})
