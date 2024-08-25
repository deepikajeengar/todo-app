import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  a : number = 0;
  c : number = 0;

  add() {
    this.c = this.a + this.c;
  }
 
  sub() {
    
  }

  multiply() {
    
  }

  divide() {
   
  }

  addData(value:number) {
    this.a = value
  }
}
