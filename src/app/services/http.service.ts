import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Weather } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getClientPublicIp(): any {
    return this.http.get<any>('https://geolocation-db.com/json/')
  }

  getWeatherDetailsByIP(ip: string): Observable<Weather> {
    let params = new HttpParams().set('key', env.API_KEY)
                                  .set('ip', ip);

    return this.http.get<Weather>(`${env.BASE_URL}/current`, {
      params: params,
    });
  }

}
