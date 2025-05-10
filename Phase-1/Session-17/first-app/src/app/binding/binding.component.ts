import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  name:string="Nikunj Soni";

  products:any=[
    {name:"pencil",price:20,availability:'10-05-2025',ratings:4.8},
    {name:"pen",price:30,availability:'09-05-2025',ratings:4.7},
    {name:"eraser",price:10,availability:'11-05-2025',ratings:4.5},
    {name:"sharpner",price:25,availability:'12-05-2025',ratings:4.9},
  ]
flag:boolean=false;

showDiv(){
  this.flag=!this.flag
}



}
