import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrontendserviceService } from '../frontendservice.service';

@Component({
  selector: 'app-dashboard-recommended',
  templateUrl: './dashboard-recommended.component.html',
  styleUrls: ['./dashboard-recommended.component.css']
})
export class DashboardRecommendedComponent implements OnInit {

  public recipe=[];

  constructor(private http:HttpClient,private fservice:FrontendserviceService) { }

  ngOnInit() {
      
    this.fservice.getalltrendingrecipe().subscribe(data => {this.recipe=data; console.log(this.recipe,"data of trending recipe")});
  }

  tr(id)
  {
    console.log("clicked on trending recipe id:"+id);
  }

}
