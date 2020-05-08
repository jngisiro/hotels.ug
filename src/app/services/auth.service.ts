import { EventEmitter } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "../auth/user.model";
import { tap } from "rxjs/operators";

export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {}

  registerUser(user) {
    return this.http.post(
      "https://hotelsug.herokuapp.com/api/v1/users/signup",
      {
        ...user,
      }
    );
  }

  loginUser(email: string, password: string) {
    return this.http
      .post("https://hotelsug.herokuapp.com/api/v1/users/login", {
        email,
        password,
      })
      .pipe(
        tap((response: any) => {
          console.log(response);
          this.handleAuth(
            response.data.user.email,
            response.data.user.firstname,
            response.data.user.lastname,
            response.token,
            +response.expiresIn
          );
        })
      );
  }

  autoLogin() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      return;
    }

    const user = new User(
      userData.email,
      userData.firstname,
      userData.lastname,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (user.gettoken()) {
      this.user.next(user);
    }
  }

  logoutUser() {
    this.user.next(null);
    localStorage.removeItem("userData");
  }

  private handleAuth(
    email: string,
    firstname: string,
    lastname: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    const user = new User(email, firstname, lastname, token, expirationDate);
    this.user.next(user);
    localStorage.setItem("userData", JSON.stringify(user));
  }
}
