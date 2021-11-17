

import { AppletApiService } from '@agunity/provider';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ImageShellModule } from '@agunity/components';

import { SuccessPage } from './success.page';
import { AppletImagePathToBase64PipeModule } from '@agunity/pipes';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule,
		ImageShellModule,
		AppletImagePathToBase64PipeModule,
	],
	declarations: [SuccessPage],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [SuccessPage],
})
export class SuccessPageModule {
	constructor() {
		console.log('SuccessPageModule constructor');
	}
}

export * from './success.page';
