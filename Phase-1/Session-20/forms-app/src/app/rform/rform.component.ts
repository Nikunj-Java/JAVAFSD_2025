import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent {

  registerForm:FormGroup;
  submitted:boolean=false;
  /* For any compiletime error goto> ts.config.json file and set StrictPropertyInitialization=false */
 
  //This is known as Dependency injection
  constructor(private builder:FormBuilder){}

  ngOnInit() {
    this.registerForm=this.builder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
    })
  }

  get form(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(!this.registerForm.valid)
      return;
    alert("Form Submitted")
  }

}
