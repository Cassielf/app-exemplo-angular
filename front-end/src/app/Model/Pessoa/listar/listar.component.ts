import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicoService } from 'src/app/Service/Pessoa/service';
import {Pessoa} from '../entidade/Pessoa';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
})
export class ListarComponent implements OnInit {

  listaPessoa: Pessoa[] = [];
  constructor(private servico: ServicoService) { }

  ngOnInit(){
    this.servico.getPessoa()
    .subscribe( data => {
      this.listaPessoa = data;
    })
  }

}
