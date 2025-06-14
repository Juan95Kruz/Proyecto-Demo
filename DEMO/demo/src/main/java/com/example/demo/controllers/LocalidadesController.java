package com.example.demo.controllers;

import com.example.demo.entities.Localidad;
import com.example.demo.services.LocalidadServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/localidades")
public class LocalidadesController extends BaseControllerImpl<Localidad, LocalidadServiceImpl> {

    @Autowired
    public LocalidadesController(LocalidadServiceImpl servicio) {
        super(servicio);
    }
}
