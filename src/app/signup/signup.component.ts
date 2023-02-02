import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private product: ProductService){}

  user1 = {
    studentName:'',
    studentEmail: '',
    contactNumber:'',
  };

  isBookAdded = false;

  addBook(): void {

    const data = {
      studentName: this.user1.studentName,
      studentEmail: this.user1.studentEmail,
      contactNumber: this.user1.contactNumber,

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
          alert("data successfullly added")
        });
  }

}
