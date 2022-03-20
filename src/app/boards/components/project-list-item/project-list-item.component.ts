import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss'],
})
export class ProjectListItemComponent implements OnInit {
  @Input() project!: Project;
  @Output() showProjectDetails: EventEmitter<Project> = new EventEmitter();
  date?: string;

  constructor() {}

  ngOnInit(): void {
    this.date = `${this.project.createdAt[1]}/${this.project.createdAt[2]}/${this.project.createdAt[0]}`;
  }

  onShowDetails(project: Project) {
    this.showProjectDetails.emit();
  }
}
