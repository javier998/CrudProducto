import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  //Uris utilizadas para el crud de productos
  private baseURL = "Http://localhost:8080/productos";
  private baseURLP = "Http://localhost:8080/producto";

  constructor(
    private httpClient: HttpClient
    ) { }

    //Funcion utilizada para obtener todos los datos
  obternerProductos(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL}`);
  }

    //Funcion utilizada para ontener un solo dato
  obtenerProductoPorId(id: number | undefined): Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.baseURLP}/${id}`);
  }

  //Funcion para crear un producto 
  crearProducto(producto: Producto): Observable<Producto>{
    return this.httpClient.post<Producto>(`${this.baseURLP}`, producto);
  }

  //Funcion para eliminar un producto con el id
  elimimarProductoPorId(id: number | undefined): Observable<Producto>{
    return this.httpClient.delete<Producto>(`${this.baseURLP}/${id}`);
  }

  //Funcion para modificar un producto con el id
  modificarProductoPorId(id: number | undefined, producto: Producto): Observable<Producto>{
    return this.httpClient.put<Producto>(`${this.baseURLP}/${id}`, producto);
  }
}
