import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'person', component: PersonComponent },  
  { path: 'estudiante',   component: EstudianteComponent  },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },  
  { path: 'home', component: HomeComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
