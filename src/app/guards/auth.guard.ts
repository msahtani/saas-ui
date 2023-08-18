import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";


export const authGuard: CanActivateFn = (route , state) => {

    const router = inject(Router)
    const auth = inject(AuthService)

    if(auth.authenticated()){
        return true
    }

    router.navigate([])
    return false
}


export const logGuard : CanActivateFn = (route,state) => {
    const auth = inject(AuthService)
    return !auth.authenticated() 
}