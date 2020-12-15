import { Component, OnInit } from '@angular/core';
import{ApiService} from './../../../services/api-service.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  fullName:any;
  email:any;
  constructor(private service:ApiService,private router:Router) {
    this.email="";
    this.fullName="";
   }
   
  ngOnInit(): void {
  if(!!localStorage.getItem('token')){
    this.router.navigate(['/home'])
  }
  }
  SignIn(){
    var data={
      "username":this.fullName,
      "email":this.email
    }
    this.service.post(this.service.user_signIn,data).subscribe(res=>{
      console.log(res.token)
      localStorage.setItem('token',res.token);
      this.router.navigate(['home'])
    },err=>{
      console.log(err)
    })
    console.log(data)
  }
}
