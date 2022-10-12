import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ConsultaTramitesComponent } from './components/consulta-tramites/consulta-tramites.component';
import { AreasComponent } from './components/areas/areas.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConsultaTramitesComponent,
    AreasComponent,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
