import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TxtFileDataService {

    public spreadsheetUrl: string;
    public formUrl: string;
    public pageTitle: string;

    private http: Http;

    constructor(http: Http) {
        this.http = http;

        this.loadSpreadsheetUrl();
        this.loadFormUrl();
        this.loadPageTitle();
    }

    loadSpreadsheetUrl() {
        this.http.get('spreadsheet-url.txt')
			.map((res) => res.text())
			.subscribe(async (data) => {
				this.spreadsheetUrl = data;
			});
    }

    loadFormUrl() {
        this.http.get('form-url.txt')
			.map((res) => res.text())
			.subscribe(async (data) => {
				this.formUrl = data;
			});
    }

    loadPageTitle() {
        this.http.get('page-title.txt')
			.map((res) => res.text())
			.subscribe((data) => {
				this.pageTitle = data;
			});
    }

}
