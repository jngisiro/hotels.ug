import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {

  hotelAmenities: string[] = ["tv", "bath", "parking"]
  hasAmenities: boolean = false

  constructor() { 
    this.hasAmenities = Math.random() > 0.5 ? true : false
  }

  ngOnInit() {
  }

  getColor() {
    return this.hasAmenities ? 'green' : 'red'
  }

}
