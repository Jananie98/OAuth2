import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddUpdateComponent } from './user/user-add-update/user-add-update.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'userAdd',
    component:UserAddUpdateComponent
  },
  {
    path:'oauth2/callback',
    component:UserAddUpdateComponent
  },
  {
    path:'',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
