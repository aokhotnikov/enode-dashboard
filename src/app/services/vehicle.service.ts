import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '@env/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Vehicle } from '@app/interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicles: Vehicle[] = [];

  constructor(private http: HttpClient) { }

  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${env.apiUrl}/admin/vehicles`).pipe(
      tap({
        next: val => this.vehicles = val,
        error: err => this.vehicles = [],
        // complete: () => console.log(this.vehicles)
      })
    );
  }
}
