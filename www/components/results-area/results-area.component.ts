import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {Router} from 'angular2/router';
import {SheetDataService} from '../../services/sheet-data.service.ts';
import 'rxjs/add/operator/map';

@Component({
	selector: 'results-area',
	template: `
		<div style="display: flex; flex-direction: row">
			<div *ngFor="#title of rowTitles" style="flex: 1; margin-left: 10px">
				<div [innerHTML]="title" style="color: grey; font-size: .75em"></div>
			</div>
		</div>

		<div *ngFor="#value of rowValues; #i = index" style="background-color: white; padding: 20px; box-shadow: 0px 0px 1px grey; margin-top: 10px; margin-bottom: 10px; cursor: pointer" (click)="rowClick(i)">
			<div style="display: flex; flex-direction: row">
				<div *ngFor="#title of Object.keys(value)" [innerHTML]="value[title]" style="flex: 1"></div>
			</div>
		</div>
    `
})

export class ResultsAreaComponent {

	public rowTitles;
	public rowValues;
	public Object;

	private allValues;
	private router: Router;

	constructor(http: Http, sheetDataService: SheetDataService, router: Router) {

		this.Object = Object;
		this.router = router;

		http.get('sheets-url.txt')
			.map((res) => res.text())
			.subscribe(async (sheetUrl) => {
				this.allValues = await sheetDataService.getAllValues(sheetUrl);
				this.rowValues = sheetDataService.getRowValues(this.allValues);
				this.rowTitles = Object.keys(this.rowValues[0]);
			});

	}

	rowClick(valuesIndex) {
		this.router.navigate([
			'Detail', {
				items: this.allValues[valuesIndex]
			}
		]);
	}

}
