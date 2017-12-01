
import {Component, OnInit} from '@angular/core';
import {Config} from "../app-config";
import {LoginService} from "./Login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{
  app:any;
  username:string;
  password:string;
  constructor(private router:Router,
              private config:Config,
              private loginService:LoginService){
    this.app = config.appConfig;
  }
  ngOnInit(){
  }
  login(){
    this.loginService.login(this.username,this.password).subscribe(data =>{
      if(data.access_token){
        localStorage.setItem("token",JSON.stringify(data));
        this.router.navigate(['/index/dashboard']);
      }
    });
  }
}
