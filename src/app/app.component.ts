import { Component, inject } from '@angular/core';
import { CONFIG } from './config.token';

@Component({
  selector: 'client-root',
  template: `{{ config | json }}`,
})
export class AppComponent {
  config = inject(CONFIG);

  constructor() {
    console.log(this.config);
  }
}
