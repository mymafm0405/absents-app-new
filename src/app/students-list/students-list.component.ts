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
  noRepSub: Subscription;
  reportDate = '';
  noReportDetected = false;
  newRep = false;

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

    this.noRepSub = this.studentsService.noReportDetected.subscribe(
      (repStatus) => {
        this.noReportDetected = repStatus;
        this.newRep = !repStatus;
      }
    )
  }

  onNewReport() {
    this.newRep = true;
    this.studentsService.getStudents();
  }

  ngOnDestroy() {
    this.studentsSub.unsubscribe();
    this.dateChangeSub.unsubscribe();
    this.noRepSub.unsubscribe();
  }
}
