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

  // (keyup) pegando valor atual de um input
  hanbleInputKeyup(event:KeyboardEvent){
  
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText)
  }
  //Atrubit Binding - alteraçao de atributo
  buttonTitle = 'Titulo do botão';

  buttonDisable = false;

  onButtonClick(){
    this.inputText="Texto Alteradooo!";
    this.buttonDisable = !this.buttonDisable
    
  }
  widthButton1= '110px';
  stylesObj = {

    width:'160px',
    backgroundColor: '#234342',
    color: '#ffffff',
  };
  
  
  // updateStyleObjCorrect(){

  //   console.log('updateStyleObjCorrect');
  // como assim ñ existe?
  //   this.stylesObj = {
  //     width: '170px',
  //     backgroundColor: '#f5cb5c',
    
  //  };
 //}

}