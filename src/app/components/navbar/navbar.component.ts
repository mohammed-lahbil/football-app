import { Component } from '@angular/core';
import { routes } from "../../app.module";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false
})
export class NavbarComponent {
  routes = routes;

}
