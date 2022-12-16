import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl="";
  private _loginUrl="";
  constructor(private http:HttpClient) { }
  registerUser(user:any)
  {
    return this.http.post(this._registerUrl,user);
  }
  loginUser(user:any)
  {
     return this.http.post(this._loginUrl,user);
  }
}
