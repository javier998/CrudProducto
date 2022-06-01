/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.crud.producto.entity.service;

import com.crud.producto.entity.dao.IProductoDao;
import com.crud.producto.entity.model.Producto;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author javi_
 */
@Service
public class ProductoServiceImp implements IProductoService{

    
    @Autowired
    private IProductoDao objIProductoDao;
    
    @Override
    public Producto get(long id) {
        return objIProductoDao.findById(id).get();
    }

    @Override
    public List<Producto> getAll() {
        return (List<Producto>) objIProductoDao.findAll();
    }

    @Override
    public void post(Producto producto) {
        objIProductoDao.save(producto);
    }

    @Override
    public void put(Producto producto, long id ) {
        objIProductoDao.findById(id).ifPresent((x)->{
        producto.setId(id);
        objIProductoDao.save(producto);
        });
    }

    @Override
    public void delete(long id) {
        objIProductoDao.deleteById(id);
    }
    
}
