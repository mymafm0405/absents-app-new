import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from '../shared/student.model';
import { StudentsService } from '../shared/students.service';

@Component({
  selector: 'app-presents-list',
  templateUrl: './presents-list.component.html',
  styleUrls: ['./presents-list.component.css']
})
export class PresentsListComponent implements OnInit {
  students: Student[] = [];
  stuSub: Subscription;
  count = 0;
  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.students = this.studentsService.getCurrentLoadedStudents();
    this.stuSub = this.studentsService.studentsChanged.subscribe(
      students => {
        this.students = students;
      }
    )
  }

  ngOnDestroy() {
    this.stuSub.unsubscribe();
  }

}