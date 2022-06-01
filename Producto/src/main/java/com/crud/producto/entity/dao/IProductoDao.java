/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.crud.producto.entity.dao;

import com.crud.producto.entity.model.Producto;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author javi_
 */
public interface IProductoDao extends  CrudRepository<Producto, Long>{
    
}
