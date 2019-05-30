import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from '../model/auth.service';

@Injectable()
export class AuthGuard {
    constructor(private router: Router, private auth: AuthService) {}

    canActivate(): boolean {
        if (!this.auth.authenticated) {
            this.router.navigateByUrl("/admin/auth");
            return false;
        } else {
            return true;
        }
    }
}