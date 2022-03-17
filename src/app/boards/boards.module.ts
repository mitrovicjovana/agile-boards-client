import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsRoutingModule } from './boards-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProjectsComponent } from './pages/projects/projects.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { UserComponent } from './pages/user/user.component';
import { BoardComponent } from './components/board/board.component';
import { ColumnComponent } from './components/column/column.component';
import { TaskComponent } from './components/task/task.component';
import { TagComponent } from './components/tag/tag.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    BoardsComponent,
    TasksComponent,
    UserComponent,
    BoardComponent,
    ColumnComponent,
    TaskComponent,
    TagComponent,
  ],
  imports: [CommonModule, BoardsRoutingModule, SharedModule],
})
export class BoardsModule {}
