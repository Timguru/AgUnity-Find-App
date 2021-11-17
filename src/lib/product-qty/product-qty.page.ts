import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'product-qty', 
	templateUrl: './product-qty.page.html',
	styleUrls: ['./product-qty.page.scss'],
})
export class ProductQtyPage {
	@Input() qtyAsString = '';

	constructor(private modalController: ModalController) {}

	closeModal() {
		this.modalController.dismiss({
			dismissed: true,
			qty: this.qtyAsString,
		});
	}

	dismissModal() {
		this.modalController.dismiss({
			dismissed: true,
			qty: '',
		});
	}

	handleInput(digit: string) {
		if (this.qtyAsString.length >= 3) {
			return;
		}

		this.qtyAsString += digit;
	}

	clearInput() {
		this.qtyAsString = '';
	}
}
