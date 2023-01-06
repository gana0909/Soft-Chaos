import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { faTriangleExclamation,faEye  } from '@fortawesome/free-solid-svg-icons';
import { faInstagram,faSquareFacebook,faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  error = faTriangleExclamation;
  eye = faEye;
  insta = faInstagram;
  facebook = faSquareFacebook;
  twitter = faTwitter;
  linkedin = faLinkedin;

  visible:boolean = true;
  viewpass(){
    this.visible = !this.visible
  }

  loginForm= new FormGroup({
    user:new FormControl('',[Validators.email]),
    password:new FormControl('',[Validators.minLength(5)]),
  })
  
  loginUser()
  {
    console.warn(this.loginForm.value)
  }

  get user()
  {
    return this.loginForm.get('user');
  }
  
  get password()
  {
    return this.loginForm.get('password');

  }
  
}

