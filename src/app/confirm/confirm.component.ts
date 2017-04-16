import { Component } from '@angular/core';

import { MdDialogRef } from '@angular/material';

@Component({
	moduleId: module.id,
	selector: 'confirm',
	templateUrl: './confirm.component.html',
	styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
	constructor(private dialogRef: MdDialogRef<ConfirmComponent>){}
}