import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'util';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css'],
  providers:[Location]
})

export class HouseViewComponent implements OnInit {
  
  public currentHouseView

  constructor(private spinner: NgxSpinnerService,public httpService:HttpService, 
    public _route:ActivatedRoute, public route:Router, 
    public location:Location) { }


  ngOnInit() {
    this.spinner.show();
    console.log("onInit called")
     
    //To get houseId for routing
    let currentHouseId = this._route.snapshot.paramMap.get('houseId')
    console.log(currentHouseId)   
    
    this.httpService.getSingleHouseDetail(currentHouseId).subscribe(

      data => {
        console.log(data);
        this.currentHouseView = data;
      },
      error =>{
        console.log(error.errorMessage);
      },
      setTimeout(() => {
        //spinner ends 
        this.spinner.hide();
    }, 1800),
    )
  }

  public goBackToPrevious(){
    this.location.back();
  }


}
