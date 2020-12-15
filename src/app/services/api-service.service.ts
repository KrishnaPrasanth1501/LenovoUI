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


  getWithoutLoader(url): Observable<any> {
    return this.http.get(url);
  }

  post(url, data): Observable<any> {
  //  let token = localStorage.getItem('token');
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Authorization': token
  //     })
  //   };
    return this.http.post(url, data);
  }

  loginpost(url, data): Observable<any> {
    return this.http.post(url, data);
  }

  get(url): Observable<any> {
    // this.loader.show();
    return this.http
      .get(url)
      .map(res => {
        // this.loader.hide();
        return res;
      })
    //.catch(res => Observable.throw(this.handleErr(res))
    //)
  }
  handleErr(err: any) {
    // this.loader.hide();
    return err;
  }
  //preview data
  get_previewdata(previewUrl): Observable<any> {
    return this.http
      .get(previewUrl)
      .map(res => {
        // this.loader.hide();
        return res;
      })
      .catch(res => Observable.throw(this.handleErr(res))
      )
  }


}
