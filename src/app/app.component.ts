import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Se declaran tres variables, cada una representa el valor de un dado

  first_value:number;
  second_value:number;
  third_value:number;

  // Variable que almacena el resultado de igualdad entre los valores de los dados
  resultado:boolean;

  contador = 1;
  nombre = "";

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }  
  
  //  Desde el componente padre 'app.component.ts' se generan los 3 numeros
  //  aleatoreos que son enviados desde la plantilla html del componente
  //  padre 'app.component.html' al componente hijo 'dado.components.ts'

  ngOnInit() {    
    this.first_value = Math.trunc(Math.random() * 6) + 1;
    this.second_value = Math.trunc(Math.random() * 6) + 1;
    this.third_value = Math.trunc(Math.random() * 6) + 1;

      if(this.first_value === this.second_value && this.first_value === this.third_value) {
        this.resultado=true;
      } else {
        this.resultado=false;
      } 
    } 
  }