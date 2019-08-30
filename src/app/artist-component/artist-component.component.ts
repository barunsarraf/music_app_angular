import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { itrack,track_search} from '../track';
import {Router} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-artist-component',
  templateUrl: './artist-component.component.html',
  styleUrls: ['./artist-component.component.css']
})
export class ArtistComponentComponent implements OnInit {
  public top_tracks:itrack [];
  public searched_track:track_search[];
  private myurl_track:string = "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=ef82dba00530c98943fff2648daa06ef&limit=10&format=json";
 
  public tracksearch="";
  private url_track_search;
  constructor(private myservice:MyserviceService,private router:Router) { }

  ngOnInit() {

    this.myservice.getartistdata(this.myurl_track).subscribe((data)=>{this.top_tracks=data.tracks.track;});
  
   
  }

  onselect(artist,track_name)
  {
    console.log(artist.name);
    this.router.navigate(['']).then(() => {
    this.router.navigateByUrl(`artist-details/${artist.name}/${track_name}`)
    });
  }
  onselectsearch(searchartist,trackname)
  {
    console.log(searchartist.artist);
    this.router.navigate(['']).then(() => {
      this.router.navigateByUrl(`artist-details/${searchartist.artist}/${trackname}`)
    });
  }

  searchtrack(trackname)
  {
    this.url_track_search="http://ws.audioscrobbler.com/2.0/?method=track.search&track="+ trackname + "&api_key=ef82dba00530c98943fff2648daa06ef&limit=10&format=json";
    this.myservice.getartistdata(this.url_track_search).subscribe((data)=>{this.searched_track=data.results.trackmatches.track;});
  }

  favourite()
  {
      this.router.navigateByUrl(`/favourite`)
  }
}