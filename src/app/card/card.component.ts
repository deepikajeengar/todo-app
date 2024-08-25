import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  a : number = 1;
  b : number = 2;
  c : any;
  

  add() {
    this.c = this.a + this.b
  }
 
  sub() {
    this.c = this.a - this.b
  }

  multiply() {
    this.c = this.a * this.b
  }

  divide() {
    this.c = this.a / this.b
  }
}
