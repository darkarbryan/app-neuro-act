import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewStepComponent } from './components/view-step/view-step.component';
import { EditStepComponent } from './components/edit-step/edit-step.component';
import { CreateStepComponent } from './components/create-step/create-step.component';



@NgModule({
  declarations: [
    ViewStepComponent,
    EditStepComponent,
    CreateStepComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StepsModule { }
