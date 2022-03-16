import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [SharedModule, RouterModule, AuthModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
