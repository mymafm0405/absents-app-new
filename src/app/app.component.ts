import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentsService } from './shared/students.service';
import { map } from 'rxjs/operators';
import { Student } from './shared/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showSummary = false;
  showHome = true;
  showAdd = false;
  showLoad = false;
  noRep = false;

  constructor(private studentsService: StudentsService, private http: HttpClient) {}

  ngOnInit() {
    // this.http.get('https://absentsapp-default-rtdb.firebaseio.com/students.json')
    // .subscribe(
    //   (data) => {
    //     console.log('hellooo');
    //     console.log(data);
    //     this.http.put('https://absents-app-new-default-rtdb.firebaseio.com/students.json', data).subscribe()
    //   }
    // )
    // this.studentsService.getStudents();
    this.studentsService.getReports();
    this.studentsService.noReportDetected.subscribe(
      (repStatus) => {
        this.noRep = repStatus;
      }
    )
  }

  onShowSummary() {
    this.showSummary = !this.showSummary;
  }

  onHomeClick() {
    this.showAdd = false;
    this.showLoad = false;
    this.showSummary = false;
    this.studentsService.getReports();
  }
  onAddClick() {
    this.showAdd = !this.showAdd;
    this.showLoad = false;
    this.showSummary = false;
  }
  onLoadClick() {
    this.showAdd = false;
    this.showLoad = !this.showLoad;
    this.showSummary = false;
  }
  onSummaryClick() {
    this.showAdd = false;
    this.showLoad = false;
    this.showSummary = !this.showSummary;
  }
}
