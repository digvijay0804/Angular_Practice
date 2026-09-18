import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  imports: [FormsModule],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.css'
})
export class EditProfile {

  email = '';
  password = '';

  hasChanges = false;

  onChange(): void {
    this.hasChanges = true;
  }
}