import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {


  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  public getLoggedInUser(): Promise<any> {
    return Promise.resolve(JSON.parse(sessionStorage.getItem(USER_KEY)));
  }

  public getLoggedInUser1(): Promise<boolean> {
    return Promise.resolve(JSON.parse(sessionStorage.getItem(USER_KEY)));
  }

  public storeUrl(url: string) {
    window.sessionStorage.setItem('previousUrl', url);
}
}