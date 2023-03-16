import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewStepComponent } from './components/view-step/view-step.component';
import { EditStepComponent } from './components/edit-step/edit-step.component';
import { CreateStepComponent } from './components/create-step/create-step.component';

const routes: Routes = [
    {
        path: 'view-steps',
        component: ViewStepComponent
    },
    {
        path: 'edit-step',
        component: EditStepComponent
    },
    {
        path: 'create-step',
        component: CreateStepComponent
    },
    {
        path:'',
        pathMatch: 'prefix',
        redirectTo: 'view-steps'
    },    
    {
        path: '**',
        pathMatch: 'prefix',
        redirectTo: 'view-steps'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class StepsRoutingModule { }