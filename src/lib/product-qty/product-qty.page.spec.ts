import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductQtyPage } from './product-qty.page';

describe('ProductQtyPage', () => {
	let component: ProductQtyPage;
	let fixture: ComponentFixture<ProductQtyPage>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				imports: [IonicModule.forRoot(), ],
				declarations: [ProductQtyPage],
				schemas: [CUSTOM_ELEMENTS_SCHEMA],
			}).compileComponents();
		}),
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(ProductQtyPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
