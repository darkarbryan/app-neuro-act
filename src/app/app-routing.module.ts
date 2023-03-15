import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule)
  },
  {
    path: 'steps',
    loadChildren: () => import('./modules/steps/steps.module').then(m => m.StepsModule)
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'auth'
  },
  {
    path: '**',
    pathMatch: 'prefix',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
