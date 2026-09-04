import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-courses',
  imports: [RouterLink],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  imageUrl= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJdq76B_anIBt5TL2WW_V11_swO7mkSecMhL96HIVGQ&s";
}
