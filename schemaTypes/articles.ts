import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'blogPost',
  title: 'Artykuły',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      description: 'Tytuł artykułu (min. 10, max. 100 znaków)',
      validation: (Rule) => Rule.required().min(10).max(100),
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
      name: 'attendee',
      title: 'Uczestnik',
      type: 'reference',
      to: [{ type: 'members' }],
      description: 'Członek biorący udział w wydarzeniu',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data publikacji',
      type: 'datetime',
      description: 'Data opublikowania artykułu.',
    }),
    defineField({
      name: 'mainImage',
      title: 'Główne zdjęcie',
      type: 'image',
      options: { hotspot: true },
      description: 'Główne zdjęcie artykułu.',
    }),
    defineField({
      name: 'excerpt',
      title: 'Zajawka',
      type: 'text',
      description: 'Krótki opis artykułu (max. 200 znaków).',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'content',
      title: 'Treść',
      type: 'array',
      description: 'Główna treść artykułu, zawierająca tekst oraz obrazy.',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'images',
      title: 'Galeria dodatkowych zdjęć powiązanych z artykułem.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'images' }] }],
      validation: (Rule) => Rule.required().min(1),
    }),    
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      description: 'Ustawienia SEO dla artykułu.',
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
          description: 'Opis artykułu wyświetlany w wynikach wyszukiwania (max. 160 znaków).',
          validation: (Rule) => Rule.max(160),
        }),
        defineField({
          name: 'keywords',
          title: 'Słowa kluczowe',
          type: 'array',
          description: 'Lista słów kluczowych związanych z artykułem.',
          of: [{ type: 'string' }],
        }),
      ],
    }),
  ],
});
