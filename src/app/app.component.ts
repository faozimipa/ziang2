import { Component } from '@angular/core';
import { HeaderComponent } from './common/header.component';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  viewProviders: [Title],
  template: `<app-header></app-header>
      <div class="container">
        <router-outlet></router-outlet>
        <app-footer></app-footer>
      </div>  
       `,
})
export class AppComponent {
  constructor(title: Title) {
        title.setTitle('My App - Page Title');
    }
}
