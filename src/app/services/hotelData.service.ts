import { Injectable } from "@angular/core";
import { Hotel } from "../hotels/hotel.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class HotelDataService {
  constructor(private http: HttpClient) {}

  getHotels() {
    return this.http
      .get("https://hotelsug.herokuapp.com/api/v1/hotel", {
        headers: new HttpHeaders({ success: "false" }),
        responseType: "json",
      })
      .pipe(
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
