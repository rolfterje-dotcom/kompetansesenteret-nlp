import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Tilbakemelding',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Sitat', type: 'text', validation: (r) => r.required() }),
    defineField({ name: 'author', title: 'Navn', type: 'string' }),
    defineField({ name: 'role', title: 'Rolle', type: 'string' }),
    defineField({ name: 'company', title: 'Selskap', type: 'string' }),
  ],
});
