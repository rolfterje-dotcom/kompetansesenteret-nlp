import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'clientLogo',
  title: 'Kundelogo',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Navn', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'url', title: 'URL', type: 'url' }),
  ],
});
