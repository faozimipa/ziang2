import { Component } from '@angular/core';
import { HeaderComponent } from './common/header.component';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
      <div class="container">
        <router-outlet></router-outlet>
      <app-footer></app-footer>
      </div>  
       `,
})
export class AppComponent {
  title = 'app works bro!';
}
