import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([{ path: 'RegisterUser', component: RegisterUserComponent },
    { path: 'LoginUser', component: LoginUserComponent },
    { path: '', redirectTo: '\LoginUser',pathMatch:'full' }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
