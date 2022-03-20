import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './pages/boards/boards.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: BoardsComponent,
    children: [
      { path: 'projects', pathMatch: 'full', component: ProjectsComponent },
      { path: 'tasks/:id', pathMatch: 'full', component: TasksComponent },
      { path: 'profile', pathMatch: 'full', component: UserComponent },
      { path: '', pathMatch: 'full', redirectTo: 'projects' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardsRoutingModule {}
