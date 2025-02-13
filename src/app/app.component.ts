import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stultifera';
  anio: number = new Date().getFullYear();
  author: string = '<b>@corpus</b><br>' + this.anio;
}
