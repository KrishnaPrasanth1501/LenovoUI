import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  fullName:any;
  email:any;
  constructor() {
    this.email="";
    this.fullName="";
   }

  ngOnInit(): void {
  }
  SignIn(){
    var data={
      "name":this.fullName,
      "email":this.email
    }
    console.log(data)
  }
}
