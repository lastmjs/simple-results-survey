import {Component} from 'angular2/core';

@Component({
	selector: 'privacy-policy',
	template: `
        <p>This app collects no user information except information that may be collected by use of the Google Sheets api. See the <a href="https://www.google.com/policies/privacy/">Google privacy policy</a> for more information.</p>
    `
})

export class PrivacyPolicyComponent {
	constructor() {

	}
}
