import { Component } from '@angular/core';
import { AppletApiService } from '@agunity/provider';
import { appletName } from '../applet.component';
import { AssetBaseTypes, IAssetType, ItemTypes } from '@agunity/models';
import { Observable } from 'rxjs';

@Component({
	selector: 'products-page', 
	templateUrl: './products.page.html',
	styleUrls: ['products.page.scss'],
})
export class ProductsPage {
	ItemTypes = ItemTypes;
	readonly appletName = appletName;

	assetTypes$: Observable<IAssetType[]> = this.appletApiService.store.assetTypes$((v) => v.filter(v=>v.baseType === AssetBaseTypes.produce));

	constructor(private appletApiService: AppletApiService) {
	}

	showAssetType(assetType: IAssetType): void {
		this.appletApiService.navigate.subPath(['product', assetType.id]);
	}
}
