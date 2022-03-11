import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [CommonModule, FlexLayoutModule, MatButtonModule, MatInputModule],
  exports: [CommonModule, FlexLayoutModule, MatButtonModule, MatInputModule],
})
export class SharedModule {}
