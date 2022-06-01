import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos : Producto[] | undefined;

  constructor(
    private productoService: ProductoService,
    private router: Router
    
    ) { }

  ngOnInit(): void {
    this.obtenerProductos();

  }
  //funcion que obtine todos los productos de service
  obtenerProductos(){
      this.productoService.obternerProductos().subscribe(data =>{
        this.productos = data;
      });
  }

  //Cambia de direccion URL adicional ID
  irDetalleProducto(id: number | undefined){
    this.router.navigate(['producto', id]);
  }

  //Funcion que elimina un producto de service
  eliminarProductoPorId(id: number | undefined){
    this.productoService.elimimarProductoPorId(id).subscribe(data =>{
      this.obtenerProductos();
    });
  }

  //Cambia de direccion URL adicional Id
  irActualizarProducto(id: number | undefined){
    this.router.navigate(['actualizar-producto', id]);
  }
}
