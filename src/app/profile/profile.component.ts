import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isLogin = false;
  logo: string = "assets/logo.png";
  linksList = [
    { title: 'Home', link: 'home' },
    { title: 'Login', link: 'login' },
    { title: 'Sign up', link: 'signup' }

  ];
  addedimages = [];
  imgdata = null;
  constructor(private logincompo: LoginComponent, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    console.log(this.logincompo.isLogin);
    this.isLogin = this.logincompo.isLogin;
    this.imgdata = this.route.snapshot.queryParamMap.get('title');
    console.log("this.imgdata == " + this.imgdata);
  }
  gotoRoute(page) {
    this.router.navigate([page]);
  }
  urls = [];
  onselect(e) {
    if (e.target.files) {
      for (let i = 0; i < File.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = (events: any) => {
          this.urls.push(events.target.result);
        }
      }
    }
  }

}
