import { Component, OnInit } from '@angular/core';
import { StudentClass } from 'src/StudentClass';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-studenthistory',
  templateUrl: './studenthistory.component.html',
  styleUrls: ['./studenthistory.component.css']
})
export class StudenthistoryComponent implements OnInit {

  constructor(private service:ProductService){
  }

  users:StudentClass[];

  ngOnInit(): void {
    this.service.getAllStudent().subscribe(result=>this.users=result);
  }

}
