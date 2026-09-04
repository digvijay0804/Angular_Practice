import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login
{
  imageUrl= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQNWrw_TtxsNa5qa9i3gC0T4zPwLgkqvBXus_u6-tIZA&s=10"
  isDisabled = false;
  username = 'Sahil';
  isActive = true;
  boxWidth = 100;
  bGColor = 'Red';
}
