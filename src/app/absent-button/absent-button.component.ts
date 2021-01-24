import { Component, Input, OnInit } from '@angular/core';
import { StudentsService } from '../shared/students.service';

@Component({
  selector: 'app-absent-button',
  templateUrl: './absent-button.component.html',
  styleUrls: ['./absent-button.component.css']
})
export class AbsentButtonComponent implements OnInit {
  @Input() status: boolean;
  @Input() studentId: string;
  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
  }

  onButtonClicked() {
    this.studentsService.statusChanged(this.studentId, this.status);
  }

}
