import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppConfigService } from '../app-config.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
@Injectable()
export class GarageService {
	private url: string = '/maps';
	public subject: Subject<any> = new Subject<any>();
	constructor(private http: Http, private appConfigService: AppConfigService){}
	public getRoads(id: number) {
		return this.http.get(this.appConfigService.baseUrl + this.url + '/' + id)
						.map((response: Response) => {
							return response.json();
							// let roads = response.json();
							// this.subject.next(roads);
						})
	}

	public getAllMaps() {
		return this.http.get(this.appConfigService.baseUrl + this.url)
						.map((response: Response) => {
							return response.json();
						})
	}
}