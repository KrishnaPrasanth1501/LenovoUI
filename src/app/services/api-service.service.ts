import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiUrl = environment.apiEndpoint;

  // most viewd/recentely added | suggestions | search results | details
  mostViewed_Recently_ep = `${this.apiUrl}mostViewed_Recently/`;

  constructor(private http: HttpClient) { }

  post(url: string, data: any): Observable<any> {
  //  let token = localStorage.getItem('token');
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Authorization': token
  //     })
  //   };
    return this.http.post(url, data);
  }

  get(url: string): Observable<any> {

    return this.http.get(url);
    
  }
  // handleErr(err: any) {
  //   // this.loader.hide();
  //   return err;
  // }
  //preview data
  // get_previewdata(previewUrl: string): Observable<any> {
  //   return this.http
  //     .get(previewUrl)
  //     .map((res: any) => {
  //       // this.loader.hide();
  //       return res;
  //     })
  //     .catch((res: any) => Observable.throw(this.handleErr(res))
  //     )
  // }


}
