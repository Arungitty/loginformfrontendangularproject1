import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminClass } from 'src/AdminClass';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  constructor(private router:Router, private service: ProductService, private builder: FormBuilder){}
  
  // declare formgroup variable or property
  registerForm:FormGroup;

  // declare one boolean variable to get form submitted or not
  submitted:boolean= false;

   // to access form control in a view to display the error
   get f(){
    return this.registerForm.controls;
  }

  admins:AdminClass[];
  obj:AdminClass;
  ngOnInit(): void {
    this.registerForm= this.builder.group({
      adminUserName:["",Validators.required],
      adminPassword:["",[Validators.required,Validators.minLength(8)]]

    });
    this.service.getAllAdmin().subscribe(result => this.admins= result);
  }

  onSubmit(){
  this.submitted=true;
    this.service.getAllAdmin().subscribe(result=>{
      const user= result.find((b:any)=>{
        return b.adminName === this.registerForm.value.adminUserName && b.adminPassword === this.registerForm.value.adminPassword
      });
    if(this.registerForm.invalid){
    return;
    }   // credential for student name
    else if(user){
      alert("login successfull");
      this.registerForm.reset();
      this.router.navigate(['studenthistory'])
      return;
     }
     else{
      alert("admin not found");
     }

   },error=>{
      alert("Something went wrong")

   });
  
  }

}


