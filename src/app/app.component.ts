import { Component } from '@angular/core';
import {Header} from './common/header';
//import { header } from './common/header';

@Component({
  selector: 'app-root',
  templateUrl: `<header></header>
<router-outlet></router-outlet>
 `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works bro!';
}
