import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  template: `
    <h1 class="custom">
      template works!
</h1>
  `,
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
