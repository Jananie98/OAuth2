
import { Injectable } from '@angular/core';
import { OAuth2Client  } from 'google-auth-library';
import { AuthConfig } from 'angular-oauth2-oidc';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from 'express';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class OAuthService {
    
    private oauth2Url = 'http://localhost:8080/api/customer/oauthlogin'; 

    constructor(private http: HttpClient, private router: Router) { }
  
    login(): void {
      window.location.href = 'https://accounts.google.com/o/oauth2/auth?' +
        'response_type=code' +
        '&client_id=579827681179-5vgu73gmbov967d34aerv4e09lag595h.apps.googleusercontent.com' +
        '&redirect_uri=' + encodeURIComponent('http://localhost:3500/oauth2/callback') +
        '&scope=openid profile email' +
        '&access_type=offline';
    }
  
    handleAuthentication(code: string): Observable<any> {
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.post(this.oauth2Url, { code }, { headers });
    }
}
