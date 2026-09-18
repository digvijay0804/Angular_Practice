import { CanDeactivateFn } from '@angular/router';
import { EditProfile } from './edit-profile/edit-profile';

export const unsavedChangesGuard: CanDeactivateFn<EditProfile> = (component) => {

  if (component.hasChanges) {
    return confirm('You have unsaved changes. Are you sure you want to leave?');
  }

  return true;
};