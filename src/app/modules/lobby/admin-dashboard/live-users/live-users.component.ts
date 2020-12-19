import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-live-users',
  templateUrl: './live-users.component.html',
  styleUrls: ['./live-users.component.css']
})
export class LiveUsersComponent implements OnInit {
listonlineusers:any;
onlineusercount:any=0;
  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.getusers()
    this.countonlineusers();
  }
  getusers(){
    this.service.get(this.service.getusers).subscribe(res=>{
      this.listonlineusers=res.details
      console.log(res.details.length)
      this.onlineusercount=res.details.length
    },err=>{
      console.log(err)
    })
  }
  countonlineusers(){
    this.service.get(this.service.countonlineusers).subscribe(res=>{
      this.onlineusercount=res.details.onlineusercount
      console.log(res.details.onlineusercount)
    },err=>{
      console.log(err)
    })
  }

}
