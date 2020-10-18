import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {

  /* API endpoints */
  urlLandingPage = "https://api.spaceXdata.com/v3/launches?limit=100";

  //useful variables & properties
  
  constructor(private httpClient:HttpClient) { 

  }

  //function to get the landingPageData

  getLandingPageData(){
    return this.httpClient.get(this.urlLandingPage);
  }

  getFilteredData(filters:any[]){
    let filter, endPoint="";
    
    filters.forEach(f => {
      if(f.name == "year"){
        filter = "&launch_year=";
        endPoint += filter + f.value;
      }
      else if(f.name == "launch"){
        if(f.value){
          filter = "&launch_success="
          endPoint += filter + f.value;
        }
        else{
          filter = "";
        }
      }
      else if(f.name == "landing"){
        if(f.value){
          filter = "&land_success=";
          endPoint += filter + f.value;
        }
        else{
          filter = "";
        }
      }
      

    });
    
    return this.httpClient.get(this.urlLandingPage + endPoint);

  }



  

}
