import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IPortfolio } from './portfolio';

@Injectable()
export class PortfolioService {
    private _portfolioUrl = 'api/portfolios/portfolios.json';

    constructor(private _http: Http) {}

    getPortfolios(): Observable<IPortfolio[]> {
        return this._http.get(this._portfolioUrl)
            .map((response: Response) => <IPortfolio[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
