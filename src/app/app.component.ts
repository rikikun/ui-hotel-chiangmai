import { Component, OnInit } from '@angular/core';
import { Hotel } from './entity/hotel';
import { HotelService } from './service/hotel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  hotels: Hotel[];

  hotel: Hotel = {
    name: '',
    number: 0,
    bedInfo: ''
  };

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.getHotels();
  }

  getHotels() {
    this.hotelService.getHotelList().subscribe(hotels => this.hotels = hotels);
  }

  onAdd(): void {
    this.hotels.push(this.hotel);
  }

  onRemove(index: number): void {
    this.hotels = this.hotels.filter((value, i) => index !== i);
  }
}
