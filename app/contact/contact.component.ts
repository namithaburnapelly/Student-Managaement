import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  studentsList: Student[]
  constructor(private _studentService: StudentService){
    this.studentsList = this._studentService.getStudentList()
  }
}
