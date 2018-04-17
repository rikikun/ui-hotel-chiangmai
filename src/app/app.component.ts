import { Component, OnInit } from '@angular/core';
import { Hotel } from './entity/hotel';
import { HotelService } from './service/hotel.service';
import { print } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  hotels: Hotel[];

  hotel: Hotel = {
    id: 1,
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
    this.hotelService.createHotel(this.hotel).subscribe(hotels => {
      this.getHotels();
      this.hotel = {
        id: 1,
        name: '',
        number: 0,
        bedInfo: ''
      };
    });
  }

  onRemove(index: number): void {
    this.hotelService.deleteHotel(index).subscribe(response => {
      this.getHotels();
    });
  }
}
