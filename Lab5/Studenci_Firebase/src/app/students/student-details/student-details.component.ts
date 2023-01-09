import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
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

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  deleteStudent(): void {
    this.studentService.deleteStudent(this.student!.id!)
      .then(() =>this.refreshList.emit())
      .catch(err => console.log(err));
  }
  
  updateStudent(): void {
    const data = {
      name: this.student!.name,
      age: this.student!.age
    };
    this.studentService.updateStudent(this.student!.id!, data)
      .catch(err => console.log(err));
  }
  

}

