import { Component } from '@angular/core';
import { AppletApiService } from '@agunity/provider';
import { IOrderModel } from '@agunity/components';

@Component({
	selector: 'orders-page', 
	templateUrl: './orders.page.html',
	styleUrls: ['orders.page.scss'],
})
export class OrdersPage {
	orders: IOrderModel[] = [
		{
			date: new Date('2020-10-21'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '10',
			value: 'Br 100',
		},
		{
			date: new Date('2020-10-11'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '1',
			value: 'Br 100',
		},
		{
			date: new Date('2020-10-01'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '7',
			value: 'Br 100',
		},
		{
			date: new Date('2020-09-21'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '3',
			value: 'Br 100',
		},
		{
			date: new Date('2020-09-12'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '2',
			value: 'Br 100',
		},
		{
			date: new Date('2020-09-02'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '5',
			value: 'Br 100',
		},
		{
			date: new Date('2020-09-01'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '10',
			value: 'Br 100',
		},
		{
			date: new Date('2020-08-09'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '1',
			value: 'Br 100',
		},
		{
			date: new Date('2020-08-07'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '7',
			value: 'Br 100',
		},
		{
			date: new Date('2020-08-01'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '3',
			value: 'Br 100',
		},
		{
			date: new Date('2020-08-01'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '2',
			value: 'Br 100',
		},
		{
			date: new Date('2020-07-15'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '5',
			value: 'Br 100',
		},
		{
			date: new Date('2020-07-14'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '10',
			value: 'Br 100',
		},
		{
			date: new Date('2020-07-13'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '1',
			value: 'Br 100',
		},
		{
			date: new Date('2020-07-01'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '7',
			value: 'Br 100',
		},
		{
			date: new Date('2020-06-20'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '3',
			value: 'Br 100',
		},
		{
			date: new Date('2020-06-19'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '2',
			value: 'Br 100',
		},
		{
			date: new Date('2020-06-18'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '5',
			value: 'Br 100',
		},
		{
			date: new Date('2020-05-17'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '10',
			value: 'Br 100',
		},
		{
			date: new Date('2020-05-16'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '1',
			value: 'Br 100',
		},
		{
			date: new Date('2020-05-10'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '7',
			value: 'Br 100',
		},
		{
			date: new Date('2020-04-05'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '3',
			value: 'Br 100',
		},
		{
			date: new Date('2020-04-03'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '2',
			value: 'Br 100',
		},
		{
			date: new Date('2020-04-01'),
			imagePath: 'assets/images/coffee.svg',
			quantity: '5',
			value: 'Br 100',
		},
	];

	constructor(private appletApiService: AppletApiService) {}
}
