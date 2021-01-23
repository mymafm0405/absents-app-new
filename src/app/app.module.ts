import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { AbsentButtonComponent } from './absent-button/absent-button.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { AbsentsListComponent } from './absents-list/absents-list.component';
import { PresentsListComponent } from './presents-list/presents-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentsListComponent,
    AbsentButtonComponent,
    SearchFormComponent,
    AbsentsListComponent,
    PresentsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
