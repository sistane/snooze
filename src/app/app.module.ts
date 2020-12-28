import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from'@angular/material/grid-list';
import { JournalComponent } from './journal/journal.component';
import { ResourcesComponent } from './resources/resources.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlarmComponent } from './alarm/alarm.component';
import { SettingsComponent } from './settings/settings.component';
// import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
    AlarmComponent,
    SettingsComponent,
    // IvyCarouselModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    NgbModule, 
         
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
