import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
	selector: 'result-detail',
	template: `
		<div *ngFor="#value of values" [innerHTML]="value"></div>
    `
})

export class ResultDetailComponent {

	public titles;
	public values;

	private routeParams: RouteParams;

	constructor(routeParams: RouteParams) {
		this.routeParams = routeParams;

		this.titles = this.routeParams.get('titles');
		this.values = this.routeParams.get('values');
	}



}
