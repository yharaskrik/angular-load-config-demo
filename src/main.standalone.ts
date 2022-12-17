import { CONFIG } from './app/config.token';
import {
  ApplicationConfig,
  bootstrapApplication,
} from '@angular/platform-browser';
import { AppStandaloneComponent } from './app/app-standalone.component';

async function bootstrapWithConfig(
  configPath: string,
  ...args: Parameters<typeof bootstrapApplication>
) {
  const res = await fetch(configPath);
  const config = await res.json();

  const options: ApplicationConfig = args[1] ?? { providers: [] };

  return bootstrapApplication(args[0], {
    ...options,
    providers: [
      ...options.providers,
      {
        provide: CONFIG,
        useValue: config,
      },
    ],
  });
}

bootstrapWithConfig('config.json', AppStandaloneComponent).catch(console.error);
