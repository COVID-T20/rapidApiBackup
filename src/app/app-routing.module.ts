import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-fount.component';
// modules
import { ProjectsRouting } from './projects/projects-routing.module';
import { SomethingWentWrongComponent } from './something-went-wrong.component';

// routing modules
const routes: Routes = [
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  },
  ...ProjectsRouting,
  {
    path: 'error',
    component: SomethingWentWrongComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
