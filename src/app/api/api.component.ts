import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  li:any;
  lis=[];
  constructor(private http : HttpClient){

  } 

  ngOnInit(): void {
    this.http.get('http://www.mocky.io/v2/5ea172973100002d001eeada').subscribe(Response => {
 
      // If response comes hideloader() function is called
      // to hide that loader
      // if(Response){ 
      //   hideloader();
      // }
      console.log(Response)
      this.li=Response;
      this.lis=this.li.list;
    });
    // function hideloader(){
    //   document.getElementById('loading').style.display = 'none';}
  }

}
