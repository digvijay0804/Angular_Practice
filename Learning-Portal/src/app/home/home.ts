import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSieOp71qO8Tcxfh19eYIxESWLyIaqPSNv2PpUekWtvw&s';
}
