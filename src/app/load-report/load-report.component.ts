import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentsService } from '../shared/students.service';

@Component({
  selector: 'app-load-report',
  templateUrl: './load-report.component.html',
  styleUrls: ['./load-report.component.css']
})
export class LoadReportComponent implements OnInit {
  message: string;
  reportFound: boolean;
  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
  }

  onSubmit(loadForm: NgForm) {
    const date = loadForm.value.date;
    if (this.studentsService.loadReport(date)) {
      this.message = 'Report loaded successfully for date: ' + date;
      this.reportFound = true;
      loadForm.reset();
    } else {
      this.message = 'No report found with this date: ' + date;
      this.reportFound = false;
      loadForm.reset();
    }
  }

}
