import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";


export const authGuard: CanActivateFn = (route , state) => {

    const router = inject(Router)
    const auth = inject(AuthService)

    return true
}


export const logGuard : CanActivateFn = (route,state) => {
    const auth = inject(AuthService)
    return true
}