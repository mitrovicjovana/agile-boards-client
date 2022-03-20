import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-edit-project-modal',
  templateUrl: './edit-project-modal.component.html',
  styleUrls: ['./edit-project-modal.component.scss'],
})
export class EditProjectModalComponent implements OnInit {
  editProjectForm!: FormGroup;
  name!: FormControl;
  description!: FormControl;

  constructor(
    public dialogRef: MatDialogRef<EditProjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildFormGroup();
  }

  initFormControls() {
    this.name = new FormControl(this.data.name, Validators.required);
    this.description = new FormControl(
      this.data.description,
      Validators.required
    );
  }

  buildFormGroup() {
    this.initFormControls();
    this.editProjectForm = this.formBuilder.group({
      name: this.name,
      description: this.description,
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  submitForm() {
    if (this.editProjectForm.valid) {
      this.data.name = this.name.value;
      this.data.description = this.description.value;
      this.dialogRef.close(this.data);
    }
  }
}
