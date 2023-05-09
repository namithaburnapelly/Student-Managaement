import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public studentList: Student[]

  public url = "https://jsonplaceholder.typicode.com/users"

  constructor(private http:HttpClient) { 
    this.studentList = [
      {stuId: 1, stuName: "geeta", phone:38479821, add:"Adilabd"},
      {stuId: 2, stuName: "seeta", phone:7672326, add:"hyd"},
      {stuId: 3, stuName: "sharuk", phone:4545454, add:"shimla"},
      {stuId: 4, stuName: "deepika", phone:7867644, add:"peru"},
      {stuId: 5, stuName: "ash", phone:67643454, add:"goa"}
    ]
  }
  getStudentList(){
    return this.studentList
  }

  getUsers(){
    return this.http.get(this.url)
  }
}
