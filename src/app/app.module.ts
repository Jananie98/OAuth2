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

@NgModule({
  declarations: [
    AppComponent,
    UserAddUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    OAuthModule.forRoot()
  ],
  providers: [
    provideClientHydration(),
    OAuthService
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
