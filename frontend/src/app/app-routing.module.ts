import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MatchesComponent} from "./matches/matches.component";
import {MatchDetailsComponent} from "./match-details/match-details.component";
import {PlayerComponent} from "./player/player.component";
import {UploadDemoComponent} from "./upload-demo/upload-demo.component";

const routes: Routes = [
  {path: '', component: UploadDemoComponent},
  {path: 'match', component: MatchesComponent},
  {path: 'match/:matchId', component: MatchDetailsComponent},
  {path: 'player/:playerId', component: PlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
