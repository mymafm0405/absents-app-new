import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentsService } from '../shared/students.service';

@Component({
  selector: 'app-save-report-form',
  templateUrl: './save-report-form.component.html',
  styleUrls: ['./save-report-form.component.css']
})
export class SaveReportFormComponent implements OnInit {
  message: string;
  success = false;
  fail = false;

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
  }

  onSubmit(reportForm: NgForm) {
    const date = reportForm.value.date;
    this.studentsService.saveReport(date).subscribe(
      () => {
        this.message = 'Saved successfully in report of: ' + date;
        // This is to load new reports array after saving the new report
        this.studentsService.getReports();
        reportForm.reset();
        this.success = true;
        setTimeout(() => {
          this.message = undefined;
          this.success = false;
        }, 2000);
      }, error => {
        this.message = 'Error occured, please try again later!';
        console.log(error);
        this.fail = true;
        setTimeout(() => {
          this.message = undefined;
          this.fail = false;
        }, 2000);
      }
    )
  }

}
