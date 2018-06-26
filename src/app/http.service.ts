import { Injectable } from '@angular/core';

// import HttpClient and HttpErrorResponse
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// import Observable  related code
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public baseUrl = 'https://anapioficeandfire.com/api';

  constructor(public _http: HttpClient) {
    console.log("service constructor called")
  }

  //Exception Handler
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error http calls")
    console.log(err.message)
    return Observable.throw(err.message)
  }


  //get all books function
  public getAllBooks(): any {
    
    let myresponse = this._http.get(this.baseUrl + '/books');
    return myresponse;
  }

  //get all characters function
  public getAllCharacters(): any {
    
    let myresponse = this._http.get(this.baseUrl + '/characters');
    return myresponse;
  }

  //get all houses function 
  public getAllHouses(): any {

    let myresponse = this._http.get(this.baseUrl + '/houses' );
    return myresponse;
  }

  // get single book details
  public getSingleBookDetail(bookId): any {
    
    let myresponse = this._http.get(this.baseUrl + '/books' + '/' + bookId)
    return (myresponse)
  }

  // get single character details
  public getSingleCharacterDetail(characterId): any {

    let myresponse = this._http.get(this.baseUrl + '/characters' + '/' + characterId)
    return (myresponse)
  }

  // get single house details
  public getSingleHouseDetail(houseId): any {

    let myresponse = this._http.get(this.baseUrl + '/houses' + '/' + houseId)
    return (myresponse)

  }
}
