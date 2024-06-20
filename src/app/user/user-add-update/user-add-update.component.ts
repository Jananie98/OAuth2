import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { OAuthService } from '../../config/oauth.service';

@Component({
  selector: 'app-user-add-update',
  templateUrl: './user-add-update.component.html',
  styleUrl: './user-add-update.component.css'
})
export class UserAddUpdateComponent {

  isAuthenticated = false;

  constructor(
    private oauthService: OAuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        this.oauthService.handleAuthentication(code).subscribe(response => {
          localStorage.setItem('token', response['My-token']);
          this.isAuthenticated = true;
          this.router.navigate(['/']);
        }, error => {
          console.error('Authentication failed', error);
        });
      }
    });
  }

  login(): void {
    this.oauthService.login();
  }
}
