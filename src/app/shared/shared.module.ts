import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class SharedModule {}
