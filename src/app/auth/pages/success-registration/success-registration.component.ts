import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-success-registration',
  templateUrl: './success-registration.component.html',
  styleUrls: ['./success-registration.component.scss'],
})
export class SuccessRegistrationComponent implements OnInit {
  constructor(private headerService: HeaderService) {
    this.headerService.hideHeader();
  }

  ngOnInit(): void {}
}
