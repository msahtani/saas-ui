import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/main/app.component';
import { InputGroupComponent } from './components/input-group/input-group.component';
import { FormsModule } from '@angular/forms';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ConsoleComponent } from './components/console/console.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ClipboardComponent } from './components/clipboard/clipboard.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { InputGroup2Component } from './components/input-group2/input-group2.component';
import { GTextareaComponent } from './components/g-textarea/g-textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    InputGroupComponent,
    GetStartedComponent,
    SignInComponent,
    ConsoleComponent,
    HomeComponent,
    ClipboardComponent,
    GetApiComponent,
    InputGroup2Component,
    GTextareaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
