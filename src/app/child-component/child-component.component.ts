import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  @Input() public amount: number = 0;
  constructor() {}

  ngOnInit(): void {
    
  }
}
