import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppletComponent, appletName } from './applet.component';

describe(appletName, () => {
	let component: AppletComponent;
	let fixture: ComponentFixture<AppletComponent>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				imports: [],
				declarations: [AppletComponent],
				schemas: [CUSTOM_ELEMENTS_SCHEMA],
			}).compileComponents();
		}),
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(AppletComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
