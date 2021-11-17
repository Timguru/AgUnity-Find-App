import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductQtyPage } from './product-qty.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule, TranslateModule],
	declarations: [ProductQtyPage],
	exports: [ProductQtyPage],
})
export class ProductQtyModule {}

export * from './product-qty.page';
