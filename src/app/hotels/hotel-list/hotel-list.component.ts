import { Component, OnInit } from "@angular/core";
import { Hotel } from "../hotel.model";
import { HotelDataService } from "src/app/services/hotelData.service";

@Component({
  selector: "app-hotel-list",
  templateUrl: "./hotel-list.component.html",
  styleUrls: ["./hotel-list.component.scss"],
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[];

  constructor(private hs: HotelDataService) {}

  ngOnInit() {
    this.hotels = this.hs.getHotels();
  }
}
