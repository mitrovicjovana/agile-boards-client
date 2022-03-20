import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserService } from 'src/app/boards/services/user.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  username!: string;

  constructor(
    public headerService: HeaderService,
    public authService: AuthService,
    public userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.userService.getUsername().subscribe((res) => (this.username = res));
    console.log(this.username);
  }

  public logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
