import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { JournalComponent } from './journal/journal.component';

const routes: Routes = [
  {
    path: 'app/journal',
    component: JournalComponent,
  },
  {
    path: '',
    component: AppComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
