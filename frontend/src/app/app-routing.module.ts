import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DownloadDemoComponent} from "./download-demo/download-demo.component";
import {MatchesComponent} from "./matches/matches.component";
import {MatchDetailsComponent} from "./match-details/match-details.component";

const routes: Routes = [
  {path: '', component: DownloadDemoComponent},
  {path: 'match', component: MatchesComponent},
  {path: 'match/:matchId', component: MatchDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
