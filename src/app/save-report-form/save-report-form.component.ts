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

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
  }

  onSubmit(reportForm: NgForm) {
    const date = reportForm.value.date;
    this.studentsService.saveReport(date).subscribe(
      () => {
        this.message = 'Saved successfully';
        // This is to load new reports array after saving the new report
        this.studentsService.getReports();
        reportForm.reset();
      }, error => {
        this.message = 'Error occured, please try again later!';
        console.log(error);
      }
    )
  }

}
