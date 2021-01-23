import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students: Student[] = [];
  studentsChanged = new Subject<Student[]>();
  constructor(private http: HttpClient) { }

  getStudents() {
    this.http.get('https://absents-app-new-default-rtdb.firebaseio.com/students.json')
    .pipe(map(
      dataResponse => {
        const studentsData = [];
        for (const key in dataResponse) {
          if (dataResponse.hasOwnProperty(key)) {
            studentsData.push(dataResponse[key]);
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
}
