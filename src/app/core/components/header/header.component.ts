import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username!: string;

  constructor(
    public headerService: HeaderService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
