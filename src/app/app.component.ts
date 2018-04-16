import { Component, OnInit } from '@angular/core';
import { HOTELS } from './mock-hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  hotels = HOTELS;

  ngOnInit() {
  }
}
