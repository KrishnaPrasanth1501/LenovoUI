import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countrytotalusers:any;
  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.countuserpercountry()
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
}
