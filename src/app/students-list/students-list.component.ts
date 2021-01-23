import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from '../shared/student.model';
import { StudentsService } from '../shared/students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit, OnDestroy {
  allStudents: Student[] = [];
  studentsSub: Subscription;

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.studentsService.getStudents();
    this.studentsSub = this.studentsService.studentsChanged.subscribe(
      updatedStudents => {
        this.allStudents = updatedStudents;
      }
    )
  }

  ngOnDestroy() {
    this.studentsSub.unsubscribe();
  }

}
