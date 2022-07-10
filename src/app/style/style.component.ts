import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styles: [
     '.custom{color: red}'
  ]
})
export class StyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
