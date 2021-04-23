import { Injectable, isDevMode } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { TokenStorageService } from './token-storage.service';


@Injectable({ providedIn: 'root' })
export class UserRouteAccessService implements CanActivate {
    constructor(
        private router: Router,
        private tokenStorageService: TokenStorageService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
        const authorities = route.data['authorities'];
        return this.checkLogin(authorities, state.url);
    }

    checkLogin(authorities: string[], url: string): Promise<boolean> {
        const tokenStorageService = this.tokenStorageService;
        return Promise.resolve(
            tokenStorageService.getLoggedInUser().then(user => {


                if (user) {
                    return true;
                }

                this.tokenStorageService.storeUrl(url);
                if (!user) {
                    this.router.navigate(['/login'], { queryParams: { returnUrl: url } });
                }

                return false;
            })
        );
    }
}
