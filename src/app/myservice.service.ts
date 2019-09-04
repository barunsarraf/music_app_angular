import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ifav } from './track';
import { Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private myurl_track:string = "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=ef82dba00530c98943fff2648daa06ef&limit=10&format=json";
  
  public  pathtojson:string= "http://localhost:3000/fav";
  
  constructor(private http:HttpClient) { }

  getartistdata():Observable<any>
  {
    return this.http.get<any>(this.myurl_track);
  }
  getfav():Observable<any>
  {
    return this.http.get<any>(this.pathtojson);
  }

  post(object):Observable<any>
  {
    return this.http.post<ifav>(this.pathtojson,object);
  }

  getsearchtrack(trackname)
  {
    let url_track_search="http://ws.audioscrobbler.com/2.0/?method=track.search&track="+ trackname + "&api_key=ef82dba00530c98943fff2648daa06ef&limit=10&format=json";
    return this.http.get<any>(url_track_search);
  }

  getartistdetailsobj(name,trackname)
  {
    let myurl:string = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=ef82dba00530c98943fff2648daa06ef&";
    let newurl=myurl+"artist="+name+"&track="+trackname+"&format=json";
    return this.http.get<any>(newurl);
  }
  getartistdetailsalbum(name,trackname)
  {
    let myurl:string = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=ef82dba00530c98943fff2648daa06ef&";
    let newurl=myurl+"artist="+name+"&track="+trackname+"&format=json";
    return this.http.get<any>(newurl);
  }

  deletefav(id)
  {
    console.log("delete id:", this.pathtojson+id);
    return this.http.delete(this.pathtojson+'/'+id);
  }
  editcomment(commentvalue,id)
  {
    let pathtojson:string= "http://localhost:3000/fav/"+id;
    return this.http.patch(pathtojson,{"comment":commentvalue});
  }

}
