import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {
  
  id: number | undefined;
  producto: Producto = new Producto();


  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.productoService.obtenerProductoPorId(this.id).subscribe(data =>{
      this.producto = data;
    });
  }

  actualizarProducto(){
    this.productoService.modificarProductoPorId(this.id, this.producto).subscribe(data =>{
      this.router.navigate(['productos']);
    });
  }
}
