import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasComponent } from './components/areas/areas.component';
import { ConsultaTramitesComponent } from './components/consulta-tramites/consulta-tramites.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

const routes: Routes = [
  { path:'consulta-tramites', component: ConsultaTramitesComponent },
  { path:'areas', component:AreasComponent },
  { path:'empleados', component: EmpleadosComponent },
  { path:'**', redirectTo: '/consulta-tramites' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
