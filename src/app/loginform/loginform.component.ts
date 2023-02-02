import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentClass } from 'src/StudentClass';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router:Router, private service: ProductService, private builder:FormBuilder){
  }

  // declare formgroup variable or property
  registerForm:FormGroup;

  // declare one boolean variable to get form submitted or not
  submitted:boolean= false;

  users:StudentClass[];

   // to access form control in a view to display the error
   get f(){
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    this.registerForm= this.builder.group({
      userName:["",Validators.required],
      password:["",[Validators.required,Validators.minLength(8)]]

    });
  }

  onSubmit(){
    this.submitted=true;
    this.service.getAllStudent().subscribe(result=>{
      const user= result.find((a:any)=>{
        return a.studentName === this.registerForm.value.userName
      });
    if(this.registerForm.invalid){
    return;
    }   // credential for student name
    else if(user){
      alert("login successfull");
      this.registerForm.reset();
      this.router.navigate(['studentregistration']);
      return;
     }
     else{
      alert("user not found");
     }

   },error=>{
      alert("Something went wrong");

   });

  }


}


