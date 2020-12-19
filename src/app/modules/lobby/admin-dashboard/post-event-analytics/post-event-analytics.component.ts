import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';
import {SideNavComponent} from '../common/side-nav/side-nav.component'
@Component({
  selector: 'app-post-event-analytics',
  templateUrl: './post-event-analytics.component.html',
  styleUrls: ['./post-event-analytics.component.css']
})
export class PostEventAnalyticsComponent implements OnInit {
  totalusercount:any;
  totalbuttonclicks:any;
  overallPageCount:any;
  countrytotalusers: any;
  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.totalusers();
    this.getuserspoints();
    this.totalPageviews();
    this.countuserpercountry();
  }
  getuserspoints(){
    this.service.get(this.service.getuserspoints).subscribe(res=>{
      console.log(res)
      this.totalbuttonclicks=res.details[0].buttonclicks
    },err=>{
      console.log(err)
    })
  }
  totalusers(){
    this.service.get(this.service.totalusers).subscribe(
      res=>{
        this.totalusercount=res
        console.log(res)
      },
      err=>{
        console.log(err)
      }
      )
  }
  countuserpercountry(){
    this.service.get(this.service.countuserpercountry).subscribe(
      res=>{
        this.countrytotalusers=res.details
        console.log(res)
      },
      err=>{
        console.log(err)
      }
      )
  }
  totalPageviews(){
    this.service.get(this.service.countuserpages).subscribe(
      res=>{
        this.overallPageCount=res.details[0].pagescount
        console.log(res)
      },
      err=>{
        console.log(err)
      }
      )
  }
}
