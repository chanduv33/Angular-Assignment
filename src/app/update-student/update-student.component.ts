import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  constructor(private service: StudentService, private router: Router) { }

  ngOnInit() {
  }

  update(studentForm) {
    console.log(studentForm.value);
    this.service.updateStudentMethod(studentForm.value).subscribe(
      response => {
        console.log('updated');
        this.router.navigateByUrl('/get-students');
      },
      err => {
        console.log(err);
      }
    );
  }

}
