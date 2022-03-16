import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsRoutingModule } from './boards-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProjectsComponent } from './pages/projects/projects.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    BoardsComponent,
    TasksComponent,
    UserComponent,
  ],
  imports: [CommonModule, BoardsRoutingModule, SharedModule],
})
export class BoardsModule {}
