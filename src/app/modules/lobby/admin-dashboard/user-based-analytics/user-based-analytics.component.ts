import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// import { ConsoleReporter } from 'jasmine';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-user-based-analytics',
  templateUrl: './user-based-analytics.component.html',
  styleUrls: ['./user-based-analytics.component.css']
})
export class UserBasedAnalyticsComponent implements OnInit {
  listUBanalytics:any=[];
  searchFilteredData:any=[];
  searchText:any=""
  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.getuserbuttonpoints()
    // this.authusertimespent()
    this.userbasedanalytics()
  }
  userbasedanalytics(){
    this.service.get(this.service.userbasedanalytics).subscribe(res=>{
      console.log(res)
      this.listUBanalytics=[]
      for(let i of res.details){
        var data={
          "user_id":"",
          "username":"",
          "email":"",
          "buttonvisits":"",
          "pagevisits":"",
          "pagecount":0
        }
        data.user_id=i.user_id
        data.username=i.username
        data.email=i.email
        data.pagecount=i.pagecount
        for(let j of i.pagevistis){
          data.pagevisits+=j.pagename+","
        }
        for(let j of i.buttonvisits){
          data.buttonvisits+=j.btnname+"-"+j.btnpoints+','
        }
        console.log(data)
        this.listUBanalytics.push(data)
      }
      console.log(this.listUBanalytics)
      this.searchFilteredData=this.listUBanalytics
    },err=>{
      console.log(err)
    })
  }

  getuserbuttonpoints(){
    this.service.get(this.service.getuserbuttonpoints).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    }
  );
  
}
search(){
  console.log(this.searchText)
  this.searchFilteredData=[]
  if(this.searchText==""){
    this.searchFilteredData=this.listUBanalytics
  }else{
    for(let i of this.listUBanalytics){
      if(!!i.username.match(this.searchText)){
        this.searchFilteredData.push(i)
      }
    }
  }
}

}
