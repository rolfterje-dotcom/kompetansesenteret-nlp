import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'course',
  title: 'Kurs',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Tittel', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'category', title: 'Kategori', type: 'string' }),
    defineField({ name: 'description', title: 'Beskrivelse', type: 'text' }),
    defineField({ name: 'duration', title: 'Varighet', type: 'string' }),
    defineField({ name: 'image', title: 'Bilde', type: 'image' }),
  ],
});
