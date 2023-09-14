import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './features/items/pages/registrar/registrar.component';
import { InventarioComponent } from './features/items/pages/inventario/inventario.component';
import { CadastroComponent } from './features/users/pages/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'users/register', component: CadastroComponent },
  { path: 'items/cadastro', component: RegistrarComponent },
  { path: 'items/inventario', component: InventarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
