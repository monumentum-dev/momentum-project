import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'members',
  title: 'Członkowie',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Imię i Nazwisko',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Unikalny identyfikator generowany na podstawie imieni.',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'academicTitle',
      title: 'Tytuł naukowy',
      type: 'string',
      description: 'Np. Dr, Prof., habilitowany',
    }),
    defineField({
      name: 'photoUrl',
      title: 'URL Zdjęcia',
      type: 'url',
      validation: (Rule) => Rule.uri({ allowRelative: false }),
      description: 'URL do zdjęcia na Cloudinary'
    }),
    defineField({
      name: 'bio',
      title: 'Biografia',
      type: 'text',
      validation: (Rule) => Rule.required().min(50),
      description: 'Krótki opis działalności naukowej i osiągnięć'
    }),
    defineField({
      name: 'researchAreas',
      title: 'Obszary badawcze',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Główne obszary zainteresowań naukowych'
    }),
    defineField({
      name: 'contactEmail',
      title: 'E-mail kontaktowy',
      type: 'string',
      validation: (Rule) => Rule.email(),
      description: 'Służbowy e-mail do kontaktu'
    }),    defineField({
      name: 'publications',
      title: 'Publikacje',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista najważniejszych publikacji'
    }),
    defineField({
      name: 'socialLinks',
      title: 'Linki społecznościowe',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platforma',
              type: 'string',
              description: 'Np. LinkedIn, ResearchGate, Academia.edu'
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.uri({ allowRelative: false })
            })
          ]
        }
      ],
      description: 'Linki do profili naukowych i społecznościowych'
    })
  ],
});
