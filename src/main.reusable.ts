import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { PlatformRef } from '@angular/core';
import { CONFIG } from './app/config.token';

async function bootstrapWithConfig(
  configPath: string,
  ...args: Parameters<PlatformRef['bootstrapModule']>
) {
  const res = await fetch(configPath);
  const config = await res.json();

  return platformBrowserDynamic([
    { provide: CONFIG, useValue: config },
  ]).bootstrapModule(...args);
}

bootstrapWithConfig('config.json', AppModule).catch(console.error);
