import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from '../shared/student.model';
import { StudentsService } from '../shared/students.service';

@Component({
  selector: 'app-absents-list',
  templateUrl: './absents-list.component.html',
  styleUrls: ['./absents-list.component.css']
})
export class AbsentsListComponent implements OnInit, OnDestroy {
  students: Student[] = [];
  stuSub: Subscription;
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
