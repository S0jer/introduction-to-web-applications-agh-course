import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Student } from '../models/student.model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private dbPath = '/students';
  studentsRef : AngularFirestoreCollection<Student>;

  constructor(private db: AngularFirestore) {
    this.studentsRef = db.collection(this.dbPath);
  }

  getStudentsList():AngularFirestoreCollection<Student>{
    return this.studentsRef;
  }

  createStudent(student:Student):any {
    return this.studentsRef.add({...student});
  }

  updateStudent(id:string, value:any) : Promise<void>{
    return this.studentsRef.doc(id).update(value);
  }

  deleteStudent(id:string) : Promise <void>{
    return this.studentsRef.doc(id).delete();
  }

  
  deleteAll() {
    this.studentsRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log("Error", error);
      });
  }
}
