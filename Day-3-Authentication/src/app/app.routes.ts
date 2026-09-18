import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { EditProfile } from './edit-profile/edit-profile';
import { authGuard } from './auth-guard';
import { unsavedChangesGuard } from './unsaved-changes-guard';

export const routes: Routes = [
  {
    path: 'login',
    component: Login
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  },
  {
    path: 'edit-profile',
    component: EditProfile,
    canActivate: [authGuard],
    canDeactivate: [unsavedChangesGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];