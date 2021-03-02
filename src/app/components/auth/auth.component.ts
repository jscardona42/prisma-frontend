import { Component, OnInit } from '@angular/core';
import { Form, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  public divSignUp = false;
  public divSignIn = true;
  public mostrarError = false;

  btnSignUp() {
    this.divSignUp = true;
    this.divSignIn = false;
  }

  btnSignIn() {
    this.divSignUp = false;
    this.divSignIn = true;
  }

  users: any = [];

  user = {
    name: '',
    email: '',
    password: ''
  };

  ngOnInit(): void {
  }

  signUp() {
    this.authService.signUp(this.user)
      .subscribe((result) => {
        this.user = { name: '', email: '', password: '' };
      }, (error) => {
        console.log('there was an error sending the query', error);
      });
  }

  signIn(signinForm: NgForm) {
    if (signinForm.valid) {
      this.authService.signIn(this.user)
        .subscribe(result => {

          type getToken = {
            signInUser: { token: {} }
          }

          var data = result.data as getToken;
          const token = data.signInUser.token;

          this.user = { name: '', email: '', password: '' };
          localStorage.setItem('token', JSON.stringify(token));

          this.router.navigate(['/posts']);

        }, (err) => {
          console.log(err.graphQLErrors);
        })
    } else {
      this.mostrarError = true;
    }

  }

}
