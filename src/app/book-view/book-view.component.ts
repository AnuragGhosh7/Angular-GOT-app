import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpService } from '../http.service';
import { error } from 'util';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css'],
  providers:[Location]
})
export class BookViewComponent implements OnInit {

    public currentBookView;

  constructor( private spinner: NgxSpinnerService,public _route:ActivatedRoute, public route:Router,
              public location:Location, public httpService:HttpService) { }

  ngOnInit() {
    this.spinner.show();
    
    console.log("ngonit called")
      
   let currentBookId = this._route.snapshot.paramMap.get('bookId')
   console.log(currentBookId)
 
   //To get bookId for routing   
   this.httpService.getSingleBookDetail(currentBookId).subscribe(
     data =>{
    
       console.log(data);
       this.currentBookView = data;
     },
     
     error =>{
     console.log(error.erroMessage);
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
