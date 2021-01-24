import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { AbsentButtonComponent } from './absent-button/absent-button.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { AbsentsListComponent } from './absents-list/absents-list.component';
import { PresentsListComponent } from './presents-list/presents-list.component';
import { AddFormComponent } from './add-form/add-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SaveReportFormComponent } from './save-report-form/save-report-form.component';
import { LoadReportComponent } from './load-report/load-report.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentsListComponent,
    AbsentButtonComponent,
    SearchFormComponent,
    AbsentsListComponent,
    PresentsListComponent,
    AddFormComponent,
    SaveReportFormComponent,
    LoadReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
