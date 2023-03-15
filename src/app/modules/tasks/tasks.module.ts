import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';



@NgModule({
  declarations: [
    ViewTaskComponent,
    EditTaskComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TasksModule { }
