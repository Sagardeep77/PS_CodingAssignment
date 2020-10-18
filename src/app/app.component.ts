import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from './services/data-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'check';
  response : any;


  constructor(private dataCommService: DataCommunicationService){}

  ngOnInit(){
    this.dataCommService.getLandingPageData().subscribe((res)=>{
      this.response =JSON.stringify(res,undefined,2) ;
    })
  }

}
