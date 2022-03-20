import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent implements OnInit {
  @Input() project!: Project;
  @Output() editProject: EventEmitter<Project> = new EventEmitter();
  @Output() deleteProject: EventEmitter<Project> = new EventEmitter();
  date?: string;

  constructor() {}

  ngOnInit(): void {
    this.date = `${this.project.createdAt[1]}/${this.project.createdAt[2]}/${this.project.createdAt[0]}`;
  }

  onEdit(project: Project) {
    this.editProject.emit();
  }

  onDelete(project: Project) {
    this.deleteProject.emit();
  }
}
