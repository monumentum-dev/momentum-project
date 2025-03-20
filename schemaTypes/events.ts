import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'events',
  title: 'Imprezy',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Data',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'text',
      validation: (Rule) => Rule.required().min(50),
    }),
    defineField({
      name: 'backgroundImages',
      title: 'Tła wydarzenia',
      type: 'array',
      of: [{ type: 'url' }],
      description: 'Lista URL obrazów z Cloudinary',
    }),
    defineField({
      name: 'mapLink',
      title: 'Mapa',
      type: 'url',
      validation: (Rule) => Rule.uri({ allowRelative: false }),
      description: 'Link do lokalizacji wydarzenia na Google Maps',
    }),
    defineField({
      name: 'attendees',
      title: 'Uczestnicy',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'members' }] }],
      description: 'Lista członków biorących udział w wydarzeniu',
    }),
    defineField({
      name: 'category',
      title: 'Kategoria',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
