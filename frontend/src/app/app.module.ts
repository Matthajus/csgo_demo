import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {CsgoService} from "../services/csgo.service";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatchesComponent} from './matches/matches.component';
import {MatTableModule} from '@angular/material/table';
import {GravatarComponent} from './gravatar/gravatar.component';
import {GravatarTeamComponent} from './gravatar-team/gravatar-team.component';
import {MatchDetailsComponent} from './match-details/match-details.component';
import {AppRoutingModule} from './app-routing.module';
import {DownloadDemoComponent} from './download-demo/download-demo.component';
import {RouterModule} from "@angular/router";
import {MatGridListModule} from "@angular/material/grid-list";
import { TeamDetailTableComponent } from './team-detail-table/team-detail-table.component';
import {MatTabsModule} from "@angular/material/tabs";
import { RoundsComponent } from './rounds/rounds.component';
import { RoundDetailComponent } from './round-detail/round-detail.component';


@NgModule({

  declarations: [
    AppComponent,
    MatchesComponent,
    GravatarComponent,
    GravatarTeamComponent,
    MatchDetailsComponent,
    DownloadDemoComponent,
    TeamDetailTableComponent,
    RoundsComponent,
    RoundDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    AppRoutingModule,
    RouterModule,
    MatGridListModule,
    MatTabsModule,

  ],
  providers: [CsgoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
