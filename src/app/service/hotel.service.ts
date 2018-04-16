import { Injectable } from '@angular/core';
import { Hotel } from '../entity/hotel';
import { HOTELS } from '../mock-hotel';

@Injectable()
export class HotelService {

  constructor() { }

  getHotelList(): Hotel[] {
    return HOTELS;
  }

}
