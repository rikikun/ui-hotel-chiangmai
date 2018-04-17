import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hotel } from '../entity/hotel';
import { HOTELS } from '../mock-hotel';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HotelService {
  endpoint = {
    getRoom: 'http://ec2-13-229-205-231.ap-southeast-1.compute.amazonaws.com:8080/room'
  };

  constructor(
    private http: HttpClient,


  ) { }

  getHotelList(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.endpoint.getRoom);
  }

}
