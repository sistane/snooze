import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlarmComponent } from './alarm/alarm.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JournalComponent } from './journal/journal.component';
import { ResourcesComponent } from './resources/resources.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {    path: 'journal',component: JournalComponent, },
  {    path: 'home',component: HomeComponent, },
  {    path: 'resources',component: ResourcesComponent, },
  {    path: 'alarm',component: AlarmComponent, },
  {    path: 'settings',component: SettingsComponent, },
  {    path: '',    component: HomeComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
export const routingComponents=[JournalComponent, ResourcesComponent,HomeComponent,AlarmComponent,SettingsComponent]
