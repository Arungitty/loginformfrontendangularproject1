import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { StudentClass } from 'src/StudentClass';
import { AdminClass } from 'src/AdminClass';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient:HttpClient) { }

  studentUrl:string="http://localhost:8072/api/studentdetails/";
  adminUrl:string="http://localhost:8072/api/admindetails/";


  headers = new HttpHeaders().set('Content-Type', 'application/json')

  // get all student
  getAllStudent():Observable<StudentClass[]>{
    return this.httpclient.get<StudentClass[]>(this.studentUrl);
  }

  // create student in database
  create(data:any):Observable<any>{
    return this.httpclient.post(this.studentUrl, data).pipe(
      catchError(this.handleError));
  }

  // get all admin
  getAllAdmin():Observable<AdminClass[]>{
    return this.httpclient.get<AdminClass[]>(this.adminUrl);
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
