import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { FormsModule } from '@angular/forms';
import { GetStartedComponent } from './get-started/get-started.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ConsoleComponent } from './console/console.component';

@NgModule({
  declarations: [
    AppComponent,
    InputGroupComponent,
    GetStartedComponent,
    SignInComponent,
    ConsoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
