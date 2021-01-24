import { Student } from "./student.model";

export class Report {
    constructor(public date: string, public students: Student[], public id?: string) {}
}