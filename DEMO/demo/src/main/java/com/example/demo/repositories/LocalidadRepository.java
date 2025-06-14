package com.example.demo.repositories;

import com.example.demo.entities.Localidad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocalidadRepository extends BaseRepository<Localidad, Long> {
}
