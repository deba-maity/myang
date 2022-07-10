import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { reduce } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-djm',
  templateUrl: './djm.component.html',
  styleUrls: ['./djm.component.scss']
})

export class DjmComponent implements OnInit {
  
  constructor(private formbuilder: FormBuilder) {
    const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

    let unique = [...new Set(names)];
    console.log(unique);
   }

 array = [
  { id:1, name: 'DJM'},
  { id:2, name: 'Maity'},
  { id:3, name: 'Deba'},
  { id:1, name: 'DJM'}
 ]
title = "blog";
displayVal='';
count=0;
show=true;
getval()
{
  return  "oh my god"
}
  ngOnInit(): void {
  }
  getname()
  {
    alert("djm")
  }
  getsup(name:string)
  {
    alert(name)
  }
  getValue(val:string)
  {
    console.warn(val)
    this.displayVal=val
  }
  // ternary operater
  counter(type:string)
  {
    type==='add'?this.count++:this.count--
  }
  name="rishi";
// form
getform(data: NgForm)
{
  console.warn(data)
  this.formsData=data
}
formsData:any={};

//parent-child

data="maity"


}


