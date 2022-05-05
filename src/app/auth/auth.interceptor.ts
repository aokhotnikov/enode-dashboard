import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@app/auth/auth.service';
import { environment } from '@env/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public authSrv: AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const isApiUrl = req.url.startsWith(environment.apiUrl);
    if (isApiUrl && this.authSrv.isLoggedIn) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Basic ' + this.authSrv.basicToken)
      });
    }

    return next.handle(req);
  }
}
