import {Component} from 'angular2/core';

@Component({
	selector: 'embedded-form',
	template: `
        <div style="position: relative; height: 100vh; overflow: hidden; box-shadow: 0px 0px 5px grey">
            <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" height="250" width="250" src="https://docs.google.com/forms/d/1T_6y_mC1lF25TP6tS41Dt-CElz2nl3nZyhfJLprP_ko/viewform?embedded=true#start=embed" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        </div>
    `
})

export class EmbeddedFormComponent {

	constructor() {
        console.log(document.getElementById('main-container'));
	}

}
