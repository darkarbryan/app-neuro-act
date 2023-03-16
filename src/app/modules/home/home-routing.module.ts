import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { ViewTaskComponent } from '@modules/tasks/components/view-task/view-task.component';
import { EditTaskComponent } from '@modules/tasks/components/edit-task/edit-task.component'; 
import { CreateTaskComponent } from '@modules/tasks/components/create-task/create-task.component';

import { ViewStepComponent } from '@modules/steps/components/view-step/view-step.component';
import { EditStepComponent } from '@modules/steps/components/edit-step/edit-step.component';
import { CreateStepComponent } from '@modules/steps/components/create-step/create-step.component';

const routes: Routes = [    
    {
        path: 'menu',
        component: HomeComponent,
        children: [
            {
                path: 'tasks',
                loadChildren: () => import('@modules/tasks/tasks.module').then(m => m.TasksModule)
            },
            {
                path: 'tasks/view-task',
                component: ViewTaskComponent
            },
            {
                path: 'tasks/edit-task',
                component: EditTaskComponent
            },
            {
                path: 'tasks/create-task',
                component: CreateTaskComponent
            },
            {
                path: 'steps',
                loadChildren: () => import('@modules/steps/steps.module').then(m => m.StepsModule)
            },
            {
                path: 'steps/view-steps',
                component: ViewStepComponent
            },
            {
                path: 'steps/edit-step',
                component: EditStepComponent
            },
            {
                path: 'steps/create-step',
                component: CreateStepComponent
            }            
        ]
    },
    {
        path:'',
        pathMatch: 'prefix',
        redirectTo: 'menu'
    },    
    {
        path: '**',
        pathMatch: 'prefix',
        redirectTo: 'menu'
    }  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }