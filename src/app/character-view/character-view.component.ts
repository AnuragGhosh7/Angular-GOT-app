import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css'],
  providers:[Location]
})
export class CharacterViewComponent implements OnInit {

  public currentCharacterView;

  constructor(private spinner: NgxSpinnerService,public _route:ActivatedRoute, public route:Router,
    public location:Location, public httpService:HttpService) { }

    ngOnInit() {
      this.spinner.show();
      console.log("ngonit called")

     //To get characterId for routing   
     let currentCharacterId = this._route.snapshot.paramMap.get('characterId')
     console.log(currentCharacterId)
   
     
     this.httpService.getSingleCharacterDetail(currentCharacterId).subscribe(
       data =>{
         console.log(data);
         this.currentCharacterView = data;
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
