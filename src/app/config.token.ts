import { InjectionToken, Provider } from '@angular/core';
import { makeStateKey } from '@angular/platform-browser';

export const CONFIG = new InjectionToken<{ message: string }>('config-token');

export function provideConfig(config: unknown): Provider {
  return {
    provide: CONFIG,
    useValue: config,
  };
}
