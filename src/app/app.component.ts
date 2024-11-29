import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RelationshipCounterComponent} from "./relationship-counter/relationship-counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RelationshipCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
