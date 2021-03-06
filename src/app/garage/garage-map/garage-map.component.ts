import { Component, ElementRef, DoCheck, OnInit, AfterViewInit } from '@angular/core';
// import { MdDialog } from '@angular/material';
import { GarageObjAddComponent } from '../garage-obj-add/garage-obj-add.component';
import { Cell } from '../model/cell.model';
import { Road } from '../model/road.model';

import { GarageService } from '../garage.service';
@Component({
	moduleId: module.id,
	selector: 'smst-garage-map',
	templateUrl: './garage-map.component.html',
	styleUrls: [ './garage-map.component.css' ],
})
export class GarageMapComponent implements OnInit, DoCheck, AfterViewInit {
    private option: any;

    private boxSize: number;
    constructor(
        private garageService: GarageService, 
        private el: ElementRef) {
  	
    }

    ngOnInit() {
        // this.option = new Object();
        // this.option.roadList = new Array<Road>();
        // this.option.cellList = new Array<Cell>();
        // this.garageService.getRoads(1)
        // .subscribe(
        //     (data) => {
        //         for (let road  of data.floors[0].roads) {
        //           this.option.roadList.push(new Road(road));
        //         }

        //         for (let cell of data.floors[0].cells) {
        //           this.option.cellList.push(new Cell(cell));
        //         }
        //     }
        // );

        // this.option = {
        //     cellList: [
        //         new Cell({x: 150, y: 150, w: 75, h: 75, rx: 187.5, ry: 187.5, deg: 0}),

        //         new Cell({x: 0, y: 0, w: 75, h: 75, rx: 37.5,ry: 37.5, deg: 0.25})
        //     ],
        //     roadList: [
        //         new Road({x: -10, y: 250, ex: 400, ey: 250, lw: 20, rx: 195, ry: 250, hl: 205, deg: 0}),
        //         new Road({x: -10, y: 400, ex: 400, ey: 400, lw: 20, rx: 195, ry: 400, hl: 205, deg: 0}),
        //         new Road({x: 30, y: -10, ex: 30, ey: 800, lw: 20, rx: 30, ry: 395, hl: 405, deg: 0.5}),
        //         new Road({x: 330, y: -10, ex: 330, ey: 800, lw: 20, rx: 330, ry: 395, hl: 405, deg: 0.5}),
        //     ],
        // }
    }

    ngDoCheck() {
        if (!this.boxSize) return;
  	    this.boxSize = this.el.nativeElement.clientWidth * this.el.nativeElement.clientHeight;
    }

    ngAfterViewInit() {
  	    this.boxSize = this.el.nativeElement.clientWidth * this.el.nativeElement.clientHeight;
    }

    openDialog() {
        // let dialogRef = this.dialog.open(GarageObjAddComponent);
        // dialogRef.afterClosed().subscribe(result => {

        // });
    }
}