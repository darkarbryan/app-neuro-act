import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewTaskComponent } from './components/view-task/view-task.component';  
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

const routes: Routes = [
    {
        path: 'view-tasks',
        component: ViewTaskComponent
    },
    {
        path: 'edit-task',
        component: EditTaskComponent
    },
    {
        path: 'create-task',
        component: CreateTaskComponent
    },
    {
        path:'',
        pathMatch: 'prefix',
        redirectTo: 'view-tasks'
    },    
    {
        path: '**',
        pathMatch: 'prefix',
        redirectTo: 'view-tasks'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TasksRoutingModule { }