import {Component} from 'angular2/core';

@Component({
	selector: 'privacy-policy',
	template: `
        <p>This app collects no user information except information that may be collected by use of the Google Sheets api and from the embedded Google Form.</p>
	<p>See the <a href="https://www.google.com/policies/privacy/">Google privacy policy</a> for more information.</p>
	<p>All data entered into the Google Form will be displayed publicly and may be used for any lawful purpose.</p>
    `
})

export class PrivacyPolicyComponent {
	constructor() {

	}
}
