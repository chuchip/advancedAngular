import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PesonaDetailComponent } from './person/infrastructure/presentation/pesona-detail/pesona-detail.component';
import { PersonaTableComponent } from './person/infrastructure/presentation/persona-table/persona-table.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'person/:id', component: PesonaDetailComponent },  
  { path: 'person', component: PersonaTableComponent },  
  { path: 'home', component: HomeComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
