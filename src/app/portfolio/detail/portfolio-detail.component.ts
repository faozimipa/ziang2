import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPortfolio } from './../portfolio';

@Component({
    templateUrl: 'portfolio-detail.component.html'
})
export class PortfolioDetailComponent implements OnInit {
    pageTitle: string = 'Portfolio Detail';
    portfolio: IPortfolio;

    constructor(private _route: ActivatedRoute,
                private _router: Router) {
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['/portfolio']);
    }
}
