/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.crud.producto.entity.service;

import com.crud.producto.entity.model.Producto;
import java.util.List;

/**
 *
 * @author javi_
 */
public interface IProductoService {
    
    public Producto get(long id);
    
    public List<Producto> getAll();
    
    public void post(Producto producto);
    
    public void put(Producto producto, long id );
    
    public void delete(long id);
}
