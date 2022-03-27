import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Project } from '../../models/Project';

import { ProjectListItemComponent } from './project-list-item.component';

describe('ProjectListItemComponent', () => {
  let component: ProjectListItemComponent;
  let fixture: ComponentFixture<ProjectListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectListItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListItemComponent);
    component = fixture.componentInstance;

    const expectedProject: Project = {
      id: 'abc',
      createdAt: [2022, 2, 3, 12, 12, 12],
      description: 'description',
      name: 'project name',
      user: {
        id: 'def',
        firstName: 'name',
        lastName: 'surname',
        username: 'username',
      },
    };
    component.project = expectedProject;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
