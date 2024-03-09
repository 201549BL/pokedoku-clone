import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run pokedoku-clone:serve:development',
        production: 'nx run pokedoku-clone:serve:production',
      },
      ciWebServerCommand: 'nx run pokedoku-clone:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
