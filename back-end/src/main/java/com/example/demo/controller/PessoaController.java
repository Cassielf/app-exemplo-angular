package com.example.demo.controller;

import com.example.demo.model.Pessoa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pessoa")
public class PessoaController {

    @Autowired
    private PessoaRepository repository;

    @GetMapping
    public List<Pessoa> listarTudo() {
        return repository.findAll();
    }

    @PostMapping
    public Pessoa salvar (@RequestBody Pessoa p){
        return repository.save(p);
    }

}
