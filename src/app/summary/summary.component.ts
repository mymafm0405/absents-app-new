import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../shared/students.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  reportDate = '';
  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.reportDate = this.studentsService.getCurrentReportDate()
    console.log(this.reportDate);
  }

}
