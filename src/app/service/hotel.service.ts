import { Injectable } from '@angular/core';
import { Hotel } from '../entity/hotel';
import { HOTELS } from '../mock-hotel';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HotelService {

  constructor() { }

  getHotelList(): Observable<Hotel[]> {
    return of(HOTELS);
  }

}
