import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Pessoa } from 'src/app/Model/Pessoa/entidade/Pessoa';

@Injectable({
  providedIn: 'root'
})

export class ServicoService {

  constructor(private http: HttpClient) { }

  urlBase = "http://localhost:8080/pessoa";

  getPessoa(){
    return this.http.get<Pessoa[]>(this.urlBase);
  }

  addPessoa(pessoa: Pessoa){
    return this.http.post<Pessoa>(this.urlBase, pessoa);
  }
}