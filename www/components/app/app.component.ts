import {Component} from 'angular2/core';
import {ResultsAreaComponent} from '../results-area/results-area.component.ts';

@Component({
	selector: 'app',
	templateUrl: 'components/app/app.html',
	directives: [ResultsAreaComponent]
})

export class AppComponent {

}
