import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  basicToken: string | undefined;

  // store the URL so we can redirect after logging in
  redirectUrl: string | undefined;

  constructor(private http: HttpClient) {
    console.log('AuthService Init');
  }

  private createToken(pass: string): string {
    return window.btoa('admin:' + pass);
  }

  login(password: string): Observable<any> {
    this.basicToken = this.createToken(password);
    return this.http.head(`${environment.apiUrl}/admin/clients`, {
      headers: {
        Authorization: 'Basic ' + this.basicToken
      },
      observe: 'response'
    });
  }

  logout(): void {
    this.isLoggedIn = false;
    this.basicToken = undefined;
  }
}
