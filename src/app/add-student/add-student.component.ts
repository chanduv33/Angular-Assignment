import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private service: StudentService) { }

  ngOnInit() {
  }

  addStudent(studentForm: NgForm) {
    console.log(studentForm.value);
    this.service.addStudentMethod(studentForm.value).subscribe(
      response => {
        console.log('Student added successfully');
        studentForm.reset();
      },
      err => {
        console.log(err);
      }
    );
  }
}
