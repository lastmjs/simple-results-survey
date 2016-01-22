import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {ResultsAreaComponent} from '../results-area/results-area.component.ts';
import {ResultDetailComponent} from '../result-detail/result-detail.component.ts';

@Component({
	selector: 'app',
	templateUrl: 'www/components/app/app.html',
	directives: [RouterOutlet]
})

@RouteConfig([
	{ path: '/', name: 'Results', component: ResultsAreaComponent },
	{ path: '/detail/:titles/:values', name: 'Detail', component:  ResultDetailComponent }
])

export class AppComponent {

}
