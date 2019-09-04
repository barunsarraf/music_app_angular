import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistComponentComponent } from './artist-component/artist-component.component';
import { FavouriteComponent } from './favourite/favourite.component';
 
const routes: Routes = [
  {path:'',redirectTo:'/ArtistComponent',pathMatch:'full'},
  {path:'artist-details/:artistname/:trackname',component:ArtistDetailsComponent},
  {path: 'favourite', component:FavouriteComponent},
  {path: '', component:ArtistComponentComponent},
  {path: "**", component: ArtistComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ArtistDetailsComponent,ArtistComponentComponent,FavouriteComponent];
