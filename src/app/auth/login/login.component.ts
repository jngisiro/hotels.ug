import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription, Observable } from "rxjs";
import { map, filter } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  loading: boolean = false;
  error: string = null;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  ngOnDestroy() {}

  onLoggedIn() {
    this.auth.checkAuth.next(true);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { email, password } = form.value;
      this.loading = true;
      this.auth.loginUser(email, password).subscribe(
        (response) => {
          this.loading = false;
          this.router.navigate["/"];
        },
        (err) => {
          this.loading = false;
          this.error = err.error.error;
        }
      );
    }
    return;
  }
}
