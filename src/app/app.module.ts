import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HotelThumbComponent } from './hotels/hotel-thumb/hotel-thumb.component';
import { HotelDetailsComponent } from './hotels/hotel-details/hotel-details.component';
import { HotelListComponent } from './hotels/hotel-list/hotel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HotelThumbComponent,
    HotelDetailsComponent,
    HotelListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
