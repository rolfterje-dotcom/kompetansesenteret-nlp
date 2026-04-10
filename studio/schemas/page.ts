import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Side',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Tittel', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'lead', title: 'Ingress', type: 'text' }),
    defineField({
      name: 'body',
      title: 'Innhold',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
    defineField({ name: 'seoDescription', title: 'SEO beskrivelse', type: 'text' }),
  ],
});
