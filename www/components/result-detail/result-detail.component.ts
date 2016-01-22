import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
	selector: 'result-detail',
	template: `
		<div style="display: flex; flex-direction: column; background-color: white; padding: 20px; box-shadow: 0px 0px 1px grey; margin-left: 15vw; margin-right: 15vw">
			<div *ngFor="#item of items" style="margin-top: 10px; margin-bottom: 10px;">
				<div style="color: grey; font-size: .75em; margin-bottom: 5px">{{item.title}}</div>
				<div>{{item.value}}</div>
			</div>
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
				title: decodeURIComponent(arrayFromString[0]),
				value: decodeURIComponent(arrayFromString[1])
			});
		});
	}

}
