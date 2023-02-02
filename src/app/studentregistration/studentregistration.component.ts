import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {

  user = {
    studentName:'',
    studentEmail: '',
    contactNumber:'',
    studentResume:'',
  };

  isBookAdded = false;
  constructor(private product: ProductService){}

  ngOnInit(): void {
  }

  // Add New
  addBook(): void {

    const data = {
      studentName: this.user.studentName,
      studentEmail: this.user.studentEmail,
      contactNumber: this.user.contactNumber,
      studentResume: this.user.studentResume

    };

    if (!data.studentName) {
      alert('Please add title!');
      return;
    }

    this.product.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isBookAdded = true;
        },
        error => {
          console.log(error);
          alert("data successfulkly added")
        });
  }



}
