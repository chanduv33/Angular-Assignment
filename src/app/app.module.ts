import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { GetStudentsComponent } from './get-students/get-students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    GetStudentsComponent,
    UpdateStudentComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'add-student', component: AddStudentComponent},
      { path: 'get-students', component: GetStudentsComponent},
      { path: 'update-student', component: UpdateStudentComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
