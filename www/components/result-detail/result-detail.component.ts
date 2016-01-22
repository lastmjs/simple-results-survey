import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
	selector: 'result-detail',
	template: `
		Detail!!!
    `
})

export class ResultDetailComponent {

	private routeParams: RouteParams;

	constructor(routeParams: RouteParams) {
		this.routeParams = routeParams;

		alert(this.routeParams.get('info'));
	}



}
