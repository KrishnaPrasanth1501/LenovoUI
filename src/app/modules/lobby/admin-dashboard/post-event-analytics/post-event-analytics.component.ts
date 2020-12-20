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
  totalloggedtime: number=0;
  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.totalusers();
    this.getuserspoints();
    this.totalPageviews();
    this.countuserpercountry();
    this.authusertimespent()
  }
  authusertimespent(){
    this.service.get(this.service.authusertimespent).subscribe(
      res=>{
        
        console.log(res)
        this.totalloggedtime=0
        for(let i of res.details){
          // console.log(parseInt(i.logintime)-parseInt(i.logouttime))
          if(i.logintime!=null && i.logouttime!=null){
            console.log()
            this.totalloggedtime+=this.diff(i.logintime,i.logouttime)
          }
          
        }
      },err=>{
        console.log(err)
      })   
  }
  diff(start:any, end:any) {
  var date1=new Date(start)
  var date2=new Date(end)
// console.log(date1)
// console.log(date2)
var diff_in_time=date2.getTime()-date1.getTime()
console.log(diff_in_time)
var diff_in_days=diff_in_time/(1000*3600)

  return diff_in_days
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
