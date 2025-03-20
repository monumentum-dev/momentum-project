import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'grid',
  title: 'Siatka obrazów',
  type: 'document',
  fields: [
    defineField({
      name: 'gridTitle',
      title: 'Tytuł',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Obrazy',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'images' }] }],
      validation: (Rule) => Rule.required().min(1),
    }),
     
  ],
});
