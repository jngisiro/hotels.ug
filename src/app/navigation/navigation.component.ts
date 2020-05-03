import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit, OnDestroy {
  loggedIn: boolean = false;
  subscription: Subscription;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.subscription = this.auth.checkAuth.subscribe((isloggedIn) => {
      this.loggedIn = isloggedIn;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
