import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {ResultsAreaComponent} from '../results-area/results-area.component.ts';
import {ResultDetailComponent} from '../result-detail/result-detail.component.ts';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'app',
	templateUrl: 'www/components/app/app.html',
	directives: [RouterOutlet]
})

@RouteConfig([
	{ path: '/', name: 'Results', component: ResultsAreaComponent },
	{ path: '/detail/:items', name: 'Detail', component:  ResultDetailComponent }
])

export class AppComponent {

	public pageTitle = '';

	constructor(http: Http) {

		http.get('page-title.txt')
			.map((res) => res.text())
			.subscribe((data) => {
				this.pageTitle = data;
			});

	}

}
