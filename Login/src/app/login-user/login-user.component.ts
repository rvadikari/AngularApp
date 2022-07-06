import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  loginForm!:FormGroup
  loading:boolean=false
  constructor(private formBuilder:FormBuilder) { 

  }

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group(
      {
        username:['',Validators.required],
        password:['',Validators.required]
      }
    )
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(){

  }

}
