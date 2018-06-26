import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//For routing
import {RouterModule,Routes} from '@angular/router';

//Import statement for components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookViewComponent } from './book-view/book-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Import statement for services
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookViewComponent,
    CharacterViewComponent,
    HouseViewComponent,
    NotFoundComponent,
      
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    
    //For Router imports
    RouterModule.forRoot([
    {path:'home' , component:HomeComponent},
    {path:'books/:bookId' , component:BookViewComponent},
    {path: 'characters/:characterId' , component:CharacterViewComponent},
    {path:'houses/:houseId' , component:HouseViewComponent},
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'**' , component:NotFoundComponent}  
    ]), 
 
  ],

  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
