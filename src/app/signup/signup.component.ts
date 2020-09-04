 import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
 import { FormBuilder, Validators } from '@angular/forms';

 import { HttpClient } from '@angular/common/http';

 @Component({
   selector: 'app-signup',
   templateUrl: './signup.component.html',
   styleUrls: ['./signup.component.css']
 })
 export class SignupComponent implements OnInit {

 
  public uiInvalidCredential = false;

  public fbFormGroup1 = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
  });
  logo: string = "assets/logo.png";
  linksList = [
    { title: 'Home', link: 'home' },
    { title: 'Login', link: 'login' },
    { title: 'Sign up', link: 'signup'}

  ];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}
  gotoRoute(page) {
    this.router.navigate([page]);
    
  }

  async registerHere() {
    const data = this.fbFormGroup1.value;
    const url = 'http://localhost:3000/adduser';

    await this.http.post(url, data).toPromise();

    this.router.navigate(['login']);
 }
 }

