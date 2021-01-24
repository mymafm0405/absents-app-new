import { Component, OnInit } from '@angular/core';
import { StudentsService } from './shared/students.service';

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

  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
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
