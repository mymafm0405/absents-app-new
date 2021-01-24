import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from '../shared/student.model';
import { StudentsService } from '../shared/students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit, OnDestroy {
  allStudents: Student[] = [];
  studentsSub: Subscription;
  dateChangeSub: Subscription;
  reportDate = '';

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    
    this.reportDate = this.studentsService.getTodayDate();

    this.studentsSub = this.studentsService.studentsChanged.subscribe(
      (updatedStudents) => {
        this.allStudents = updatedStudents;
      }
    );

    this.dateChangeSub = this.studentsService.reportDateChanged.subscribe(
      (date) => {
        this.reportDate = date;
      }
    );
  }

  ngOnDestroy() {
    this.studentsSub.unsubscribe();
    this.dateChangeSub.unsubscribe();
  }
}
