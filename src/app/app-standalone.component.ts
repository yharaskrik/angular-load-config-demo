import { Component, inject } from '@angular/core';
import { CONFIG } from './config.token';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'client-root',
  template: `{{ config | json }}`,
  standalone: true,
  imports: [JsonPipe],
})
export class AppStandaloneComponent {
  config = inject(CONFIG);

  constructor() {
    console.log(this.config);
  }
}
