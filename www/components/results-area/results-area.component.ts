import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'results-area',
	template: `
		<div *ngFor="#item of items">
			<div [innerHTML]="item.content.$t"></div>
		</div>
    `
})

export class ResultsAreaComponent {

	public items;

	constructor(http: Http) {

		http.get('https://spreadsheets.google.com/feeds/cells/1MJ0qymz3GupiclvulTXgDm1hW03mN9hBCL9_vGakh98/1/public/basic?min-row=1&max-row=1&alt=json')
			.map((res) => res.json())
			.subscribe((data) => {

				this.items = data.feed.entry;

			});

	}

}
