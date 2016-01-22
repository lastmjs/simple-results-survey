import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {Router} from 'angular2/router';
import {PrepareJsonService} from '../../services/prepare-json.service.ts';
import 'rxjs/add/operator/map';

@Component({
	selector: 'results-area',
	template: `
		<div style="display: flex; flex-direction: row">
			<div *ngFor="#title of rowTitles" style="flex: 1">
				<div [innerHTML]="title.content" style="color: grey; font-size: .75em"></div>
			</div>
		</div>

		<div *ngFor="#items of rowValues" style="background-color: white; padding: 20px; box-shadow: 0px 0px 1px grey; margin-top: 10px; margin-bottom: 10px; cursor: pointer" (click)="rowClick(items)">
			<div style="display: flex; flex-direction: row">
				<div *ngFor="#value of items" [innerHTML]="value" style="flex: 1"></div>
			</div>
		</div>
    `
})

export class ResultsAreaComponent {

	public rowTitles;
	public rowValues;

	private allTitles;
	private allValues;
	private router: Router;

	constructor(http: Http, prepareJson: PrepareJsonService, router: Router) {

		this.router = router;

		http.get('https://spreadsheets.google.com/feeds/cells/1MJ0qymz3GupiclvulTXgDm1hW03mN9hBCL9_vGakh98/1/public/basic?alt=json')
			.map((res) => res.json())
			.subscribe((data) => {
				const rowTitlesAndValues = prepareJson.getRowTitlesAndValues(data.feed.entry);
				this.rowTitles = rowTitlesAndValues.rowTitles;
				this.rowValues = rowTitlesAndValues.rowValues;

				this.allTitles = prepareJson.getAllTitles(data.feed.entry);
				this.allValues = prepareJson.getAllValues(data.feed.entry);
			});

	}

	rowClick(items) {
		this.router.navigate([
			'Detail', {
				info: items
			}
		]);
	}

}
