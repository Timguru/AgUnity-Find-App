import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProductPage } from './product.page';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { AspectRatioModule, ImageShellModule } from '@agunity/components';
import { AppletComponent } from '../applet.component';
import { ItemIdToImageBase64PipeModule } from '@agunity/pipes';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule,
		RouterModule.forChild([
			{
				path: '',
				component: AppletComponent,
			}
		]),
		AspectRatioModule,
		ImageShellModule,
		ItemIdToImageBase64PipeModule,
	],
	declarations: [ProductPage],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [ProductPage],
})
export class ProductModule {
	constructor() {
		console.log('ProductModule constructor');
	}
}

export * from './product.page';
