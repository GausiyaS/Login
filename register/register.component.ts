import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  remail:any;
  rpassword:any;
  rcpassword:any;
  registerUserData:any={}
  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }
}
