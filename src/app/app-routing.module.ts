import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HotelDetailsComponent } from "./hotels/hotel-details/hotel-details.component";
import { HotelListComponent } from "./hotels/hotel-list/hotel-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { CanDeactivateGuard } from "./auth/register/can-deactivate.service";
import { AccountConfirmationComponent } from "./auth/account-confirmation/account-confirmation.component";
import { ResetPasswordComponent } from "./auth/reset-password/reset-password.component";
import { ForgotPasswordComponent } from "./auth/forgot-password/forgot-password.component";
import { BookingsComponent } from "./hotels/bookings/bookings.component";
import { FavouritesComponent } from "./hotels/favourites/favourites.component";
import { AuthGuard } from "./services/auth-guard.service";

const routes: Routes = [
  { path: "", component: HotelListComponent, },
  { path: "hotel/:id", component: HotelDetailsComponent, },
  { path: "bookings", component: BookingsComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  {
    path: "favourites",
    component: FavouritesComponent,
    canActivate: [AuthGuard],
  },
  { path: "confirmAccount", component: AccountConfirmationComponent },
  { path: "forgotPassword", component: ForgotPasswordComponent },
  { path: "resetPassword", component: ResetPasswordComponent },
  {
    path: "register",
    component: RegisterComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  { path: "not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
