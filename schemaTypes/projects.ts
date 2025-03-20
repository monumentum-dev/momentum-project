import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Projekty',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      description: 'Tytuł projektu (min. 10, max. 100 znaków)',
      validation: (Rule) => Rule.required().min(10).max(100),
    }),
    defineField({
        name: 'author',
        title: 'Autor',
        type: 'string',
      }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Unikalny identyfikator generowany na podstawie tytułu.',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Data rozpoczęcia',
      type: 'datetime',
      description: 'Data rozpoczęcia projektu.',
    }),
    defineField({
      name: 'endDate',
      title: 'Data zakończenia',
      type: 'datetime',
      description: 'Data zakończenia projektu.',
    }),
    defineField({
      name: 'funding',
      title: 'Źródła finansowania',
      type: 'array',
      description: 'Lista źródeł finansowania projektu.',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'mainImage',
      title: 'Główne zdjęcie',
      type: 'image',
      options: { hotspot: true },
      description: 'Główne zdjęcie projektu.',
    }),
    defineField({
      name: 'excerpt',
      title: 'Zajawka',
      type: 'text',
      description: 'Krótki opis projektu (max. 200 znaków).',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'content',
      title: 'Opis projektu',
      type: 'array',
      description: 'Główna treść projektu, zawierająca tekst oraz obrazy.',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'images',
      title: 'Galeria dodatkowych zdjęć powiązanych z projektem.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'images' }] }],
      validation: (Rule) => Rule.required().min(1),
    }),    
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      description: 'Ustawienia SEO dla projektu.',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Tytuł',
          type: 'string',
          description: 'Tytuł wyświetlany w wynikach wyszukiwania (max. 60 znaków).',
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Opis',
          type: 'text',
          description: 'Opis projektu wyświetlany w wynikach wyszukiwania (max. 160 znaków).',
          validation: (Rule) => Rule.max(160),
        }),
        defineField({
          name: 'keywords',
          title: 'Słowa kluczowe',
          type: 'array',
          description: 'Lista słów kluczowych związanych z projektem.',
          of: [{ type: 'string' }],
        }),
      ],
    }),
  ],
});
