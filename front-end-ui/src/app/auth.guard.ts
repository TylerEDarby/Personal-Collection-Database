import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserHelperService } from './services/user-helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userHelper: UserHelperService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (!this.userHelper.getUserSession()) {
      this.router.navigate(['/login']);
      return false;
    }
    
    return true;
  }
}
