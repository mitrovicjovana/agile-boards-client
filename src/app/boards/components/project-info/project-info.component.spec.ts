import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Project } from '../../models/Project';

import { ProjectInfoComponent } from './project-info.component';

describe('ProjectInfoComponent', () => {
  let component: ProjectInfoComponent;
  let fixture: ComponentFixture<ProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInfoComponent);
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
