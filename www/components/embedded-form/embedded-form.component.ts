import {Component} from 'angular2/core';
import {TxtFileDataService} from '../../services/txt-file-data.service.ts';

@Component({
	selector: 'embedded-form',
	template: `
        <div style="position: relative; height: 100vh; overflow: hidden; box-shadow: 0px 0px 5px grey">
            <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" height="250" width="250" [src]="formUrl" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        </div>
    `
})

export class EmbeddedFormComponent {

	public formUrl: string;

	constructor(txtFileDataService: TxtFileDataService) {
		txtFileDataService.loadFormUrl().subscribe((data) => {
			if (data.trim() !== '') {
				this.formUrl = data;
			}
		});
	}

}
