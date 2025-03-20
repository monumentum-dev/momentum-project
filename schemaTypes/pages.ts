import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pages',
  title: 'Strony',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nazwa Strony',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      name: 'title',
      title: 'Tytul Strony',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Opis Strony (SEO)',
      type: 'text',
      validation: (Rule) => Rule.required().min(50).max(160),
      description: 'Meta opis strony dla SEO (50-160 znaków)'
    }),
    defineField({
      name: 'keywords',
      title: 'Słowa Kluczowe (SEO)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Słowa kluczowe oddzielone przecinkami'
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Obraz wyświetlany podczas udostępniania w mediach społecznościowych (zalecany rozmiar: 1200x630px)',
      options: {
        hotspot: true
      }
    }),
  ],
});