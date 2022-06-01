import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { ModificarProductoComponent } from './modificar-producto/modificar-producto.component';

const routes: Routes = [
  {path : "productos", component : ListaProductoComponent },
  {path: "", redirectTo: "productos", pathMatch: "full"},
  {path: "producto/:id", component: DetalleProductoComponent},
  {path: "crear-producto", component: CrearProductoComponent},
  {path: "actualizar-producto/:id", component: ModificarProductoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
