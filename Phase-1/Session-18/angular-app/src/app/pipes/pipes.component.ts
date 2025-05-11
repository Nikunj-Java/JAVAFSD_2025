import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {


  name:string="My Name Is NIKUNJ And I Am JAVA | MEAN | MERN |Cloud Trainer";
  pi:number=3.1415927;
  a:number=0.12345;
  b:number=9876.5432;
  today=new Date();
  object={name:"nikunj",email:"nikunJ@gmail.com",country:"India"};


}
