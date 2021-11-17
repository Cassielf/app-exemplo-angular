import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
})
export class AdicionarComponent {
  constructor(private router: Router) { }
    adicionar(){
      this.router.navigate(["adicionar"])
    }

}
