import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup


  constructor(private fb:FormBuilder) { 
    let FormControls = {
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    }
    this.loginForm = this.fb.group(FormControls)
  }

  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}

  ngOnInit(): void {
  }
  login(){
    //console.log(this.loginForm.value);

    let data = this.loginForm.value;

    let user = new User(undefined,undefined,data.email,undefined,data.password);
    console.log(user);
    
  }

}
