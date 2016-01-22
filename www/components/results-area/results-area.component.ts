import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {Router} from 'angular2/router';
import {PrepareSheetDataService} from '../../services/prepare-sheet-data.service.ts';
import 'rxjs/add/operator/map';

@Component({
	selector: 'results-area',
	template: `
		<div style="display: flex; flex-direction: row">
			<div *ngFor="#title of rowTitles" style="flex: 1; margin-left: 10px">
				<div [innerHTML]="title.content" style="color: grey; font-size: .75em"></div>
			</div>
		</div>

		<div *ngFor="#items of rowValues; #i = index" style="background-color: white; padding: 20px; box-shadow: 0px 0px 1px grey; margin-top: 10px; margin-bottom: 10px; cursor: pointer" (click)="rowClick(i)">
			<div style="display: flex; flex-direction: row">
				<div *ngFor="#value of items" [innerHTML]="value" style="flex: 1"></div>
			</div>
		</div>
    `
})

export class ResultsAreaComponent {

	public rowTitles;
	public rowValues;

	private allTitlesAndValues;
	private router: Router;

	constructor(http: Http, prepareJson: PrepareSheetDataService, router: Router) {

		this.router = router;

		http.get('sheets-url.txt')
			.map((res) => res.text())
			.subscribe((data) => {

				const sheetPublicKey = /d\/(.*)\/pubhtml/.exec(data)[1];

				http.get(`https://spreadsheets.google.com/feeds/cells/${sheetPublicKey}/1/public/basic?alt=json&max-row=1`)
					.map((res) => res.json())
					.subscribe((data) => {
						const allTitles = prepareJson.getAllTitles(data.feed.entry);

						console.log(allTitles)

						http.get(`https://spreadsheets.google.com/feeds/cells/${sheetPublicKey}/1/public/basic?alt=json&min-row=1&min-col=${allTitles.length}`)
							.map((res) => res.json())
							.subscribe((data) => {
								console.log(data)

								const rowTitlesAndValues = prepareJson.getRowTitlesAndValues(data.feed.entry);
								this.rowTitles = rowTitlesAndValues.rowTitles;
								this.rowValues = rowTitlesAndValues.rowValues;

								this.allTitlesAndValues = prepareJson.getAllTitlesAndValues(data.feed.entry);
							});
					});

			});

	}

	rowClick(valuesIndex) {
		console.log(this.allTitlesAndValues[valuesIndex])

		this.router.navigate([
			'Detail', {
				items: this.allTitlesAndValues[valuesIndex]
			}
		]);
	}

}
