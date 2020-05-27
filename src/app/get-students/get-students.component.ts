import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-students',
  templateUrl: './get-students.component.html',
  styleUrls: ['./get-students.component.css']
})
export class GetStudentsComponent implements OnInit {

  students: Student[];
  constructor(private service: StudentService, private router: Router) { }

  ngOnInit() {
    console.log('called');
    this.getStudents();
  }

  getStudents() {
    this.service.getStudentsMethod().subscribe(
      response => {
        this.students = response;
        console.log(this.students);
      },
      err => {
        console.log(err);
      }
    );
  }

  updateStudent(student) {
    console.log(student);
    this.service.selectedStudent = student;
    this.router.navigateByUrl('/update-student');
  }

  deleteStudent(student) {
    console.log(student);
    this.service.deleteStudentMethod(student).subscribe(
      response => {
        console.log('deleted');
        this.router.navigateByUrl('/get-students');
      },
      err => {
        console.log(err);
      }
    );
  }
}
