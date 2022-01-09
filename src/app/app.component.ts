import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bytebanc';
  transferencia: any;
  valor!: number;
  destino!: number;


  transferir($event: any){
    console.log($event);
    this.transferencia = $event;
    this.limparCampos();

  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
