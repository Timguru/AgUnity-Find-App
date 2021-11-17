import { Component, OnInit } from '@angular/core';
import { AppletApiService } from '@agunity/provider';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-success',
	templateUrl: './success.page.html',
	styleUrls: ['./success.page.scss'],
})
export class SuccessPage {

	constructor(private appletApiService: AppletApiService, private modalController: ModalController) { }

	closeModal() {
		this.modalController.dismiss({
			dismissed: true
		});
		this.appletApiService.navigate.subPath(['products']);
	}
}
