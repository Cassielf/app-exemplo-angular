import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicoService } from 'src/app/Service/Pessoa/service';
import { Pessoa } from '../entidade/Pessoa';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
})


export class AdicionarComponent {

  pessoa : Pessoa = new Pessoa();
  constructor(private service : ServicoService, private router: Router) { }
    adicionar(){
      this.router.navigate(["adicionar"])
    }

    ngOnInit() {}

    addPessoa(){
      this.service.addPessoa(this.pessoa)
      .subscribe(data => {
        alert('Cadastrado com sucesso!');
        this.router.navigate(['listar'])
    })
  }
}
