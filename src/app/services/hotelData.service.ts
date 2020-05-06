import { Injectable } from "@angular/core";
import { Hotel } from "../auth/hotels/hotel.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class HotelDataService {
  constructor(private http: HttpClient) {}

  getHotels() {
    return this.http.get("https://hotelsug.herokuapp.com/api/v1/hotel").pipe(
      map((hotels: any) => {
        return hotels.data;
      })
    );
  }

  getHotelById(id: number): Hotel {
    return;
  }

  registerHotel(hotel: Hotel) {
    return;
  }

  getUsersBookedHotels(token: string) {}
}
