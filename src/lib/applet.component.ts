import { Component } from '@angular/core';
import { AppletApiService } from '@agunity/provider';

export const appletName = '0-my-applet';
@Component({
	selector: 'applet-' + appletName,
	templateUrl: 'applet.component.html',
	styleUrls: ['applet.component.scss'],
})
export class AppletComponent {
	readonly appletName = appletName;
	constructor(private appletApiService: AppletApiService) {
		console.log('applet constructor: ' + appletName);
	}

	showMap(): void {
		this.appletApiService.navigate.subPath(['map']);
	}
	showContact(): void {
		this.appletApiService.navigate.subPath(['contacts']);
	}
	showProfile(): void {
		this.appletApiService.navigate.subPath(['profile']);
	}
	showExplore(): void {
		this.appletApiService.navigate.subPath(['explore']);
	}
	showAlert(): void {
		this.appletApiService.navigate.subPath(['notification']);
	}
}
