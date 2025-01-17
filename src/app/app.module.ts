import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Add this for BrowserAnimationsModule
import { ToastrModule } from 'ngx-toastr'; // Import ToastrModule
import { ChartModule } from 'angular-highcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // Add this for BrowserAnimationsModule
    ToastrModule.forRoot(), // Configure ToastrModule
    ChartModule,
  ],
  providers: [
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: { skipWhenExpired: true } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
