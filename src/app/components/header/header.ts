import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Χρησιμοποίησε αυτό αντί για τα μεμονωμένα

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
