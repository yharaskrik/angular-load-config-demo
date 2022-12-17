import { InjectionToken } from '@angular/core';

export const CONFIG = new InjectionToken<{ message: string }>('config-token');
