import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}

  ngOnInit() {

    let numero = 10;
    // debugger; Par depurar cuando no se nesecitas mas se hay que borrarlo.
    numero = 20;
    numero = numero + 10;
    console.log(numero);
  }

}
