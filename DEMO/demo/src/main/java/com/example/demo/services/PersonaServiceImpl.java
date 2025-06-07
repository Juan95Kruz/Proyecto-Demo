package com.example.demo.services;

import com.example.demo.entities.Persona;
import com.example.demo.repositories.BaseRepository;
import com.example.demo.repositories.PersonalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


@Service

public class PersonaServiceImpl extends BaseServiceImpl<Persona,Long> implements PersonaService {
    @Autowired
    private PersonalRepository personalRepository;

    public PersonaServiceImpl(BaseRepository<Persona, Long> baseRepository, PersonalRepository personalRepository) {
        super(baseRepository);
        this.personalRepository = personalRepository;
    }

    @Override
    public List<Persona> search(String filtro) throws Exception {
        try {
            //List<Persona> personas = personalRepository.findByNombreContainingOrApellidoContaining(filtro, filtro);
            //List<Persona> personas = personalRepository.search(filtro);
            List<Persona> personas = personalRepository.search1(filtro);
            return personas;
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Page<Persona> search(String filtro, Pageable pageable) throws Exception {
        try {
            //Page<Persona> personas = personalRepository.findByNombreContainingOrApellidoContaining(filtro, filtro, pageable);
            //Page<Persona> personas = personalRepository.search(filtro, pageable);
            Page<Persona> personas = personalRepository.search1(filtro, pageable);
            return personas;
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }
}
