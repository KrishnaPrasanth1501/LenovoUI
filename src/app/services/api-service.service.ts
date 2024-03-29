import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiUrl = environment.apiEndpoint;

  // most viewd/recentely added | suggestions | search results | details
  adminlogin = `${this.apiUrl}/auth/adminlogin`;
  countonlineusers = `${this.apiUrl}/count/countonlineusers`;
  getusers=`${this.apiUrl}/count/getusers`;
  totalusers=`${this.apiUrl}/count/totalusers`;
  getuserspoints=`${this.apiUrl}/count/getuserspoints`;
  countuserpages=`${this.apiUrl}/count/countuserspages`;
  countuserpercountry=`${this.apiUrl}/count/countuserpercountry`;
  getuserbuttonpoints=`${this.apiUrl}/count/getuserbuttonpoints`;
  authusertimespent=`${this.apiUrl}/auth/usertimespent`;
  userbasedanalytics=`${this.apiUrl}/count/userbasedanalytics`;
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
    var auth_token=localStorage.getItem('token')
    return this.http.get(url);
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  
}
