/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.crud.producto.controller;

import com.crud.producto.entity.model.Producto;
import com.crud.producto.entity.service.IProductoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author javi_
 */

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})

public class ProductoControlador {
    
    @Autowired
    IProductoService objIProductoService;
    
    @GetMapping("/productos")
    public List<Producto> getAllProducto(){
        return objIProductoService.getAll();
    }
    
    @GetMapping("/producto/{id}")
    public Producto getOne(@PathVariable (value = "id") long id){
        return objIProductoService.get(id);
    }
    
    @PostMapping("/producto")
    public void add (@RequestBody Producto producto){
        objIProductoService.post(producto);
    }
    
    @PutMapping("/producto/{id}")
    public void update (@RequestBody Producto producto, @PathVariable (value = "id") long id ){
        objIProductoService.put(producto, id);
    }
    
    @DeleteMapping("/producto/{id}")
    public void delete (@PathVariable (value = "id") long id){
        objIProductoService.delete(id);
    }
    
}
