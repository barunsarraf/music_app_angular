import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ifav } from '../track';
import { itrackinfo, Album } from '../trackinfo';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  public favlist:ifav[];
  
  private myurl:string = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=ef82dba00530c98943fff2648daa06ef&";

  constructor(private myservice:MyserviceService) { }

  ngOnInit() {
    this.myservice.getfav().subscribe((data)=>{console.log(data,"favfavfav");this.favlist=data;});
    
    

    


  }

  
}
