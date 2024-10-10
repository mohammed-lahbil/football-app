import { Component } from '@angular/core';
import { routes } from "../../app-routing.module";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  routes = routes;

}
