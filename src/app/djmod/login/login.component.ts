import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

// let text = "How are you doing today?";
// const myArray = text.split(" ");

text = "How are you doing today"
myArray = this.text.split(" ")

  ngOnInit(): void {
  }

}
