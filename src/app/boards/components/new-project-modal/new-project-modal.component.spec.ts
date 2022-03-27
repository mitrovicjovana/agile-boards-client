import { OverlayRef } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';

import { NewProjectModalComponent } from './new-project-modal.component';

describe('NewProjectModalComponent', () => {
  let component: NewProjectModalComponent;
  let fixture: ComponentFixture<NewProjectModalComponent>;
  const data = { name: '', description: '' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewProjectModalComponent],
      imports: [SharedModule],
      providers: [
        FormBuilder,
        { provide: MatDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: data },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
