import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText = 'Texto modificado';
  isDisable = true;
  inputType = "text";

  habilitatInput(){
    this.isDisable = false;
  }

  desabilitarInput(){
    this.isDisable = true;
  }
  
  SenhaInput(){
    this.inputType = 'password';
  
  }
  TextoInput(){
    this.inputType = 'text';
  }

  // habilitatInput(habilitar:boolean){
  //   this.isDisable = habilitar;
  // }
}
