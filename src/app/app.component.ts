import { Component, OnInit } from '@angular/core';
import { HOTELS } from './mock-hotel';
import { Hotel } from './entity/hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  hotels = HOTELS;

  hotel: Hotel = {
    name: '',
    number: 0,
    bedInfo: ''
  };

  ngOnInit() {
  }

  onAdd(): void {
    this.hotels.push(this.hotel);
  }

  onRemove(index: number): void {
    this.hotels = this.hotels.filter((value, i) => index !== i);
  }
}
