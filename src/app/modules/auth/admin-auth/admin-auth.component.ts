import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {

  username:any;
  password:any;
  constructor(private service:ApiService,private router:Router) {
    this.password="";
    this.username="";
   }
   
  ngOnInit(): void {
    if(!!localStorage.getItem('token')){
      this.router.navigate(['dashboard'])
    }
  }
  SignIn(){
    var data={
      "email":this.username,
      "password":this.password
    }
    this.service.post(this.service.adminlogin,data).subscribe(res=>{
      console.log(res.token)
      localStorage.setItem('token',res.token);
      this.router.navigate(['/dashboard'])
    },err=>{
      console.log(err)
    })
    console.log(data)
  }
}
