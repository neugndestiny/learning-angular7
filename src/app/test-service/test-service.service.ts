import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getUser(): Observable<any> {
    return this.http.get('http://beta-mojito-gateway.cg.gy/account/api/account');
  }

}
