import { EventEmitter } from "@angular/core";
import { Subject } from 'rxjs';


export class AuthService {
  loggedIn: boolean = false;
  checkAuth = new Subject<boolean>();

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });

    return promise;
  }

  registerUser() {}

  loginUser() {
    this.loggedIn = true;
  }

  logoutUser() {
    this.loggedIn = false;
  }
}
