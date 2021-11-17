import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { AppletApiService } from '@agunity/provider';
import { appletName } from '../applet.component';
import { AgUnityQrCodeType, IAssetType, ItemTypes } from '@agunity/models';
import { SuccessPage } from '../success/success.page';
import { ProductQtyPage } from '../product-qty/product-qty.module';

@Component({
	selector: 'product-page',
	templateUrl: './product.page.html',
	styleUrls: ['product.page.scss'],
})
export class ProductPage {
	ItemTypes = ItemTypes;
	readonly appletName = appletName;
	buyQtyAsString = 0;
	showamount = false;
	public labelText = 'loading';
	public mockedQr = '';
	public isDev = false;

	assetType: IAssetType;

	constructor(
		private modalController: ModalController,
		private route: ActivatedRoute,
		private platform: Platform,
		private appletApiService: AppletApiService,
	) {}

	ionViewWillEnter(): void {
		const assetTypeId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
		this.assetType =
			assetTypeId && this.appletApiService.store.assetTypes?.find((assetType) => assetType.id === assetTypeId);

		if (!this.assetType) {
			return this.appletApiService.navigate.back();
		}

		this.showamount = true;
	}

	buyProduct(): void {
		console.log(this.buyQtyAsString);
	}

	async onDevQr(): Promise<void> {
		const qrString = await this.appletApiService.intent.runScanQr();
		await this.processQr(qrString);
	}

	async processQr(qrString: string): Promise<void> {
		if (!qrString) {
			throw new Error('empty qr');
		}

		const qrCode = await this.appletApiService.qrCodeParser.parse(qrString);
		switch (qrCode.type) {
			case AgUnityQrCodeType.getHarvest:
				await this.appletApiService.navigate.applet('qr-scanner', [`${encodeURIComponent(qrString)}`]);
				break;

			default:
				this.appletApiService.navigate.back();
		}
	}

	async showQty() {
		const modal = await this.modalController.create({
			component: ProductQtyPage,
			cssClass: 'my-modal',
			componentProps: {
				qtyAsString: this.buyQtyAsString,
			},
		});

		modal.onDidDismiss().then((data) => {
			if (data.data.qty.length !== 0) {
				this.buyQtyAsString = data.data.qty;
				this.showamount = true;
			}
		});

		return await modal.present();
	}

	async showSuccess(): Promise<void> {
		const presentingElement = document.getElementById('product-root');
		const modal = await this.modalController.create({
			presentingElement,
			component: SuccessPage,
			cssClass: 'app-modal-success',
			componentProps: {
				qtyAsString: this.buyQtyAsString,
			},
		});

		modal.onDidDismiss().then((data) => {
			if (data.data.qty.length !== 0) {
				this.buyQtyAsString = data.data.qty;
				this.showamount = true;
			}
		});

		return await modal.present();
	}
}
