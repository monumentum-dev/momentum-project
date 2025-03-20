import { defineField, defineType } from 'sanity';
export default defineField({
    name: 'images',
    title: 'Obrazy',
    type: 'document',   
        fields: [
          defineField({
            name: 'src',
            title: 'URL obrazu',
            type: 'url',
            validation: (Rule) => Rule.required().uri({ allowRelative: false }),
          }),
          defineField({
            name: 'title',
            title: 'Tytuł obrazu',
            type: 'string',           
          }),
          defineField({
            name: 'description',
            title: 'Opis obrazu',
            type: 'text',            
          }),
          defineField({
              name: 'top',
              title: 'Top',
              type: 'boolean',
              initialValue: false,
            }),     
    ],
    description: 'Lista obrazów do wyświetlenia w galerii',
  })