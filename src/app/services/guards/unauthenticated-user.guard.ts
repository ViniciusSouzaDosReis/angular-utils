import { CanActivateFn } from '@angular/router';

export const unauthenticatedUserGuard: CanActivateFn = (route, state) => {
  return true;
};
