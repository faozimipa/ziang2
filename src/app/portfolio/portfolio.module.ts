import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioDetailComponent} from './detail/portfolio-detail.component';
import { PortfolioService } from './portfolio.service';

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild([
            { path: 'portfolio', component: PortfolioComponent },
            { path: 'portfolio/:id',
              component: PortfolioDetailComponent },
        ])
  ],
  declarations: [
    PortfolioComponent,
    PortfolioDetailComponent
    ],
    
    providers: [
        PortfolioService,
    ]
})
export class PortfolioModule { }
