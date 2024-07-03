import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAddUpdateComponent } from './user/user-add-update/user-add-update.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './config/auth-config';
import { LoginComponent } from './login/login.component';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    UserAddUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    OAuthModule.forRoot(),
    SocialLoginModule
  ],
  providers: [
    provideClientHydration(),
    OAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('579827681179-5vgu73gmbov967d34aerv4e09lag595h.apps.googleusercontent.com')
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('YOUR_FACEBOOK_APP_ID')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // constructor(private oauthService: OAuthService) {
  //   this.configureOAuth();
  // }

  // private configureOAuth() {
  //   this.oauthService.configure(authConfig);
  //   this.oauthService.loadDiscoveryDocumentAndTryLogin();
  // }
}
