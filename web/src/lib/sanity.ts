import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const PROJECT_ID = 'v80itf9g';
const DATASET = 'production';

export const sanity = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanity);
export const urlFor = (source: any) => builder.image(source);
