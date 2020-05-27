import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  selectedStudent;
   myUrl = 'https://crud-app-89149.firebaseio.com/';

  constructor(private http: HttpClient) { }

  addStudentMethod(student): any {
    console.log(student);
    return this.http.post(`${this.myUrl}/student.json`, student);
  }

  getStudentsMethod(): any {
    return this.http.get(`${this.myUrl}/student.json`).pipe(
      map(response => {
        const studentsAray = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            studentsAray.push({ ...response[key], id: key});
          }
        }
        return studentsAray;
      })
    )
  }

  updateStudentMethod(student) {
    let data = JSON.stringify(student);
    return this.http.put(`${this.myUrl}/student/${student.id}.json`, data);
  }

  deleteStudentMethod(student) {
    console.log(student.id);
    return this.http.delete(`${this.myUrl}/student/${student.id}.json`);
  }
}
