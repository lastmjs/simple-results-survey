import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink, Location} from 'angular2/router';
import {ResultsAreaComponent} from '../results-area/results-area.component.ts';
import {ResultDetailComponent} from '../result-detail/result-detail.component.ts';
import {PrivacyPolicyComponent} from '../privacy-policy/privacy-policy.component.ts';
import {EmbeddedFormComponent} from '../embedded-form/embedded-form.component.ts';
import {TxtFileDataService} from '../../services/txt-file-data.service.ts';

@Component({
	selector: 'app',
	templateUrl: 'www/components/app/app.html',
	directives: [RouterOutlet, RouterLink]
})

@RouteConfig([
	{ path: '/', name: 'Results', component: ResultsAreaComponent },
	{ path: '/form', name: 'Form', component:  EmbeddedFormComponent },
	{ path: '/detail/:items', name: 'Detail', component:  ResultDetailComponent },
	{ path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicyComponent }
])

export class AppComponent {

	public pageTitle: string;
	public location: Location;

	constructor(txtFileDataService: TxtFileDataService, location: Location) {

		this.location = location;

		console.log(location.path())

		txtFileDataService.loadPageTitle().subscribe((data) => {
			this.pageTitle = data;
		});
	}

}
