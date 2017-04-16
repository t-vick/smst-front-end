import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { GarageAddComponent } from '../garage-add/garage-add.component';
import { ContextmenuComponent } from '../../contextmenu/contextmenu.component';
import { ConfirmComponent } from '../../confirm/confirm.component';
import { GarageService } from '../garage.service';
@Component({
	moduleId: module.id,
	selector: 'garage-list',
	templateUrl: './garage-list.component.html',
	styleUrls: ['./garage-list.component.css'],
	encapsulation: ViewEncapsulation.None,
})
export class GarageListComponent implements OnInit {
	constructor(
		private garageService: GarageService,
		private dialog: MdDialog
		) {

	}
	ngOnInit() {
		this.garageService.getAllMaps()
			.subscribe(
				(data) => {
					console.log(data);
				}
			)
	}

	onContextmenu(contextmenuEvent) {
		// this.rawEvent = contextMenuEvent.event;

		// this.contextmenuRow = contextMenuEvent.row;
		let dialogRef = this.dialog.open(ContextmenuComponent);
		dialogRef.afterClosed()
				.subscribe(
					(result) => {
						switch(result) {
							case 'edit':
								break;
							case 'delete':
								this.dialog.open(ConfirmComponent);
								break;
							default:
								break;
						}
					}
				)
		contextmenuEvent.event.preventDefault();

		contextmenuEvent.event.stopPropagation();
	}

	showGarageAdd() {
		let dialogRef = this.dialog.open(GarageAddComponent);
		dialogRef.afterClosed()
				.subscribe(
					(result) => {
						
					}
				)
	}
	rows = [
		{
			name:'t-vick',
			email:'t-vick@msn.com',
			age: 18,
			city: 'liuyang'
		},
		{
			name:'t-vick',
			email:'t-vick@msn.com',
			age: 18,
			city: 'liuyang'
		},
		{
			name:'t-vick',
			email:'t-vick@msn.com',
			age: 18,
			city: 'liuyang'
		},
		{
			name:'t-vick',
			email:'t-vick@msn.com',
			age: 18,
			city: 'liuyang'
		},
		{
			name:'t-vick',
			email:'t-vick@msn.com',
			age: 18,
			city: 'liuyang'
		},
		{
			name:'t-vick',
			email:'t-vick@msn.com',
			age: 18,
			city: 'liuyang'
		},
		{
			name:'t-vick',
			email:'t-vick@msn.com',
			age: 18,
			city: 'liuyang'
		},
		{
			name:'t-vick',
			email:'t-vick@msn.com',
			age: 18,
			city: 'liuyang'
		},
		{
			name:'t-vick',
			email:'t-vick@msn.com',
			age: 18,
			city: 'liuyang'
		},
		{
			name:'t-vick',
			email:'t-vick@msn.com',
			age: 18,
			city: 'liuyang'
		}
	];

	columns = [
		{ prop: 'name' },
		{ name: 'email' },
		{ name: 'age' },
		{ name: 'city' }
	];

	// constructor(private dialog: MdDialog){}

	// openDialog() {
	// 	let dialogRef = this.dialog.open(GarageAddComponent);
	// 	dialogRef.afterClosed().subscribe(result => {

	// 	});
	// }
}