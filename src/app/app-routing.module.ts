import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlarmComponent } from './alarm/alarm.component';
import { AlmsettingsComponent } from './almsettings/almsettings.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JournalComponent } from './journal/journal.component';
import { MeditationComponent } from './meditation/meditation.component';
import { NaturesoundsComponent } from './naturesounds/naturesounds.component';
import { PhysicalpageComponent } from './physicalpage/physicalpage.component';
import { ResourcesComponent } from './resources/resources.component';
import { SettingsComponent } from './settings/settings.component';
import { SoundspageComponent } from './soundspage/soundspage.component';
import { WeekcompComponent } from './weekcomp/weekcomp.component';
import { WeekviewComponent } from './weekview/weekview.component';
import { YogapageComponent } from './yogapage/yogapage.component';

const routes: Routes = [
  {    path: 'journal',component: JournalComponent, },
  {    path: 'home',component: HomeComponent, },
  {    path: 'resources',component: ResourcesComponent, },
  {    path: 'alarm',component: AlarmComponent, },
  {    path: 'settings',component: SettingsComponent, },
  {    path: 'physical',component: PhysicalpageComponent, },
  {    path: 'sounds',component: SoundspageComponent, },
  {    path: 'meditation',component: MeditationComponent, },
  {    path: 'naturesound',component: NaturesoundsComponent, },
  {    path: 'alarmsettings',component: AlmsettingsComponent, },
  {    path: 'yogapage',component: YogapageComponent, },
  {    path: 'weekview',component: WeekviewComponent, },
  {    path: 'weekcomp',component: WeekcompComponent, },
  {    path: '',    component: HomeComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
export const routingComponents=[JournalComponent, ResourcesComponent,HomeComponent,AlarmComponent,SettingsComponent]
