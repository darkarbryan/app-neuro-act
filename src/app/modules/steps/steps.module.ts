import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@shared/modules/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StepsRoutingModule } from './steps-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';

import { ViewStepComponent } from './components/view-step/view-step.component';
import { EditStepComponent } from './components/edit-step/edit-step.component';
import { CreateStepComponent } from './components/create-step/create-step.component';
import { LoginService } from '@modules/auth/services/login/login.service';
import { TaskService } from '@modules/tasks/services/task.service';
import { StepService } from './services/step.service';


@NgModule({
  declarations: [
    ViewStepComponent,
    EditStepComponent,
    CreateStepComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    StepsRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    LoginService,
    TaskService,
    StepService
  ]
})
export class StepsModule { }
