import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  public amountTotal: number = 100;
  constructor() {

  }
  ngOnInit(): void {
   
  }

  public add() : void {
   // this.amountTotal = this.amountTotal +100;
  this.amountTotal += 100;
  }



  

}
