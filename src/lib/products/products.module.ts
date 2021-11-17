import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ImageShellModule } from '@agunity/components';

import { ProductsPage } from './products.page';
import { ItemIdToImageBase64PipeModule } from '@agunity/pipes';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule,
		ImageShellModule,
		ItemIdToImageBase64PipeModule,
	],
	declarations: [ProductsPage],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [ProductsPage],
})
export class ProductsModule {
	constructor() {
		console.log('ProductsModule constructor');
	}
}

export * from './products.page';
