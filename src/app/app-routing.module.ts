import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ConsoleComponent } from './components/console/console.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard, logGuard } from './guards/auth.guard';
import { ConsoleHomeComponent } from './components/console/console-home/console-home.component';
import { TemplatedSmsComponent } from './components/console/templated-sms/templated-sms.component';


const routes: Routes = [
    {
        path: 'get-started',
        component: GetStartedComponent
    }, 
    {
        path: 'login',
        component: SignInComponent,
        canActivate: [logGuard]
    },
    {
        path: 'console',
        component: ConsoleComponent,
        canActivate: [authGuard],
        children : [
            {
                path: '',
                component: ConsoleHomeComponent
            },
            {
                path: 'tsms',
                component: TemplatedSmsComponent
            }
        ]
    },
    {
        path: '',
        component: HomeComponent,
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}