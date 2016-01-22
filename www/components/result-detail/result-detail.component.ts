import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
	selector: 'result-detail',
	template: `
		<div *ngFor="#item of items">
			{{item.title}}
			{{item.value}}
		</div>
    `
})

export class ResultDetailComponent {

	public items;

	private routeParams: RouteParams;

	constructor(routeParams: RouteParams) {
		this.routeParams = routeParams;

		this.items = [];

		this.routeParams.get('items').forEach((element) => {
			const arrayFromString = element.split(',');
			this.items.push({
				title: arrayFromString[0],
				value: arrayFromString[1]
			});
		});
	}

}
