import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  producto: Producto = new Producto();

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.crearProducto();
  }

  irListaProductos(){
    this.router.navigate(['productos']);
  }
  crearProducto(){
    this.productoService.crearProducto(this.producto).subscribe(data =>{
      this.irListaProductos();
    });
  }

}
