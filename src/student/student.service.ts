import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private student = [
    { id: 1, name: 'shahid', age: 23 },
    { id: 2, name: 'sajid', age: 19 },
    { id: 3, name: 'irshad', age: 25 },
  ];

  // Get method
  getallStudent() {
    return this.student;
  }

  getStudentById(id: number) {
    const student = this.student.find((s) => s.id === id);
    if (!student) throw new NotFoundException('Data not found!');
    return student;
  }

  // post method
  createnewUser(Data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...Data,
    };
    this.student.push(newStudent);
    return newStudent;
  }

  // put method
  updateStudent(id: number, Data: { name: string; age: number }) {
    const index = this.student.findIndex((s) => s.id == id);
    if (index === -1) throw new NotFoundException('Student not found');
    this.student[index] = { id, ...Data };
    return this.student[index];
  }

  // patch method
  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentById(id);
    Object.assign(student, data);
    return student;
  }

  // delete method
  deleteStudent(id: number) {
    const index = this.student.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('User not found');
    const deletedstudent = this.student.splice(index, 1);
    return { message: 'student deleted', student: deletedstudent[0] };
  }
}
