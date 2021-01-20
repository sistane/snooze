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
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AlarmCardComponent } from './alarm/alarm-card/alarm-card.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { PhysicalpageComponent } from './physicalpage/physicalpage.component';
import { SoundspageComponent } from './soundspage/soundspage.component';
import { MeditationComponent } from './meditation/meditation.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { NaturesoundsComponent } from './naturesounds/naturesounds.component';
import { AlmsettingsComponent } from './almsettings/almsettings.component';
import {MatSliderModule} from '@angular/material/slider';
import { YogapageComponent } from './yogapage/yogapage.component';
import { WeekviewComponent } from './weekview/weekview.component';
import { WeekcompComponent } from './weekcomp/weekcomp.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { WcComponent } from './wc/wc.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
    AlarmComponent,
    SettingsComponent,
    AlarmCardComponent,
    PhysicalpageComponent,
    SoundspageComponent,
    MeditationComponent,
    NaturesoundsComponent,
    AlmsettingsComponent,
    YogapageComponent,
    WeekviewComponent,
    WeekcompComponent,
    WcComponent,

    
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
    FormsModule, 
    ChartsModule,
    MatSlideToggleModule,
    NgxMaterialTimepickerModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatSliderModule,
    MatDatepickerModule,
    CalendarModule

    
         
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
