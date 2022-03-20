import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewProject } from '../../models/NewProject';

@Component({
  selector: 'app-new-project-modal',
  templateUrl: './new-project-modal.component.html',
  styleUrls: ['./new-project-modal.component.scss'],
})
export class NewProjectModalComponent implements OnInit {
  newProjectForm!: FormGroup;
  name!: FormControl;
  description!: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NewProjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewProject
  ) {}

  ngOnInit(): void {
    this.buildFormGroup();
  }

  initFormControls() {
    this.name = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
  }

  buildFormGroup() {
    this.initFormControls();
    this.newProjectForm = this.formBuilder.group({
      name: this.name,
      description: this.description,
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  submitForm() {
    if (this.newProjectForm.valid) {
      this.data.name = this.name.value;
      this.data.description = this.description.value;
      this.dialogRef.close(this.data);
    }
  }
}
