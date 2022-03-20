import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NewTaskModalComponent } from '../../components/new-task-modal/new-task-modal.component';

const tasks = {
  projectName: 'Agile boards project',
  projectDescription:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illo voluptates maxime dignissimos, deleniti at? Ea dolores consequuntur veniam asperiores. Maiores quae doloremque ab tempore aliquam perferendis sapiente veritatis modi.',
  tasks: [
    {
      summary: 'Do something',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: [2, 3, 2022],
      column: 0,
      colOrder: 0,
    },
  ],
};

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  projectId!: string;
  tasks!: any;
  newTask?: any;

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id'];
    // Fetch project
    this.tasks = tasks;
  }

  openNewTaskModal() {
    const dialogRef = this.dialog.open(NewTaskModalComponent, {
      data: this.newTask,
    });
  }
}
