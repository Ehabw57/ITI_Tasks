import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth';

export const routeGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if(authService.checkUserState)
    return true
  alert('YOU Have to login first')
  router.navigate(['/login'])
  return false;
};
