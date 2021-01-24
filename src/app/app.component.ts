import { Component, OnInit } from '@angular/core';
import { StudentsService } from './shared/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    this.studentsService.getStudents();
    this.studentsService.getReports();
  }
}
