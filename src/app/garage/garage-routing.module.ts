import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GarageListComponent } from './garage-list/garage-list.component';
import { GarageMapComponent } from './garage-map/garage-map.component';
const routes: Routes = [
	{
		path: '',
		redirectTo: 'garage-list',
		pathMatch: 'full'
	},
	{
		path: '',
		data: {
			title: 'Garage'
		},
		children:[
			{
				path: 'garage-list',
				component: GarageListComponent,
				data: {
					title: 'garage-list'
				}
			},
			{
				path: 'garage-map',
				component: GarageMapComponent,
				data: {
					title: 'garage-map'
				}
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class GarageRoutingModule {}