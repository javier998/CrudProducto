import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  id : number | undefined;
  producto : Producto = new Producto();

  constructor( 
    private productoService: ProductoService, 
    private router: Router, 
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.productoService.obtenerProductoPorId(this.id).subscribe(data =>{
      this.producto = data;
    });
  }

}
