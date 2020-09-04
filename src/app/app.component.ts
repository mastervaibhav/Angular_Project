import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pinterest';
  linksList = [
    { title: 'Home', link: 'home' },
    { title: 'Login', link: 'login' },
    { title: 'Sign up', link: 'signup'}

  ];
  logo:string ="assets/logo.png";
  

  constructor(private router: Router) {}

  gotoRoute(page) {
    this.router.navigate([page]);
    
  }

}
