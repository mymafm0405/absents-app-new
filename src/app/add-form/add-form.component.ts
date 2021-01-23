import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../shared/student.model';
import { StudentsService } from '../shared/students.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  message: string;

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
  }

  onSubmit(addForm: NgForm) {
    const student = new Student(addForm.value.name, false);
    this.studentsService.addStudent(student).subscribe(
      () => {
        this.message = 'Student added successfully';
        addForm.reset();
        this.studentsService.successAdded(student);
      }, error => {
        this.message = 'An error occured, please try again later!';
        console.log(error);
      }
    )
  }

}
