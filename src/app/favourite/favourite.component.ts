import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ifav } from '../track';
import { itrackinfo, Album } from '../trackinfo';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  public favlist:ifav[];
  
  private myurl:string = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=ef82dba00530c98943fff2648daa06ef&";

  constructor(private myservice:MyserviceService,private http:HttpClient) { }

  ngOnInit() {
    this.myservice.getfav().subscribe((data)=>{this.favlist=data;});
  }

  delete(id)
  {
    let pathtojson:string= "http://localhost:3000/fav/";
    console.log("delete id:", pathtojson+id);
    this.http.delete(pathtojson+id).subscribe();
   
  }
  modify(commentvalue,id)
  {
    let pathtojson:string= "http://localhost:3000/fav/"+id;
    this.http.patch(pathtojson,{"comment":commentvalue}).subscribe();
  }

  
}
