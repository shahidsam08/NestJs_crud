import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { BookModule } from './book/book.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [EmployeeModule, BookModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



// UserController is from the user folder and the file is user.controller.ts file. It is important to put UserController in the app.module.ts file in the controller file.
