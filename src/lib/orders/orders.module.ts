import { ImageShellModule } from '@agunity/components';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { OrderListModule } from '@agunity/components';
import { OrdersPage } from './orders.page';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule,
		ImageShellModule,
		OrderListModule,
	],
	declarations: [OrdersPage],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [OrdersPage],
})
export class OrdersModule {
	constructor() {
		console.log('OrdersModule constructor');
	}
}

export * from './orders.page';
