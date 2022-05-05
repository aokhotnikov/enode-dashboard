import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '@env/environment';
import { interval, Observable } from 'rxjs';
import { share, startWith, timeInterval } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  // emits every minute
  interval$: Observable<any> = interval(60000).pipe(
    startWith(0),
    timeInterval(),
    share()
  );

  constructor(private http: HttpClient) { }

  pingServer(): Observable<any> {
    return this.http.get(`${env.apiUrl}/health/ready`);
  }
}
