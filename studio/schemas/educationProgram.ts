import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'educationProgram',
  title: 'Utdanning',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Tittel', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'level', title: 'Nivå', type: 'string' }),
    defineField({ name: 'duration', title: 'Varighet', type: 'string' }),
    defineField({ name: 'price', title: 'Pris', type: 'string' }),
    defineField({ name: 'blurb', title: 'Kort beskrivelse', type: 'text' }),
    defineField({ name: 'description', title: 'Full beskrivelse', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'image', title: 'Bilde', type: 'image' }),
    defineField({ name: 'featured', title: 'Fremhevet', type: 'boolean' }),
    defineField({ name: 'order', title: 'Sortering', type: 'number' }),
  ],
});
