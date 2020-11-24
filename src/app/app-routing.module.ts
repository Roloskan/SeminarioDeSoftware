import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { FaqComponent } from './faq/faq.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';


const routes: Routes = [
  {path: '', redirectTo: '/Inicio', pathMatch: 'full'},
  {path: 'Index.html', component: IndexComponent},
  {path: 'Inicio', component: IndexComponent},
  {path: 'Tienda', component: TiendaComponent},
  {path: 'SobreNosotros', component: SobrenosotrosComponent},
  {path: 'FAQ', component: FaqComponent},
  {path: 'IniciarSesion', component: IniciarsesionComponent},
  {path: 'Registrarse', component: RegistrarseComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IndexComponent, TiendaComponent, SobrenosotrosComponent, FaqComponent, IniciarsesionComponent, RegistrarseComponent, PageNotFoundComponent]

