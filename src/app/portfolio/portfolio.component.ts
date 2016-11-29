import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { IPortfolio } from './portfolio';
import { PortfolioService } from './portfolio.service';
@Component({
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

    pageTitle: string = 'portfolio List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    portfolios: IPortfolio[];

  constructor(private _portfolioService: PortfolioService, title: Title) {
            title.setTitle('My App - portfolio');
   }

  ngOnInit():void {
    this._portfolioService.getPortfolios()
                .subscribe(portfolios => this.portfolios = portfolios,
                           error => this.errorMessage = <any>error);
  }

}
