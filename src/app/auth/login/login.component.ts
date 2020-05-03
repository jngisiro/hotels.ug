import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription, Observable } from "rxjs";
import { map, filter } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  ngOnDestroy() {}

  onLoggedIn() {
    this.auth.checkAuth.next(true);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
