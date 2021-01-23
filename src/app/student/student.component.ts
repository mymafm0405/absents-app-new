import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../shared/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() student: Student;
  constructor() { }

  ngOnInit(): void {
  }

}
