import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './components/main/app.component';
import { InputGroupComponent }     from './components/input-group/input-group.component';
import { FormsModule }             from '@angular/forms';
import { GetStartedComponent }     from './components/get-started/get-started.component';
import { SignInComponent }         from './components/sign-in/sign-in.component';
import { ConsoleComponent }        from './components/console/console.component';
import { HttpClientModule }        from '@angular/common/http';
import { HomeComponent }           from './components/home/home.component';
import { ClipboardComponent }      from './components/clipboard/clipboard.component';
import { GetApiComponent }         from './components/console/console-home/get-api/get-api.component';
import { InputGroup2Component }    from './components/input-group2/input-group2.component';
import { GTextareaComponent }      from './components/g-textarea/g-textarea.component';
import { SendSmsComponent }        from './components/console/console-home/send-sms/send-sms.component';
import { ConsoleMenuComponent }    from './components/console/console-menu/console-menu.component';
import { ConsoleHomeComponent }    from './components/console/console-home/console-home.component';
import { TemplatedSmsComponent }   from './components/console/templated-sms/templated-sms.component';
import { ModalContainerComponent } from './components/modal/modal-container/modal-container.component';
import { AddBtnComponent }         from './components/modal/add-btn/add-btn.component';
import { AddTsmsComponent }        from './components/console/templated-sms/add-tsms/add-tsms.component';
import { httpInterceptorProviders } from './http/http-interceptors-providers';
import { BalanceComponent } from './components/balance/balance.component';

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
        GTextareaComponent,
        SendSmsComponent,
        ConsoleMenuComponent,
        ConsoleHomeComponent,
        TemplatedSmsComponent,
        ModalContainerComponent,
        AddBtnComponent,
        AddTsmsComponent,
        BalanceComponent,
    ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: httpInterceptorProviders,
  bootstrap: [AppComponent],
})
export class AppModule {}
