import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { OrderListModule, AspectRatioModule, ImageShellModule } from '@agunity/components';
import { MapPageRoutingModule } from './map-routing.module';
import { MapPage } from './map.page';
import { AppletComponent } from '../applet.component';
import { ItemIdToImageBase64PipeModule } from '@agunity/pipes';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,
    ReactiveFormsModule,
		TranslateModule,
		ImageShellModule,
		OrderListModule,
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
  declarations: [MapPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [MapPage],

})

export class MapPageModule {
	constructor() {
		console.log('MapPageModule constructor');
	}
}
export * from './map.page';
