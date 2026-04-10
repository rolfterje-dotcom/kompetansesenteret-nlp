import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Tjeneste',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Tittel', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'icon', title: 'Ikon (emoji)', type: 'string' }),
    defineField({ name: 'description', title: 'Beskrivelse', type: 'text' }),
    defineField({ name: 'order', title: 'Sortering', type: 'number' }),
  ],
});
