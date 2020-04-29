import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel.model';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = [
    new Hotel("Sheraton", "Kampala", "Plot 2 William", 
    23, 58, 4.5, 300000,
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imperialhotels.co.ug%2F&psig=AOvVaw2OYBOKVKz-cLZAWWUNOsHP&ust=1588020090358000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIC15rn6hukCFQAAAAAdAAAAABAD", 
    ["Pool", "Parking", "DSTV", "Security"], true),
    new Hotel("Fairways", "Entebbe", "Entebbe Highway", 
    58, 8, 4.3, 500000,
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imperialhotels.co.ug%2F&psig=AOvVaw2OYBOKVKz-cLZAWWUNOsHP&ust=1588020090358000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIC15rn6hukCFQAAAAAdAAAAABAD", 
    ["Pool", "Parking", "DSTV", "Security"], true)
  ]
  constructor() { }

  ngOnInit() {
  }

}
