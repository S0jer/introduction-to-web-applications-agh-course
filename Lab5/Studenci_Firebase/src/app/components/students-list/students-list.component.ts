import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students?: Student[];
  currentStudent?: Student;
  currentIndex = -1;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.retrieveStudents();
  }

  refreshList(): void {
    this.currentStudent = undefined;
    this.currentIndex = -1;
    this.retrieveStudents();
  }

  retrieveStudents(): void {
    this.studentService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.students = data;
    });
  }

  setActiveStudent(student: Student, index: number): void {
    this.currentStudent = student;
    this.currentIndex = index;
  }

}
