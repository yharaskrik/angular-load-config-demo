import { ENVIRONMENT_INITIALIZER, inject } from '@angular/core';
import { CONFIG } from './config.token';
import { DOCUMENT } from '@angular/common';

export function provideSsrConfig() {
  return {
    provide: ENVIRONMENT_INITIALIZER,
    useValue() {
      const config = inject(CONFIG);
      const document = inject(DOCUMENT);
      const script = document.createElement('script');
      script.type = 'text/javascript';

      script.text = `
      	config = ${JSON.stringify(config)}
      `;

      document.head.insertBefore(script, document.head.firstChild);
    },
    multi: true,
  };
}
