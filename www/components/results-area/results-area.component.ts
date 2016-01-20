import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {PrepareJsonService} from '../../services/prepare-json.service.ts';
import 'rxjs/add/operator/map';

@Component({
	selector: 'results-area',
	template: `
		<div style="display: flex; flex-direction: row">
			<div *ngFor="#title of titles" style="flex: 1">
				<div [innerHTML]="title" style="color: grey; font-size: .75em"></div>
			</div>
		</div>

		<div *ngFor="#items of values" style="padding: 5px; box-shadow: 0px 0px 0px 1px grey">
			<div style="display: flex; flex-direction: row">
				<div *ngFor="#value of items" [innerHTML]="value" style="flex: 1"></div>
			</div>
		</div>
    `
})

export class ResultsAreaComponent {

	public titles;
	public values;

	constructor(http: Http, prepareJson: PrepareJsonService) {

		http.get('https://spreadsheets.google.com/feeds/cells/1MJ0qymz3GupiclvulTXgDm1hW03mN9hBCL9_vGakh98/1/public/basic?alt=json')
			.map((res) => res.json())
			.subscribe((data) => {
				this.titles = prepareJson.getTitles(data.feed.entry);
				this.values = prepareJson.getValues(data.feed.entry);
			});

	}

}
