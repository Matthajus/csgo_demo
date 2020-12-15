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
import { MatchesComponent } from './matches/matches.component';
import {MatTableModule} from '@angular/material/table';
import { GravatarComponent } from './gravatar/gravatar.component';
import { GravatarTeamComponent } from './gravatar-team/gravatar-team.component';


@NgModule({
    declarations: [
        AppComponent,
        MatchesComponent,
        GravatarComponent,
        GravatarTeamComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        HttpClientModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule
    ],
    providers: [CsgoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
