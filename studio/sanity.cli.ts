import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'v80itf9g',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  studioHost: 'kompetansesenteret-nlp',
});
