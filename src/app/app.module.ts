import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyserviceService } from './myservice.service';
import {HttpClientModule} from '@angular/common/http';
import { ArtistComponentComponent } from './artist-component/artist-component.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import {FormsModule} from '@angular/forms';
import { FavouriteComponent } from './favourite/favourite.component';
@NgModule({
  declarations: [
    AppComponent,
    ArtistComponentComponent,
    ArtistDetailsComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
