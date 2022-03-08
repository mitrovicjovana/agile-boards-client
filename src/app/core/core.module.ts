import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, FlexModule, MatButtonModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
