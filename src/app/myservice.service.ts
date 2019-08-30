import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ifav } from './track';
import { Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  // private myurl:string = "http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=ef82dba00530c98943fff2648daa06ef&format=json";
  
  public  pathtojson:string= "http://localhost:3000/fav";
  
  constructor(private http:HttpClient) { }

  getartistdata(myurl):Observable<any>
  {
    return this.http.get<any>(myurl);
  }
  getfav():Observable<any>
  {
    return this.http.get<any>(this.pathtojson);
  }

  post(object):Observable<any>
  {
    return this.http.post<ifav>(this.pathtojson,object);
  }
}
