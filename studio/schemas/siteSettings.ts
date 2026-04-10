import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Nettstedsinnstillinger',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Tittel', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'phone', title: 'Telefon', type: 'string' }),
    defineField({ name: 'email', title: 'E-post', type: 'string' }),
    defineField({ name: 'address', title: 'Adresse', type: 'text' }),
    defineField({ name: 'orgNumber', title: 'Org.nr', type: 'string' }),
    defineField({
      name: 'social',
      title: 'Sosiale medier',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'platform', type: 'string' },
        { name: 'url', type: 'url' },
      ]}],
    }),
  ],
});
