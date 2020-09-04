import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logo: string = "assets/logo.png";
  // linksList = [
  //   { title: 'Home', link: 'home' },
  //   { title: 'Login', link: 'login' },
  //   { title: 'Sign up', link: 'signup' }

  // ];
  images = [];
  image = null;
  constructor(private router: Router, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  gotoRoute(page) {
    this.router.navigate([page]);

  }
  gotoprofile() {
    this.router.navigate(['profile'], { queryParams: { title: this.images[0], si: true } });

  }
  onadd(image) {
    console.log("onaddclick");
    console.log("image == " + image);
    this.images.push(image);
  }
  logOutAndClose() {
    sessionStorage.removeItem('sid');

    // dismiss the modal
    this.activeModal.dismiss();

    this.router.navigate(['login']);
  }
  closeTheModal() {
    this.activeModal.dismiss();
  }

}
