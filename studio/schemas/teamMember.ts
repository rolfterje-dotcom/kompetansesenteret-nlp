import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'teamMember',
  title: 'Teammedlem',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Navn', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Rolle', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio', type: 'text' }),
    defineField({ name: 'photo', title: 'Foto', type: 'image' }),
    defineField({ name: 'order', title: 'Sortering', type: 'number' }),
  ],
});
