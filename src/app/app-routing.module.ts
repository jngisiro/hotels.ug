import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HotelDetailsComponent } from "./hotels/hotel-details/hotel-details.component";
import { HotelListComponent } from "./hotels/hotel-list/hotel-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { CanDeactivateGuard } from "./auth/register/can-deactivate.service";

const routes: Routes = [
  { path: "", component: HotelListComponent },
  { path: "hotel/:id", component: HotelDetailsComponent },
  { path: "login", component: LoginComponent },
  {
    path: "register",
    component: RegisterComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  { path: "not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
