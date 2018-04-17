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
    room: 'http://localhost:8080/room/'
  };

  constructor(
    private http: HttpClient,


  ) { }

  getHotelList(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.endpoint.room);
  }

  createHotel(requestHotel: Hotel): Observable<Hotel> {
    const payload = {
      name: requestHotel.name,
      number: requestHotel.number,
      bedInfo: requestHotel.bedInfo,
    }
    return this.http.post<Hotel>(this.endpoint.room, payload);
  }

  deleteHotel(id: Number): any {
    return this.http.delete(this.endpoint.room + id);
  }

}
