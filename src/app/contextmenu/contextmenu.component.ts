import { Component } from '@angular/core';

import { MdDialogRef } from '@angular/material';

@Component({
	moduleId: module.id,
	selector: 'contextmenu',
	templateUrl: './contextmenu.component.html',
	styleUrls: ['./contextmenu.component.scss']
})
export class ContextmenuComponent {
	constructor(private dialogRef: MdDialogRef<ContextmenuComponent>) {

	}
}