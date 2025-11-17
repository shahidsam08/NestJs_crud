import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly refStudent: StudentService) {}

  @Get()
  getAlluser() {
    return this.refStudent.getallStudent();
  }

  // student by id
  @Get(':id')
  getuserbyid(@Param('id') id: string) {
    return this.refStudent.getStudentById(Number(id));
  }

  // call the post method
  @Post()
  createStudent(@Body() body: { name: string; age: number }) {
    return this.refStudent.createnewUser(body);
  }

  //put method
  @Put(':id')
  updateallstudent(@Param('id') id: string, @Body() body: {name: string; age: number}) {
    return this.refStudent.updateStudent(Number(id), body);
  }

  //patch method
  @Patch(":id")
  updatespecific(@Param("id") id: string, @Body() body:{name: string; age : number}){
    return this.refStudent.patchStudent(Number(id) , body);
  }

  // delete method
  @Delete(":id")
  deletestudent(@Param("id") id: string){
    return this.refStudent.deleteStudent(Number(id))
  }
}
