import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run Naveen-UI:serve:development',
        production: 'nx run Naveen-UI:serve:production',
      },
      ciWebServerCommand: 'nx run Naveen-UI:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
