import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonaDetailComponent } from './person/infrastructure/presentation/persona-detail/persona-detail.component';
import { PersonaTableComponent } from './person/infrastructure/presentation/persona-table/persona-table.component';
import { PersonaDetailResolverService } from './person/infrastructure/presentation/persona-detail/persona-detail-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'person/:id',  resolve: {
    person: PersonaDetailResolverService  }, component: PersonaDetailComponent },  
  { path: 'person', component: PersonaTableComponent },  
  { path: 'home', component: HomeComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
