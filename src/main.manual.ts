import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { CONFIG } from './app/config.token';

fetch('config.json')
  .then((res) => res.json())
  .then((config) => {
    platformBrowserDynamic([
      {
        provide: CONFIG,
        useValue: config,
      },
    ])
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  });
