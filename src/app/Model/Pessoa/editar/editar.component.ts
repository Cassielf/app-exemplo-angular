import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
})
export class EditarComponent {
  constructor(private router: Router) { }
    editar(){
      this.router.navigate(["editar"])
    }
  
}
