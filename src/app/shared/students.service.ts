import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Report } from './report.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students: Student[] = [];
  allReports: Report[] = [];
  currentReport: Report;

  studentsChanged = new Subject<Student[]>();
  reportDateChanged = new Subject<string>();

  constructor(private http: HttpClient) { }

  getStudents() {
    this.http.get('https://absents-app-new-default-rtdb.firebaseio.com/students.json')
    .pipe(map(
      dataResponse => {
        const studentsData = [];
        for (const key in dataResponse) {
          if (dataResponse.hasOwnProperty(key)) {
            studentsData.push({...dataResponse[key], id: key});
          }
        }
        return studentsData;
      }
    ))
    .subscribe(
      foundStudents => {
        this.students = foundStudents;
        this.studentsChanged.next(this.students);
      }
    )
  }

  addStudent(student: Student) {
    return this.http.post('https://absents-app-new-default-rtdb.firebaseio.com/students.json', student);
  }

  successAdded(student: Student) {
    this.students.push(student);
    this.studentsChanged.next(this.students.slice());
  }

  statusChanged(id: string, status: boolean) {
    this.students.find(student => student.id === id).status = !status;
    this.studentsChanged.next(this.students.slice());
  }

  getReports() {
    this.http.get('https://absents-app-new-default-rtdb.firebaseio.com/reports.json')
    .pipe(map(
      reportData => {
        const reports: Report[] = [];
        for (const key in reportData) {
          if (reportData.hasOwnProperty(key)) {
            reports.push({...reportData[key], id: key});
          }
        }
        return reports;
      }
    ))
    .subscribe(
      foundReports => {
        this.allReports = foundReports;
        this.loadReport(this.getTodayDate())
      }
    )
  }

  getTodayDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    const reportDate = yyyy + '-' + mm + '-' + dd;
    return reportDate;
  }

  saveReport(date: string) {
    if (this.checkReport(date)) {
      const reportId = this.currentReport.id;
      const updatedReport = new Report(date, this.students.slice());
      return this.http.patch('https://absents-app-new-default-rtdb.firebaseio.com/reports/' + reportId + '.json', updatedReport);
    } else {
      const report = new Report(date, this.students.slice())
      return this.http.post('https://absents-app-new-default-rtdb.firebaseio.com/reports.json', report)
    }
  }

  checkReport(date: string) {
    const foundReport = this.allReports.find(report => report.date === date);
    if (foundReport) {
      this.currentReport = foundReport;
      return true;
    } else {
      return false;
    }
  }

  loadReport(date: string) {
    console.log(date);
    console.log(this.allReports);
    if (this.checkReport(date)) {
      this.students = this.currentReport.students;
      console.log(this.currentReport.students);
      this.studentsChanged.next(this.currentReport.students);
      this.reportDateChanged.next(date);
      console.log('found');
      return true;
    } else {
      this.studentsChanged.next(this.students);
      console.log('not found');
      return false;
    }
  }
}
