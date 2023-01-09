import { Component, Input, OnChanges,OnInit, Output,EventEmitter } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input() student?: Student;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  
  currentStudent: Student = {
    name: '',
    age: 20,
  };
  message = '';

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentStudent = { ...this.student };
  }

  updateStudent(): void {
    const data = {
      name: this.currentStudent.name,
      age: this.currentStudent.age
    };
    this.studentService.update(this.currentStudent.id!, data)
      .then(() => this.message = 'The student was updated successfully!')
      .catch(err => console.log(err));
  }

  deleteStudent(): void {
    this.studentService.delete(this.currentStudent.id!)
      .then(() => {
        this.refreshList.emit();
        this.message = 'The student was updated successfully!';
      })
      .catch(err => console.log(err));
  }

}

