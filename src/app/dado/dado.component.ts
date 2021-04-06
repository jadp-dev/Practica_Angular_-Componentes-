import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  //  En el componente hijo 'dado.components.ts', mediante @Input,
  //  se reciben los datos enviados desde la plantilla html
  //  'app.component.html'del componente padre 'app.components.ts'

  //  Desde la plantilla html 'dado.component.html' del componente hijo 
  //  'dado.components.ts', se imprimen / muestran los datos recibidos desde la
  //  plantilla html 'app.component.html' del componente padre 'app.components.ts'

  @Input() first_value:number;
  @Input() second_value:number;
  @Input() third_value:number;

  constructor() { }

  ngOnInit() {  
  }
}