import { Injectable } from '@angular/core'
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

//import { Prod1Component } from './prod1.component';

@Injectable({providedIn: 'root'})
export class ProductDetailGuardService implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
            return confirm('Are you sure you want to view the details?');
    }
}