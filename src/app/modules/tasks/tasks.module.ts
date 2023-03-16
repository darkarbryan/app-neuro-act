import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@shared/modules/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';

import { ViewTaskComponent } from './components/view-task/view-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

import { TaskService } from './services/task.service';
import { LoginService } from '@modules/auth/services/login/login.service';

@NgModule({
  declarations: [
    ViewTaskComponent,
    EditTaskComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    TasksRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    TaskService,
    LoginService
  ]
})
export class TasksModule { }
