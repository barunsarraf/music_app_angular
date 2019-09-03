import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MyserviceService } from '../myservice.service';
import {itrackinfo, Album} from '../trackinfo';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-artist-details',
  template: `
<nav class="navbar navbar-expand-lg navbar-light bg-dark" >
                <a class="navbar-brand" href="#" style="color: wheat">Music</a>
              </nav>
              
              <p style="background: wheat;width:100%;" class="btn my-2 my-sm-0">{{artistname}}</p>
<div style="padding: 10px;">

      
<div class="row">



  <div class="col-sm-5">
  <img class="card-img-top" src='{{artistinfo[3]["#text"]}}' alt="Card image cap">
    </div>





    <div class="col-sm-5">
    <h1 class="display-4" style="width:100%;background:wheat;">Track Details:</h1>
    <br>
    <div>
    <strong>Track Name:</strong> {{trackinfo.name}}.
    </div>
    <div>
    <strong>Artist:</strong> {{artistname}}.
    </div>
    <div>
    <strong>PlayCounts:</strong> {{trackinfo.playcount}}.
    <strong>Listeners:</strong> {{trackinfo.listeners}}
    </div>
    <div>
    <strong>Duration:</strong> {{trackinfo.duration}} seconds.
    </div>
    <div>
    <strong>URL: </strong> <a style="color:#263238;" href="{{trackinfo.url}}">{{trackinfo.url}}</a>
    </div>
    <div>
    <strong>Published On: </strong> {{trackinfo.wiki.published}}.
    </div>
    <div>
    <strong>Summary of Artist: On: </strong> {{trackinfo.wiki.summary}}.
    </div>
   
    <button (click)="addtofav(trackinfo,commentvalue.value)" style="background: #263238;color:wheat" class="btn my-2 my-sm-0" type="submit">Add to Favourite</button>
    <div class="row">
    <div class="col-sm-4">
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Add Comment Here</label>
            <textarea #commentvalue class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
    </div>
  </div>
    </div>
    
    </div>
  `,
  styles: []
})
export class ArtistDetailsComponent implements OnInit {
  public artistname;
  public trackname;
  public trackinfo:itrackinfo;
  public artistinfo:Album[];
  private newurl;
  private myurl:string = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=ef82dba00530c98943fff2648daa06ef&";

  constructor(private route:ActivatedRoute,private myservice:MyserviceService,private http:HttpClient) { }

  ngOnInit() {
    let name=this.route.snapshot.paramMap.get('artistname');
    this.trackname=this.route.snapshot.paramMap.get('trackname');
    this.artistname=name;
    this.newurl=this.myurl+"artist="+name+"&track="+this.trackname+"&format=json";
    this.myservice.getartistdata(this.newurl).subscribe((data)=>{this.trackinfo=data.track;});
    this.myservice.getartistdata(this.newurl).subscribe((data)=>{this.artistinfo=data.track.album.image;});
    
  }

  addtofav(trackinfo,comments)
  {
    console.log("In add method");
    // var a=this.artistname;
    // var b=this.trackname;
    // var c=this.trackinfo.track; //its taking object value which is not a number so this is increasing the last id value
  //  console.log('artist'+a);
  //  console.log('track'+b);
    trackinfo.comment = comments;
    trackinfo.favdate=new Date();

    // var obj={id:c,artistname:a,trackname:b};

    this.myservice.post(trackinfo).subscribe((data)=>{console.log("hogya");})

  }

}
