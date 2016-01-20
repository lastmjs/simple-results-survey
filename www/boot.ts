import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './components/app/app.component.ts';
import {ResultsAreaComponent} from './components/results-area/results-area.component.ts';
import {HTTP_PROVIDERS} from 'angular2/http';
import {PrepareJsonService} from './services/prepare-json.service.ts';

bootstrap(AppComponent, [ResultsAreaComponent, HTTP_PROVIDERS, PrepareJsonService]);
