import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "../auth/user.model";
import { tap } from "rxjs/operators";

export class AuthService {
  loggedIn: boolean = false;
  checkAuth = new Subject<boolean>();
  user = new Subject<User>();

  constructor(private http: HttpClient) {}

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });

    return promise;
  }

  registerUser(user) {
    return this.http
      .post("https://hotelsug.herokuapp.com/api/v1/register", {
        ...user,
      })
      .pipe(
        tap((response: any) => {
          this.handleAuth(
            response.email,
            response.firstname,
            response.lastname,
            response.token,
            +response.expiresIn
          );
        })
      );
  }

  loginUser(email: string, password: string) {
    return this.http
      .post("https://hotelsug.herokuapp.com/api/v1/login", {
        email,
        password,
      })
      .pipe(
        tap((response: any) => {
          this.handleAuth(
            response.email,
            response.firstname,
            response.lastname,
            response.token,
            +response.expiresIn
          );
        })
      );
  }

  logoutUser() {
    this.user.next(null);
  }

  handleAuth(
    email: string,
    firstname: string,
    lastname: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    const user = new User(email, firstname, lastname, token, expirationDate);
    this.user.next(user);
  }
}
