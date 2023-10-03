import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametrizacionComponent } from './parametrizacion.component';
import { PropertyComponent } from './property/property.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path:'',
  component: ParametrizacionComponent,
  children: [
    { path:'inicio', component : InicioComponent },
    { path:'property', component : PropertyComponent },
    { path:'usuarios', component : UsuariosComponent },
  ]
  }   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrizacionRoutingModule { }
