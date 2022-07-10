import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-djm2',
  templateUrl: './djm2.component.html',
  styleUrls: ['./djm2.component.scss']
})
export class Djm2Component implements OnInit {

  @Input() hero: any;
  constructor() { }

  ngOnInit(): void {
  }

}
