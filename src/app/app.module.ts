import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HotelThumbComponent } from "./auth/hotels/hotel-thumb/hotel-thumb.component";
import { HotelDetailsComponent } from "./auth/hotels/hotel-details/hotel-details.component";
import { HotelListComponent } from "./auth/hotels/hotel-list/hotel-list.component";
import { HotelDataService } from "./services/hotelData.service";
import { LocationComponent } from "./auth/hotels/location/location.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/auth-guard.service";
import { RegisterComponent } from "./auth/register/register.component";
import { LoginComponent } from "./auth/login/login.component";
import { CanDeactivateGuard } from "./auth/register/can-deactivate.service";
import { Summarise } from "./auth/hotels/hotel-list/summarise.pipe";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoadingComponent } from "./loading/loading.component";
import { AuthInterceptor } from "./services/authInterceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HotelThumbComponent,
    HotelDetailsComponent,
    HotelListComponent,
    LocationComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    Summarise,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    HotelDataService,
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
