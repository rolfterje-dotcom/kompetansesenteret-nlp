import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'iis7kgo7',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  studioHost: 'kompetansesenteret-nlp',
});
