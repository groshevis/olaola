import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pessoa: Pessoa = new Pessoa();

  constructor() {}

  salvar(){
    alert('teste salvar');
  }
}
//  <form> agrupa os campos
//[disabled]='!meuForm.form.valid' ==== se o meuForm não for válido, o botão fica desabilitado
//    ! indica negação, ou seja, como ele ta antes do meuForm se o meuForm for negativo o botão ñ fica abilitado 
