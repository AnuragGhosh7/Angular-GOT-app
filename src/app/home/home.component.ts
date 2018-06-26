import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  
    public allBooks;
    public allCharacters;
    public allHouses;

  constructor( private spinner: NgxSpinnerService,public httpservice:HttpService ) { 
    console.log("constructor called")
  }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      //spinner ends 
      this.spinner.hide();
  }, 1500),
    console.log("home OnInit method called")
       this.allBooks = this.httpservice.getAllBooks().subscribe(
         data =>{
          this.allBooks = data 
        },
         error =>{
           console.log(error.errorMessage)
         }
       )

       this.allHouses = this.httpservice.getAllHouses().subscribe(
        data =>{
         this.allHouses = data
        },
        error =>{
          console.log(error.errorMessage)
        }
      )
  
      this.allCharacters = this.httpservice.getAllCharacters().subscribe(
        data =>{
         this.allCharacters = data
        },
        error =>{
          console.log(error.errorMessage)
        }
      )

       
    
    }



  
}
