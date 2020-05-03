import { Injectable } from "@angular/core";
import { Hotel } from "../hotels/hotel.model";
import { hotels } from "../data";

@Injectable()
export class HotelDataService {
  getHotels() {
    return hotels;
  }

  getHotelById(id: number): Hotel {
    return hotels[id];
  }

  registerHotel(hotel: Hotel) {
    hotels.push(hotel);
  }
}
