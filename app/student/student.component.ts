import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  studentsList: Student[]
  public users:any=[]
  constructor(private _studentService: StudentService){
    this.studentsList = this._studentService.getStudentList()
    this._studentService.getUsers().subscribe((result)=>{
      // console.log(result)
      this.users = result
      // console.log(this.users)-
      
    }
    )
  }

  
}
