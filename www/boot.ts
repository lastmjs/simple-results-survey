import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './components/app/app.component.ts';
import {ResultsAreaComponent} from './components/results-area/results-area.component.ts';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {SheetDataService} from './services/sheet-data.service.ts';
import {TxtFileDataService} from './services/txt-file-data.service.ts';
import {provide} from 'angular2/core';

bootstrap(AppComponent, [ResultsAreaComponent, HTTP_PROVIDERS, ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy }), SheetDataService, TxtFileDataService]);
