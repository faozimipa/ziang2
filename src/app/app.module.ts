import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';


import { AboutModule } from './about/about.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
     RouterModule.forRoot([
      {
        path:'home',
        component:HomeComponent,
        data:{
          title:'Home'
        }
      },
      { path: '', component: HomeComponent },
      { path: '**', component: PageNotFoundComponent }
     ]),
     PortfolioModule,
     AboutModule,
     ContactModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
